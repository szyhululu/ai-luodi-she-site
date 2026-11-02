// 抓取 aihot.news 到 news 表（作为 /hot 页的兜底缓存 / 预热）。
// 抓取与解析逻辑已抽到 src/lib/aihot.mjs（与 src/app/hot/page.tsx 共用）。
// 用法：node scripts/fetch_aihot.mjs [--dry]
import Database from "better-sqlite3";
import path from "path";
import { fetchAihotNews } from "../src/lib/aihot.mjs";

const DB_PATH = path.join(process.cwd(), "data", "app.db");
const DRY = process.argv.includes("--dry");

async function main() {
  const feedItems = await fetchAihotNews();
  const cards = feedItems.filter((x) => x.reason).length;
  console.log(`feed ${feedItems.length} 条（其中 ${cards} 条含推荐理由）`);
  if (DRY) {
    feedItems.slice(0, 5).forEach((x, i) =>
      console.log(
        `  ${i + 1}. ${x.publishedAt} ${x.timeText} [${x.category}] ${x.featured ? "★" : " "} ${String(x.score ?? "-").padStart(3)} ${x.title.slice(0, 34)} — ${x.source}`
      )
    );
    console.log("（dry 模式，未写入数据库）");
    return;
  }

  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    summary TEXT,
    source TEXT,
    category TEXT,
    url TEXT,
    originalUrl TEXT,
    publishedAt TEXT,
    sourceSite TEXT DEFAULT 'aihot',
    fetchedAt TEXT DEFAULT (datetime('now')),
    orderVal INTEGER DEFAULT 0
  )`);
  // 旧库补列
  const cols = () => db.prepare("PRAGMA table_info(news)").all().map((c) => c.name);
  for (const [col, ddl] of [
    ["publishedTs", "TEXT"],
    ["timeText", "TEXT"],
    ["featured", "INTEGER DEFAULT 0"],
    ["score", "INTEGER"],
    ["reason", "TEXT"],
    ["avatar", "TEXT"],
    ["image", "TEXT"],
  ]) {
    if (!cols().includes(col)) db.exec(`ALTER TABLE news ADD COLUMN ${col} ${ddl}`);
  }

  const ins = db.prepare(`INSERT OR REPLACE INTO news
    (slug,title,summary,source,category,url,originalUrl,publishedAt,publishedTs,timeText,featured,score,reason,avatar,image,sourceSite,orderVal)
    VALUES (@id,@title,@summary,@source,@category,@url,@originalUrl,@publishedAt,@publishedTs,@timeText,@featured,@score,@reason,@avatar,@image,'aihot',@orderVal)`);
  const tx = db.transaction((rows) => {
    rows.forEach((r, idx) => ins.run({ ...r, orderVal: idx }));
  });
  tx(feedItems);
  const count = db.prepare("SELECT COUNT(*) c FROM news").get().c;
  const withReason = db.prepare("SELECT COUNT(*) c FROM news WHERE reason IS NOT NULL AND reason != ''").get().c;
  console.log(`已写入/更新 news 表，当前共 ${count} 条（含推荐理由 ${withReason} 条）`);
}

main().catch((e) => {
  console.error("失败:", e.message);
  process.exit(1);
});
