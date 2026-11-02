"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [role, setRole] = useState<string | null>(null);
  const [tab, setTab] = useState<"skills" | "workflows" | "resources" | "codes" | "orders">("skills");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        if (!d.user || d.user.role !== "admin") {
          router.push("/login");
        } else {
          setRole(d.user.role);
        }
      });
  }, [router]);

  if (role !== "admin") return <div className="p-10 text-center text-stone-500">校验中…</div>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold">管理后台</h1>
      <div className="mt-4 flex gap-2 border-b border-stone-200 pb-2 text-sm">
        {(["skills", "workflows", "resources", "codes", "orders"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={tab === t ? "font-semibold text-brand" : "text-stone-500"}
          >
            {t === "skills" ? "Skills" : t === "workflows" ? "工作流" : t === "resources" ? "资料" : t === "codes" ? "卡密" : "订单"}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tab === "skills" && <SkillsPanel />}
        {tab === "workflows" && <WorkflowsPanel />}
        {tab === "resources" && <ResourcesPanel />}
        {tab === "codes" && <CodesPanel />}
        {tab === "orders" && <OrdersPanel />}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, textarea }: any) {
  return (
    <label className="block">
      <span className="text-xs text-stone-500">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full rounded-md border border-stone-300 px-2 py-1 text-sm"
          rows={3}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full rounded-md border border-stone-300 px-2 py-1 text-sm"
        />
      )}
    </label>
  );
}

function SkillsPanel() {
  const [form, setForm] = useState({ title: "", summary: "", category: "", tags: "", installGuide: "", repoUrl: "", downloadFile: "", memberOnly: false });
  const [list, setList] = useState<any[]>([]);
  const reload = () => fetch("/api/admin/skills").then((r) => r.json()).then((d) => setList(d.skills || []));
  useEffect(() => { reload(); }, []);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/admin/skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, isMemberOnly: form.memberOnly, tags: form.tags.split(/[,，]/).map((s) => s.trim()).filter(Boolean) }),
    });
    setForm({ title: "", summary: "", category: "", tags: "", installGuide: "", repoUrl: "", downloadFile: "", memberOnly: false });
    reload();
  };
  const del = async (id: number) => { await fetch(`/api/admin/skills?id=${id}`, { method: "DELETE" }); reload(); };
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form onSubmit={submit} className="card space-y-2">
        <h3 className="font-semibold">新增 Skill</h3>
        <Field label="标题" value={form.title} onChange={(v: string) => setForm({ ...form, title: v })} />
        <Field label="简介" value={form.summary} onChange={(v: string) => setForm({ ...form, summary: v })} textarea />
        <Field label="分类" value={form.category} onChange={(v: string) => setForm({ ...form, category: v })} />
        <Field label="标签(逗号分隔)" value={form.tags} onChange={(v: string) => setForm({ ...form, tags: v })} />
        <Field label="安装指引" value={form.installGuide} onChange={(v: string) => setForm({ ...form, installGuide: v })} textarea />
        <Field label="仓库URL" value={form.repoUrl} onChange={(v: string) => setForm({ ...form, repoUrl: v })} />
        <Field label="下载文件名(放 data/files)" value={form.downloadFile} onChange={(v: string) => setForm({ ...form, downloadFile: v })} />
        <label className="flex items-center gap-2 text-sm text-stone-600">
          <input type="checkbox" checked={form.memberOnly} onChange={(e) => setForm({ ...form, memberOnly: e.target.checked })} />
          会员专享（付费，不勾则免费开放）
        </label>
        <button className="btn-brand w-full">添加</button>
      </form>
      <div className="space-y-2">
        {list.map((s) => (
          <div key={s.id} className="card flex items-center justify-between py-3">
            <div>
              <p className="font-medium">{s.title}</p>
              <p className="text-xs text-stone-400">{s.downloadFile || "无文件"}</p>
            </div>
            <button className="text-xs text-red-600" onClick={() => del(s.id)}>删除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowsPanel() {
  const [form, setForm] = useState({ title: "", scenario: "", tags: "", steps: "", sourceFile: "", memberOnly: true });
  const [list, setList] = useState<any[]>([]);
  const reload = () => fetch("/api/admin/workflows").then((r) => r.json()).then((d) => setList(d.workflows || []));
  useEffect(() => { reload(); }, []);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let steps: any[] = [];
    try { steps = JSON.parse(form.steps || "[]"); } catch {}
    await fetch("/api/admin/workflows", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, isMemberOnly: form.memberOnly, tags: form.tags.split(/[,，]/).map((s) => s.trim()).filter(Boolean), steps }),
    });
    setForm({ title: "", scenario: "", tags: "", steps: "", sourceFile: "", memberOnly: true });
    reload();
  };
  const del = async (id: number) => { await fetch(`/api/admin/workflows?id=${id}`, { method: "DELETE" }); reload(); };
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form onSubmit={submit} className="card space-y-2">
        <h3 className="font-semibold">新增 工作流</h3>
        <Field label="标题" value={form.title} onChange={(v: string) => setForm({ ...form, title: v })} />
        <Field label="场景" value={form.scenario} onChange={(v: string) => setForm({ ...form, scenario: v })} />
        <Field label="标签" value={form.tags} onChange={(v: string) => setForm({ ...form, tags: v })} />
        <Field label="源文件(data/files)" value={form.sourceFile} onChange={(v: string) => setForm({ ...form, sourceFile: v })} />
        <Field label="步骤JSON" value={form.steps} onChange={(v: string) => setForm({ ...form, steps: v })} textarea />
        <label className="flex items-center gap-2 text-sm text-stone-600">
          <input type="checkbox" checked={form.memberOnly} onChange={(e) => setForm({ ...form, memberOnly: e.target.checked })} />
          会员专享（付费，不勾则免费开放）
        </label>
        <button className="btn-brand w-full">添加</button>
      </form>
      <div className="space-y-2">
        {list.map((w) => (
          <div key={w.id} className="card flex items-center justify-between py-3">
            <div>
              <p className="font-medium">{w.title}</p>
              <p className="text-xs text-stone-400">{w.sourceFile || "无文件"}</p>
            </div>
            <button className="text-xs text-red-600" onClick={() => del(w.id)}>删除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourcesPanel() {
  const [form, setForm] = useState({ filename: "", sizeKB: 0, category: "", url: "", memberOnly: true });
  const [list, setList] = useState<any[]>([]);
  const reload = () => fetch("/api/admin/resources").then((r) => r.json()).then((d) => setList(d.resources || []));
  useEffect(() => { reload(); }, []);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/admin/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, isMemberOnly: form.memberOnly }),
    });
    setForm({ filename: "", sizeKB: 0, category: "", url: "", memberOnly: true });
    reload();
  };
  const del = async (id: number) => { await fetch(`/api/admin/resources?id=${id}`, { method: "DELETE" }); reload(); };
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form onSubmit={submit} className="card space-y-2">
        <h3 className="font-semibold">新增 资料</h3>
        <Field label="文件名" value={form.filename} onChange={(v: string) => setForm({ ...form, filename: v })} />
        <Field label="大小KB" value={String(form.sizeKB)} onChange={(v: string) => setForm({ ...form, sizeKB: Number(v) || 0 })} />
        <Field label="分类" value={form.category} onChange={(v: string) => setForm({ ...form, category: v })} />
        <Field label="下载名(data/files)" value={form.url} onChange={(v: string) => setForm({ ...form, url: v })} />
        <label className="flex items-center gap-2 text-sm text-stone-600">
          <input type="checkbox" checked={form.memberOnly} onChange={(e) => setForm({ ...form, memberOnly: e.target.checked })} />
          会员专享（付费，不勾则免费开放）
        </label>
        <button className="btn-brand w-full">添加</button>
      </form>
      <div className="space-y-2">
        {list.map((r) => (
          <div key={r.id} className="card flex items-center justify-between py-3">
            <div>
              <p className="font-medium">{r.filename}</p>
              <p className="text-xs text-stone-400">{r.downloadCount} 次下载</p>
            </div>
            <button className="text-xs text-red-600" onClick={() => del(r.id)}>删除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodesPanel() {
  const [count, setCount] = useState(10);
  const [codes, setCodes] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({});
  const reload = () => fetch("/api/admin/codes").then((r) => r.json()).then((d) => { setCodes(d.codes || []); setStats(d.stats || {}); });
  useEffect(() => { reload(); }, []);
  const gen = async () => { await fetch("/api/admin/codes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ count }) }); reload(); };
  const statusLabel: any = { unsold: "未售", sold: "已发放", used: "已用" };
  return (
    <div>
      <div className="card flex items-center gap-3">
        <span className="text-sm">生成数量</span>
        <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-20 rounded-md border border-stone-300 px-2 py-1 text-sm" />
        <button className="btn-brand" onClick={gen}>生成卡密</button>
        <span className="ml-auto text-xs text-stone-500">
          共 {stats.total || 0} ｜ 未售 {stats.unsold || 0} ｜ 已发放 {stats.sold || 0} ｜ 已用 {stats.used || 0}
        </span>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {codes.map((c) => (
          <div key={c.id} className={`card py-3 text-sm ${c.status === "used" ? "opacity-50" : ""}`}>
            <p className="font-mono">{c.code}</p>
            <p className="text-xs text-stone-400">
              {statusLabel[c.status] || c.status} ｜ {c.plan}
              {c.soldTo ? ` ｜ ${c.soldTo}` : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrdersPanel() {
  const [orders, setOrders] = useState<any[]>([]);
  const [unsold, setUnsold] = useState<string[]>([]);
  const [pick, setPick] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");
  const reload = () => {
    fetch("/api/orders").then((r) => r.json()).then((d) => setOrders(d.orders || []));
    fetch("/api/admin/codes").then((r) => r.json()).then((d) => {
      setUnsold((d.codes || []).filter((c: any) => c.status === "unsold").map((c: any) => c.code));
    });
  };
  useEffect(() => { reload(); }, []);
  const ship = async (orderNo: string) => {
    const code = pick[orderNo];
    if (!code) { setMsg("请先选择一个未售卡密"); return; }
    const res = await fetch("/api/admin/orders/ship", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderNo, code }),
    });
    const d = await res.json();
    if (!res.ok) { setMsg(d.error || "发货失败"); return; }
    setMsg(`已为 ${orderNo} 发放卡密 ${code}`);
    reload();
  };
  const pending = orders.filter((o) => o.status === "pending");
  const shipped = orders.filter((o) => o.status !== "pending");
  const statusLabel: any = { pending: "待发货", shipped: "已发货", done: "已完成" };
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold">待发货（{pending.length}）</h3>
        <p className="text-xs text-stone-400">买家已生成订单并付款备注后，挑一个未售卡密发放。</p>
        <div className="mt-3 space-y-2">
          {pending.length === 0 ? <p className="text-sm text-stone-400">暂无待发货订单</p> : null}
          {pending.map((o) => (
            <div key={o.id} className="card flex flex-wrap items-center gap-3">
              <div className="font-mono text-sm">{o.orderNo}</div>
              <div className="text-xs text-stone-500">¥{o.amount} ｜ {o.channel === "alipay" ? "支付宝" : "微信"}</div>
              <select
                value={pick[o.orderNo] || ""}
                onChange={(e) => setPick({ ...pick, [o.orderNo]: e.target.value })}
                className="rounded-md border border-stone-300 px-2 py-1 text-sm"
              >
                <option value="">选择未售卡密</option>
                {unsold.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <button className="btn-brand" onClick={() => ship(o.orderNo)}>发货</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold">已发货 / 已完成（{shipped.length}）</h3>
        <div className="mt-3 space-y-2">
          {shipped.length === 0 ? <p className="text-sm text-stone-400">暂无记录</p> : null}
          {shipped.map((o) => (
            <div key={o.id} className="card flex flex-wrap items-center gap-3 text-sm">
              <span className="font-mono">{o.orderNo}</span>
              <span className="text-xs text-stone-500">¥{o.amount}</span>
              <span className="rounded bg-stone-100 px-2 py-0.5 text-xs">{statusLabel[o.status]}</span>
              <span className="text-xs text-stone-500">卡密 {o.assignedCode || "-"}</span>
            </div>
          ))}
        </div>
      </div>
      {msg ? <p className="text-sm text-green-600">{msg}</p> : null}
    </div>
  );
}
