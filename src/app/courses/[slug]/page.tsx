import Link from "next/link";
import { notFound } from "next/navigation";
import { getDB } from "@/lib/db";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CourseOutline from "@/components/CourseOutline";
import {
  buildByParent,
  buildOutline,
  findBookScope,
  shortTitle,
} from "@/lib/course-tree";

export const dynamic = "force-dynamic";

// 清理飞书导出的非标准标签，保留正文文本
function preprocess(md: string): string {
  return md
    .replace(/<callout[^>]*>/gi, "")
    .replace(/<\/callout>/gi, "")
    .replace(/<at[^>]*>/gi, "")
    .replace(/<\/at>/gi, "")
    .replace(/<embed[^>]*>/gi, "")
    .replace(/<\/embed>/gi, "")
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<undefined><\/undefined>/gi, "");
}

// 正文里可插入 <!-- iframe:/path/to.html -->，渲染为内嵌预览
// （用于「工作台」这类 HTML 原型文件）
const IFRAME_RE = /<!--\s*iframe:(.+?)\s*-->/;

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const db = getDB();
  const course = db.prepare("SELECT * FROM courses WHERE slug = ?").get(
    params.slug
  ) as any;
  if (!course) notFound();

  const all = db.prepare("SELECT * FROM courses").all() as any[];
  const byToken: Record<string, any> = {};
  all.forEach((c: any) => (byToken[c.slug] = c));

  const crumbs: any[] = [];
  let cur: any = course;
  while (cur) {
    crumbs.unshift(cur);
    cur = cur.parent_node_token ? byToken[cur.parent_node_token] : null;
  }

  const children = db
    .prepare(
      "SELECT * FROM courses WHERE parent_node_token = ? ORDER BY orderVal"
    )
    .all(course.slug) as any[];
  // 同级上一篇 / 下一篇：仅在有父节点的章节页显示（按 orderVal 顺序），
  // 根级节点（独立文档 / 合集入口）不参与，避免跨合集乱跳
  const siblings = course.parent_node_token
    ? (db
        .prepare(
          "SELECT * FROM courses WHERE parent_node_token = ? ORDER BY orderVal"
        )
        .all(course.parent_node_token) as any[])
    : [];
  const curIdx = siblings.findIndex((c: any) => c.slug === course.slug);
  const prevChapter = curIdx > 0 ? siblings[curIdx - 1] : null;
  const nextChapter =
    curIdx >= 0 && curIdx < siblings.length - 1 ? siblings[curIdx + 1] : null;

  const isEmptyDoc = !course.isFile && !course.content;
  // extra 课程（蓝皮书/豆包/Pi 等）复用 feishuUrl 字段存原站地址，按域名区分按钮文案
  const isFeishuLink = /(feishu\.cn|larksuite\.com)/.test(
    course.feishuUrl || ""
  );

  // 左侧「总览」：定位当前页所属的书，列出该书全部章节供快速跳转
  const byParent = buildByParent(all);
  const bookScope = findBookScope(course, byToken, byParent);
  const outlineItems = bookScope ? buildOutline(bookScope, byParent) : [];
  const outlineTitle = bookScope ? shortTitle(bookScope.title) : "";
  const hasOutline = outlineItems.length > 0;

  return (
    <div
      className={
        hasOutline
          ? "mx-auto max-w-[1240px] px-4 py-10"
          : "mx-auto max-w-3xl px-4 py-10"
      }
    >
      <Link
        href="/courses"
        className="mb-4 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-stone-600 transition hover:bg-stone-100 hover:text-brand"
      >
        <span aria-hidden>←</span> 返回知识库
      </Link>

      <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-stone-500">
        <Link href="/courses" className="hover:text-brand">
          知识库
        </Link>
        {crumbs.map((c, idx) => (
          <span key={c.slug} className="flex items-center gap-1">
            <span>/</span>
            {idx === crumbs.length - 1 ? (
              <span className="text-stone-800">{c.title}</span>
            ) : (
              <Link
                href={`/courses/${c.slug}`}
                className="hover:text-brand"
              >
                {c.title}
              </Link>
            )}
          </span>
        ))}
      </nav>

      <div
        className={
          hasOutline
            ? "lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10"
            : undefined
        }
      >
        {/* 桌面端：左侧固定「总览」目录 */}
        {hasOutline && (
          <aside className="hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <CourseOutline
                title={outlineTitle}
                items={outlineItems}
                currentSlug={course.slug}
              />
            </div>
          </aside>
        )}

        <div className="min-w-0">
          {/* 移动端：折叠式总览 */}
          {hasOutline && (
            <details className="mb-6 rounded-xl border border-stone-200 bg-white lg:hidden">
              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-stone-700">
                <span className="text-stone-400">总览 · </span>
                {outlineTitle}
              </summary>
              <div className="border-t border-stone-200 px-4 py-3">
                <CourseOutline
                  title={outlineTitle}
                  items={outlineItems}
                  currentSlug={course.slug}
                  showHeader={false}
                />
              </div>
            </details>
          )}

          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="mt-2 text-sm text-stone-400">{course.category}</p>

          {course.isFile ? (
            <div className="mt-8 rounded-xl border border-dashed border-stone-300 p-8 text-center">
              <p className="text-stone-600">
                该内容为文件（{course.title}），请在飞书查看或下载。
              </p>
              <a
                href={course.feishuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand mt-4 inline-block"
              >
                在飞书打开
              </a>
            </div>
          ) : isEmptyDoc ? (
            <div className="mt-8 rounded-xl border border-dashed border-stone-300 p-8 text-center">
              <p className="text-stone-600">
                该节点为合集入口或暂未同步正文，请查看下方子内容
                {course.feishuUrl
                  ? isFeishuLink
                    ? "，或在飞书打开"
                    : "，或打开原站点"
                  : ""}
                。
              </p>
              {course.feishuUrl && (
                <a
                  href={course.feishuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-4 inline-block"
                >
                  {isFeishuLink ? "在飞书打开" : "打开原站点"}
                </a>
              )}
            </div>
          ) : (
            <article className="prose prose-stone mt-8">
              {(course.content as string).split(IFRAME_RE).map(
                (seg: string, i: number) =>
                  i % 2 === 0 ? (
                    <ReactMarkdown key={i} remarkPlugins={[remarkGfm]}>
                      {preprocess(seg)}
                    </ReactMarkdown>
                  ) : (
                    <iframe
                      key={i}
                      src={seg}
                      title="内嵌预览"
                      className="my-6 h-[72vh] w-full rounded-xl border border-stone-200 bg-white"
                    />
                  )
              )}
            </article>
          )}

          {(prevChapter || nextChapter) && (
            <nav className="mt-10 grid gap-3 sm:grid-cols-2">
              {prevChapter ? (
                <Link
                  href={`/courses/${prevChapter.slug}`}
                  className="card group flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    aria-hidden
                    className="text-lg text-brand transition group-hover:-translate-x-0.5"
                  >
                    ←
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-stone-400">上一篇</span>
                    <span className="block truncate font-medium text-stone-800 group-hover:text-brand">
                      {prevChapter.title}
                    </span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {nextChapter ? (
                <Link
                  href={`/courses/${nextChapter.slug}`}
                  className="card group flex items-center justify-end gap-3 p-4 text-right transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="min-w-0">
                    <span className="block text-xs text-stone-400">下一篇</span>
                    <span className="block truncate font-medium text-stone-800 group-hover:text-brand">
                      {nextChapter.title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-lg text-brand transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}

          {children.length > 0 && (
            <div className="mt-12">
              {children.length <= 60 ? (
                <>
                  <h2 className="mb-4 text-xl font-semibold">本合集包含</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {children.map((c: any) => (
                      <Link
                        key={c.slug}
                        href={`/courses/${c.slug}`}
                        className="card p-4 transition hover:-translate-y-1 hover:shadow-md"
                      >
                        <span className="text-xs text-stone-400">
                          {c.isFile ? "文件" : "文档"}
                        </span>
                        <h3 className="mt-1 font-medium leading-snug">{c.title}</h3>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-stone-500">
                  本手册共 {children.length} 页，请使用页面底部的「上一篇 / 下一篇」逐页翻阅。
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
