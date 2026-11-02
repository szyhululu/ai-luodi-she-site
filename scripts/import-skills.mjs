// 把 skills.qiaomu.ai 的 333 个 skill 重组为「需求导向」分类后入库。
// 数据源：scripts/data/qiaomu_skills.json（已抓取到本地，可重跑）
// 输出：scripts/data/skills-normalized.json（归一化清单）+ 写入 data/app.db 的 skills 表
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const raw = JSON.parse(
  fs.readFileSync(path.join(ROOT, "scripts/data/qiaomu_skills.json"), "utf8")
);

// 33 个源分类 → 8 个需求导向大类
const DEMAND_MAP = {
  // 内容创作与运营
  "营销增长": "内容创作与运营",
  "销售与营销": "内容创作与运营",
  "商业": "内容创作与运营",
  "乔木内容与发布": "内容创作与运营",
  // 图像与视觉设计
  "设计与 UI": "图像与视觉设计",
  "乔木视觉与网页": "图像与视觉设计",
  // 音视频创作
  "乔木音视频": "音视频创作",
  // 编程与开发
  "前端与 React": "编程与开发",
  "Next.js": "编程与开发",
  "移动端开发": "编程与开发",
  "开发": "编程与开发",
  "架构模式": "编程与开发",
  "Git 工作流": "编程与开发",
  "调试工具": "编程与开发",
  "代码质量": "编程与开发",
  "乔木开发与部署": "编程与开发",
  "DevOps": "编程与开发",
  "系统管理": "编程与开发",
  // AI 与 Agent 工作流
  "Agent 工作流": "AI 与 Agent 工作流",
  "LLM 与 AI": "AI 与 Agent 工作流",
  "数据与 AI": "AI 与 Agent 工作流",
  "乔木 Agent 工作流": "AI 与 Agent 工作流",
  // 数据分析与科研
  "数据库": "数据分析与科研",
  "乔木阅读研究": "数据分析与科研",
  "金融与投资": "数据分析与科研",
  // 效率与办公
  "生产力工具": "效率与办公",
  "文档处理": "效率与办公",
  "项目管理": "效率与办公",
  "工具": "效率与办公",
  "乔木效率工具": "效率与办公",
  // 测试与安全
  "测试验证": "测试与安全",
  "测试与安全": "测试与安全",
  "测试": "测试与安全",
};

function demandOf(catName) {
  return DEMAND_MAP[catName] || "效率与办公";
}

// 分类名归一（去掉「社区/乔木」前缀便于展示，但保留原始用于标签）
function plainCat(catName) {
  return catName.replace(/^社区/, "").replace(/^乔木/, "");
}

function slugify(id) {
  return id
    .toLowerCase()
    .replace(/[:/]+/g, "-")
    .replace(/[^a-z0-9一-龥-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const seen = new Map();
function uniqueSlug(base) {
  let s = base;
  let i = 2;
  while (seen.has(s)) s = `${base}-${i++}`;
  seen.set(s, true);
  return s;
}

const rows = [];
let skippedNoRepo = 0;
let skippedBranded = 0;
// 站内不展示标题带「qiaomu-」品牌前缀的条目（源数据里是 qiaomu 站点自带的 root 集合，
// 展示出来标题冗余。用户 2026-10-23 要求全部删除）
const BRAND_PREFIX = "qiaomu-";
for (const sk of raw.skills) {
  // 无来源仓库链接的条目不收录（详情页需可追溯到仓库）
  if (!sk.githubUrl || !String(sk.githubUrl).trim()) {
    skippedNoRepo++;
    continue;
  }
  if (String(sk.name || "").toLowerCase().startsWith(BRAND_PREFIX)) {
    skippedBranded++;
    continue;
  }
  const demand = demandOf(sk.categoryName);
  const slug = uniqueSlug(slugify(sk.id));
  const tags = JSON.stringify([
    plainCat(sk.categoryName),
    sk.source || "",
    ...(sk.isOfficial ? ["官方"] : []),
  ].filter(Boolean));
  rows.push({
    slug,
    title: sk.name,
    summary: sk.summaryZh || sk.description || "",
    category: demand,
    tags,
    coverUrl: "",
    isMemberOnly: 0, // 公共开源 skill，全部免费
    installGuide: sk.installCommand || "",
    repoUrl: sk.githubUrl || "",
    previewImages: "",
    downloadFile: "",
    metricLabel: sk.metricLabel || "",
    metricValue: sk.metricValue || 0,
    cardValue: sk.cardValueZh || sk.summaryZh || "",
    bestFor: JSON.stringify(sk.bestFor || []),
    highlights: JSON.stringify(sk.highlightsZh || []),
    cardFit: sk.cardFitZh || "",
    sourceRepo: sk.githubRepo || sk.source || "",
    orderVal: 0, // 下面按需求分类+热度重排
  });
}

// 每个需求分类内按热度（metricValue）降序排，赋 orderVal
const byCat = {};
for (const r of rows) (byCat[r.category] = byCat[r.category] || []).push(r);
for (const cat of Object.keys(byCat)) {
  byCat[cat]
    .sort((a, b) => b.metricValue - a.metricValue)
    .forEach((r, i) => (r.orderVal = i + 1));
}

// 写入归一化清单
fs.writeFileSync(
  path.join(ROOT, "scripts/data/skills-normalized.json"),
  JSON.stringify(rows, null, 2) + "\n",
  "utf8"
);

// 入库
const db = new Database(path.join(ROOT, "data/app.db"));

// 清掉历史遗留的品牌前缀条目（导入是 INSERT OR REPLACE，不会自己删旧行）
const purged = db
  .prepare("DELETE FROM skills WHERE lower(title) LIKE ?")
  .run(BRAND_PREFIX + "%");
if (purged.changes) console.log(`purged ${purged.changes} branded skills`);

const cols = db.prepare("PRAGMA table_info(skills)").all().map((c) => c.name);
const add = (name, type) => {
  if (!cols.includes(name)) {
    db.prepare(`ALTER TABLE skills ADD COLUMN ${name} ${type}`).run();
    cols.push(name);
  }
};
add("metricLabel", "TEXT");
add("metricValue", "INTEGER");
add("cardValue", "TEXT");
add("bestFor", "TEXT");
add("highlights", "TEXT");
add("cardFit", "TEXT");
add("sourceRepo", "TEXT");
add("originalName", "TEXT");
add("sourceSite", "TEXT");

const ins = db.prepare(`
  INSERT OR REPLACE INTO skills
    (slug,title,summary,category,tags,coverUrl,isMemberOnly,installGuide,repoUrl,previewImages,downloadFile,
     metricLabel,metricValue,cardValue,bestFor,highlights,cardFit,sourceRepo,sourceSite,orderVal)
  VALUES
    (@slug,@title,@summary,@category,@tags,@coverUrl,@isMemberOnly,@installGuide,@repoUrl,@previewImages,@downloadFile,
     @metricLabel,@metricValue,@cardValue,@bestFor,@highlights,@cardFit,@sourceRepo,@sourceSite,@orderVal)
`);
const tx = db.transaction(() => {
  for (const r of rows) ins.run({ ...r, sourceSite: "qiaomu" });
});
tx();

// 保留站点自有 skill，并入需求分类，且排到各自分类最前
// 注：
//   - xhs-title-scorer（小红书标题打分）已下架 —— 依赖红狐 API Key，运行不稳定
//   - prompt-enhancer（提示词增强器）已下架 —— 无来源仓库链接
const own = [
  { slug: "photo-diorama-poster", category: "图像与视觉设计", orderVal: 0 },
];
const upd = db.prepare(
  "UPDATE skills SET category=?, orderVal=?, sourceSite='self', sourceRepo=COALESCE(NULLIF(sourceRepo,''),'自制 · AI落地社出品') WHERE slug=?"
);
for (const o of own) upd.run(o.category, o.orderVal, o.slug);

console.log(
  `imported: ${rows.length} skills across ${
    new Set(rows.map((r) => r.category)).size
  } demand categories (skipped ${skippedNoRepo} without repoUrl, ${skippedBranded} qiaomu-branded)`
);
console.log("total skills now:", db.prepare("SELECT COUNT(*) n FROM skills").get().n);
const byC = {};
rows.forEach((r) => (byC[r.category] = (byC[r.category] || 0) + 1));
Object.entries(byC)
  .sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => console.log(`  ${v} | ${k}`));
