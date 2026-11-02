import Link from "next/link";
import { getDB } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function Home() {
  const db = getDB();
  const stats = db
    .prepare(
      `SELECT
        (SELECT COUNT(*) FROM skills) skills,
        (SELECT COUNT(*) FROM tools) tools,
        (SELECT COUNT(*) FROM resources) resources,
        (SELECT COUNT(*) FROM users WHERE isPaid=1) paid`
    )
    .get() as any;

  const features = [
    {
      href: "/skills",
      title: "Skills 汇总",
      desc: "可直接安装的 Agent 技能：海报生成、标题打分、提示词增强……拿来就能用。",
    },
    {
      href: "/tools",
      title: "工具",
      desc: "AI 工具清单：对话、编程、设计、剪辑、自动化，点开直接去官网。",
    },
    {
      href: "/resources",
      title: "资料包",
      desc: "提示词库、基础资料、源文件，¥68 解锁后终身下载。",
    },
  ];

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
        <span className="tag mb-4">想法，不至于想</span>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          把「想做」变成「直接拿走就用」
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
          全栈 AI 学习资料站：Skills 汇总（免费开放）+ AI 工作流 + 资料包（¥68 解锁）。买了就能下载，终身访问。
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-stone-500">
          <span><b className="text-stone-900">{stats.skills}</b> 个 Skills</span>
          <span><b className="text-stone-900">{stats.tools}</b> 个工具</span>
          <span><b className="text-stone-900">{stats.resources}</b> 份资料</span>
          <span><b className="text-stone-900">{stats.paid}</b> 人已解锁</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="card transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{f.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand">查看 →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
