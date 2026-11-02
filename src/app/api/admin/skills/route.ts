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
  return NextResponse.json({ skills: db.prepare("SELECT * FROM skills ORDER BY id DESC").all() });
}

export async function POST(req: Request) {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const b = await req.json();
  const db = getDB();
  const slug =
    (b.slug as string) ||
    "skill-" + Date.now().toString(36);
  db.prepare(
    `INSERT INTO skills (slug,title,summary,category,tags,coverUrl,isMemberOnly,installGuide,repoUrl,previewImages,downloadFile,orderVal)
     VALUES (@slug,@title,@summary,@category,@tags,'',@isMemberOnly,@installGuide,@repoUrl,'[]',@downloadFile,@orderVal)`
  ).run({
    slug,
    title: b.title || "未命名",
    summary: b.summary || "",
    category: b.category || "未分类",
    tags: JSON.stringify(b.tags || []),
    isMemberOnly: b.isMemberOnly ? 1 : 0,
    installGuide: b.installGuide || "",
    repoUrl: b.repoUrl || "",
    downloadFile: b.downloadFile || "",
    orderVal: Number(b.orderVal) || 0,
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!admin()) return NextResponse.json({ error: "无权限" }, { status: 401 });
  const id = Number(new URL(req.url).searchParams.get("id"));
  getDB().prepare("DELETE FROM skills WHERE id = ?").run(id);
  return NextResponse.json({ ok: true });
}
