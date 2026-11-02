// 从飞书「AI知识库」(space_id 7679833414740003785) 同步全部节点到 courses 表。
// 文档类(docx)抓取全文 markdown 站内渲染；文件类(file/slides)标记为 isFile，详情页引导去飞书打开。
// 用法：node scripts/sync-courses.mjs [--cache]   （--cache 复用 /tmp/all_nodes.json，跳过重新拉节点树）
import Database from "better-sqlite3";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DB_PATH = path.join(ROOT, "data", "app.db");
const SPACE = "7679833414740003785";
const USE_CACHE = process.argv.includes("--cache");
const CACHE = "/tmp/all_nodes.json";

function listNodes(parent) {
  let cmd = `lark-cli wiki +node-list --space-id ${SPACE} --as user --format json`;
  if (parent) cmd += ` --parent-node-token ${parent}`;
  const out = execSync(cmd, {
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
    timeout: 60000,
  });
  const j = JSON.parse(out);
  return (j.data && j.data.nodes) || [];
}

function collect() {
  const all = [];
  const seen = new Set();
  function rec(parent, level) {
    const nodes = listNodes(parent);
    for (const n of nodes) {
      if (seen.has(n.node_token)) continue;
      seen.add(n.node_token);
      all.push({
        token: n.node_token,
        title: n.title,
        parent: parent || "",
        level,
        hasChild: !!n.has_child,
        objType: n.obj_type,
        nodeType: n.node_type,
      });
      if (n.has_child) rec(n.node_token, level + 1);
    }
  }
  rec("", 1);
  return all;
}

function fetchMd(token) {
  const url = `https://www.feishu.cn/wiki/${token}`;
  const cmd = `lark-cli docs +fetch --doc ${url} --doc-format markdown --as user --format json`;
  try {
    const out = execSync(cmd, {
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 90000,
    });
    const j = JSON.parse(out);
    return (j.data && j.data.document && j.data.document.content) || "";
  } catch (e) {
    return "";
  }
}

function main() {
  let all;
  if (USE_CACHE && fs.existsSync(CACHE)) {
    all = JSON.parse(fs.readFileSync(CACHE, "utf8"));
    console.log("loaded", all.length, "nodes from cache");
  } else {
    all = collect();
    console.log("collected", all.length, "nodes from feishu");
  }

  const byToken = {};
  all.forEach((n) => (byToken[n.token] = n));
  function topAncestorTitle(n) {
    let cur = n;
    while (cur.parent && byToken[cur.parent]) cur = byToken[cur.parent];
    return cur.title;
  }
  function categoryOf(n) {
    return n.level === 1 ? "AI知识库" : topAncestorTitle(n);
  }

  const db = new Database(DB_PATH);
  // 只清掉「飞书来源」(含旧 NULL) 的行，手动加的 extra 课程保留
  db.exec("DELETE FROM courses WHERE source='feishu' OR source IS NULL");
  const ins = db.prepare(
    `INSERT INTO courses
      (slug,title,category,feishuUrl,parent_node_token,node_level,has_child,isMemberOnly,isFile,content,orderVal,source)
     VALUES (?,?,?,?,?,?,?,0,?,?,?,?)`
  );
  let docCount = 0;
  let fileCount = 0;
  const tx = db.transaction(() => {
    all.forEach((n, i) => {
      const isFile = !!(n.objType && n.objType !== "docx");
      let content = "";
      if (!isFile) content = fetchMd(n.token);
      if (content) docCount++;
      else fileCount++;
      ins.run(
        n.token,
        n.title,
        categoryOf(n),
        `https://www.feishu.cn/wiki/${n.token}`,
        n.parent,
        n.level,
        n.hasChild ? 1 : 0,
        isFile ? 1 : 0,
        content,
        i + 1,
        "feishu"
      );
    });
  });
  tx();
  console.log(
    `synced: total=${all.length} docs=${docCount} files=${fileCount}`
  );

  // 飞书树之外的结构调整：把散落的根级文档收进指定分组（全量重拉后自动重放）
  const POST_SYNC_MOVES = [
    {
      // WorkBuddy+Hermes+飞书 CLI / Workbuddy+Obsidian / 辅导孩子 → workbuddy加餐
      slugs: [
        "EqUUwbVgkiv03bkXWHCcchyOn4y",
        "VLjnwHRUviEdmCk8nkgcfOlbnec",
        "AAflwVLxAiqe8wk0CDmceEhanPh",
      ],
      parent: "YFrVwW41via3OvkwljGcmAR1nWc",
      baseOrder: 30, // 加餐现有子节点 orderVal 22-29，接在其后
    },
  ];
  const upd = db.prepare(
    "UPDATE courses SET parent_node_token=?, node_level=2, orderVal=? WHERE slug=? AND source='feishu'"
  );
  for (const mv of POST_SYNC_MOVES) {
    mv.slugs.forEach((slug, idx) => {
      const r = upd.run(mv.parent, mv.baseOrder + idx, slug);
      if (r.changes === 0) console.warn(`POST_SYNC_MOVE: 未找到 ${slug}`);
    });
    db.prepare("UPDATE courses SET has_child=1 WHERE slug=? AND source='feishu'").run(mv.parent);
  }

  // 隐藏名单：内容无用、用户要求从站内移除的飞书节点。
  // 写在这里而不是只删库，是为了全量重跑 sync-courses.mjs 后这些节点不会复活。
  // 名单存 scripts/hidden-courses.json，apply-hide.mjs 读同一份，保证两处一致。
  const hidePath = path.join(ROOT, "scripts", "hidden-courses.json");
  const hidden = fs.existsSync(hidePath)
    ? JSON.parse(fs.readFileSync(hidePath, "utf8"))
    : [];
  const del = db.prepare("DELETE FROM courses WHERE slug=?");
  for (const h of hidden) {
    // 连同子树一并删除，避免留下孤儿节点
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
    console.log(`POST_SYNC_HIDE: 隐藏 ${h.slug}（${h.reason || "无理由"}），共删 ${n} 行`);
  }

  // 飞书上传的文件（.docx/.html 等）本地化后的正文：把内容还原到对应节点，
  // 并把 isFile 置 0，避免只剩「在飞书打开」的跳转。
  // 映射存 scripts/file-contents.json，import_workbench.mjs 生成，两处保持一致。
  const fileContentsPath = path.join(ROOT, "scripts", "file-contents.json");
  if (fs.existsSync(fileContentsPath)) {
    const map = JSON.parse(fs.readFileSync(fileContentsPath, "utf8"));
    const updContent = db.prepare(
      "UPDATE courses SET content=?, isFile=0 WHERE slug=?"
    );
    let n = 0;
    for (const [slug, rel] of Object.entries(map)) {
      const p = path.join(ROOT, "scripts", rel);
      if (!fs.existsSync(p)) {
        console.warn(`FILE_CONTENT: 缺少 ${rel}`);
        continue;
      }
      n += updContent.run(fs.readFileSync(p, "utf8"), slug).changes;
    }
    console.log(`file contents restored: ${n}`);
  }

  // 补录「飞书之外」手动课程（不会被上面的 DELETE 清掉）
  const extraPath = path.join(ROOT, "scripts", "extra-courses.json");
  if (fs.existsSync(extraPath)) {
    const extras = JSON.parse(fs.readFileSync(extraPath, "utf8"));
    let extraCount = 0;
    const tx2 = db.transaction(() => {
      extras.forEach((e) => {
        const mdPath = path.join(ROOT, "scripts", e.contentFile);
        const content = fs.existsSync(mdPath)
          ? fs.readFileSync(mdPath, "utf8")
          : "";
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
        extraCount++;
      });
    });
    tx2();
    console.log(`extra courses: ${extraCount}`);
  }
}

main();
