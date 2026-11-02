import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { verifyPassword, createSession, COOKIE } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const db = getDB();
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email) as any;
  if (!user || !user.password || !verifyPassword(password, user.password)) {
    return NextResponse.json({ error: "邮箱或密码错误" }, { status: 401 });
  }
  const token = createSession(user.id);
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 86400,
  });
  return NextResponse.json({ ok: true, role: user.role });
}
