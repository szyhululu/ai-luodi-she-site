import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

function admin() {
  const token = cookies().get(COOKIE)?.value;
  const u = getUserBySession(token);
  if (!u || u.role !== "admin") return null;
  return u;
}

export async function GET() {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const db = getDB();
  const codes = db.prepare("SELECT * FROM redeem_codes ORDER BY id DESC").all();
  const stats = db
    .prepare(
      "SELECT COUNT(*) total, SUM(status='used') used, SUM(status='unsold') unsold, SUM(status='sold') sold FROM redeem_codes"
    )
    .get() as any;
  return NextResponse.json({ codes, stats });
}

export async function POST(req: Request) {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const b = await req.json();
  const n = Math.min(Number(b.count) || 1, 100);
  const db = getDB();
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const ins = db.prepare(
    "INSERT INTO redeem_codes (code, status, plan) VALUES (?, 'unsold', 'lifetime')"
  );
  for (let i = 0; i < n; i++) {
    let c = "LEARN68-";
    for (let j = 0; j < 6; j++) c += chars[Math.floor(Math.random() * chars.length)];
    ins.run(c);
  }
  return NextResponse.json({ ok: true, generated: n });
}
