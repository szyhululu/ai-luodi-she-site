#!/usr/bin/env node
/**
 * 把 atlasnote.ai 抓取的技能（scripts/data/atlasnote-raw.json）导入 skills 表。
 *
 * 特点：
 *  - 去重：按 GitHub 仓库 owner/repo 归一化比对；站内已收录该仓库任何技能就跳过
 *  - 分类：映射到站内既有的 8 大需求分类，保持技能页分组风格一致
 *  - 幂等：重跑先删掉 sourceSite='atlasnote' 的旧行，再全量重插
 *
 * 用法：
 *   node scripts/import_atlasnote.mjs --dry   仅打印映射结果，不写库
 *   node scripts/import_atlasnote.mjs         写入数据库
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RAW = path.join(ROOT, "scripts/data/atlasnote-raw.json");
const SCAN = path.join(ROOT, "scripts/data/atlasnote-repo-scan.json");
const DRY = process.argv.includes("--dry");

const C = {
  content: "内容创作与运营",
  design: "图像与视觉设计",
  av: "音视频创作",
  agent: "AI 与 Agent 工作流",
  dev: "编程与开发",
  data: "数据分析与科研",
  office: "效率与办公",
  sec: "测试与安全",
};

/** 人工校正：规则判不准的个别条目按 slug 指定分类 */
const CATEGORY_OVERRIDE = {
  "live-panel-skill": C.av, // 让架构图动起来：本质是动效/视频
  bloom: C.data, // 一对一辅导 → 教学与研究
  "html-anything": C.design, // 本地 HTML 编辑器，偏视觉产出
  "obsidian-skills": C.content, // Obsidian 文件格式 → 写作/知识
  "claude-seo": C.content, // SEO 审计属营销增长，不是安全
  "shuohao-skills": C.av, // 小说 → AI 短剧，成片是视频
  "web-access": C.agent, // 给 agent 补联网能力 → Agent 工作流
  "skill-doctor": C.agent, // 诊断并改进 Agent Skills → Agent 工作流
};

/** 主分类（cats[0]）+ 标签 → 站内分类 */
function mapCategory(x) {
  if (CATEGORY_OVERRIDE[x.slug]) return CATEGORY_OVERRIDE[x.slug];
  const cats = x.cats || [];
  const tags = x.tags || [];
  const title = x.title || "";
  const all = cats.join(" ");
  const has = (arr, kw) => arr.some((t) => t.includes(kw));
  const primary = cats[0] || "";

  // 安全审计类优先（「审计」单独出现多指 SEO/数据审计，需与安全类词共现）
  if (/安全|渗透|漏洞|security/i.test(all + title)) return C.sec;
  if (/审计/.test(all) && /代码|依赖|密钥|隐私/.test(all + title)) return C.sec;

  if (primary === "文档与幻灯片") return C.office;

  if (primary === "写作与研究") {
    if (/论文|科研|学术|文献|综述|研究/.test(title)) return C.data;
    return C.content;
  }

  if (primary === "内容与知识") {
    if (has(tags, "教学与研究")) return C.data;
    if (has(tags, "数据分析") && !has(tags, "写作")) return C.data;
    return C.content;
  }

  if (primary === "营销增长") return C.content;

  if (primary === "产品与项目") return C.office;

  if (primary === "设计与视频") {
    const video = has(tags, "视频");
    const visual = has(tags, "图像与设计");
    if (video && !visual) return C.av;
    return C.design;
  }

  if (primary === "工程开发") {
    const video = has(tags, "视频");
    const visual = has(tags, "图像与设计");
    if (video && !visual) return C.av;
    if (visual && /设计|插画|海报|动效|动画|视觉|风格|字体/.test(title)) return C.design;
    return C.dev;
  }

  return C.office;
}

/** 归一化 GitHub 仓库为 owner/repo */
function normRepo(url) {
  return String(url || "")
    .replace(/^https?:\/\/(www\.)?github\.com\//i, "")
    .split("/")
    .slice(0, 2)
    .join("/")
    .toLowerCase()
    .replace(/^shadcn-ui\//, "shadcn/");
}

/** atlasnote 的仓库链接可能是 tree 深路径，取出子路径 */
function repoSubPath(url) {
  const m = String(url).match(/github\.com\/[^/]+\/[^/]+\/tree\/[^/]+\/(.+)$/);
  return m ? m[1].replace(/\/+$/, "") : "";
}

/** 仓库本身不是 skill 集合时的真实安装方式（扫描确认无 SKILL.md） */
const INSTALL_OVERRIDE = {
  "3b1b/manim": "pip install manimgl",
  "zarazhangrui/beautiful-html-templates":
    "git clone https://github.com/zarazhangrui/beautiful-html-templates",
};

/**
 * 生成安装命令。与站内既有写法保持一致：
 *   npx skills add https://github.com/owner/repo [--skill <name>]
 *  - atlasnote 指向仓库子目录 → 用 --skill 指到那一条
 *  - 仓库是合集（多条 SKILL.md）→ 装整仓
 *  - 扫描确认仓库里没有 SKILL.md（是工具/模板本身）→ 退回克隆
 */
function buildInstall(x, scan) {
  const repo = normRepo(x.repos[0]);
  const repoUrl = `https://github.com/${repo}`;
  if (INSTALL_OVERRIDE[repo]) return INSTALL_OVERRIDE[repo];

  const sub = repoSubPath(x.repos[0]);
  if (sub) {
    const name = sub.split("/").filter(Boolean).pop();
    return `npx skills add ${repoUrl} --skill ${name}`;
  }

  const info = scan[repo];
  if (info && info.ok && info.skillCount === 0) {
    return `git clone ${repoUrl}`;
  }
  return `npx skills add ${repoUrl}`;
}

/** 标题归一化（去标点空格，用于兜底去重） */
const normTitle = (t) =>
  String(t || "")
    .toLowerCase()
    .replace(/[\s\-_·：:，,。.！!（）()【】\[\]「」"'’/+]/g, "");

function buildRow(x, scan) {
  const repo = normRepo(x.repos[0]);
  const install = buildInstall(x, scan);
  const tags = [...(x.tags || [])];
  if (!tags.includes("开源")) tags.push("开源");

  return {
    slug: `atlas-${x.slug}`,
    title: x.title,
    // 与站内既有约定对齐：summary 走详情页长介绍，cardValue 走卡片短句
    summary: x.detail || x.desc,
    category: mapCategory(x),
    tags: JSON.stringify(tags.slice(0, 4)),
    coverUrl: "",
    isMemberOnly: 0,
    installGuide: install,
    repoUrl: x.repos[0],
    previewImages: "[]",
    downloadFile: "",
    orderVal: x.rank,
    metricLabel: "GitHub Stars",
    metricValue: x.stars,
    cardValue: x.desc,
    bestFor: JSON.stringify(x.bestFor || []),
    highlights: JSON.stringify(x.usages || []),
    cardFit: "",
    sourceRepo: `${x.author} · ${repo}`,
    originalName: x.slug,
    sourceSite: "atlasnote",
  };
}

function main() {
  const raw = JSON.parse(fs.readFileSync(RAW, "utf8"));
  const scan = fs.existsSync(SCAN) ? JSON.parse(fs.readFileSync(SCAN, "utf8")) : {};
  const db = new Database(path.join(ROOT, "data/app.db"));
  const existing = db.prepare("SELECT slug,title,repoUrl,sourceSite FROM skills").all();

  const repoSeen = new Map();
  const titleSeen = new Set();
  for (const e of existing) {
    if (e.sourceSite === "atlasnote") continue; // 自身旧数据不参与去重
    const r = normRepo(e.repoUrl);
    if (r) repoSeen.set(r, e);
    titleSeen.add(normTitle(e.title));
  }

  const rows = [];
  const skipped = [];
  for (const x of raw) {
    const repo = normRepo(x.repos[0]);
    if (repoSeen.has(repo)) {
      skipped.push({ slug: x.slug, title: x.title, reason: `仓库已收录：${repo}` });
      continue;
    }
    if (titleSeen.has(normTitle(x.title))) {
      skipped.push({ slug: x.slug, title: x.title, reason: "标题重复" });
      continue;
    }
    rows.push(buildRow(x, scan));
  }

  console.log(`抓取总数 ${raw.length}｜去重跳过 ${skipped.length}｜入库 ${rows.length}`);
  console.log("\n跳过明细：");
  skipped.forEach((s) => console.log(`  - ${s.title.slice(0, 34)} ← ${s.reason}`));

  const dist = {};
  rows.forEach((r) => (dist[r.category] = (dist[r.category] || 0) + 1));
  console.log("\n分类分布：");
  Object.entries(dist)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => console.log(`  ${k}：${v}`));

  if (DRY) {
    console.log("\n【预演】按分类列出标题：");
    Object.keys(dist).forEach((cat) => {
      console.log(`\n## ${cat}`);
      rows
        .filter((r) => r.category === cat)
        .forEach((r) => console.log(`   ${String(r.orderVal).padStart(2)} ${r.title}`));
    });
    db.close();
    return;
  }

  const ins = db.prepare(`INSERT INTO skills
    (slug,title,summary,category,tags,coverUrl,isMemberOnly,installGuide,repoUrl,previewImages,
     downloadFile,orderVal,metricLabel,metricValue,cardValue,bestFor,highlights,cardFit,sourceRepo,originalName,sourceSite)
    VALUES (@slug,@title,@summary,@category,@tags,@coverUrl,@isMemberOnly,@installGuide,@repoUrl,@previewImages,
     @downloadFile,@orderVal,@metricLabel,@metricValue,@cardValue,@bestFor,@highlights,@cardFit,@sourceRepo,@originalName,@sourceSite)`);

  const tx = db.transaction(() => {
    const del = db.prepare("DELETE FROM skills WHERE sourceSite='atlasnote'").run();
    for (const r of rows) ins.run(r);
    return del.changes;
  });
  const removed = tx();
  console.log(`\n已删除旧 atlasnote 记录 ${removed} 条，写入 ${rows.length} 条`);
  console.log("skills 总数：", db.prepare("SELECT COUNT(*) c FROM skills").get().c);
  db.close();
}

main();
