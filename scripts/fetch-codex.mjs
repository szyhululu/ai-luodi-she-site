// 抓取 Codex 中文指南（codexguide.ai），转为 Markdown 并接入 AI书籍 蓝皮书合集。
// 源站：https://codexguide.ai  （VitePress/VuePress 文档站，服务端渲染）
// 内容：/start/ 15 篇（入门主线）+ /advanced/ 12 篇（进阶）+ /recipes/ 18 篇（实战案例）
// 落库：scripts/codex/*.md + 写入 scripts/extra-courses.json（parent=ai-data，合集 codex-bluebook）
import { createRequire } from "module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const require = createRequire(
  "/Users/songziyue/.workbuddy/binaries/node/workspace/"
);
const TurndownService = require("turndown");

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const OUT_DIR = path.join(ROOT, "scripts", "codex");
fs.mkdirSync(OUT_DIR, { recursive: true });
const SITE = "https://codexguide.ai";
const ORIGIN = "https://codexguide.ai/start/01-what-is-codex.html";

const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// 章节清单（path 不含 .html；section 用于排序分组）
const PAGES = [
  // —— 入门主线 /start/ ——
  "start/01-what-is-codex",
  "start/02-app-installation",
  "start/03-account-plan",
  "start/04-third-party-api",
  "start/05-app-overview",
  "start/06-first-task",
  "start/07-task-design",
  "start/08-task-execution",
  "start/09-mobile-control",
  "start/10-cli-installation",
  "start/11-cli-first-run",
  "start/12-cli-options",
  "start/13-ide-vscode",
  "start/14-cloud",
  "start/15-platforms",
  // —— 进阶 /advanced/ ——
  "advanced/01-cost-context",
  "advanced/02-agents-md",
  "advanced/03-skills-plugins-mcp",
  "advanced/04-permissions-security",
  "advanced/05-automation",
  "advanced/06-hooks",
  "advanced/07-sandbox-approvals",
  "advanced/08-thread-management",
  "advanced/09-config-toml",
  "advanced/10-team-playbook",
  "advanced/11-troubleshooting",
  "advanced/12-memories",
  // —— 实战案例 /recipes/ ——
  "recipes/01-ppt-skill-walkthrough",
  "recipes/02-drawio-mcp",
  "recipes/03-playwright-mcp",
  "recipes/04-hyperframes-animation",
  "recipes/05-obsidian-codex",
  "recipes/06-feishu-cli-codex",
  "recipes/07-llm-wiki-codex",
  "recipes/08-figma-mcp-codex",
  "recipes/09-notion-mcp-codex",
  "recipes/10-dkfile-deploy-codex",
  "recipes/11-remote-bug-fix",
  "recipes/12-chrome-browser-plugin",
  "recipes/13-github-actions-ci-fix",
  "recipes/14-clinical-literature-review",
  "recipes/15-hatch-pet-photo",
  "recipes/16-android-remote-control",
  "recipes/17-desktop-pet",
  "recipes/18-codex-profiles",
];

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}
function extractTitle(html) {
  const m = html.match(/<div id="markdown-content">([\s\S]*?)<h1[^>]*>(.*?)<\/h1>/);
  if (m) return stripTags(m[2]);
  const m2 = html.match(/<h1[^>]*>(.*?)<\/h1>/);
  return m2 ? stripTags(m2[1]) : "未命名";
}

async function fetchHtml(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
      });
      if (r.ok) return await r.text();
    } catch (e) {
      await new Promise((s) => setTimeout(s, 500));
    }
  }
  throw new Error("fetch failed: " + url);
}

function toMarkdown(html) {
  const a = html.indexOf('<div id="markdown-content">');
  const b = html.indexOf("<footer");
  let inner = html.slice(a >= 0 ? a : 0, b > 0 ? b : html.length);
  inner = inner.slice(inner.indexOf(">") + 1);
  // 去掉标题右侧的锚点跳转链接（仅重复标题文字，无内容价值）
  inner = inner.replace(
    /<a class="header-anchor"[^>]*>[\s\S]*?<\/a>/g,
    ""
  );
  // 资源绝对化
  inner = inner.replace(/src="\/assets\//g, `src="${SITE}/assets/`);
  inner = inner.replace(/href="\/([^"]+)\.html"/g, `href="${SITE}/$1.html"`);
  let md = td.turndown(inner);
  // 清掉 turndown 残留的空标题链接标记
  md = md.replace(/^# \[(.*?)\]\(#.*?\)\s*$/gm, "# $1");
  md = md.replace(/^(#{2,4}) \[(.*?)\]\(#.*?\)\s*$/gm, "$1 $2");
  return md.trim();
}

const records = []; // 待写入 extra-courses.json 的章节
let order = 4001;
let ok = 0;

for (const p of PAGES) {
  const url = `${SITE}/${p}.html`;
  const slug = "codex-" + p.split("/")[1]; // codex-01-what-is-codex 等
  try {
    const html = await fetchHtml(url);
    let md = toMarkdown(html);
    const title = extractTitle(html);
    md +=
      `\n\n---\n\n> 本文转载自 [Codex 中文指南](${SITE})（codexguide.ai），作者 canghe。\n> 原文链接：[${title}](${url})` +
      "\n> 本页内容由 AI落地社 整理收录，版权归原作者所有。";
    fs.writeFileSync(path.join(OUT_DIR, slug + ".md"), md, "utf8");
    records.push({
      slug,
      title,
      category: "AI书籍",
      url,
      parent_node_token: "codex-bluebook",
      node_level: 3,
      has_child: false,
      contentFile: `codex/${slug}.md`,
      orderVal: order++,
    });
    ok++;
    console.log(`✓ ${slug}  ${title}`);
  } catch (e) {
    console.error(`✗ ${slug}  ${e.message}`);
  }
}

// 合集父节点
const parent = {
  slug: "codex-bluebook",
  title: "Codex 中文指南（全本）",
  category: "AI书籍",
  url: ORIGIN,
  parent_node_token: "ai-data",
  node_level: 2,
  has_child: true,
  contentFile: "",
  orderVal: 4000,
};

// 合并进 extra-courses.json
const jsonPath = path.join(ROOT, "scripts", "extra-courses.json");
const existing = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const kept = existing.filter(
  (r) => r.parent_node_token !== "codex-bluebook" && r.slug !== "codex-bluebook"
);
const merged = [...kept, parent, ...records];
fs.writeFileSync(jsonPath, JSON.stringify(merged, null, 2) + "\n", "utf8");

console.log(`\n完成：成功 ${ok}/${PAGES.length} 篇，已写入 extra-courses.json（codex-bluebook 合集，${records.length} 章）`);
