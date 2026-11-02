import { getDB } from "@/lib/db";
import CourseBrowser from "@/components/CourseBrowser";

export const dynamic = "force-dynamic";

export default function CoursesPage() {
  const db = getDB();
  const all = db
    .prepare("SELECT * FROM courses ORDER BY orderVal ASC, id ASC")
    .all() as any[];

  return <CourseBrowser courses={all} />;
}

