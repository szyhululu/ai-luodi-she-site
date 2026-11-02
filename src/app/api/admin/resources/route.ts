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
  return NextResponse.json({ resources: db.prepare("SELECT * FROM resources ORDER BY id DESC").all() });
}

export async function POST(req: Request) {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const b = await req.json();
  const db = getDB();
  db.prepare(
    "INSERT INTO resources (filename,sizeKB,category,url,isMemberOnly) VALUES (@filename,@sizeKB,@category,@url,@isMemberOnly)"
  ).run({
    filename: b.filename || "未命名",
    sizeKB: Number(b.sizeKB) || 0,
    category: b.category || "未分类",
    url: b.url || "",
    isMemberOnly: b.isMemberOnly ? 1 : 0,
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const id = Number(new URL(req.url).searchParams.get("id"));
  getDB().prepare("DELETE FROM resources WHERE id = ?").run(id);
  return NextResponse.json({ ok: true });
}
