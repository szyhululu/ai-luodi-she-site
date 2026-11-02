"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [ok, setOk] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setOk("");
    setLoading(true);
    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setErr(data.error || "操作失败");
      return;
    }
    setOk(mode === "login" ? "登录成功，跳转中…" : "注册成功，跳转中…");
    setTimeout(() => router.push("/resources"), 600);
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-20">
      <h1 className="text-2xl font-bold text-center">
        {mode === "login" ? "登录" : "注册"}
      </h1>
      <form onSubmit={submit} className="card mt-6 space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="邮箱"
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-brand"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="密码（至少6位）"
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-brand"
        />
        {err ? <p className="text-sm text-red-600">{err}</p> : null}
        {ok ? <p className="text-sm text-green-600">{ok}</p> : null}
        <button className="btn-brand w-full" disabled={loading}>
          {loading ? "处理中" : mode === "login" ? "登录" : "注册"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-stone-500">
        {mode === "login" ? (
          <>
            还没有账号？{" "}
            <button className="text-brand" onClick={() => setMode("register")}>
              去注册
            </button>
          </>
        ) : (
          <>
            已有账号？{" "}
            <button className="text-brand" onClick={() => setMode("login")}>
              去登录
            </button>
          </>
        )}
      </p>
      <p className="mt-6 text-center text-xs text-stone-400">
        管理员可用 admin@site.local / admin123 登录后台
      </p>
    </div>
  );
}
