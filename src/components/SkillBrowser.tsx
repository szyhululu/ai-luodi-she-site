"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FilterTabs from "@/components/FilterTabs";

// 需求导向大类顺序
const CATEGORY_ORDER = [
  "内容创作与运营",
  "图像与视觉设计",
  "音视频创作",
  "AI 与 Agent 工作流",
  "编程与开发",
  "数据分析与科研",
  "效率与办公",
  "测试与安全",
];

function formatHeat(v: number): string {
  if (!v) return "";
  if (v >= 10000) return (v / 10000).toFixed(1).replace(/\.0$/, "") + "万";
  return String(v);
}

function parseTags(t: string): string[] {
  try {
    const a = JSON.parse(t || "[]");
    return Array.isArray(a) ? a : [];
  } catch {
    return [];
  }
}

function Card({ s, i }: { s: any; i: number }) {
  const tags = parseTags(s.tags).filter(Boolean).slice(0, 3);
  const heat = formatHeat(s.metricValue || 0);
  return (
    <Link
      href={`/skills/${s.slug}`}
      className="card group flex flex-col transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
    >
      <h3 className="font-semibold leading-snug text-stone-900 group-hover:text-brand">
        {s.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm text-stone-600">
        {s.cardValue || s.summary || "—"}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {tags.map((t: string) => (
          <span
            key={t}
            className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-600"
          >
            {t}
          </span>
        ))}
      </div>
      {heat && (
        <p className="mt-3 text-xs text-stone-400">
          {s.metricLabel || "热度"} {heat}
        </p>
      )}
    </Link>
  );
}

export default function SkillBrowser({ skills }: { skills: any[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("全部");

  const cats = useMemo(() => {
    const set = new Set(skills.map((s) => s.category).filter(Boolean));
    const ordered = CATEGORY_ORDER.filter((c) => set.has(c));
    // 兜底：数据里若有未预定义分类，追加在末尾
    set.forEach((c: string) => {
      if (!ordered.includes(c)) ordered.push(c);
    });
    return ordered;
  }, [skills]);

  // 页签（带数量）
  const tabs = useMemo(
    () => [
      { name: "全部", count: skills.length },
      ...cats.map((c) => ({
        name: c,
        count: skills.filter((s) => s.category === c).length,
      })),
    ],
    [skills, cats]
  );

  const query = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      if (cat !== "全部" && s.category !== cat) return false;
      if (!query) return true;
      const hay = [
        s.title,
        s.category,
        s.cardValue || "",
        s.summary || "",
        ...parseTags(s.tags),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [skills, cat, query]);

  const groups = useMemo(() => {
    const g: Record<string, any[]> = {};
    filtered.forEach((s) => {
      const k = s.category || "其他";
      (g[k] = g[k] || []).push(s);
    });
    // 组内按 orderVal 升序（= 热度排名，自有 skill 0 在前）
    Object.keys(g).forEach((k) =>
      g[k].sort((a: any, b: any) => (a.orderVal ?? 0) - (b.orderVal ?? 0))
    );
    return g;
  }, [filtered]);

  const groupList = cats.filter((c) => groups[c]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* 头部 */}
      <PageHeader
        title="发现真正好用的 AI 技能。"
        hl="AI 技能"
        subtitle="把好用的 Agent 技能整理、分类，集中在一个页面中。"
      />

      {/* 分类页签 */}
      <FilterTabs tabs={tabs} value={cat} onChange={setCat} />

      {/* 工具栏：计数 + 搜索 */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-500">
          {query ? `找到 ${filtered.length} 个技能` : `共 ${filtered.length} 个技能 · ${cat}`}
        </p>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="搜索"
              className="h-9 w-44 rounded-lg border border-stone-200 bg-white px-3 pl-8 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 sm:w-52"
            />
            <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-stone-400">
              🔍
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-12">
        {groupList.length === 0 && (
          <p className="mt-10 text-center text-stone-400">
            没有匹配「{q}」的技能
          </p>
        )}
        {groupList.map((c) => {
          const cards = groups[c];
          return (
            <section key={c}>
              <div className="mb-4 flex items-center gap-2">
                <h2 className="text-xl font-semibold">{c}</h2>
                <span className="text-xs text-stone-400">{cards.length} 个</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((s, i) => (
                  <Card key={s.slug} s={s} i={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
