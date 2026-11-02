"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { OutlineItem } from "@/lib/course-tree";

/** 找到目标节点在树中的祖先路径（不含自身），用于默认展开所在分组 */
function findAncestors(
  items: OutlineItem[],
  slug: string,
  acc: OutlineItem[] = []
): OutlineItem[] | null {
  for (const it of items) {
    if (it.slug === slug) return acc;
    const r = findAncestors(it.children, slug, [...acc, it]);
    if (r) return r;
  }
  return null;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`mt-[3px] h-3.5 w-3.5 shrink-0 text-stone-400 transition-transform ${
        open ? "rotate-90" : ""
      }`}
    >
      <path
        fill="currentColor"
        d="M7.5 5.5 13 10l-5.5 4.5V5.5Z"
      />
    </svg>
  );
}

export default function CourseOutline({
  title,
  items,
  currentSlug,
  showHeader = true,
}: {
  title: string;
  items: OutlineItem[];
  currentSlug: string;
  showHeader?: boolean;
}) {
  const ancestors = useMemo(
    () => new Set((findAncestors(items, currentSlug) || []).map((i) => i.slug)),
    [items, currentSlug]
  );
  // 记录用户手动展开/收起的分组；未记录时，祖先分组默认展开、其余默认收起
  const [openState, setOpenState] = useState<Record<string, boolean>>({});
  const currentRef = useRef<HTMLDivElement | null>(null);

  const isOpen = (slug: string) =>
    slug in openState ? openState[slug] : ancestors.has(slug);

  const toggle = (slug: string) =>
    setOpenState((s) => ({ ...s, [slug]: !isOpen(slug) }));

  // 打开页面时把当前章节滚动进侧栏可视区
  useEffect(() => {
    currentRef.current?.scrollIntoView({ block: "center" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlug]);

  const renderItems = (list: OutlineItem[], depth: number): React.ReactNode =>
    list.map((it) => {
      const open = isOpen(it.slug);
      const isCurrent = it.slug === currentSlug;
      const hasKids = it.children.length > 0;
      const pad = 8 + depth * 14;

      const titleNode = it.hasContent || it.isFile ? (
        <Link
          href={`/courses/${it.slug}`}
          className={`min-w-0 flex-1 text-[13px] leading-snug transition hover:text-brand ${
            isCurrent
              ? "font-semibold text-brand"
              : hasKids
              ? "font-semibold text-stone-800 hover:text-brand"
              : "text-stone-600"
          }`}
        >
          {it.title}
        </Link>
      ) : (
        <span
          className={`min-w-0 flex-1 text-[13px] leading-snug ${
            hasKids ? "font-semibold text-stone-800" : "text-stone-600"
          }`}
        >
          {it.title}
        </span>
      );

      return (
        <div key={it.slug}>
          <div
            ref={isCurrent ? currentRef : undefined}
            className={`flex items-start gap-1 rounded-md py-[5px] pr-1 transition ${
              isCurrent ? "bg-brand-light/70" : "hover:bg-stone-50"
            }`}
            style={{ paddingLeft: pad }}
          >
            {hasKids ? (
              <button
                type="button"
                onClick={() => toggle(it.slug)}
                aria-label={open ? "收起" : "展开"}
                className="-ml-1 mt-[1px] rounded p-0.5 transition hover:bg-stone-200"
              >
                <Chevron open={open} />
              </button>
            ) : (
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-stone-300" />
            )}
            {titleNode}
          </div>
          {hasKids && open && (
            <div className="border-l border-stone-100">
              {renderItems(it.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });

  return (
    <div>
      {showHeader && (
        <div className="mb-3 border-b border-stone-200 pb-2.5">
          <p className="text-[11px] font-medium uppercase tracking-wide text-stone-400">
            总览
          </p>
          <p className="mt-0.5 text-sm font-semibold leading-snug text-stone-800">
            {title}
          </p>
        </div>
      )}
      <nav aria-label="章节总览">{renderItems(items, 0)}</nav>
    </div>
  );
}
