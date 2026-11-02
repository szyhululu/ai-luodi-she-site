import { getDB } from "@/lib/db";
import ToolBrowser from "@/components/ToolBrowser";

export const metadata = {
  title: "工具 · AI落地社",
  description: "发现真正好用的 AI 工具，把最实用的 AI 工具整理、分类，集中在一个页面中。",
};

export const dynamic = "force-dynamic";

export default function ToolsPage() {
  const db = getDB();
  const tools = db
    .prepare("SELECT * FROM tools ORDER BY orderVal ASC, id ASC")
    .all() as any[];

  return <ToolBrowser tools={tools} />;
}
