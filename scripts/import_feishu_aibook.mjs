// 把飞书《AI编程蓝皮书2.0》导入为网站「AI书籍」下的一个新书：
//   - 源：scripts/feishu-aibook/*.md（lark-cli drive +export 导出的飞书 docx Markdown）
//   - 清洗：HTML 表格 → Markdown 表格；callout → 引用块；cite → 飞书链接；
//           飞书图片 token → https://feishu.cn/file/<token>；去掉 title/at/embed 等专有标签
//   - 切章：按围栏外的 H1（Part1…Part8 等）切成多页，另加开篇与子文档
//   - 落库：写入 scripts/aicoding/*.md + scripts/extra-courses.json，再由 apply-extra.mjs 入库
// 用法：node scripts/import_feishu_aibook.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "scripts", "feishu-aibook");
const OUT_DIR = path.join(ROOT, "scripts", "aicoding");
const EXTRA_JSON = path.join(ROOT, "scripts", "extra-courses.json");

const WIKI_URL = "https://superhuang.feishu.cn/wiki/CBBPwvgEuicVhFkx0s7cPmhpn4e";
const BOOK_SLUG = "aicoding-bluebook";
const ORDER_BASE = 7000;

const MAIN_MD = path.join(SRC_DIR, "AI编程蓝皮书2.0.md");
const SUB_MD = path.join(SRC_DIR, "使用Windsurf开发一款iOS App（日更）.md");

/* ---------------- HTML → Markdown ---------------- */

const fileUrl = (token) => `https://feishu.cn/file/${token}`;

/** <img ...> 标签 → Markdown 图片（src/alt 顺序不固定，统一按属性提取） */
function imgTagToMd(tag) {
  const src = (tag.match(/\bsrc="([^"]+)"/) || [])[1];
  const alt = (tag.match(/\balt="([^"]*)"/) || [])[1] || "";
  if (!src) return "";
  const url = /^https?:/.test(src) ? src : fileUrl(src);
  return `![${alt}](${url})`;
}

/** 单元格内部 HTML → Markdown 文本 */
function cellToMd(html) {
  let t = html;
  // 图片：src 是飞书文件 token
  t = t.replace(/<img\b[^>]*\/?>/g, (m) => imgTagToMd(m));
  // 代码块 → 行内代码
  t = t.replace(
    /<pre\b[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/g,
    (_m, code) => " `" + code.trim().replace(/\s+/g, " ") + "` "
  );
  // 有序/无序列表 → 单元格内用「；」分隔（Markdown 表格单元格不能换行，
  // 且站点未开启 rehype-raw，<br> 会被转义成字面文本）
  t = t.replace(/<(ol|ul)\b[^>]*>([\s\S]*?)<\/\1>/g, (_m, tag, inner) => {
    const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)].map((x) =>
      stripTags(x[1]).trim()
    );
    if (tag === "ol") {
      return items.map((it, i) => `${i + 1}. ${it}`).join("；");
    }
    return items.join("；");
  });
  // 链接：站内锚点只留文字，外链保留
  t = t.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_m, href, inner) => {
    const text = stripTags(inner).trim();
    if (/^https?:\/\//.test(href) && !/feishu\.cn/.test(href)) {
      return `[${text}](${href})`;
    }
    return text;
  });
  t = t.replace(/<b>([\s\S]*?)<\/b>/g, "**$1**");
  t = t.replace(/<strong>([\s\S]*?)<\/strong>/g, "**$1**");
  t = t.replace(/<\/?(p|div|span|br)\b[^>]*>/g, " ");
  t = stripTags(t);
  return t.replace(/\s+/g, " ").trim();
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "");
}

/** HTML 表格 → Markdown 表格 */
function htmlTableToMd(html) {
  const root = parse(html);
  const rows = [];
  root.querySelectorAll("tr").forEach((tr) => {
    const cells = tr.querySelectorAll("td, th").map((td) => cellToMd(td.innerHTML));
    if (cells.length) rows.push(cells);
  });
  if (!rows.length) return "";
  const ncol = Math.max(...rows.map((r) => r.length));
  const pad = (r) => {
    const c = r.map((x) => (x || "").replace(/\|/g, "\\|"));
    while (c.length < ncol) c.push("");
    return c;
  };
  const out = [
    "| " + pad(rows[0]).join(" | ") + " |",
    "|" + "---|".repeat(ncol),
    ...rows.slice(1).map((r) => "| " + pad(r).join(" | ") + " |"),
  ];
  return out.join("\n");
}

/* ---------------- 飞书专有标签清洗 ---------------- */

/** 把一段（不含代码围栏的）文本清洗成标准 Markdown */
function cleanSegment(seg) {
  const tables = [];
  // 1) 表格 → 占位符
  seg = seg.replace(/<table\b[\s\S]*?<\/table>/g, (m) => {
    const md = htmlTableToMd(m);
    tables.push(md);
    return `\n\n@@TABLE_${tables.length - 1}@@\n\n`;
  });
  // 2) cite → 飞书文档链接（doc-id 存在时）
  seg = seg.replace(
    /<cite\b[^>]*?doc-id="([^"]*)"[^>]*?title="([^"]*)"[^>]*>\s*<\/cite>/g,
    (_m, id, title) =>
      id ? `[${title}](https://superhuang.feishu.cn/wiki/${id})` : title
  );
  seg = seg.replace(/<cite\b[^>]*?title="([^"]*)"[^>]*>\s*<\/cite>/g, "$1");
  seg = seg.replace(/<cite\b[^>]*>\s*<\/cite>/g, "");
  // 3) 独立 img 标签
  seg = seg.replace(/<img\b[^>]*\/?>/g, (m) => imgTagToMd(m));
  // 4) callout → 引用块
  seg = seg.replace(
    /<callout\b[^>]*?emoji="([^"]*)"[^>]*>([\s\S]*?)<\/callout>/g,
    (_m, emoji, inner) => {
      let body = inner
        .replace(/<\/?(p|b|strong|div)\b[^>]*>/g, "")
        .replace(/<br\s*\/?>/g, "\n");
      const lines = body.split("\n").map((s) => s.trim()).filter(Boolean);
      const head = emoji ? `**${emoji}**` : "";
      const rows = (head ? [head] : []).concat(lines).map((l) => "> " + l);
      return "\n\n" + rows.join("\n") + "\n\n";
    }
  );
  seg = seg.replace(/<callout\b[^>]*>([\s\S]*?)<\/callout>/g, (_m, inner) => {
    const body = inner.replace(/<\/?(p|b|strong|div)\b[^>]*>/g, "");
    const lines = body.split("\n").map((s) => s.trim()).filter(Boolean);
    return "\n\n" + lines.map((l) => "> " + l).join("\n") + "\n\n";
  });
  seg = seg.replace(/<callout\b[^>]*>/g, "").replace(/<\/callout>/g, "");
  // 5) 其余专有标签
  seg = seg.replace(/<title\b[^>]*>[\s\S]*?<\/title>/g, "");
  seg = seg.replace(/<undefined>\s*<\/undefined>/g, "");
  seg = seg.replace(/<at\b[^>]*>/g, "").replace(/<\/at>/g, "");
  seg = seg.replace(/<embed\b[^>]*>[\s\S]*?<\/embed>/g, "");
  seg = seg.replace(/<\/?(p|b|strong)\b[^>]*>/g, "");
  // 6) 还原表格
  seg = seg.replace(/@@TABLE_(\d+)@@/g, (_m, i) => tables[Number(i)]);
  return seg;
}

/** 按代码围栏切段：围栏内原样保留，围栏外做清洗 */
function cleanMd(md) {
  const lines = md.split("\n");
  const out = [];
  let buf = [];
  let fence = false;
  const flush = () => {
    if (buf.length) {
      out.push(cleanSegment(buf.join("\n")));
      buf = [];
    }
  };
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      flush();
      fence = !fence;
      out.push(line);
      continue;
    }
    if (fence) out.push(line);
    else buf.push(line);
  }
  flush();
  return out.join("\n");
}

/* ---------------- 按 H1 切章 ---------------- */

/** 返回 [{title, body}]，按围栏外的 H1 切分 */
function splitByH1(md) {
  const lines = md.split("\n");
  const sections = [];
  let cur = { title: null, lines: [] };
  let fence = false;
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      fence = !fence;
      cur.lines.push(line);
      continue;
    }
    if (!fence && /^#\s+/.test(line)) {
      if (cur.title !== null || cur.lines.some((l) => l.trim())) {
        sections.push(cur);
      }
      cur = { title: line.replace(/^#\s+/, "").trim(), lines: [] };
      continue;
    }
    cur.lines.push(line);
  }
  if (cur.title !== null || cur.lines.some((l) => l.trim())) sections.push(cur);
  return sections;
}

function tidy(md) {
  return md
    .replace(/\r/g, "")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/* ---------------- 主流程 ---------------- */

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const raw = fs.readFileSync(MAIN_MD, "utf8");
  const cleaned = cleanMd(raw);
  const sections = splitByH1(cleaned);

  // 第一个 section 是「开篇」（Part 之前的引言）
  const chapters = [];
  const preamble = sections[0];
  if (preamble && preamble.title === null) {
    const body = tidy(preamble.lines.join("\n"));
    if (body) {
      chapters.push({ title: "开篇：作者的话与更新说明", body });
    }
  }
  for (const s of sections) {
    if (s.title === null) continue;
    const body = tidy(s.lines.join("\n"));
    chapters.push({ title: s.title, body });
  }

  // 飞书子文档：作为附录章节
  if (fs.existsSync(SUB_MD)) {
    const sub = tidy(cleanMd(fs.readFileSync(SUB_MD, "utf8")));
    chapters.push({ title: "附录：使用 Windsurf 开发一款 iOS App（日更）", body: sub });
  }

  // 写章节文件
  const entries = [];
  chapters.forEach((c, i) => {
    const n = String(i + 1).padStart(2, "0");
    const slug = `aicoding-${n}`;
    const file = `aicoding/page-${n}.md`;
    // 不重复输出章节标题：详情页已用课程标题渲染 h1（与 codex/orange-book 等书一致）
    const md = c.body + "\n";
    fs.writeFileSync(path.join(ROOT, "scripts", file), md, "utf8");
    entries.push({
      slug,
      title: c.title,
      category: "AI书籍",
      url: WIKI_URL,
      parent_node_token: BOOK_SLUG,
      node_level: 3,
      has_child: false,
      contentFile: file,
      orderVal: ORDER_BASE + 1 + i,
    });
  });

  // 写入 extra-courses.json（幂等：先移除旧的本书条目）
  const all = JSON.parse(fs.readFileSync(EXTRA_JSON, "utf8"));
  const kept = all.filter(
    (e) => e.slug !== BOOK_SLUG && e.parent_node_token !== BOOK_SLUG
  );
  const container = {
    slug: BOOK_SLUG,
    title: "AI编程蓝皮书2.0（全本）",
    category: "AI书籍",
    url: WIKI_URL,
    parent_node_token: "ai-data",
    node_level: 2,
    has_child: true,
    contentFile: "",
    orderVal: ORDER_BASE,
  };
  kept.push(container, ...entries);
  fs.writeFileSync(EXTRA_JSON, JSON.stringify(kept, null, 2), "utf8");

  console.log(
    `导入完成：${chapters.length} 章 → scripts/aicoding/；extra-courses.json 共 ${kept.length} 条`
  );
  chapters.forEach((c, i) => console.log(`  ${String(i + 1).padStart(2, "0")} ${c.title}`));
}

main();
