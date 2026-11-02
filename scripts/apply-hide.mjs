// 按 scripts/hidden-courses.json 隐藏名单，从当前数据库删除对应节点（含子树）。
// 用途：不必跑一次全量飞书同步就能让隐藏生效；同步脚本也读同一份名单。
// 用法：node scripts/apply-hide.mjs
import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DB_PATH = path.join(ROOT, "data", "app.db");
const HIDE_PATH = path.join(ROOT, "scripts", "hidden-courses.json");

if (!fs.existsSync(HIDE_PATH)) {
  console.error("hidden-courses.json 不存在");
  process.exit(1);
}
const hidden = JSON.parse(fs.readFileSync(HIDE_PATH, "utf8"));

const db = new Database(DB_PATH);
const del = db.prepare("DELETE FROM courses WHERE slug=?");

let total = 0;
for (const h of hidden) {
  const stack = [h.slug];
  const targets = [];
  while (stack.length) {
    const s = stack.pop();
    targets.push(s);
    db
      .prepare("SELECT slug FROM courses WHERE parent_node_token=?")
      .all(s)
      .forEach((r) => stack.push(r.slug));
  }
  let n = 0;
  for (const s of targets) n += del.run(s).changes;
  total += n;
  console.log(`隐藏 ${h.slug}（${h.reason || "无理由"}）：删除 ${n} 行`);
}
console.log(`apply-hide 完成：共删除 ${total} 行`);
