// 抓取「Pi Coding Agent 学习蓝皮书」（pi.xiaomovps.com）全本，导入课程栏目。
// 源码仓库：https://github.com/xiaomoBoy/pi-bluebook （原创书稿 MIT License，转载需保留版权声明）
// 结构对齐 fetch-doubao.mjs：
//   - 产物：scripts/pi/<slug>.md  +  合并进 scripts/extra-courses.json
//   - 父节点 pi-bluebook（node_level=1）+ 37 个叶子章节（node_level=2, parent=pi-bluebook）
//   - 导入范围：蓝皮书主线 /guide/（24 篇，含序章与原理篇）+ 结课 2 篇 + 实操案例 /cases/（11 篇），
//     顺序对齐站内「完整学习目录」sidebar；reference/translations/tweets 等延伸资料不入课程
//   - 原始 Markdown 来自 GitHub raw，非爬虫拆 HTML，格式最干净
//   - 站内相对路径（图片 /images/、链接 /guide/、下载文件 /examples/）改写为 pi.xiaomovps.com 绝对地址
//   - VitePress 自定义容器（::: info/tip/warning/danger）转引用块；少量裸 HTML（img/a/span/p）转 Markdown
//   - 代码围栏内一律原样保留（如 <cwd-hash>/<session> 路径模板）
//   - 每篇末尾追加来源与 MIT 许可署名，满足原项目许可要求
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const RAW = "https://raw.githubusercontent.com/xiaomoBoy/pi-bluebook/main";
const SITE = "https://pi.xiaomovps.com";
const OUT_DIR = path.join(ROOT, "scripts", "pi");
fs.mkdirSync(OUT_DIR, { recursive: true });

const PARENT = {
  slug: "pi-bluebook",
  title: "Pi Coding Agent 学习蓝皮书（全本）",
  category: "Pi Coding Agent 蓝皮书",
  url: `${SITE}/guide/`,
  contentFile: "",
  parent_node_token: "",
  node_level: 1,
  has_child: 1,
  orderVal: 3000,
};

// 学习目录顺序（对齐站内 sidebar /guide/ 与 /cases/）
// [slug, 课程标题, 仓库内路径, 站内路径]
const TOC = [
  // —— 蓝皮书开篇 ——
  ["pi-guide-index", "完整学习目录", "docs/guide/index.md", "/guide/"],
  ["pi-start-here", "30 分钟第一次成功", "docs/guide/start-here.md", "/guide/start-here"],
  ["pi-introduction", "导论 · 为什么读这本书", "docs/guide/introduction.md", "/guide/introduction"],
  ["pi-lasting-principles", "十条仍然成立的判断", "docs/guide/lasting-principles.md", "/guide/lasting-principles"],
  ["pi-edition-2026", "凡例与本版说明", "docs/guide/edition-2026.md", "/guide/edition-2026"],
  ["pi-mario-zechner", "序章 · Pi 作者 Mario Zechner", "docs/guide/mario-zechner.md", "/guide/mario-zechner"],
  // —— 模块一 · 安装与基础设置 ——
  ["pi-before-install", "1. 安装前检查", "docs/guide/before-install.md", "/guide/before-install"],
  ["pi-install-pi", "2. 安装并启动 Pi", "docs/guide/install-pi.md", "/guide/install-pi"],
  ["pi-windows-setup", "Windows 中文安装路径", "docs/guide/windows-setup.md", "/guide/windows-setup"],
  ["pi-connect-model", "3. 登录与模型设置", "docs/guide/connect-model.md", "/guide/connect-model"],
  ["pi-ready-to-work", "4. 从练习目录开始", "docs/guide/ready-to-work.md", "/guide/ready-to-work"],
  ["pi-lifecycle-management", "维护 · 更新、退出与卸载", "docs/guide/lifecycle-management.md", "/guide/lifecycle-management"],
  // —— 模块二 · 完成真实任务 ——
  ["pi-first-task", "5. 第一次任务", "docs/guide/first-task.md", "/guide/first-task"],
  ["pi-files-and-context", "6. 文件与工作目录", "docs/guide/files-and-context.md", "/guide/files-and-context"],
  ["pi-sessions", "7. 会话的保存与续写", "docs/guide/sessions.md", "/guide/sessions"],
  // —— 模块三 · 长任务与上下文 ——
  ["pi-context-and-compaction", "8. 上下文与压缩", "docs/guide/context-and-compaction.md", "/guide/context-and-compaction"],
  ["pi-prompt-caching", "9. 提示缓存入门", "docs/guide/prompt-caching.md", "/guide/prompt-caching"],
  // —— 模块四 · 扩展自己的 Pi ——
  ["pi-skills-extensions-packages", "10. Skill、Extension 与 Package", "docs/guide/skills-extensions-packages.md", "/guide/skills-extensions-packages"],
  ["pi-first-extension", "11. Extension 的需求与验收", "docs/guide/first-extension.md", "/guide/first-extension"],
  ["pi-subagents", "12. 子 Agent 如何分工", "docs/guide/subagents.md", "/guide/subagents"],
  // —— 原理串联 ——
  ["pi-how-pi-works", "从 Prompt 到 Agent Loop", "docs/guide/how-pi-works.md", "/guide/how-pi-works"],
  // —— 模块五 · 稳定工作流 ——
  ["pi-vps-and-long-running", "13. 长时间任务与 VPS", "docs/guide/vps-and-long-running.md", "/guide/vps-and-long-running"],
  ["pi-durable", "选学 · Pi Durable", "docs/guide/pi-durable.md", "/guide/pi-durable"],
  ["pi-safety", "14. 权限、隔离与验收", "docs/guide/safety.md", "/guide/safety"],
  // —— 结课与查错 ——
  ["pi-graduation-project", "CASE 08 · 毕业项目", "docs/cases/graduation-project.md", "/cases/graduation-project"],
  ["pi-troubleshooting", "Pi 故障排查手册", "docs/reference/troubleshooting.md", "/reference/troubleshooting"],
  // —— 实操案例库 ——
  ["pi-cases-index", "案例库与使用方法", "docs/cases/index.md", "/cases/"],
  ["pi-case-meeting-notes", "CASE 01 · 会议记录行动清单", "docs/cases/meeting-notes.md", "/cases/meeting-notes"],
  ["pi-case-compaction", "CASE 02 · 压缩前后对照", "docs/cases/compaction-before-after.md", "/cases/compaction-before-after"],
  ["pi-case-first-skill", "CASE 03 · 第一个 Skill", "docs/cases/first-skill.md", "/cases/first-skill"],
  ["pi-case-first-extension", "CASE 04 · 最小 Extension", "docs/cases/first-extension.md", "/cases/first-extension"],
  ["pi-case-independent-review", "CASE 05 · 两路独立审阅", "docs/cases/independent-review.md", "/cases/independent-review"],
  ["pi-case-checkpoint-recovery", "CASE 06 · 从检查点恢复", "docs/cases/checkpoint-recovery.md", "/cases/checkpoint-recovery"],
  ["pi-case-safe-review", "CASE 07 · 任务前安全审阅", "docs/cases/safe-review.md", "/cases/safe-review"],
  ["pi-case-content-workflow", "从资料到可核对的草稿", "docs/cases/content-workflow.md", "/cases/content-workflow"],
  ["pi-case-code-repair", "修复一个小程序", "docs/cases/code-repair.md", "/cases/code-repair"],
  ["pi-case-durable-assistant", "Pi Durable 断点恢复", "docs/cases/durable-assistant.md", "/cases/durable-assistant"],
];

const absUrl = (p) => (p.startsWith("/") ? SITE + p : p);

function stripFrontmatter(md) {
  if (!md.startsWith("---")) return md;
  const end = md.indexOf("\n---", 3);
  if (end === -1) return md;
  return md.slice(end + 4).replace(/^\n+/, "");
}

// 裸 HTML → Markdown（只在代码围栏之外调用）
function convertInlineHtml(s) {
  return (
    s
      // <img ... src="..." alt="..." /> → ![alt](绝对地址)
      .replace(/<img\b[^>]*>/gi, (m) => {
        const src = (m.match(/\bsrc="([^"]*)"/i) || [])[1];
        if (!src) return "";
        const alt = (m.match(/\balt="([^"]*)"/i) || [])[1] || "";
        return `![${alt}](${absUrl(src)})`;
      })
      // <a href="..." download>文本</a> → [文本](绝对地址)
      .replace(/<a\b[^>]*\bhref="([^"]*)"[^>]*\bdownload[^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) =>
        `[${text.trim()}](${absUrl(href)})`
      )
      // 其余 <a href="...">文本</a> → [文本](href)
      .replace(/<a\b[^>]*\bhref="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, text) =>
        `[${text.trim()}](${href})`
      )
      // 空锚点 <a id="..."></a> 删除
      .replace(/<a\b[^>]*\bid="[^"]*"[^>]*>\s*<\/a>/gi, "")
      // library-status 徽章 → 纯文本（ReactMarkdown 会丢弃裸 HTML，这里保留信息）
      .replace(/<span class="library-status">([\s\S]*?)<\/span>/gi, "$1")
      // <p class="image-caption">…</p> → 普通段落
      .replace(/<p class="image-caption">([\s\S]*?)<\/p>/gi, "$1")
      .replace(/<strong>([\s\S]*?)<\/strong>/gi, "**$1**")
      .replace(/<small>([\s\S]*?)<\/small>/gi, "*$1*")
      // 兜底：清理残留的成对标签
      .replace(/<\/(?:a|p|span|strong|small|div|em|b|i)>/gi, "")
  );
}

// 站内相对路径 → 绝对地址（markdown 链接与图片）
function absolutize(s) {
  return s.replace(/\]\((\/[^)]+)\)/g, (m, p) => `](${SITE}${p})`);
}

function convert(md) {
  md = stripFrontmatter(md);
  const lines = md.split("\n");
  const out = [];
  let inFence = false;
  let fenceMarker = "";
  let inContainer = false;

  for (const line of lines) {
    const fence = line.match(/^\s*(```|~~~)/);
    if (fence) {
      if (!inFence) {
        inFence = true;
        fenceMarker = fence[1];
      } else if (line.trim().startsWith(fenceMarker)) {
        inFence = false;
      }
      out.push(inContainer ? `> ${line}` : line);
      continue;
    }
    if (inFence) {
      out.push(inContainer ? `> ${line}` : line);
      continue;
    }
    // VitePress 容器开始：::: info 标题
    const open = line.match(/^:::\s*([a-z]+)?\s*(.*)$/i);
    if (open && !inContainer) {
      inContainer = true;
      const title = (open[2] || "").trim();
      out.push(">");
      if (title) out.push(`> **${title}**`);
      out.push(">");
      continue;
    }
    // 容器结束
    if (inContainer && line.trim() === ":::") {
      inContainer = false;
      continue;
    }
    let t = convertInlineHtml(line);
    t = absolutize(t);
    out.push(inContainer ? (t.trim() === "" ? ">" : `> ${t}`) : t);
  }

  return out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function fetchRaw(repoPath) {
  const url = `${RAW}/${repoPath}`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (r.ok) return await r.text();
    } catch {}
    await new Promise((s) => setTimeout(s, 600));
  }
  throw new Error(`fetch failed: ${url}`);
}

async function main() {
  const entries = [];
  let order = PARENT.orderVal + 1;

  for (const [slug, title, repoPath, sitePath] of TOC) {
    const raw = await fetchRaw(repoPath);
    const body = convert(raw);
    const footer =
      `\n\n---\n\n> 本文转载自 [Pi Coding Agent 学习蓝皮书](${SITE}${sitePath})，` +
      `原项目以 MIT License 发布；依据许可要求，保留原版权声明与来源链接。\n`;
    const file = `pi/${slug}.md`;
    fs.writeFileSync(path.join(ROOT, "scripts", file), body + footer, "utf8");
    entries.push({
      slug,
      title,
      category: PARENT.category,
      url: `${SITE}${sitePath}`,
      contentFile: file,
      parent_node_token: PARENT.slug,
      node_level: 2,
      has_child: 0,
      orderVal: order++,
    });
    console.log(`  [${slug}] ${title}  (${body.length} chars)`);
  }

  // 合并进 extra-courses.json：保留非 pi 的已有条目（bluebook / doubao），追加本次 pi 块
  const extraPath = path.join(ROOT, "scripts", "extra-courses.json");
  let existing = [];
  if (fs.existsSync(extraPath)) {
    existing = JSON.parse(fs.readFileSync(extraPath, "utf8")).filter(
      (e) => !String(e.slug).startsWith("pi-")
    );
  }
  const merged = [...existing, PARENT, ...entries];
  fs.writeFileSync(extraPath, JSON.stringify(merged, null, 2) + "\n", "utf8");
  console.log(
    `wrote extra-courses.json: ${merged.length} entries (pi ${entries.length + 1}, kept ${existing.length})`
  );
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
