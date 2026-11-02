import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { destroySession, COOKIE } from "@/lib/auth";

export async function POST() {
  const token = cookies().get(COOKIE)?.value;
  if (token) destroySession(token);
  cookies().delete(COOKIE);
  return NextResponse.json({ ok: true });
}
