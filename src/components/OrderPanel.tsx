"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const WECHAT_QR = "/wechat-qr.png"; // 把你的微信收款码导出图片覆盖到 public/wechat-qr.png 即可

export default function OrderPanel() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [order, setOrder] = useState<any>(null);
  const [showQr, setShowQr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => setLoggedIn(!!d.user));
  }, []);

  async function create() {
    setErr("");
    setLoading(true);
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ channel: "wechat" }),
    });
    const d = await res.json();
    setLoading(false);
    if (!res.ok) {
      setErr(d.error || "生成失败");
      return;
    }
    setOrder(d);
  }

  function copy() {
    if (order?.orderNo) navigator.clipboard?.writeText(order.orderNo);
  }

  if (loggedIn === null)
    return <div className="card text-sm text-stone-500">加载中…</div>;

  if (!loggedIn)
    return (
      <div className="card text-center">
        <p className="text-sm text-stone-600">登录后即可生成订单号并发起购买</p>
        <Link href="/login" className="btn-brand mt-3 inline-block">
          去登录
        </Link>
      </div>
    );

  return (
    <div className="card space-y-4">
      <h3 className="font-semibold">购买步骤</h3>
      <ol className="space-y-2 text-sm text-stone-600">
        <li>1. 生成订单号</li>
        <li>2. 点击显示收款码，扫码付款，转账备注填写该订单号</li>
        <li>3. 客服核对后发放卡密（若你已持有卡密可跳过）</li>
        <li>4. 在下方输入卡密激活，永久解锁</li>
      </ol>

      {!order ? (
        <button className="btn-brand w-full" onClick={create} disabled={loading}>
          {loading ? "生成中…" : "生成订单号"}
        </button>
      ) : (
        <div className="rounded-lg bg-brand-light p-4 text-center">
          <p className="text-xs text-stone-500">你的订单号（付款时请备注）</p>
          <p className="mt-1 font-mono text-2xl font-bold text-brand">
            {order.orderNo}
          </p>
          <button onClick={copy} className="mt-2 text-xs text-brand underline">
            复制订单号
          </button>
          {order.reused ? (
            <p className="mt-1 text-xs text-stone-400">检测到未完成订单，已为你复用</p>
          ) : null}

          <div className="mt-4">
            <button
              onClick={() => setShowQr((v) => !v)}
              className="btn-ghost w-full"
            >
              {showQr ? "隐藏微信收款码" : "显示微信收款码"}
            </button>
            {showQr ? (
              <div className="mt-3">
                <img
                  src={WECHAT_QR}
                  alt="微信收款码"
                  className="mx-auto w-48 rounded-lg border border-stone-200"
                />
                <p className="mt-2 text-xs text-stone-500">
                  付款时请在转账备注填写上方订单号，方便核对发货。
                </p>
              </div>
            ) : null}
          </div>
        </div>
      )}
      {err ? <p className="text-sm text-red-600">{err}</p> : null}
    </div>
  );
}
