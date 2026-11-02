import Link from "next/link";
import { notFound } from "next/navigation";
import { getDB } from "@/lib/db";
import InstallBlock from "@/components/InstallBlock";

function parseList(s: string): string[] {
  try {
    const a = JSON.parse(s || "[]");
    return Array.isArray(a) ? a : [];
  } catch {
    return [];
  }
}

function formatHeat(v: number): string {
  if (!v) return "";
  if (v >= 10000) return (v / 10000).toFixed(1).replace(/\.0$/, "") + "万";
  return String(v);
}

export default function SkillDetail({ params }: { params: { slug: string } }) {
  const db = getDB();
  const skill = db.prepare("SELECT * FROM skills WHERE slug = ?").get(params.slug) as any;
  if (!skill) notFound();

  const tags = parseList(skill.tags);
  const bestFor = parseList(skill.bestFor);
  const highlights = parseList(skill.highlights);
  const heat = formatHeat(skill.metricValue || 0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/skills" className="text-sm text-stone-500 hover:text-brand">
        ← 返回 Skills 合集
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold">{skill.title}</h1>
        {heat && (
          <span className="text-sm text-stone-400">
            {skill.metricLabel || "热度"} {heat}
          </span>
        )}
      </div>

      {skill.category && (
        <p className="mt-2 text-sm text-stone-500">分类：{skill.category}</p>
      )}

      {skill.summary && (
        <p className="mt-4 text-stone-700">{skill.summary}</p>
      )}

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t: string) => (
            <span key={t} className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-600">
              {t}
            </span>
          ))}
        </div>
      )}

      {skill.cardValue && (
        <div className="card mt-6">
          <h2 className="font-semibold">一句话价值</h2>
          <p className="mt-2 text-stone-700">{skill.cardValue}</p>
        </div>
      )}

      {bestFor.length > 0 && (
        <div className="card mt-6">
          <h2 className="font-semibold">适合场景</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
            {bestFor.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}

      {highlights.length > 0 && (
        <div className="card mt-6">
          <h2 className="font-semibold">亮点</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-700">
            {highlights.map((h: string, i: number) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      {skill.installGuide && (
        <div className="card mt-6">
          <h2 className="font-semibold">安装方法</h2>
          <p className="mt-1 text-sm text-stone-500">
            在终端执行下面的命令即可安装该 Skill：
          </p>
          <div className="mt-3">
            <InstallBlock command={skill.installGuide} />
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {skill.repoUrl ? (
          <a
            href={skill.repoUrl}
            className="btn-brand"
            target="_blank"
            rel="noreferrer"
          >
            查看来源仓库 →
          </a>
        ) : null}
      </div>
    </div>
  );
}
