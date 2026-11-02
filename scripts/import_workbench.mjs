// 把「工作台」栏目下的 4 篇飞书上传文件（3 个 .docx + 1 个 .html）转成站内正文。
// 背景：这 4 个节点在飞书里是 file 类型（不是在线文档），sync-courses.mjs 只能标 isFile=1
//       并给出「在飞书打开」跳转，站内没有内容。这里把原文下载下来转 Markdown 内嵌。
// 产出：
//   scripts/workbench/<token>.md      —— 章节正文
//   public/courses/workbench/workbench.html —— HTML 原型（页面内用 iframe 内嵌）
//   scripts/file-contents.json         —— slug → 正文文件映射（供同步脚本每次同步后还原）
// 用法：node scripts/import_workbench.mjs
import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const TurndownService = require(
  "/Users/songziyue/.workbuddy/binaries/node/workspace/node_modules/turndown"
);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const WORK_DIR = path.join(ROOT, "scripts", "workbench");
const PUBLIC_DIR = path.join(ROOT, "public", "courses", "workbench");
const DB_PATH = path.join(ROOT, "data", "app.db");
const PY = "/Users/songziyue/.workbuddy/binaries/python/envs/default/bin/python";
const PARENT = "UzCmwlHDsixNxukM8Xcc77tenpc"; // 工作台

// 4 个节点：slug / 飞书 wiki token / 标题
const ITEMS = [
  {
    slug: "WXKgwbT1XiyKCikfIjtcpRW4nFk",
    title: "个人生活工作台开发提示词",
    ext: "docx",
  },
  {
    slug: "M02vwM8BeiWPa6kqwpFcyoo9nlf",
    title: "个人学习网站-提示词",
    ext: "docx",
  },
  {
    slug: "KVWEwjXWxitFCIkeF9UcMc2inLe",
    title: "每日资讯早报生成器-通用提示词",
    ext: "docx",
  },
  {
    slug: "RUgjwVMFJiCzA3k7SezcmwWNnvc",
    title: "个人工作台（HTML 原型）",
    ext: "html",
  },
];

const IFRAME_MARK = "<!-- iframe:/courses/workbench/workbench.html -->";

function download(slug) {
  const out = path.join(WORK_DIR, slug);
  if (fs.existsSync(out) && fs.statSync(out).size > 0) return out;
  fs.mkdirSync(WORK_DIR, { recursive: true });
  execFileSync(
    "lark-cli",
    [
      "drive",
      "+download",
      "--wiki-token",
      slug,
      "--output",
      out,
      "--overwrite",
      "--as",
      "user",
    ],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }
  );
  return out;
}

function docxToMd(src, dest) {
  execFileSync(PY, [path.join(__dirname, "docx_to_md.py"), src, dest]);
  return fs.readFileSync(dest, "utf8");
}

function htmlToMd(src, dest) {
  const raw = fs.readFileSync(src, "utf8");
  let body = raw.slice(raw.indexOf("<body"), raw.lastIndexOf("</body>"));
  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    // 相邻内联元素之间补空格，否则 "12:30" "56:10" 会粘成一个词
    .replace(/>(<(span|b|i|small|strong|em)\b)/g, "> $1");
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });
  const text = td.turndown(body);
  // 正文内标题统一降一级：页面本身已有 <h1>（课程标题），避免出现多个 h1
  const demoted = text.replace(/^(#{1,5})\s+/gm, (m, h) => "#".repeat(Math.min(h.length + 1, 6)) + " ");
  const md = [
    "这是一份可直接交互的「个人工作台」HTML 原型（来自飞书上传文件），已在下方内嵌，滚动查看各功能卡片。",
    "",
    IFRAME_MARK,
    "",
    "## 界面内容速览",
    "",
    demoted.trim(),
    "",
  ].join("\n");
  fs.writeFileSync(dest, md, "utf8");
  return md;
}

function main() {
  fs.mkdirSync(WORK_DIR, { recursive: true });
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  const map = {};
  for (const it of ITEMS) {
    const src = download(it.slug);
    const dest = path.join(WORK_DIR, `${it.slug}.md`);
    if (it.ext === "docx") {
      docxToMd(src, dest);
    } else {
      htmlToMd(src, dest);
      // HTML 原型本身也放到 public 供 iframe 加载
      fs.copyFileSync(src, path.join(PUBLIC_DIR, "workbench.html"));
    }
    const size = fs.statSync(dest).size;
    map[it.slug] = `workbench/${it.slug}.md`;
    console.log(`✓ ${it.title} → scripts/workbench/${it.slug}.md（${size} 字节）`);
  }

  // 记录映射：同步脚本每次全量重拉后按此还原正文（否则 isFile=1 会把内容冲掉）
  fs.writeFileSync(
    path.join(ROOT, "scripts", "file-contents.json"),
    JSON.stringify(map, null, 2),
    "utf8"
  );

  // 立即写入数据库
  const db = new Database(DB_PATH);
  const upd = db.prepare(
    "UPDATE courses SET content=?, isFile=0 WHERE slug=? AND parent_node_token=?"
  );
  let n = 0;
  for (const it of ITEMS) {
    const md = fs.readFileSync(path.join(WORK_DIR, `${it.slug}.md`), "utf8");
    n += upd.run(md, it.slug, PARENT).changes;
  }
  console.log(`已写入数据库：${n} 个节点（isFile 置 0）`);
}

main();
