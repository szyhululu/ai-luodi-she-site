// 抓取 WorkBuddy 蓝皮书全本（sitemap 列出的章节），转成 Markdown 内联进课程。
// 产物：scripts/extra/bluebook/<slug>.md  +  重写 scripts/extra-courses.json（含父节点 + 各章子节点）
// 设计：避免外链流失——站内的 workbuddy.homes/bluebook 链接降级为纯文本；图片保留绝对地址（热链）。
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "scripts", "bluebook");
fs.mkdirSync(OUT_DIR, { recursive: true });

const SITE = "https://workbuddy.homes";
const curl = (url) =>
  execSync(`curl -s --max-time 30 ${JSON.stringify(url)}`, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    timeout: 60000,
  });

// 1) 取 sitemap，列出蓝皮书所有章节 URL（排除篇 landing 页，只取最深层章节）
function listChapterUrls() {
  const sm = curl(`${SITE}/sitemap.xml`);
  const urls = [...sm.matchAll(/https:\/\/workbuddy\.homes\/bluebook\/[^< ]+/g)].map(
    (m) => m[0]
  );
  // 章节页 = 路径至少两层（bluebook/<篇>/<章>/）；篇/附录 landing 只有一层，排除
  const chapters = urls.filter((u) => {
    const seg = u.replace(`${SITE}/bluebook/`, "").replace(/\/$/, "").split("/");
    return seg.length >= 2;
  });
  return [...new Set(chapters)];
}

// 2) HTML -> Markdown
function htmlToMd(html) {
  const root = parse(html);
  // 取 main 正文（VitePress 文章在 main.vp-doc）
  let main = root.querySelector("main");
  if (!main) main = root.querySelector(".vp-doc") || root;
  // 去掉导航/侧栏/页脚/脚本
  main.querySelectorAll("script,style,header,footer,nav,aside").forEach((n) => n.remove());

  function inline(nodes) {
    return nodes
      .map((n) => {
        if (n.nodeType === 3) return n.text;
        const tag = (n.tagName || "").toLowerCase();
        if (tag === "br") return "\n";
        if (tag === "code") return "`" + n.text + "`";
        if (tag === "strong" || tag === "b") return "**" + inline(n.childNodes) + "**";
        if (tag === "em" || tag === "i") return "*" + inline(n.childNodes) + "*";
        if (tag === "kbd") return "`" + n.rawText + "`";
        if (tag === "a") {
          const href = n.getAttribute("href") || "";
          const txt = inline(n.childNodes).trim();
          if (href.includes("workbuddy.homes")) return txt; // 站内蓝皮书链接降级为纯文本，防跳走
          if (!href || href.startsWith("#")) return txt;
          return `[${txt}](${href})`;
        }
        if (tag === "img") {
          const src = absUrl(n.getAttribute("src") || "");
          const alt = n.getAttribute("alt") || "";
          return `![${alt}](${src})`;
        }
        return inline(n.childNodes);
      })
      .join("");
  }

  function block(node) {
    const tag = (node.tagName || "").toLowerCase();
    if (node.nodeType === 3) {
      const t = node.text.replace(/\n+/g, " ").trim();
      return t ? t + " " : "";
    }
    if (tag === "script" || tag === "style" || tag === "header" || tag === "footer" || tag === "nav" || tag === "aside")
      return "";
    if (tag === "pre") {
      const code = node.querySelector("code") || node;
      const cls = (node.querySelector("code")?.getAttribute("class") || "").match(/language-(\w+)/);
      const lang = cls ? cls[1] : "";
      return "\n```" + lang + "\n" + code.text.replace(/\n$/, "") + "\n```\n\n";
    }
    if (tag === "h1") {
      // 作为课程标题，正文里跳过避免重复
      return "";
    }
    if (/^h[2-4]$/.test(tag)) {
      const lvl = "#".repeat(parseInt(tag[1], 10));
      return "\n" + lvl + " " + inline(node.childNodes).trim() + "\n\n";
    }
    if (tag === "p") return "\n" + inline(node.childNodes).trim() + "\n\n";
    if (tag === "ul")
      return (
        "\n" +
        node.childNodes
          .filter((c) => (c.tagName || "").toLowerCase() === "li")
          .map((li) => "- " + inline(li.childNodes).trim())
          .join("\n") +
        "\n\n"
      );
    if (tag === "ol")
      return (
        "\n" +
        node.childNodes
          .filter((c) => (c.tagName || "").toLowerCase() === "li")
          .map((li, i) => `${i + 1}. ` + inline(li.childNodes).trim())
          .join("\n") +
        "\n\n"
      );
    if (tag === "blockquote")
      return "\n> " + inline(node.childNodes).trim().replace(/\n/g, "\n> ") + "\n\n";
    if (tag === "hr") return "\n---\n\n";
    if (tag === "table") return "\n" + tableToMd(node) + "\n\n";
    if (tag === "figure") {
      const img = node.querySelector("img");
      const cap = node.querySelector("figcaption");
      let s = "";
      if (img) s += "![" + (img.getAttribute("alt") || "") + "](" + absUrl(img.getAttribute("src") || "") + ")";
      if (cap) s += "\n\n*" + inline(cap.childNodes).trim() + "*";
      return "\n" + s + "\n\n";
    }
    if (tag === "img") {
      const src = absUrl(node.getAttribute("src") || "");
      return "\n![" + (node.getAttribute("alt") || "") + "](" + src + ")\n\n";
    }
    // div/section/span/main 等容器：递归子节点
    return node.childNodes.map(block).join("");
  }

  function tableToMd(tbl) {
    const rows = tbl.querySelectorAll("tr");
    if (!rows.length) return "";
    const cellText = (r) =>
      r.childNodes
        .filter((c) => ["td", "th"].includes((c.tagName || "").toLowerCase()))
        .map((c) => inline(c.childNodes).trim().replace(/\n/g, " "));
    const lines = rows.map((r) => "| " + cellText(r).join(" | ") + " |");
    // 表头分隔
    if (lines.length >= 2) {
      const cols = lines[0].split("|").filter((x) => x.trim().length).length;
      lines.splice(1, 0, "| " + Array(cols).fill("---").join(" | ") + " |");
    }
    return lines.join("\n");
  }

  function absUrl(src) {
    if (!src) return "";
    if (src.startsWith("//")) return "https:" + src;
    if (src.startsWith("/")) return SITE + src;
    return src;
  }

  const md = main.childNodes.map(block).join("");
  return cleanMd(md);
}

function cleanMd(md) {
  return md
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\n{2,}\s*$/g, "\n")
    .trim();
}

function slugOf(url, idx) {
  const seg = url.replace(`${SITE}/bluebook/`, "").replace(/\/$/, "").split("/");
  const last = decodeURIComponent(seg[seg.length - 1]);
  const m = last.match(/第\s*(\d+)\s*章/);
  if (m) return "bluebook-ch" + m[1];
  if (/附录/.test(last)) {
    const am = last.match(/附录\s*([A-Za-z])/);
    return "bluebook-appendix-" + (am ? am[1].toLowerCase() : idx);
  }
  return "bluebook-" + idx;
}

function main() {
  const urls = listChapterUrls();
  console.log("found chapter urls:", urls.length);
  const entries = [];
  let order = 1001;
  let seq = 1;
  for (const url of urls) {
    try {
      const html = curl(url);
      const md = htmlToMd(html);
      const root = parse(html);
      const main = root.querySelector("main") || root.querySelector(".vp-doc") || root;
      const h1 = main.querySelector("h1");
      const title = (h1 ? inlineText(h1) : "").trim() || url;
      const slug = `bluebook-${seq++}`;
      const file = `bluebook/${slug}.md`;
      fs.writeFileSync(path.join(ROOT, "scripts", file), md, "utf8");
      entries.push({
        slug,
        title,
        category: "蓝皮书",
        url,
        contentFile: file,
        parent_node_token: "bluebook",
        node_level: 2,
        has_child: 0,
        orderVal: order++,
      });
      console.log(`  [${slug}] ${title}  (${md.length} chars)`);
    } catch (e) {
      console.error("FAIL", url, e.message);
    }
  }

  // 父节点
  const parent = {
    slug: "bluebook",
    title: "WorkBuddy 实战蓝皮书（全本）",
    category: "蓝皮书",
    url: `${SITE}/bluebook/`,
    contentFile: "",
    parent_node_token: "",
    node_level: 1,
    has_child: 1,
    orderVal: 1000,
  };

  const manifest = [parent, ...entries];

  // 合并进 extra-courses.json：保留非 bluebook 的已有条目（如 doubao），追加本次生成的 bluebook 块
  const extraPath = path.join(ROOT, "scripts", "extra-courses.json");
  let existing = [];
  if (fs.existsSync(extraPath)) {
    existing = JSON.parse(fs.readFileSync(extraPath, "utf8")).filter(
      (e) => !String(e.slug).startsWith("bluebook")
    );
  }
  const merged = [...existing, ...manifest];
  fs.writeFileSync(
    extraPath,
    JSON.stringify(merged, null, 2) + "\n",
    "utf8"
  );
  console.log("wrote extra-courses.json with", merged.length, "entries (bluebook", manifest.length, ")");
}

// 简单纯文本提取（用于 h1）
function inlineText(node) {
  if (node.nodeType === 3) return node.text;
  return (node.childNodes || []).map(inlineText).join("");
}

main();
