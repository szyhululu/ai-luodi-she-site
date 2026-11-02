"use client";

// 分类页签（与 /tools 一致）：带数量的 pill，选中项黑底白字
export default function FilterTabs({
  tabs,
  value,
  onChange,
}: {
  tabs: { name: string; count: number }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t.name}
          onClick={() => onChange(t.name)}
          className={
            "rounded-lg px-3 py-1.5 text-sm font-medium transition " +
            (value === t.name
              ? "bg-stone-900 text-white"
              : "border border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:bg-stone-50")
          }
        >
          {t.name} <span className="ml-0.5 text-xs opacity-70">{t.count}</span>
        </button>
      ))}
    </div>
  );
}
