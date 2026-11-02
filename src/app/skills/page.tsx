import { getDB } from "@/lib/db";
import SkillBrowser from "@/components/SkillBrowser";

export const dynamic = "force-dynamic";

export default function SkillsPage() {
  const db = getDB();
  const skills = db
    .prepare("SELECT * FROM skills ORDER BY orderVal ASC, id ASC")
    .all() as any[];

  return <SkillBrowser skills={skills} />;
}
