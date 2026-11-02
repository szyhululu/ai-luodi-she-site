// 生成「Pi Coding Agent 学习蓝皮书」静态预览页（单文件 HTML，可直接打开/分享）。
// 内容来源：本地站点实时渲染的课程详情页（与线上显示一致），非二次转换。
// 产物：preview/pi-bluebook-preview.html
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASE = "http://localhost:3000";
const SITE = "https://pi.xiaomovps.com";
const REPO = "https://github.com/xiaomoBoy/pi-bluebook";
const OUT = path.join(ROOT, "preview", "pi-bluebook-preview.html");

// [slug, 课程标题, 原站路径] —— 顺序对齐站内「完整学习目录」
const GROUPS = [
  {
    name: "开篇",
    items: [
      ["pi-guide-index", "完整学习目录", "/guide/"],
      ["pi-start-here", "30 分钟第一次成功", "/guide/start-here"],
      ["pi-introduction", "导论 · 为什么读这本书", "/guide/introduction"],
      ["pi-lasting-principles", "十条仍然成立的判断", "/guide/lasting-principles"],
      ["pi-edition-2026", "凡例与本版说明", "/guide/edition-2026"],
      ["pi-mario-zechner", "序章 · Pi 作者 Mario Zechner", "/guide/mario-zechner"],
    ],
  },
  {
    name: "模块一 · 安装与基础设置",
    items: [
      ["pi-before-install", "1. 安装前检查", "/guide/before-install"],
      ["pi-install-pi", "2. 安装并启动 Pi", "/guide/install-pi"],
      ["pi-windows-setup", "Windows 中文安装路径", "/guide/windows-setup"],
      ["pi-connect-model", "3. 登录与模型设置", "/guide/connect-model"],
      ["pi-ready-to-work", "4. 从练习目录开始", "/guide/ready-to-work"],
      ["pi-lifecycle-management", "维护 · 更新、退出与卸载", "/guide/lifecycle-management"],
    ],
  },
  {
    name: "模块二 · 完成真实任务",
    items: [
      ["pi-first-task", "5. 第一次任务", "/guide/first-task"],
      ["pi-files-and-context", "6. 文件与工作目录", "/guide/files-and-context"],
      ["pi-sessions", "7. 会话的保存与续写", "/guide/sessions"],
    ],
  },
  {
    name: "模块三 · 长任务与上下文",
    items: [
      ["pi-context-and-compaction", "8. 上下文与压缩", "/guide/context-and-compaction"],
      ["pi-prompt-caching", "9. 提示缓存入门", "/guide/prompt-caching"],
    ],
  },
  {
    name: "模块四 · 扩展自己的 Pi",
    items: [
      ["pi-skills-extensions-packages", "10. Skill、Extension 与 Package", "/guide/skills-extensions-packages"],
      ["pi-first-extension", "11. Extension 的需求与验收", "/guide/first-extension"],
      ["pi-subagents", "12. 子 Agent 如何分工", "/guide/subagents"],
    ],
  },
  {
    name: "原理串联",
    items: [["pi-how-pi-works", "从 Prompt 到 Agent Loop", "/guide/how-pi-works"]],
  },
  {
    name: "模块五 · 稳定工作流",
    items: [
      ["pi-vps-and-long-running", "13. 长时间任务与 VPS", "/guide/vps-and-long-running"],
      ["pi-durable", "选学 · Pi Durable", "/guide/pi-durable"],
      ["pi-safety", "14. 权限、隔离与验收", "/guide/safety"],
    ],
  },
  {
    name: "结课与查错",
    items: [
      ["pi-graduation-project", "CASE 08 · 毕业项目", "/cases/graduation-project"],
      ["pi-troubleshooting", "Pi 故障排查手册", "/reference/troubleshooting"],
    ],
  },
  {
    name: "实操案例库",
    items: [
      ["pi-cases-index", "案例库与使用方法", "/cases/"],
      ["pi-case-meeting-notes", "CASE 01 · 会议记录行动清单", "/cases/meeting-notes"],
      ["pi-case-compaction", "CASE 02 · 压缩前后对照", "/cases/compaction-before-after"],
      ["pi-case-first-skill", "CASE 03 · 第一个 Skill", "/cases/first-skill"],
      ["pi-case-first-extension", "CASE 04 · 最小 Extension", "/cases/first-extension"],
      ["pi-case-independent-review", "CASE 05 · 两路独立审阅", "/cases/independent-review"],
      ["pi-case-checkpoint-recovery", "CASE 06 · 从检查点恢复", "/cases/checkpoint-recovery"],
      ["pi-case-safe-review", "CASE 07 · 任务前安全审阅", "/cases/safe-review"],
      ["pi-case-content-workflow", "从资料到可核对的草稿", "/cases/content-workflow"],
      ["pi-case-code-repair", "修复一个小程序", "/cases/code-repair"],
      ["pi-case-durable-assistant", "Pi Durable 断点恢复", "/cases/durable-assistant"],
    ],
  },
];

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function fetchPage(slug) {
  const url = `${BASE}/courses/${slug}`;
  let lastErr;
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return await r.text();
      lastErr = new Error(`HTTP ${r.status}`);
    } catch (e) {
      lastErr = e;
    }
    await new Promise((s) => setTimeout(s, 700));
  }
  throw new Error(`fetch failed: ${url} (${lastErr?.message || lastErr})`);
}

// 提取 <article class="prose ..."> 内层 HTML（react-markdown 输出，纯语义标签）
function extractArticle(html) {
  const m = html.match(/<article[^>]*class="[^"]*prose[^"]*"[^>]*>([\s\S]*?)<\/article>/);
  if (!m) throw new Error("article not found");
  return m[1]
    .replace(/<!--.*?-->/g, "")
    .replace(/<a href="(https?:|\/\/)/g, '<a target="_blank" rel="noopener noreferrer" href="$1');
}

async function main() {
  const logoB64 = fs.readFileSync(path.join(ROOT, "public", "logo.png")).toString("base64");

  // 全文总字数（字符数，与数据库 LENGTH(content) 口径一致）
  let totalChars = 0;
  const flat = [];
  let no = 0;
  for (const g of GROUPS) {
    for (const [slug, title, sitePath] of g.items) {
      no += 1;
      flat.push({ slug, title, sitePath, group: g.name, no });
      const md = fs.readFileSync(path.join(ROOT, "scripts", "pi", `${slug}.md`), "utf8");
      totalChars += md.length;
    }
  }
  const wan = (totalChars / 10000).toFixed(1);

  // 并发抓取 37 个详情页
  const queue = [...flat];
  const bodies = {};
  const failed = [];
  await Promise.all(
    Array.from({ length: 6 }, async () => {
      while (queue.length) {
        const it = queue.shift();
        try {
          bodies[it.slug] = extractArticle(await fetchPage(it.slug));
          process.stdout.write(".");
        } catch (e) {
          failed.push(`${it.slug}: ${e.message}`);
        }
      }
    })
  );
  process.stdout.write("\n");
  if (failed.length) {
    console.error("FAILED PAGES:\n" + failed.join("\n"));
    process.exit(1);
  }

  const genTime = new Date().toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
    dateStyle: "long",
    timeStyle: "short",
  });

  // —— 侧边目录 ——
  const tocHtml = GROUPS.map((g) => {
    const items = flat.filter((f) => f.group === g.name);
    const links = items
      .map(
        (f) =>
          `<a class="toc-item" href="#${f.slug}"><i>${String(f.no).padStart(2, "0")}</i><span>${esc(f.title)}</span></a>`
      )
      .join("\n");
    return `<div class="toc-group"><div class="toc-group-head"><span>${esc(g.name)}</span><span>${items.length}</span></div>${links}</div>`;
  }).join("\n");

  // —— 正文各章 ——
  const chaptersHtml = flat
    .map((f, i) => {
      const p = i > 0 ? flat[i - 1] : null;
      const n = i < flat.length - 1 ? flat[i + 1] : null;
      const chNav = `<nav class="ch-nav">
${p ? `  <a class="ch-nav-item" href="#${p.slug}"><span class="ch-nav-label">← 上一篇</span><span class="ch-nav-title">${esc(p.title)}</span></a>` : "  <span></span>"}
${n ? `  <a class="ch-nav-item next" href="#${n.slug}"><span class="ch-nav-label">下一篇 →</span><span class="ch-nav-title">${esc(n.title)}</span></a>` : "  <span></span>"}
</nav>`;
      return `<section class="chapter" id="${f.slug}">
  <header class="ch-head">
    <span class="ch-no">${String(f.no).padStart(2, "0")}</span>
    <div class="ch-title">
      <h2>${esc(f.title)}</h2>
      <a class="ch-src" href="${SITE}${f.sitePath}" target="_blank" rel="noopener noreferrer">原站页面 ↗</a>
    </div>
  </header>
  <article class="doc">
${bodies[f.slug]}
  </article>
${chNav}
</section>`;
    })
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Pi Coding Agent 学习蓝皮书（全本）· 课程预览 · AI落地社</title>
<link rel="icon" href="data:image/png;base64,${logoB64}">
<style>
:root {
  --brand: #F84818; --brand-deep: #D63B10;
  --tint: #FFF3EE; --tint2: #FFE7DD;
  --ink: #1C1917; --body: #57534E; --muted: #A8A29E;
  --line: #E7E5E4; --line-soft: #F5F5F4;
  --bg: #FAFAF9; --card: #FFFFFF;
  --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); color: var(--body); font: 15px/1.75 -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", sans-serif; -webkit-font-smoothing: antialiased; }
a { color: inherit; }

/* 顶栏 */
.topbar { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.88); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
.topbar-in { max-width: 1180px; margin: 0 auto; padding: 10px 20px; display: flex; align-items: center; gap: 12px; }
.topbar img { height: 30px; width: auto; display: block; }
.topbar .sep { width: 1px; height: 20px; background: var(--line); }
.topbar .tag { font-size: 12.5px; color: var(--muted); }
.topbar .tag b { color: var(--brand); font-weight: 700; }
.topbar .links { margin-left: auto; display: flex; gap: 8px; }
.topbar .links a { font-size: 13px; color: var(--body); text-decoration: none; padding: 5px 11px; border-radius: 9px; border: 1px solid var(--line); background: #fff; transition: .15s; }
.topbar .links a:hover { color: var(--brand); border-color: var(--tint2); }
.topbar .links a.primary { background: var(--brand); border-color: var(--brand); color: #fff; }
.topbar .links a.primary:hover { background: var(--brand-deep); }

/* 头图 */
.hero { background: linear-gradient(180deg, #FFF6F1 0%, var(--bg) 100%); border-bottom: 1px solid var(--line); }
.hero-in { max-width: 1180px; margin: 0 auto; padding: 42px 20px 34px; }
.hero .kicker { color: var(--brand); font-size: 13px; font-weight: 700; letter-spacing: .1em; }
.hero h1 { font-size: 29px; line-height: 1.35; color: var(--ink); margin: 10px 0 12px; font-weight: 800; }
.hero .desc { max-width: 760px; font-size: 14.5px; margin: 0 0 18px; }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { background: #fff; border: 1px solid var(--line); border-radius: 999px; padding: 4px 13px; font-size: 12.5px; }
.chip b { color: var(--brand); font-weight: 700; }

/* 布局 */
.layout { max-width: 1180px; margin: 0 auto; padding: 28px 20px 60px; display: grid; grid-template-columns: 252px minmax(0, 1fr); gap: 34px; align-items: start; }

/* 目录 */
.toc { position: sticky; top: 62px; max-height: calc(100vh - 82px); display: flex; flex-direction: column; background: var(--card); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; }
.toc-search { padding: 10px; border-bottom: 1px solid var(--line-soft); }
.toc-search input { width: 100%; border: 1px solid var(--line); border-radius: 9px; padding: 7px 11px; font-size: 13px; outline: none; background: var(--bg); color: var(--ink); }
.toc-search input:focus { border-color: var(--brand); background: #fff; }
.toc-nav { overflow-y: auto; padding: 6px 8px 12px; }
.toc-group-head { font-size: 11.5px; font-weight: 700; color: var(--muted); letter-spacing: .05em; padding: 12px 8px 5px; display: flex; justify-content: space-between; }
.toc-item { display: flex; gap: 8px; align-items: baseline; padding: 5px 8px; border-radius: 8px; font-size: 13px; color: var(--body); text-decoration: none; line-height: 1.45; }
.toc-item i { font-style: normal; font-size: 10.5px; color: var(--muted); font-family: var(--mono); min-width: 15px; }
.toc-item:hover { background: var(--tint); color: var(--brand-deep); }
.toc-item.active { background: var(--tint2); color: var(--brand-deep); font-weight: 600; }
.toc-item.active i { color: var(--brand); }

/* 章节卡片 */
.chapter { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 28px 34px 24px; margin-bottom: 22px; scroll-margin-top: 74px; }
.ch-head { display: flex; align-items: flex-start; gap: 13px; padding-bottom: 16px; margin-bottom: 18px; border-bottom: 1px solid var(--line-soft); }
.ch-no { font-family: var(--mono); font-size: 12px; font-weight: 700; color: #fff; background: var(--brand); border-radius: 8px; padding: 3px 8px; margin-top: 4px; }
.ch-title h2 { margin: 0; font-size: 19px; color: var(--ink); font-weight: 700; line-height: 1.4; }
.ch-src { font-size: 12px; color: var(--muted); text-decoration: none; margin-top: 3px; display: inline-block; }
.ch-src:hover { color: var(--brand); }

/* 章内上一篇 / 下一篇 */
.ch-nav { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 26px; padding-top: 20px; border-top: 1px solid var(--line-soft); }
.ch-nav-item { display: block; text-decoration: none; border: 1px solid var(--line); border-radius: 12px; padding: 10px 14px; background: var(--bg); transition: .15s; }
.ch-nav-item:hover { border-color: var(--brand); background: var(--tint); }
.ch-nav-item.next { text-align: right; }
.ch-nav-label { display: block; font-size: 11.5px; color: var(--muted); }
.ch-nav-title { display: block; font-size: 13.5px; font-weight: 600; color: var(--ink); margin-top: 2px; line-height: 1.45; }
.ch-nav-item:hover .ch-nav-title { color: var(--brand-deep); }

/* 正文排版（与站点 prose 风格一致的轻量复刻） */
.doc > p:first-child { color: var(--brand); font-size: 12.5px; font-weight: 700; letter-spacing: .12em; margin: 0 0 6px; }
.doc h1 { font-size: 24px; color: var(--ink); margin: 0 0 14px; line-height: 1.4; font-weight: 800; }
.doc h2 { font-size: 18.5px; color: var(--ink); margin: 34px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--line-soft); font-weight: 700; }
.doc h3 { font-size: 16px; color: var(--ink); margin: 26px 0 10px; font-weight: 700; }
.doc h4 { font-size: 14.5px; color: var(--ink); margin: 20px 0 8px; font-weight: 700; }
.doc p { margin: 12px 0; }
.doc a { color: var(--brand-deep); text-decoration: none; border-bottom: 1px solid var(--tint2); }
.doc a:hover { border-bottom-color: var(--brand); }
.doc a[href^="http"]::after { content: "↗"; font-size: .78em; color: var(--muted); margin-left: 2px; }
.doc strong { color: var(--ink); font-weight: 700; }
.doc ul, .doc ol { padding-left: 22px; margin: 12px 0; }
.doc li { margin: 5px 0; }
.doc li::marker { color: var(--brand); }
.doc blockquote { margin: 16px 0; padding: 12px 16px; background: var(--tint); border-left: 3px solid var(--brand); border-radius: 0 10px 10px 0; color: #7C2D12; }
.doc blockquote p { margin: 6px 0; }
.doc blockquote > :first-child { margin-top: 0; }
.doc blockquote > :last-child { margin-bottom: 0; }
.doc code { font-family: var(--mono); font-size: .86em; background: var(--tint); color: #9A3412; padding: 2px 6px; border-radius: 6px; }
.doc pre { background: var(--line-soft); border: 1px solid var(--line); border-radius: 12px; padding: 14px 16px; overflow-x: auto; margin: 16px 0; }
.doc pre code { background: none; color: #44403C; padding: 0; font-size: 12.8px; line-height: 1.65; }
.doc table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13.5px; }
.doc th { background: var(--line-soft); text-align: left; }
.doc th, .doc td { border: 1px solid var(--line); padding: 7px 11px; }
.doc img { max-width: 100%; height: auto; border: 1px solid var(--line); border-radius: 12px; margin: 16px 0; background: #fff; }
.doc hr { border: none; border-top: 1px solid var(--line); margin: 26px 0; }
.doc input[type="checkbox"] { accent-color: var(--brand); margin-right: 6px; }

/* 页脚 */
.foot { border-top: 1px solid var(--line); background: #fff; }
.foot-in { max-width: 1180px; margin: 0 auto; padding: 26px 20px 42px; font-size: 12.5px; color: var(--muted); line-height: 1.9; }
.foot a { color: var(--brand-deep); text-decoration: none; }
.foot a:hover { text-decoration: underline; }

/* 回顶 */
.totop { position: fixed; right: 22px; bottom: 22px; width: 40px; height: 40px; border-radius: 50%; background: var(--brand); color: #fff; border: none; font-size: 16px; cursor: pointer; box-shadow: 0 6px 18px rgba(248,72,24,.35); opacity: 0; pointer-events: none; transition: .25s; z-index: 60; }
.totop.show { opacity: 1; pointer-events: auto; }

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; gap: 20px; }
  .toc { position: static; max-height: none; }
  .chapter { padding: 20px 18px; }
  .hero h1 { font-size: 24px; }
  .topbar .links a:not(.primary) { display: none; }
  .ch-nav { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<header class="topbar">
  <div class="topbar-in">
    <img src="data:image/png;base64,${logoB64}" alt="AI落地社">
    <span class="sep"></span>
    <span class="tag">课程栏目 · <b>新合集预览</b></span>
    <nav class="links">
      <a href="${BASE}/courses" class="primary">在本地站点打开</a>
      <a href="${SITE}/guide/" target="_blank" rel="noopener noreferrer">原站 ↗</a>
      <a href="${REPO}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="hero-in">
    <div class="kicker">AI落地社 · 课程栏目 · 静态预览版</div>
    <h1>Pi Coding Agent 学习蓝皮书（全本）</h1>
    <p class="desc">从安装前检查到长任务部署的完整学习路径：安装与模型设置 → 第一次真实任务 → 上下文与压缩 → Skill / Extension / 子 Agent 扩展 → 稳定工作流，并以毕业项目和 11 个实操案例收尾。全本 37 篇，按原站「完整学习目录」排序；本页内容由本站课程页面实时渲染生成，与线上显示一致。</p>
    <div class="chips">
      <span class="chip"><b>37</b> 篇正文</span>
      <span class="chip"><b>9</b> 个板块</span>
      <span class="chip">全文约 <b>${wan}</b> 万字</span>
      <span class="chip">原站 <b>MIT</b> 许可转载</span>
      <span class="chip">生成于 ${esc(genTime)}</span>
    </div>
  </div>
</section>

<div class="layout">
  <aside class="toc">
    <div class="toc-search"><input id="tocFilter" type="search" placeholder="搜索章节标题…"></div>
    <nav class="toc-nav" id="tocNav">
${tocHtml}
    </nav>
  </aside>

  <main>
${chaptersHtml}
  </main>
</div>

<footer class="foot">
  <div class="foot-in">
    <p>本页为「Pi Coding Agent 学习蓝皮书」的本地静态预览版，内容转载自 <a href="${SITE}/guide/" target="_blank" rel="noopener noreferrer">pi.xiaomovps.com</a>；原项目 <a href="${REPO}" target="_blank" rel="noopener noreferrer">xiaomoBoy/pi-bluebook</a> 以 <b>MIT License</b> 发布，依据许可要求保留版权声明与来源链接。本站课程数据库存储内容与本页一致。</p>
    <p>AI落地社 · 想法，不至于想 · 生成于 ${esc(genTime)}</p>
  </div>
</footer>

<button class="totop" id="toTop" title="回到顶部" aria-label="回到顶部">↑</button>

<script>
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".toc-item"));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var sections = Array.prototype.slice.call(document.querySelectorAll(".chapter"));
  function setActive(el) {
    links.forEach(function (l) { l.classList.remove("active"); });
    var l = map[el.id];
    if (l) l.classList.add("active");
  }
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target); });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
    sections.forEach(function (s) { obs.observe(s); });
  }
  links.forEach(function (a) {
    a.addEventListener("click", function () {
      links.forEach(function (l) { l.classList.remove("active"); });
      a.classList.add("active");
    });
  });
  document.getElementById("tocFilter").addEventListener("input", function (e) {
    var q = e.target.value.trim().toLowerCase();
    document.querySelectorAll(".toc-group").forEach(function (g) {
      var vis = 0;
      g.querySelectorAll(".toc-item").forEach(function (a) {
        var hit = !q || a.textContent.toLowerCase().indexOf(q) !== -1;
        a.style.display = hit ? "" : "none";
        if (hit) vis++;
      });
      g.style.display = vis ? "" : "none";
    });
  });
  var btn = document.getElementById("toTop");
  window.addEventListener("scroll", function () {
    btn.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
</script>

</body>
</html>
`;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, html, "utf8");
  const kb = (fs.statSync(OUT).size / 1024).toFixed(0);
  console.log(`wrote ${OUT}`);
  console.log(`chapters: ${flat.length}, groups: ${GROUPS.length}, total chars: ${totalChars} (~${wan} 万), size: ${kb} KB`);
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
