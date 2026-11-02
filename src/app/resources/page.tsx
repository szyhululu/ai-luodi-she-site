import Link from "next/link";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

export default function ResourcesPage() {
  const db = getDB();
  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  const paid = !!user?.isPaid;
  const resources = db.prepare("SELECT * FROM resources ORDER BY id DESC").all() as any[];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">资料库</h1>
      <p className="mt-2 text-stone-600">
        Skills 汇总免费开放；工作流与资料为会员专享，购买 ¥68 后解锁下载。
      </p>
      <ul className="mt-6 divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
        {resources.map((r) => {
          const accessible = !r.isMemberOnly || paid;
          return (
            <li key={r.id} className="flex items-center justify-between p-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{r.filename}</p>
                  {r.isMemberOnly ? <span className="tag">会员专享</span> : <span className="tag tag-free">免费</span>}
                </div>
                <p className="text-xs text-stone-400">
                  {r.category} · {r.sizeKB} KB · 下载 {r.downloadCount} 次
                </p>
              </div>
              {accessible ? (
                <a className="btn-brand px-3 py-1.5 text-xs" href={`/api/download?type=resource&id=${r.id}`}>
                  下载
                </a>
              ) : (
                <Link href="/pricing" className="btn-ghost px-3 py-1.5 text-xs">
                  购买后下载
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
