// 一次性结构重组：把三个蓝皮书合集挂到新的根节点「AI数据」下，形成
//   AI数据（根，大标题）
//     ├─ WorkBuddy 实战蓝皮书（全本）   （二级类目）
//     ├─ 豆包工作蓝皮书（全本）          （二级类目）
//     └─ Pi Coding Agent 学习蓝皮书（全本）（二级类目）
// 只改 scripts/extra-courses.json（父关系与层级），随后需运行 apply-extra.mjs 重放进数据库。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const extraPath = path.join(ROOT, "scripts", "extra-courses.json");

const AI_NODE = {
  slug: "ai-data",
  title: "AI数据",
  category: "AI数据",
  url: "",
  contentFile: "",
  parent_node_token: "",
  node_level: 1,
  has_child: 1,
  orderVal: 5, // 排在飞书文档（13+）之前，作为课程页第一个大区块
};

const COLLECTIONS = ["bluebook", "doubao-bluebook", "pi-bluebook"];

const list = JSON.parse(fs.readFileSync(extraPath, "utf8"));

// 去掉可能已存在的旧 ai-data 条目（脚本可重复执行）
const cleaned = list.filter((e) => e.slug !== AI_NODE.slug);

// 三个合集改挂到 ai-data 下，层级降为 2
let reparented = 0;
const updated = cleaned.map((e) => {
  if (COLLECTIONS.includes(e.slug)) {
    reparented += 1;
    return { ...e, parent_node_token: AI_NODE.slug, node_level: 2 };
  }
  return e;
});

const merged = [AI_NODE, ...updated];
fs.writeFileSync(extraPath, JSON.stringify(merged, null, 2) + "\n", "utf8");

console.log(
  `extra-courses.json: ${merged.length} 条（新增 AI数据 根节点，${reparented} 个合集已挂载）`
);
console.log("下一步：node scripts/apply-extra.mjs");
