import Link from "next/link";
import { getDB } from "@/lib/db";

export default function WorkflowsPage() {
  const db = getDB();
  const wfs = db
    .prepare("SELECT * FROM workflows ORDER BY orderVal ASC, id ASC")
    .all() as any[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">AI 工作流</h1>
      <p className="mt-2 text-stone-600">把重复工作自动化，附可复制提示词与源文件。</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {wfs.map((w) => {
          const tags = JSON.parse(w.tags || "[]");
          const steps = JSON.parse(w.steps || "[]");
          return (
            <Link key={w.id} href={`/workflows/${w.slug}`} className="card transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{w.title}</h3>
                {w.isMemberOnly ? <span className="tag">会员专享</span> : <span className="tag tag-free">免费</span>}
              </div>
              <p className="mt-2 text-sm text-stone-600 line-clamp-2">{w.scenario}</p>
              <p className="mt-3 text-xs text-stone-400">{steps.length} 个步骤</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t: string) => (
                  <span key={t} className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-600">{t}</span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
