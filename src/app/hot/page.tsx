import { getDB } from "@/lib/db";
import HotBrowser from "@/components/HotBrowser";

export const metadata = {
  title: "AI动态 · AI落地社",
  description: "每天挑出最值得关注的 AI / 科技热点，帮你少刷信息、多看门道。",
};

export const dynamic = "force-dynamic";

// 实时抓取 aihot.news 并带短期内存缓存 + 数据库兜底：
// - 每次访问由服务端直接拉取最新内容，永远新鲜，不再依赖重新部署；
// - 10 分钟内复用同一次抓取结果，避免反复打源站；
// - 若源站不可达，回退到本地 news 表（由 npm run sync:aihot 预热）。
let _cache: { ts: number; items: any[] } | null = null;
const TTL = 10 * 60 * 1000;

async function getHotNews(): Promise<any[]> {
  const now = Date.now();
  if (_cache && now - _cache.ts < TTL) return _cache.items;
  try {
    const { fetchAihotNews } = await import("@/lib/aihot.mjs");
    const items = await fetchAihotNews();
    if (items && items.length) {
      _cache = { ts: now, items };
      return items;
    }
  } catch (e) {
    console.error("[hot] 实时抓取 aihot.news 失败，回退数据库：", (e as Error)?.message);
  }
  const db = getDB();
  const rows = db
    .prepare("SELECT * FROM news ORDER BY publishedTs DESC, orderVal ASC, id DESC")
    .all() as any[];
  _cache = { ts: now, items: rows };
  return rows;
}

export default async function HotPage() {
  const news = await getHotNews();
  return <HotBrowser news={news} />;
}
