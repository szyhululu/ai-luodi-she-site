import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getDB } from "@/lib/db";
import { getUserBySession, COOKIE } from "@/lib/auth";

export async function GET() {
  const db = getDB();
  const token = cookies().get(COOKIE)?.value;
  const user = getUserBySession(token);
  const isPaid = !!user?.isPaid;
  const rows = db
    .prepare("SELECT * FROM skills ORDER BY orderVal ASC, id ASC")
    .all() as any[];
  const skills = rows.map((s) => {
    const accessible = !s.isMemberOnly || isPaid;
    if (!accessible) {
      const { repoUrl, downloadFile, ...rest } = s;
      return { ...rest, locked: true };
    }
    return { ...s, locked: false };
  });
  return NextResponse.json({ skills });
}
