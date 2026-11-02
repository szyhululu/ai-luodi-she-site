import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { hashPassword, verifyPassword, createSession, COOKIE } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password || password.length < 6) {
    return NextResponse.json({ error: "邮箱或密码不合法（密码至少6位）" }, { status: 400 });
  }
  const db = getDB();
  const exist = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (exist) {
    return NextResponse.json({ error: "该邮箱已注册，请直接登录" }, { status: 409 });
  }
  const info = db
    .prepare("INSERT INTO users (email, password, isPaid) VALUES (?, ?, 0)")
    .run(email, hashPassword(password));
  const userId = Number(info.lastInsertRowid);
  const token = createSession(userId);
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 86400,
  });
  return NextResponse.json({ ok: true });
}
