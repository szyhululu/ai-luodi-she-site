import Link from "next/link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";
import { CopyButton } from "@/components/CopyButton";

export default function WorkflowDetail({ params }: { params: { slug: string } }) {
  const db = getDB();
  const wf = db.prepare("SELECT * FROM workflows WHERE slug = ?").get(params.slug) as any;
  if (!wf) notFound();

  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  const paid = !!user?.isPaid;
  const accessible = !wf.isMemberOnly || paid;
  const steps = JSON.parse(wf.steps || "[]");
  const tags = JSON.parse(wf.tags || "[]");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/workflows" className="text-sm text-stone-500 hover:text-brand">
        ← AI 工作流
      </Link>
      <div className="mt-4 flex items-center gap-3">
        <h1 className="text-3xl font-bold">{wf.title}</h1>
        {wf.isMemberOnly ? <span className="tag">会员专享</span> : <span className="tag tag-free">免费</span>}
      </div>
      <p className="mt-3 text-stone-600">{wf.scenario}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t: string) => (
          <span key={t} className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-600">{t}</span>
        ))}
      </div>

      {accessible ? (
        <ol className="mt-8 space-y-4">
          {steps.map((s: any, i: number) => (
            <li key={i} className="card">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  <span className="mr-2 text-brand">{i + 1}.</span>
                  {s.title}
                </h3>
                {s.prompt ? <CopyButton text={s.prompt} /> : null}
              </div>
              <p className="mt-1 text-sm text-stone-600">{s.desc}</p>
              {s.prompt ? (
                <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-stone-100 p-3 text-sm text-stone-800">
                  {s.prompt}
                </pre>
              ) : null}
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-8 card text-center">
          <span className="tag mb-3">会员专享</span>
          <h2 className="text-xl font-semibold">查看完整步骤与源文件</h2>
          <p className="mt-2 text-stone-600">
            本工作流为付费内容（含可复制提示词与源文件），购买 ¥68 后全部解锁。
          </p>
          <Link href="/pricing" className="btn-brand mt-4">立即解锁 ¥68</Link>
        </div>
      )}

      <div className="mt-8">
        {accessible ? (
          <a className="btn-brand" href={`/api/download?type=workflow&id=${wf.id}`}>
            下载工作流源文件
          </a>
        ) : (
          <Link href="/pricing" className="btn-ghost">
            购买 ¥68 后下载
          </Link>
        )}
      </div>
    </div>
  );
}
