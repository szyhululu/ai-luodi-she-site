import Link from "next/link";
import { cookies } from "next/headers";
import { getUserBySession, COOKIE } from "@/lib/auth";

export async function Nav() {
  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-y-1.5 px-4 py-3 sm:justify-between sm:gap-y-0">
        <Link href="/" className="flex items-center">
          {/* AI落地社横版Logo：橙色 AP 圆角图标 + 黑色「AI落地社」字样（透明底PNG，3.75:1） */}
          <img
            src="/logo.png"
            alt="AI落地社"
            width={150}
            height={40}
            className="h-7 w-auto sm:h-8 lg:h-9"
          />
        </Link>
        <nav className="order-3 -mx-1 flex w-full items-center gap-1 overflow-x-auto px-1 pb-0.5 text-sm sm:order-none sm:mx-0 sm:w-auto sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
          <Link href="/courses" className="shrink-0 rounded-md px-2 py-1.5 hover:bg-stone-100">
            知识库
          </Link>
          <Link href="/skills" className="shrink-0 rounded-md px-2 py-1.5 hover:bg-stone-100">
            技能
          </Link>
          <Link href="/tools" className="shrink-0 rounded-md px-2 py-1.5 hover:bg-stone-100">
            工具
          </Link>
          <Link href="/hot" className="shrink-0 rounded-md px-2 py-1.5 hover:bg-stone-100">
            AI动态
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <Link href="/pricing" className="btn-brand whitespace-nowrap">
            ¥68 购买
          </Link>
          {user ? (
            <Link href={user.role === "admin" ? "/admin" : "/resources"} className="btn-ghost whitespace-nowrap">
              {user.role === "admin" ? "后台" : user.isPaid ? "资料库" : "我的"}
            </Link>
          ) : (
            <Link href="/login" className="btn-ghost whitespace-nowrap">
              登录
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
