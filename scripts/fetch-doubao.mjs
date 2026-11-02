// 抓取「豆包工作蓝皮书」全本（doubaowork.homes 的 content/site-content.json 主数据包），
// 转成 Markdown 内联进课程，结构对齐 fetch-bluebook.mjs：
//   - 产物：scripts/doubao/<slug>.md  +  合并进 scripts/extra-courses.json
//   - 父节点 doubao-bluebook（node_level=1）+ 49 个叶子章节（node_level=2, parent=doubao-bluebook）
//   - 图片保留绝对地址热链（https://doubaowork.homes/media/...）
//   - 防外链流失：站内的 /p/ 相对链接降级为纯文本
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE = "https://doubaowork.homes";
const VERSION = "20261019-qr-1";
const OUT_DIR = path.join(ROOT, "scripts", "doubao");
fs.mkdirSync(OUT_DIR, { recursive: true });

// 1) 取主数据包（含全部文档与媒体清单）
async function fetchMaster() {
  const url = `${SITE}/content/site-content.json?v=${VERSION}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.json();
}

// 2) Markdown 预处理：图片相对路径改绝对；站内 /p/ 链接降级为纯文本
function fixMd(md) {
  return md
    .replace(/!\[\]\((\/media\/[^)]+)\)/g, (_, p) => `![](${SITE}${p})`)
    .replace(/\[([^\]]+)\]\(\/p\/[^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\(\/toc\)/g, "$1")
    .replace(/\[([^\]]+)\]\(\/intro\)/g, "$1")
    .trim();
}

async function main() {
  const data = await fetchMaster();
  const docs = data.documents || [];

  // 叶子章节 = 有正文且 hasChild=false 的文档，按数组顺序（已是 TOC 遍历顺序）
  const leaves = docs.filter((d) => !d.hasChild && (d.content || "").trim().length > 0);

  const entries = [];
  let order = 2001;
  let seq = 1;
  for (const d of leaves) {
    const md = fixMd(d.content || "");
    const slug = `doubao-${seq++}`;
    const file = `doubao/${slug}.md`;
    fs.writeFileSync(path.join(ROOT, "scripts", file), md, "utf8");
    entries.push({
      slug,
      title: d.title,
      category: "豆包工作蓝皮书",
      url: `${SITE}/#/p/${d.nodeToken}`,
      contentFile: file,
      parent_node_token: "doubao-bluebook",
      node_level: 2,
      has_child: 0,
      orderVal: order++,
    });
    console.log(`  [${slug}] ${d.title}  (${md.length} chars)`);
  }

  const parent = {
    slug: "doubao-bluebook",
    title: "豆包工作蓝皮书（全本）",
    category: "豆包工作蓝皮书",
    url: `${SITE}/#/toc`,
    contentFile: "",
    parent_node_token: "",
    node_level: 1,
    has_child: 1,
    orderVal: 2000,
  };

  const manifest = [parent, ...entries];

  // 合并进 extra-courses.json：保留非 doubao 的已有条目（如 bluebook），追加本次生成的 doubao 块
  const extraPath = path.join(ROOT, "scripts", "extra-courses.json");
  let existing = [];
  if (fs.existsSync(extraPath)) {
    existing = JSON.parse(fs.readFileSync(extraPath, "utf8")).filter(
      (e) => !String(e.slug).startsWith("doubao")
    );
  }
  const merged = [...existing, ...manifest];
  fs.writeFileSync(extraPath, JSON.stringify(merged, null, 2) + "\n", "utf8");
  console.log(
    `wrote extra-courses.json: ${merged.length} entries (doubao ${manifest.length}, kept ${existing.length})`
  );
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
