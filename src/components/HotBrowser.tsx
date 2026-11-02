"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FilterTabs from "@/components/FilterTabs";

// AI 动态：数据源为 aihot.news（公开 RSS /feed.xml + 首页时间线卡片，见 scripts/fetch_aihot.mjs）。
// 展示为时间线样式：左侧时刻 + 圆点竖线；标题直链原文出处（不引导至 aihot.news，避免分流）。
const WEEKDAYS = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

function weekdayOf(date: string) {
  const d = new Date(`${date}T12:00:00+08:00`);
  return WEEKDAYS[d.getDay()] || "";
}
function monthDay(date: string) {
  const [, m, day] = date.split("-");
  return `${parseInt(m, 10)}月${parseInt(day, 10)}日`;
}

// 个别条目的 publishedAt 与真实时间戳差一天，日期/时刻统一从 publishedTs 按东八区推导
const SH_DATE_FMT = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const SH_TIME_FMT = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
function part(fmt: Intl.DateTimeFormat, d: Date, type: string): string {
  return fmt.formatToParts(d).find((x) => x.type === type)?.value || "";
}
function shDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return `${part(SH_DATE_FMT, d, "year")}-${part(SH_DATE_FMT, d, "month")}-${part(SH_DATE_FMT, d, "day")}`;
}
function shTime(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return `${part(SH_TIME_FMT, d, "hour").padStart(2, "0")}:${part(SH_TIME_FMT, d, "minute")}`;
}
function dateOf(t: any): string {
  // 无时间戳的旧条目（feed 打底来源）无法可靠定位日期，归入「更早」
  return (t.publishedTs && shDate(t.publishedTs)) || "更早";
}
function timeOf(t: any): string {
  return t.timeText || (t.publishedTs ? shTime(t.publishedTs) : "");
}

export default function HotBrowser({ news }: { news: any[] }) {
  const [dateTab, setDateTab] = useState("全部");

  // 按日期分组（publishedTs 倒序后自然成组）
  const groups = useMemo(() => {
    const g: { date: string; items: any[] }[] = [];
    for (const t of news) {
      const date = dateOf(t);
      const last = g[g.length - 1];
      if (last && last.date === date) last.items.push(t);
      else g.push({ date, items: [t] });
    }
    return g;
  }, [news]);

  // 页签：全部 + 各日期
  const tabs = useMemo(
    () => [
      { name: "全部", count: news.length },
      ...groups.map((g) => ({
        name: g.date === "更早" ? g.date : monthDay(g.date),
        count: g.items.length,
      })),
    ],
    [news, groups]
  );

  const shown = useMemo(() => {
    if (dateTab === "全部") return groups;
    return groups.filter(
      (g) => (g.date === "更早" ? g.date : monthDay(g.date)) === dateTab
    );
  }, [groups, dateTab]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* 头部 */}
      <PageHeader
        title="每天精选的 AI 动态。"
        hl="AI 动态"
        subtitle="每天挑出最值得关注的 AI / 科技热点，帮你少刷信息、多看门道。"
      />

      {/* 日期页签 */}
      <FilterTabs tabs={tabs} value={dateTab} onChange={setDateTab} />

      {shown.map((g) => (
        <section key={g.date} className="mt-12">
          {/* 日期头：10月23日 ▾ 星期五 · N 条 */}
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl font-bold">
              {g.date === "更早" ? g.date : monthDay(g.date)}
            </h2>
            <span className="text-sm text-stone-400">
              {g.date !== "更早" && `${weekdayOf(g.date)} · `}
              {g.items.length} 条
            </span>
          </div>

            <div className="mt-5">
              {g.items.map((t) => (
                <article
                  key={t.id}
                  className="group/row grid grid-cols-[22px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[56px_22px_minmax(0,1fr)] sm:gap-x-4"
                >
                  {/* 左栏：时刻（桌面端） */}
                  <time className="hidden pt-[19px] text-right font-mono text-[12.5px] font-semibold leading-5 text-stone-400 sm:block">
                    {timeOf(t)}
                  </time>

                  {/* 中栏：圆点 + 竖线 */}
                  <span aria-hidden="true" className="relative">
                    <span className="absolute left-1/2 top-7 bottom-0 w-px -translate-x-1/2 bg-stone-200 group-last/row:hidden" />
                    <span className="absolute left-1/2 top-[25px] size-[7px] -translate-x-1/2 rounded-full bg-brand shadow-[0_0_0_4px_#fafaf9] transition-transform duration-300 group-hover/row:scale-125" />
                  </span>

                  {/* 卡片 */}
                  <div className="card mb-4 p-4 transition group-hover/row:border-brand/30 group-hover/row:shadow-md sm:p-5">
                    {/* 移动端时刻并入卡片顶部（桌面端在左侧时间轴上） */}
                    {timeOf(t) && (
                      <span className="font-mono text-xs text-stone-400 sm:hidden">
                        {timeOf(t)}
                      </span>
                    )}

                    <h3 className="mt-1.5 text-[17px] font-semibold leading-snug sm:mt-0">
                      <a
                        href={t.originalUrl || t.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="hover:text-brand"
                      >
                        {t.title}
                      </a>
                    </h3>

                    {t.summary && (
                      <p className="mt-1.5 text-[14.5px] leading-relaxed text-stone-600">
                        {t.summary}
                      </p>
                    )}

                    {t.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.image}
                        alt=""
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="mt-3 max-h-60 w-auto max-w-full rounded-lg border border-stone-200 object-cover"
                      />
                    )}

                    {t.reason && (
                      <div className="mt-3 border-t border-stone-100 pt-3">
                        <p className="text-[13px] leading-relaxed text-stone-500">
                          <span className="text-stone-400">推荐理由：</span>
                          {t.reason}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))
      }

      {shown.length === 0 && (
        <p className="mt-16 text-center text-stone-400">暂无动态</p>
      )}

      <p className="mt-10 text-center text-sm text-stone-400">
        动态内容基于 aihot.news 聚合整理，点击标题可阅读原文。
      </p>

      <p className="mt-4 text-center text-sm text-stone-400">
        想第一时间拿到完整解读与 actionable 方法？
        <Link href="/pricing" className="ml-1 text-brand underline">
          解锁 AI 工作流与资料包
        </Link>
      </p>
    </div>
  );
}
