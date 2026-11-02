"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";
import FilterTabs from "@/components/FilterTabs";

// 主分类标签（对应 atlasnote 的场景页签）；其余长尾场景合并进「更多场景」
const MAIN_CATS = ["内容创作", "编程", "企业运营", "智能体", "设计"];
const STUDENT_CAT = "学生";
const MORE_CAT = "更多场景";
const LONG_TAIL = ["项目管理", "咨询", "营销", "数据分析", "销售", "个人使用", "其他", "教育工作者"];

const STATUS_PRIORITY = ["自家产品", "在用", "值得关注"];

function parseArr(t: string): string[] {
  try {
    const a = JSON.parse(t || "[]");
    return Array.isArray(a) ? a : [];
  } catch {
    return [];
  }
}

function statusOf(t: any): string | null {
  const tags = parseArr(t.tags);
  for (const s of STATUS_PRIORITY) if (tags.includes(s)) return s;
  return null;
}

function matchesCat(t: any, cat: string): boolean {
  if (cat === "全部") return true;
  const cats = parseArr(t.categoryAll);
  if (cat === MORE_CAT) return cats.some((c) => LONG_TAIL.includes(c));
  return cats.includes(cat);
}

function Card({ t }: { t: any }) {
  const status = statusOf(t);
  return (
    <a
      href={t.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative border-b border-stone-100 bg-stone-50">
        {t.hero ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={t.hero}
            alt={t.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="aspect-[16/10] w-full object-cover object-top transition group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-stone-100 text-2xl font-bold text-stone-300">
            {t.title.slice(0, 1)}
          </div>
        )}
        <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[11px] text-stone-500 opacity-0 shadow-sm transition group-hover:opacity-100">
          访问官网 ↗
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold leading-snug text-stone-900 group-hover:text-brand">
          {t.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-stone-500">
          {t.cardValue || "—"}
        </p>
        {status && (
          <div className="mt-3">
            {status === "自家产品" ? (
              <span className="rounded bg-stone-900 px-2 py-0.5 text-xs font-medium text-white">
                {status}
              </span>
            ) : (
              <span className="rounded bg-brand-light px-2 py-0.5 text-xs font-medium text-brand-dark">
                {status}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}

export default function ToolBrowser({ tools }: { tools: any[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("全部");
  const [sort, setSort] = useState<"default" | "az" | "newest">("default");

  // 页签及数量（一件工具可属于多个场景，与来源站口径一致）
  const tabs = useMemo(() => {
    const countFor = (c: string) => tools.filter((t) => matchesCat(t, c)).length;
    return [
      { name: "全部", count: tools.length },
      ...MAIN_CATS.map((c) => ({ name: c, count: countFor(c) })),
      { name: STUDENT_CAT, count: countFor(STUDENT_CAT) },
      { name: MORE_CAT, count: countFor(MORE_CAT) },
    ].filter((t) => t.name === "全部" || t.count > 0);
  }, [tools]);

  const query = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    const list = tools.filter((t) => {
      if (!matchesCat(t, cat)) return false;
      if (!query) return true;
      const hay = [
        t.title,
        t.cardValue || "",
        t.domain || "",
        ...parseArr(t.categoryAll),
        ...parseArr(t.tags),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
    if (sort === "az") {
      list.sort((a: any, b: any) => String(a.title).localeCompare(String(b.title), "zh-Hans-CN"));
    } else if (sort === "newest") {
      list.sort((a: any, b: any) => String(b.addedAt || "").localeCompare(String(a.addedAt || "")));
    } else {
      list.sort((a: any, b: any) => (a.orderVal ?? 0) - (b.orderVal ?? 0));
    }
    return list;
  }, [tools, cat, query, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      {/* 头部 */}
      <PageHeader
        title="发现真正好用的 AI 工具。"
        hl="AI 工具"
        subtitle="把最实用的 AI 工具整理、分类，集中在一个页面中。"
      />

      {/* 场景页签 */}
      <FilterTabs tabs={tabs} value={cat} onChange={setCat} />

      {/* 工具栏：计数 + 搜索 + 排序 */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-500">
          共 {filtered.length} 个工具 · {cat}
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
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="h-9 rounded-lg border border-stone-200 bg-white px-2.5 text-sm text-stone-600 outline-none transition focus:border-brand"
          >
            <option value="default">默认排序</option>
            <option value="az">名称（A-Z）</option>
            <option value="newest">最新收录</option>
          </select>
        </div>
      </div>

      {/* 卡片网格 */}
      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-stone-400">没有匹配「{q}」的工具</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((t) => (
            <Card key={t.slug} t={t} />
          ))}
        </div>
      )}

      <p className="mt-16 text-center text-xs text-stone-400">
        工具信息整理自公开资料，版权归各产品所有；点击卡片跳转至官方站点。
      </p>
    </div>
  );
}
