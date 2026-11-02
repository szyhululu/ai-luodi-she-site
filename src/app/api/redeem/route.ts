import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

export async function POST(req: Request) {
  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  if (!user) return NextResponse.json({ error: "请先登录" }, { status: 401 });

  const { code } = await req.json();
  if (!code) return NextResponse.json({ error: "请输入卡密" }, { status: 400 });

  const db = getDB();
  const row = db.prepare("SELECT * FROM redeem_codes WHERE code = ?").get(code) as any;
  if (!row) return NextResponse.json({ error: "卡密不存在" }, { status: 404 });
  if (row.status === "used")
    return NextResponse.json({ error: "该卡密已被使用" }, { status: 409 });

  db.prepare(
    "UPDATE users SET isPaid = 1, paidAt = datetime('now'), redeemedCode = ? WHERE id = ?"
  ).run(code, user.id);
  db.prepare(
    "UPDATE redeem_codes SET status = 'used', usedBy = ?, usedAt = datetime('now') WHERE code = ?"
  ).run(user.id, code);

  // 该用户关联的待发货/已发货订单，兑换成功后置为已完成
  db.prepare(
    "UPDATE orders SET status = 'done', paidAt = COALESCE(paidAt, datetime('now')) WHERE userId = ? AND status IN ('pending','shipped')"
  ).run(user.id);

  return NextResponse.json({ ok: true });
}
