"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function RedeemForm() {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    setMsg("");
    setLoading(true);
    const res = await fetch("/api/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: code.trim() }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setErr(data.error || "兑换失败");
      return;
    }
    setMsg("兑换成功，已解锁全部资料！");
    setTimeout(() => router.push("/resources"), 800);
  }

  return (
    <form onSubmit={submit} className="card">
      <h3 className="font-semibold">已有卡密？立即兑换</h3>
      <p className="mt-1 text-sm text-stone-500">
        付款后向客服获取卡密，或输入已购买的卡密激活。
      </p>
      <div className="mt-3 flex gap-2">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="LEARN68-XXXXXX"
          className="flex-1 rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-brand"
        />
        <button className="btn-brand" disabled={loading}>
          {loading ? "兑换中" : "兑换"}
        </button>
      </div>
      {err ? <p className="mt-2 text-sm text-red-600">{err}</p> : null}
      {msg ? <p className="mt-2 text-sm text-green-600">{msg}</p> : null}
    </form>
  );
}
