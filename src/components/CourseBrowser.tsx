"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { buildByParent, sortKids } from "@/lib/course-tree";
import PageHeader from "@/components/PageHeader";
import FilterTabs from "@/components/FilterTabs";

const GRADIENTS = [
  "linear-gradient(135deg,#F84818,#FF8A5B)",
  "linear-gradient(135deg,#7C3AED,#C4B5FD)",
  "linear-gradient(135deg,#0EA5E9,#7DD3FC)",
  "linear-gradient(135deg,#10B981,#6EE7B7)",
  "linear-gradient(135deg,#F59E0B,#FCD34D)",
  "linear-gradient(135deg,#EF4444,#FCA5A5)",
];

function Cover({ c, className }: { c: any; className: string }) {
  if (c.coverUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={c.coverUrl}
        alt=""
        loading="lazy"
        className={`w-full object-cover ${className}`}
      />
    );
  }
  const idx = (c.orderVal || 0) + c.title.length;
  return (
    <div
      className={className}
      style={{ background: GRADIENTS[idx % GRADIENTS.length] }}
    />
  );
}

function Card({ c, i }: { c: any; i: number }) {
  const badge = c.isFile ? "文件" : c.has_child && !c.content ? "合集" : "文档";
  const sub = c.isFile
    ? "文件 · 在飞书打开"
    : c.has_child && !c.content
    ? "查看合集"
    : "阅读内容";
  return (
    <Link
      href={`/courses/${c.slug}`}
      className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative">
        <Cover c={c} className="h-32" />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-0.5 text-xs font-medium text-stone-700">
          {c.category || "AI知识库"}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2 py-0.5 text-xs text-white">
          {badge}
        </span>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold leading-snug">{c.title}</h3>
        <p className="mt-2 text-xs text-stone-400">{sub}</p>
      </div>
    </Link>
  );
}

// 书籍卡：纯容器节点（无自身正文、由子章节构成）折叠成一张「书」，
// 点击直接跳到第一章，章节间用上一页/下一页翻读
function BookCard({
  c,
  firstSlug,
  count,
  i,
}: {
  c: any;
  firstSlug?: string;
  count: number;
  i: number;
}) {
  return (
    <Link
      href={`/courses/${firstSlug ?? c.slug}`}
      className="card flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative">
        <Cover c={c} className="h-36" />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-0.5 text-xs font-medium text-stone-700">
          {c.category || "蓝皮书"}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2 py-0.5 text-xs text-white">
          {count} 篇
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/45 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          从第 1 章开始 →
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold leading-snug">{c.title}</h3>
        <p className="mt-2 text-xs text-stone-400">点击阅读第一章</p>
      </div>
    </Link>
  );
}

// 排序键与树构建规则见 @/lib/course-tree（与课程页左侧「总览」共用）

// 纯容器判定：有子节点、但自身既不是文件也没有正文
function isContainer(c: any, byParent: Record<string, any[]>): boolean {
  const kids = byParent[c.slug] || [];
  return kids.length > 0 && !c.isFile && !c.content;
}

// 递归渲染一个分组：depth 0 = 大标题区块（h2），depth ≥1 = 二级类目（h3）
// 纯容器（如蓝皮书）折叠为一张书卡，不再把全部章节铺开；
// 搜索时若某容器下有命中结果，则就地展开显示命中的章节
function Group({
  node,
  depth,
  byParent,
  visible,
}: {
  node: any;
  depth: number;
  byParent: Record<string, any[]>;
  visible: Set<string> | null;
}) {
  const isSearch = visible !== null;
  const kids = sortKids(byParent[node.slug] || []).filter(
    (k) => !visible || visible.has(k.slug)
  );

  // 可见叶子总数（「N 篇」徽标）
  const countLeaves = (slug: string): number => {
    const raw = byParent[slug] || [];
    if (!raw.length) return 1;
    const ks = raw.filter((k) => !visible || visible.has(k.slug));
    return ks.reduce((s: number, k: any) => s + countLeaves(k.slug), 0);
  };
  const total = countLeaves(node.slug);

  const collapsed: { c: any; firstSlug?: string; count: number }[] = [];
  const expanded: any[] = [];

  for (const k of kids) {
    if (isContainer(k, byParent)) {
      const kKids = byParent[k.slug] || [];
      const hasVisibleDesc = isSearch && kKids.some((c) => visible!.has(c.slug));
      if (hasVisibleDesc) {
        expanded.push(k);
      } else {
        collapsed.push({
          c: k,
          firstSlug: sortKids(kKids)[0]?.slug,
          count: countLeaves(k.slug),
        });
      }
    } else {
      collapsed.push({ c: k, count: countLeaves(k.slug) });
    }
  }

  return (
    <section className={depth === 0 ? undefined : "mt-8"}>
      {depth === 0 ? (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-semibold">{node.title}</h2>
          <span className="text-xs text-stone-400">{total} 篇</span>
        </div>
      ) : (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span aria-hidden className="h-4 w-1 rounded-full bg-brand" />
          <h3 className="text-base font-semibold">
            <Link
              href={`/courses/${node.slug}`}
              className="text-stone-800 transition hover:text-brand"
            >
              {node.title}
            </Link>
          </h3>
          <span className="text-xs text-stone-400">{total} 篇</span>
        </div>
      )}

      {collapsed.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collapsed.map((item, i) =>
            item.firstSlug !== undefined ? (
              <BookCard
                key={item.c.slug}
                c={item.c}
                firstSlug={item.firstSlug}
                count={item.count}
                i={i}
              />
            ) : (
              <Card key={item.c.slug} c={item.c} i={i} />
            )
          )}
        </div>
      )}

      {expanded.map((sg) => (
        <Group
          key={sg.slug}
          node={sg}
          depth={depth + 1}
          byParent={byParent}
          visible={visible}
        />
      ))}
    </section>
  );
}

// 统计一棵子树（整库/某本书）的末端文档数（不受搜索影响，用于页签数量）
function countLeavesAll(
  slug: string,
  byParent: Record<string, any[]>
): number {
  const kids = byParent[slug] || [];
  if (!kids.length) return 1;
  return kids.reduce((s: number, k: any) => s + countLeavesAll(k.slug, byParent), 0);
}

export default function CourseBrowser({ courses }: { courses: any[] }) {
  const [q, setQ] = useState("");
  const [rootName, setRootName] = useState("全部");

  const { byParent, roots } = useMemo(() => {
    const bp = buildByParent(courses);
    return { byParent: bp, roots: bp[""] || [] };
  }, [courses]);

  // 页签：全部 + 各根节点（书/专辑），数量为子树末端文档数
  const tabs = useMemo(
    () => [
      { name: "全部", count: roots.reduce((s: number, r: any) => s + countLeavesAll(r.slug, byParent), 0) },
      ...roots.map((r: any) => ({
        name: r.title,
        count: countLeavesAll(r.slug, byParent),
      })),
    ],
    [roots, byParent]
  );

  const query = q.trim().toLowerCase();

  // 搜索可见集合：节点自身命中（标题/分类/正文）→ 整棵子树可见；
  // 否则仅有后代命中时才可见，且只保留命中的叶子，上层分组保留作导航
  const visible = useMemo(() => {
    if (!query) return null;
    const vis = new Set<string>();
    const matches = (n: any) =>
      ((n.title || "") + " " + (n.category || "") + " " + (n.content || ""))
        .toLowerCase()
        .includes(query);
    const addAll = (n: any) => {
      vis.add(n.slug);
      (byParent[n.slug] || []).forEach(addAll);
    };
    const walk = (n: any): boolean => {
      if (matches(n)) {
        addAll(n);
        return true;
      }
      let kept = false;
      for (const k of byParent[n.slug] || []) {
        if (walk(k)) kept = true;
      }
      if (kept) vis.add(n.slug);
      return kept;
    };
    roots.forEach((r) => walk(r));
    return vis;
  }, [query, byParent, roots]);

  const filteredRoots = useMemo(() => {
    let list = visible ? roots.filter((r: any) => visible.has(r.slug)) : roots;
    if (rootName !== "全部") list = list.filter((r: any) => r.title === rootName);
    return list;
  }, [visible, roots, rootName]);

  // 结果计数：可见树的末端节点数
  const resultCount = useMemo(() => {
    if (!visible) return 0;
    return [...visible].filter((slug) =>
      (byParent[slug] || []).every((k: any) => !visible.has(k.slug))
    ).length;
  }, [visible, byParent]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* 头部 */}
      <PageHeader
        title="AI 知识库，读这一页就够了。"
        hl="AI 知识库"
        subtitle="把优质 AI 学习资料整理、分类，集中在一个页面中。"
      />

      {/* 页签：全部 / 各本书 */}
      <FilterTabs tabs={tabs} value={rootName} onChange={setRootName} />

      {/* 工具栏：计数 + 搜索 */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-500">
          {query
            ? `找到 ${resultCount} 篇内容`
            : `共 ${tabs[0].count} 篇内容 · ${rootName}`}
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
        {filteredRoots.length === 0 && (
          <p className="mt-10 text-center text-stone-400">
            没有匹配「{q}」的内容
          </p>
        )}
        {filteredRoots.map((root: any) => {
          const kids = sortKids(byParent[root.slug] || []).filter(
            (k) => !visible || visible.has(k.slug)
          );
          if (!kids.length) {
            // 独立文档根节点：标题 + 单卡片
            return (
              <section key={root.slug}>
                <div className="mb-4 flex items-center gap-2">
                  <h2 className="text-xl font-semibold">{root.title}</h2>
                  <span className="text-xs text-stone-400">1 篇</span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <Card c={root} i={0} />
                </div>
              </section>
            );
          }
          return (
            <Group
              key={root.slug}
              node={root}
              depth={0}
              byParent={byParent}
              visible={visible}
            />
          );
        })}
      </div>
    </div>
  );
}
