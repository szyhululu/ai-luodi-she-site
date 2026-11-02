import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

// 站长发货：把某个未售卡密分配给订单，并标记码=已发放(sold)、订单=已发货(shipped)
export async function POST(req: Request) {
  const user = getUserBySession(cookies().get(COOKIE)?.value);
  if (!user || user.role !== "admin")
    return NextResponse.json({ error: "无权限" }, { status: 403 });

  const { orderNo, code } = await req.json();
  if (!orderNo || !code)
    return NextResponse.json({ error: "缺少订单号或卡密" }, { status: 400 });

  const db = getDB();
  const row = db.prepare("SELECT * FROM redeem_codes WHERE code = ?").get(code) as any;
  if (!row) return NextResponse.json({ error: "卡密不存在" }, { status: 404 });
  if (row.status !== "unsold")
    return NextResponse.json({ error: "该卡密已发放或已使用" }, { status: 409 });

  const ord = db.prepare("SELECT * FROM orders WHERE orderNo = ?").get(orderNo) as any;
  if (!ord) return NextResponse.json({ error: "订单不存在" }, { status: 404 });

  db.prepare(
    "UPDATE redeem_codes SET status = 'sold', soldTo = ?, soldAt = datetime('now') WHERE code = ?"
  ).run(orderNo, code);
  db.prepare(
    "UPDATE orders SET status = 'shipped', assignedCode = ?, paidAt = datetime('now') WHERE orderNo = ?"
  ).run(code, orderNo);

  return NextResponse.json({ ok: true });
}
