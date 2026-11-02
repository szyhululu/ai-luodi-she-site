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
    .prepare("SELECT * FROM workflows ORDER BY orderVal ASC, id ASC")
    .all() as any[];
  const workflows = rows.map((w) => {
    const accessible = !w.isMemberOnly || isPaid;
    if (!accessible) {
      const { steps, sourceFile, ...rest } = w;
      return { ...rest, locked: true };
    }
    return { ...w, locked: false };
  });
  return NextResponse.json({ workflows });
}
