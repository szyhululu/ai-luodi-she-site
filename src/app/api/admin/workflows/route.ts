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
  return NextResponse.json({ workflows: db.prepare("SELECT * FROM workflows ORDER BY id DESC").all() });
}

export async function POST(req: Request) {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const b = await req.json();
  const db = getDB();
  const slug = b.slug || "wf-" + Date.now().toString(36);
  db.prepare(
    `INSERT INTO workflows (slug,title,scenario,coverUrl,tags,steps,sourceFile,isMemberOnly,orderVal)
     VALUES (@slug,@title,@scenario,'',@tags,@steps,@sourceFile,@isMemberOnly,@orderVal)`
  ).run({
    slug,
    title: b.title || "未命名",
    scenario: b.scenario || "",
    tags: JSON.stringify(b.tags || []),
    steps: JSON.stringify(b.steps || []),
    sourceFile: b.sourceFile || "",
    isMemberOnly: b.isMemberOnly ? 1 : 0,
    orderVal: Number(b.orderVal) || 0,
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const id = Number(new URL(req.url).searchParams.get("id"));
  getDB().prepare("DELETE FROM workflows WHERE id = ?").run(id);
  return NextResponse.json({ ok: true });
}
