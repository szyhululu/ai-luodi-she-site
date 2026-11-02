import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

function genOrderNo(): string {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(
    d.getDate()
  ).padStart(2, "0")}`;
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `ORD-${ymd}-${s}`;
}

// 创建订单（买家，需登录）；复用未完成的 pending 订单
export async function POST(req: Request) {
  const user = getUserBySession(cookies().get(COOKIE)?.value);
  if (!user) return NextResponse.json({ error: "请先登录" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const channel = body.channel === "alipay" ? "alipay" : "wechat";

  const db = getDB();
  const existing = db
    .prepare(
      "SELECT orderNo, amount, channel FROM orders WHERE userId = ? AND status = 'pending' ORDER BY id DESC LIMIT 1"
    )
    .get(user.id) as any;
  if (existing) return NextResponse.json({ ...existing, reused: true });

  const orderNo = genOrderNo();
  db.prepare(
    "INSERT INTO orders (orderNo, userId, amount, channel, status) VALUES (?, ?, 68, ?, 'pending')"
  ).run(orderNo, user.id, channel);
  return NextResponse.json({ orderNo, amount: 68, channel, reused: false });
}

// 列出所有订单（后台，需 admin）
export async function GET() {
  const user = getUserBySession(cookies().get(COOKIE)?.value);
  if (!user || user.role !== "admin")
    return NextResponse.json({ error: "无权限" }, { status: 403 });
  const orders = getDB().prepare("SELECT * FROM orders ORDER BY id DESC").all();
  return NextResponse.json({ orders });
}
