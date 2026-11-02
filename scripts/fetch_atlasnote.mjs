#!/usr/bin/env node
/**
 * 抓取 atlasnote.ai 技能目录（列表页 + 每个详情页），输出 scripts/data/atlasnote-raw.json
 *
 * 列表页 https://atlasnote.ai/zh-CN/skills 是 SSR 渲染，93 张卡片一次性输出；
 * 详情页提供 GitHub 仓库、分类、适合人群、使用示例、Star 数与版本。
 *
 * 用法：node scripts/fetch_atlasnote.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "scripts/data");
const LIST_URL = "https://atlasnote.ai/zh-CN/skills";
const BASE = "https://atlasnote.ai";
const CONCURRENCY = 4;

const strip = (s) =>
  String(s || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_m, d) => String.fromCharCode(Number(d)))
    .replace(/\s+/g, " ")
    .trim();

async function get(url, retry = 3) {
  for (let i = 0; i < retry; i++) {
    try {
      const r = await fetch(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
          "accept-language": "zh-CN,zh;q=0.9",
        },
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.text();
    } catch (e) {
      if (i === retry - 1) throw e;
      await new Promise((res) => setTimeout(res, 800 * (i + 1)));
    }
  }
}

/** 解析列表页 → 卡片基本信息 */
function parseList(html) {
  const cards = [
    ...html.matchAll(
      /<a class="SkillsPage_card__[^"]*" href="\/zh-CN\/skills\/([^"]+)">([\s\S]*?)<\/a>/g
    ),
  ];
  return cards.map((m, idx) => {
    const slug = m[1];
    const body = m[2];
    const title = (body.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [])[1] || "";
    const desc = (
      body.match(/<p class="SkillsPage_cardDescription[^"]*"[^>]*>([\s\S]*?)<\/p>/) || []
    )[1] || "";
    const author = (body.match(/class="SkillsPage_author[^"]*" title="([^"]*)"/) || [])[1] || "";
    const installs = (
      body.match(/class="SkillsPage_installs[^"]*"[^>]*>([\s\S]*?)<\/span>/) || []
    )[1] || "";
    const img = (body.match(/src="(\/images\/skills\/[^"]+)"/) || [])[1] || "";
    const stars = Number(String(strip(installs)).replace(/[^\d.]/g, "")) || 0;
    const isWan = /万/.test(installs);
    return {
      slug,
      rank: idx + 1,
      title: strip(title),
      desc: strip(desc),
      author: strip(author),
      starsText: strip(installs),
      stars: isWan ? Math.round(stars * 10000) : stars,
      coverPath: img,
    };
  });
}

/** 取某个 class 片段内的所有 <span> 文本 */
function spansByClass(html, cls) {
  const i = html.indexOf(cls);
  if (i < 0) return [];
  // 取该容器到下一个 <aside / </div> 结束的片段
  const seg = html.slice(i, i + 3000);
  const end = seg.indexOf("</div>");
  const scope = end > 0 ? seg.slice(0, end) : seg;
  return [...scope.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)]
    .map((m) => strip(m[1]))
    .filter(Boolean);
}

/** 解析详情页 HTML */
function parseDetail(html) {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  const plain = (s) => strip(s);

  // GitHub 仓库（以「在 GitHub 查看」的链接为准，最可靠）
  const visit = html.match(
    /class="pressable SkillDetailPage_visit[^"]*"\s+href="([^"]+)"/
  );
  let repos = [];
  if (visit && /github\.com/.test(visit[1])) {
    repos = [visit[1].replace(/[.\s\\]+$/, "")];
  } else {
    repos = [
      ...new Set(
        (html.match(/https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/g) || []).map(
          (u) => u.replace(/[.\s]+$/, "")
        )
      ),
    ];
  }

  // 分类徽标 / 标签
  const cats = spansByClass(html, "SkillDetailPage_badges__");
  const tags = spansByClass(html, "SkillDetailPage_tags__");

  // 收录日期
  const date = (
    (cleaned.match(/收录于\s*(\d{4}-\d{2}-\d{2})/) || [])[1] || ""
  ).trim();

  // 长描述（heroFrame 里的正文段落）
  const detail = plain(
    (cleaned.match(/class="SkillDetailPage_body__[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1] || ""
  );

  // rail 区块：适合谁 / 这样用它（按 <h2>标题定位后续 <li>）
  const railList = (label) => {
    const i = cleaned.indexOf(label);
    if (i < 0) return [];
    const seg = cleaned.slice(i, i + 2000);
    const ulEnd = seg.indexOf("</ul>");
    if (ulEnd < 0) return [];
    return [...seg.slice(0, ulEnd).matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
      .map((m) => plain(m[1]))
      .filter(Boolean);
  };
  const bestFor = railList("适合谁");
  const usages = railList("这样用它");

  const starText = (cleaned.match(/Star 数[\s\S]{0,260}?>([\d,]+)</) || [])[1] || "";
  const stars = Number(starText.replace(/[^\d]/g, "")) || 0;
  const version = (cleaned.match(/版本[\s\S]{0,260}?>([\d.]+)</) || [])[1] || "";

  return { repos, date, bestFor, usages, stars, version, cats, tags, detail };
}

async function main() {
  console.log("抓取列表页…");
  const listHtml = await get(LIST_URL);
  const items = parseList(listHtml);
  console.log(`列表页解析到 ${items.length} 个技能`);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const out = [];
  let done = 0;

  const queue = [...items];
  async function worker() {
    while (queue.length) {
      const it = queue.shift();
      try {
        const html = await get(`${BASE}/zh-CN/skills/${it.slug}`);
        const d = parseDetail(html);
        out.push({ ...it, ...d });
      } catch (e) {
        console.error(`  ✗ ${it.slug}: ${e.message}`);
        out.push({ ...it, repos: [], bestFor: [], usages: [], cats: [], error: e.message });
      }
      done++;
      if (done % 10 === 0 || done === items.length) console.log(`  进度 ${done}/${items.length}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  out.sort((a, b) => a.rank - b.rank);
  const file = path.join(OUT_DIR, "atlasnote-raw.json");
  fs.writeFileSync(file, JSON.stringify(out, null, 1), "utf8");

  const noRepo = out.filter((x) => !x.repos.length).length;
  console.log(`\n完成：${out.length} 条，写入 ${path.relative(ROOT, file)}`);
  console.log(`  无 GitHub 仓库: ${noRepo} 条`);
  console.log(`  示例:`, JSON.stringify(out[0], null, 1).slice(0, 800));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
