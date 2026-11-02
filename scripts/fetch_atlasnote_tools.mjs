// 抓取 atlasnote.ai 工具榜单（/zh-CN/tools）列表页 + 全部详情页
// 输出 scripts/data/atlasnote-tools-raw.json
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "data", "atlasnote-tools-raw.json");
const BASE = "https://atlasnote.ai";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

async function get(url, retry = 3) {
  for (let i = 0; i < retry; i++) {
    try {
      const r = await fetch(url, { headers: { "user-agent": UA, "accept-language": "zh-CN,zh;q=0.9" } });
      if (!r.ok) throw new Error("HTTP " + r.status);
      return await r.text();
    } catch (e) {
      if (i === retry - 1) throw e;
      await new Promise((res) => setTimeout(res, 1200 * (i + 1)));
    }
  }
}

const unescapeHtml = (s = "") =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

const strip = (s = "") => unescapeHtml(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

// ---- 列表页 ----
const listHtml = await get(BASE + "/zh-CN/tools");

const cards = [
  ...listHtml.matchAll(
    /<a class="ToolsPage_card__[^"]*"[^>]*aria-label="[^"]*" href="([^"]+)"([\s\S]*?)<\/a>/g
  ),
].map((m) => {
  const href = m[1];
  const block = m[2];
  const title = strip((block.match(/ToolsPage_cardTitle#[^"]*"[^>]*>([\s\S]*?)<\/h2>/) || [])[1]) ||
    strip((block.match(/ToolsPage_cardTitle[^"]*"[^>]*>([\s\S]*?)<\/h2>/) || [])[1]);
  const desc = strip((block.match(/ToolsPage_cardDescription[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1]);
  const status = strip((block.match(/ToolsPage_cardStatus[^"]*">([\s\S]*?)<\/span>\s*<\/span>/) || [])[1]);
  const img = (block.match(/src="([^"]+)"/) || [])[1] || "";
  const slug = href.replace(/^\/zh-CN\/tools\//, "").replace(/\/$/, "");
  return { slug, href, title, desc, status, img: img.startsWith("http") ? img : BASE + img };
});

console.log("列表页卡片:", cards.length);

// ---- 详情页 ----
const details = [];
for (let i = 0; i < cards.length; i++) {
  const c = cards[i];
  let html = "";
  try {
    html = await get(BASE + c.href);
  } catch (e) {
    console.error("详情页失败", c.slug, e.message);
    details.push({ ...c, error: e.message });
    continue;
  }

  const oneLiner = strip((html.match(/ToolDetailPage_oneLiner[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1]);
  const claimLabel = strip((html.match(/ToolDetailPage_claimLabel[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1]);
  const claim = strip((html.match(/ToolDetailPage_claimText[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1]);
  const addedAt = strip((html.match(/ToolDetailPage_added[^"]*"[^>]*>([\s\S]*?)<\/span>/) || [])[1]);

  // 访问链接：主入口 + 备用入口
  const actionLinks = [...html.matchAll(/<a class="pressable ToolDetailPage_visit[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => ({ url: unescapeHtml(m[1]), label: strip(m[2]).replace(/[↗\s]+$/g, "") }))
    .filter((x) => x.url && !x.url.startsWith("/"));
  const officialUrl = (actionLinks[0] || {}).url || "";
  const altUrl = (actionLinks[1] || {}).url || "";
  const altLabel = (actionLinks[1] || {}).label || "";

  // 正文：取 ToolDetailPage_body 里的所有段落 / 列表
  const bodyRaw = (html.match(/ToolDetailPage_body[^"]*"[^>]*>([\s\S]*?)<\/div>/) || [])[1] || "";
  const bodyParas = [...bodyRaw.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1])).filter(Boolean);
  const bodyList = [...bodyRaw.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((m) => strip(m[1])).filter(Boolean);

  // 侧栏：适合场景 / 核心能力 两组列表
  const railBlocks = [...html.matchAll(/<div>\s*<h2 class="ToolDetailPage_railTitle[^"]*"[^>]*>([\s\S]*?)<\/h2>\s*<ul[^>]*>([\s\S]*?)<\/ul>/g)]
    .map((m) => ({
      title: strip(m[1]),
      items: [...m[2].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((x) => strip(x[1])).filter(Boolean),
    }));

  const railRows = [];
  for (const m of html.matchAll(
    /<span class="ToolDetailPage_railKey[^"]*"[^>]*>([\s\S]*?)<\/span>\s*<span class="ToolDetailPage_railValue[^"]*"[^>]*>([\s\S]*?)<\/span>/g
  )) {
    railRows.push({ key: strip(m[1]), value: strip(m[2]) });
  }
  const catRaw = (railRows.find((r) => r.key === "工具分类") || {}).value || "";
  const domain = (railRows.find((r) => r.key === "入口") || {}).value || "";

  const tags = [...html.matchAll(/<span class="ToolDetailPage_tag[^"]*"[^>]*>([\s\S]*?)<\/span>/g)]
    .map((m) => strip(m[1]))
    .filter(Boolean);

  const hero = (html.match(/ToolDetailPage_heroFrame[^"]*"[\s\S]{0,400}?src="([^"]+)"/) || [])[1] || "";

  details.push({
    ...c,
    title: strip((html.match(/ToolDetailPage_title[^"]*"[^>]*>([\s\S]*?)<\/h1>/) || [])[1]) || c.title,
    oneLiner: oneLiner || c.desc,
    claimLabel: claimLabel || "为什么值得关注",
    claim,
    addedAt,
    officialUrl,
    altUrl,
    altLabel,
    categories: catRaw ? catRaw.split("·").map((s) => s.trim()).filter(Boolean) : [],
    domain,
    body: bodyParas.join("\n\n"),
    bodyList,
    bestFor: (railBlocks.find((b) => /适合|场景/.test(b.title)) || {}).items || [],
    highlights: (railBlocks.find((b) => /能力/.test(b.title)) || {}).items || [],
    tags,
    hero: hero.startsWith("http") ? hero : hero ? BASE + hero : "",
    detailUrl: BASE + c.href,
  });

  process.stdout.write(`\r详情页 ${i + 1}/${cards.length}  ${c.slug}            `);
  await new Promise((r) => setTimeout(r, 250));
}

writeFileSync(OUT, JSON.stringify(details, null, 1));
console.log("\n写入", OUT);
console.log("有官网链接:", details.filter((d) => d.officialUrl).length);
console.log("缺官网链接:", details.filter((d) => !d.officialUrl).map((d) => d.slug));
const catCount = {};
for (const d of details) for (const c of d.categories) catCount[c] = (catCount[c] || 0) + 1;
console.log("分类分布:", JSON.stringify(catCount, null, 0));
console.log("无分类:", details.filter((d) => !d.categories.length).map((d) => d.slug));
