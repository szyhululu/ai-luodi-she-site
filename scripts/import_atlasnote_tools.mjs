// 把 atlasnote 工具榜单导入站内 tools 表（幂等：先删 sourceSite='atlasnote' 再全量插入）
// 用法：node scripts/import_atlasnote_tools.mjs [--dry]
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import Database from "better-sqlite3";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(readFileSync(join(__dirname, "data", "atlasnote-tools-raw.json"), "utf8"));
const dry = process.argv.includes("--dry");

const db = new Database(join(__dirname, "..", "data", "app.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    cardValue TEXT,
    summary TEXT,
    category TEXT,
    categoryAll TEXT,
    tags TEXT,
    url TEXT,
    altUrl TEXT,
    altLabel TEXT,
    domain TEXT,
    bestFor TEXT,
    highlights TEXT,
    hero TEXT,
    addedAt TEXT,
    sourceSite TEXT,
    isFeatured INTEGER DEFAULT 0,
    orderVal INTEGER DEFAULT 0,
    createdAt TEXT DEFAULT (datetime('now'))
  );
`);

// atlasnote 自家产品没有外部官网链接，用主站兜底
const URL_FALLBACK = { atlasnote: "https://atlasnote.ai" };

// 来源把剪辑类工具挂在「智能体」下，站内主分类按工具性质校正
const CATEGORY_OVERRIDE = {
  baocut: "内容创作",
  chatcut: "内容创作",
};

const rows = raw.map((x, i) => {
  const cats = x.categories || [];
  const main = CATEGORY_OVERRIDE[x.slug] || cats[0] || "其他";
  const extraCats = cats.slice(1);
  const tagList = [...extraCats];
  if (x.status) tagList.push(x.status);
  const addedAt = (x.addedAt || "").replace(/^收录于\s*/, "").trim();
  const url = x.officialUrl || URL_FALLBACK[x.slug] || "";
  return {
    slug: x.slug,
    title: x.title,
    cardValue: x.oneLiner || x.desc || "",
    summary: x.body || "",
    category: main,
    categoryAll: JSON.stringify(cats),
    tags: JSON.stringify(tagList.length ? tagList : [main]),
    url,
    altUrl: x.altUrl || "",
    altLabel: x.altLabel || "",
    domain: x.domain && !x.domain.startsWith("/") ? x.domain : new URL(url).host.replace(/^www\./, ""),
    bestFor: JSON.stringify(x.bestFor || []),
    highlights: JSON.stringify(x.highlights || []),
    hero: x.hero || "",
    addedAt,
    sourceSite: "atlasnote",
    isFeatured: x.status ? 1 : 0,
    orderVal: i + 1,
  };
});

const noUrl = rows.filter((r) => !r.url);
if (noUrl.length) {
  console.error("缺少外链，已中止：", noUrl.map((r) => r.slug).join(", "));
  process.exit(1);
}

console.log("待导入:", rows.length);
console.log("分类分布:", JSON.stringify(rows.reduce((a, r) => ((a[r.category] = (a[r.category] || 0) + 1), a), {})));
console.log("带状态标签:", rows.filter((r) => r.isFeatured).length);
if (dry) {
  console.log(JSON.stringify(rows.slice(0, 2), null, 1));
  process.exit(0);
}

const tx = db.transaction((list) => {
  db.prepare("DELETE FROM tools WHERE sourceSite = 'atlasnote'").run();
  const ins = db.prepare(`
    INSERT INTO tools (slug,title,cardValue,summary,category,categoryAll,tags,url,altUrl,altLabel,domain,bestFor,highlights,hero,addedAt,sourceSite,isFeatured,orderVal)
    VALUES (@slug,@title,@cardValue,@summary,@category,@categoryAll,@tags,@url,@altUrl,@altLabel,@domain,@bestFor,@highlights,@hero,@addedAt,@sourceSite,@isFeatured,@orderVal)
    ON CONFLICT(slug) DO UPDATE SET
      title=excluded.title, cardValue=excluded.cardValue, summary=excluded.summary,
      category=excluded.category, categoryAll=excluded.categoryAll, tags=excluded.tags,
      url=excluded.url, altUrl=excluded.altUrl, altLabel=excluded.altLabel, domain=excluded.domain,
      bestFor=excluded.bestFor, highlights=excluded.highlights, hero=excluded.hero,
      addedAt=excluded.addedAt, sourceSite=excluded.sourceSite, isFeatured=excluded.isFeatured,
      orderVal=excluded.orderVal
  `);
  for (const r of list) ins.run(r);
});
tx(rows);

const total = db.prepare("SELECT COUNT(*) c FROM tools").get().c;
console.log("导入完成，tools 总数:", total);
