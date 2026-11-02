import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUserBySession, COOKIE } from "@/lib/auth";

export async function GET() {
  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  if (!user) return NextResponse.json({ user: null });
  const { password, ...safe } = user;
  return NextResponse.json({ user: safe });
}
