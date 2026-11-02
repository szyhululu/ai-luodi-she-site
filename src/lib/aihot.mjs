// 抓取 aihot.news 并解析为标准化条目。
// 被两处共用：
//   1. scripts/fetch_aihot.mjs —— 写入 news 表（作为兜底缓存 / 预热）
//   2. src/app/hot/page.tsx   —— 每次访问实时拉取渲染（永远新鲜）
// 纯 ESM，无框架依赖，可直接被 node 与 Next 服务端共同引用。
//
// 数据源（均为公开端点）：
//   1. /feed.xml —— RSS 2.0，最新 50 条精选：标题/摘要/分类/来源/原文链接
//   2. / 首页 SSR —— 时间线卡片（20 条）：时刻(UTC+8)、来源全名、精选徽标、
//      AI 评分、推荐理由、来源头像、媒体缩略图
// 两源按 item id 合并。
const FEED = "https://aihot.news/feed.xml";
const HOME = "https://aihot.news/";
const UA = { "User-Agent": "Mozilla/5.0" };

function cdata(s) {
  const m = s.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return (m ? m[1] : s).trim();
}
function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}
function firstPara(descHtml) {
  const ps = [...descHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => stripTags(m[1]));
  const real = ps.find((p) => p && !p.startsWith("via AIHOT") && !p.includes("阅读原文"));
  return real || ps[0] || "";
}
function originalUrl(descHtml) {
  const m = descHtml.match(/<a[^>]+href="([^"]+)"[^>]*>\s*阅读原文\s*<\/a>/);
  return m ? m[1] : "";
}
function parseSource(author) {
  // author 形如 "noreply@aihot.news (The Decoder：AI News)" 或纯媒体名
  const m = author.match(/\(([^)]+)\)/);
  let s = m ? m[1] : author;
  return s.replace(/^noreply@\S+\s*/, "").trim() || "AIHOT";
}
// ISO/GMT 时间 → UTC+8 的 {date:"YYYY-MM-DD", time:"HH:MM", ts:ISO}
function toCst(d) {
  if (!d) return null;
  const t = new Date(d);
  if (isNaN(t)) return null;
  const shifted = new Date(t.getTime() + 8 * 3600 * 1000);
  const p = (n) => String(n).padStart(2, "0");
  return {
    date: `${shifted.getUTCFullYear()}-${p(shifted.getUTCMonth() + 1)}-${p(shifted.getUTCDate())}`,
    time: `${p(shifted.getUTCHours())}:${p(shifted.getUTCMinutes())}`,
    ts: t.toISOString(),
  };
}
function absUrl(src) {
  if (!src) return "";
  return src.startsWith("http") ? src : `https://aihot.news${src}`;
}

// —— 解析首页时间线卡片 ——
function parseHomeCards(html) {
  const lis = [...html.matchAll(/<li data-card-key="([^"]+)"[\s\S]*?<article[\s\S]*?<\/article>/g)];
  const cards = [];
  for (const m of lis) {
    const seg = m[0];
    const itemId = (seg.match(/data-item-id="([^"]+)"/) || [])[1] || m[1].slice(1);
    const iso = (seg.match(/<time[^>]*dateTime="([^"]+)"/) || [])[1] || "";
    const timeText =
      (seg.match(/<time[^>]*>(\d{2}:\d{2})<\/time>/) || [])[1] ||
      toCst(iso)?.time ||
      "";
    // 来源名（span 内可能嵌头像 img，剥标签取文本）
    const srcRaw = (seg.match(/<span class="min-w-0 truncate text-ink-4">([\s\S]*?)<\/span>/) || [])[1] || "";
    const source = stripTags(srcRaw);
    const featured = seg.includes(">精选</span>");
    const score = parseInt((seg.match(/AI 评分 (\d+)/) || [])[1] || "0", 10) || null;
    const reason = stripTags(
      (seg.match(/推荐理由：(?:<!-- -->)?([\s\S]*?)<\/p>/) || [])[1] || ""
    );
    // 头像与缩略图：img-proxy 的 mode=avatar / mode=thumb
    let avatar = "";
    let image = "";
    for (const im of seg.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      const dec = im[1].replace(/&amp;/g, "&");
      if (!avatar && /mode=avatar/.test(dec)) avatar = absUrl(dec);
      else if (!image && /mode=thumb/.test(dec)) image = absUrl(dec);
    }
    cards.push({ itemId, iso, timeText, source, featured, score, reason, avatar, image });
  }
  return cards;
}

// 返回标准化条目数组（字段与 news 表列及 HotBrowser 所需字段对齐）。
// 字段：id, title, summary, source, category, url, originalUrl,
//       publishedAt, publishedTs, timeText, featured, score, reason, avatar, image
export async function fetchAihotNews() {
  const [feedRes, homeRes] = await Promise.all([
    fetch(FEED, { headers: UA, cache: "no-store" }),
    fetch(HOME, { headers: UA, cache: "no-store" }),
  ]);
  if (!feedRes.ok) throw new Error(`feed ${feedRes.status}`);
  if (!homeRes.ok) throw new Error(`home ${homeRes.status}`);
  const xml = await feedRes.text();
  const homeHtml = await homeRes.text();

  // 1) RSS 打底
  const feedItems = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
    const i = m[1];
    const g = (k) => (i.match(new RegExp(`<${k}[^>]*>([\\s\\S]*?)<\\/${k}>`, "i")) || [])[1] || "";
    const title = cdata(g("title"));
    const link = cdata(g("link"));
    const desc = cdata(g("description"));
    const guid = cdata(g("guid"));
    const cst = toCst(cdata(g("pubDate")));
    return {
      id: guid || link.split("/items/")[1] || link,
      title,
      summary: firstPara(desc),
      source: parseSource(cdata(g("author"))),
      category: cdata(g("category")) || "未分类",
      url: link,
      originalUrl: originalUrl(desc),
      publishedAt: cst?.date || "",
      timeText: cst?.time || "",
      publishedTs: cst?.ts || "",
      featured: 0,
      score: null,
      reason: "",
      avatar: "",
      image: "",
    };
  });

  // 2) 首页时间线卡片补充
  const cards = parseHomeCards(homeHtml);
  const byId = new Map(feedItems.map((x) => [x.id, x]));
  for (const c of cards) {
    const it = byId.get(c.itemId);
    if (!it) continue;
    if (c.timeText) it.timeText = c.timeText;
    if (c.iso) it.publishedTs = new Date(c.iso).toISOString();
    if (c.source) it.source = c.source;
    it.featured = c.featured ? 1 : 0;
    it.score = c.score;
    it.reason = c.reason;
    it.avatar = c.avatar;
    it.image = c.image;
  }

  // 排序：按精确时间倒序
  feedItems.sort((a, b) => (b.publishedTs || "").localeCompare(a.publishedTs || ""));
  return feedItems;
}
