import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

const FILES_DIR = path.join(process.cwd(), "data", "files");

export async function GET(req: Request) {
  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const id = Number(searchParams.get("id"));

  const db = getDB();
  let file = "";
  let memberOnly = 0;
  if (type === "skill") {
    const r = db.prepare("SELECT downloadFile, isMemberOnly FROM skills WHERE id = ?").get(id) as any;
    file = r?.downloadFile;
    memberOnly = r?.isMemberOnly;
  } else if (type === "workflow") {
    const r = db.prepare("SELECT sourceFile, isMemberOnly FROM workflows WHERE id = ?").get(id) as any;
    file = r?.sourceFile;
    memberOnly = r?.isMemberOnly;
  } else if (type === "resource") {
    const r = db.prepare("SELECT url, downloadCount, isMemberOnly FROM resources WHERE id = ?").get(id) as any;
    file = r?.url;
    memberOnly = r?.isMemberOnly;
    if (r) db.prepare("UPDATE resources SET downloadCount = downloadCount + 1 WHERE id = ?").run(id);
  }
  if (memberOnly && (!user || !user.isPaid)) {
    return NextResponse.json({ error: "请先购买并登录" }, { status: 403 });
  }
  if (!file) return NextResponse.json({ error: "文件不存在" }, { status: 404 });

  const fp = path.join(FILES_DIR, path.basename(file));
  if (!fs.existsSync(fp)) return NextResponse.json({ error: "文件未上传" }, { status: 404 });

  const buf = fs.readFileSync(fp);
  return new NextResponse(buf, {
    headers: {
      "Content-Disposition": `attachment; filename="${encodeURIComponent(file)}"`,
      "Content-Type": "application/octet-stream",
    },
  });
}
