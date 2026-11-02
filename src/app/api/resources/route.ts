import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

export async function GET() {
  const db = getDB();
  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  const isPaid = !!user?.isPaid;
  const rows = db.prepare("SELECT * FROM resources ORDER BY id DESC").all() as any[];
  const resources = rows.map((r) => {
    const accessible = !r.isMemberOnly || isPaid;
    if (!accessible) {
      const { url, ...rest } = r;
      return { ...rest, locked: true };
    }
    return { ...r, locked: false };
  });
  return NextResponse.json({ resources });
}
