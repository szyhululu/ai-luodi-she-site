// 把 scripts/extra-courses.json 中的手动课程（source='extra'）重新写入 SQLite。
// 与 sync-courses.mjs 的区别：不拉飞书、不清飞书来源的行，只重放 extra 清单，幂等可重复执行。
// 用法：node scripts/apply-extra.mjs
import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DB_PATH = path.join(ROOT, "data", "app.db");

const extraPath = path.join(ROOT, "scripts", "extra-courses.json");
if (!fs.existsSync(extraPath)) {
  console.error("extra-courses.json 不存在");
  process.exit(1);
}
const extras = JSON.parse(fs.readFileSync(extraPath, "utf8"));

const db = new Database(DB_PATH);
db.exec("DELETE FROM courses WHERE source='extra'");
const ins = db.prepare(
  `INSERT INTO courses
    (slug,title,category,feishuUrl,parent_node_token,node_level,has_child,isMemberOnly,isFile,content,orderVal,source)
   VALUES (?,?,?,?,?,?,?,0,?,?,?,?)`
);
let withContent = 0;
const tx = db.transaction(() => {
  for (const e of extras) {
    const mdPath = path.join(ROOT, "scripts", e.contentFile || "");
    const content =
      e.contentFile && fs.existsSync(mdPath)
        ? fs.readFileSync(mdPath, "utf8")
        : "";
    if (content) withContent++;
    ins.run(
      e.slug,
      e.title,
      e.category || "其他",
      e.url || "",
      e.parent_node_token || "",
      e.node_level || 1,
      e.has_child ? 1 : 0,
      0,
      content,
      e.orderVal || 1000,
      "extra"
    );
  }
});
tx();
console.log(
  `applied ${extras.length} extra courses (${withContent} with content)`
);
