/**
 * 手动添加单个 skill（从 GitHub 仓库）。
 * 用法见文件末尾调用。
 */
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const db = new Database(path.join(ROOT, "data", "app.db"));

const record = {
  slug: "xhs-visual-director",
  title: "小红书视觉导演 Skill",
  summary:
    "小红书图文视觉规划助手：先用苏格拉底式提问问清需求，再输出 3:4 多页图文结构、逐页视觉方案、图像生成提示词、发布文案和自检清单，内置 24 种视觉风格库。",
  category: "内容创作与运营",
  tags: JSON.stringify(["小红书", "图文", "视觉", "封面", "开源", "1.4k star"]),
  coverUrl: "",
  isMemberOnly: 0,
  installGuide: `1. 克隆或下载仓库：
   git clone https://github.com/ziguishian/xhs-visual-director-skill.git
2. 把仓库中的 skill/ 目录作为 Skill 目录使用
   （skill/SKILL.md + skill/agents/openai.yaml 是 Skill 主体，
    仓库根目录的 docs/、templates/、examples/ 是维护和扩展资料）。
3. 在 Agent 中引用该 Skill 后，输入你的选题或草稿即可开始。

也可以直接把整个仓库克隆到你的 skills 目录，然后向Agent 输入选题开始使用。`,
  repoUrl: "https://github.com/ziguishian/xhs-visual-director-skill",
  previewImages: "[]",
  downloadFile: "",
  metricLabel: "GitHub Stars",
  metricValue: 1420,
  cardValue:
    "不是普通文案助手，而是一个「视觉导演」：先把选题问清楚，再规划整套小红书图文视觉方案，避免 AI 模板感。",
  bestFor: JSON.stringify([
    "小红书图文创作者需要成套的图文视觉规划",
    "AI / Vibe Coding / Agent 类技术内容的视觉表达",
    "个人品牌经营者的内容视觉体系沉淀",
    "把草稿、截图、PPT、产品图重做成高级图文",
    "封面不够抓人、内页缺少收藏价值的改版",
  ]),
  highlights: JSON.stringify([
    "先用苏格拉底式提问法问 10 个问题，真正问清客户需求再动手",
    "输出三套风格方案 + 推荐方案，并给出不推荐风格的理由",
    "先生成 1 张样例图确认，再生成整套最终图片，避免返工",
    "内置 24 种视觉风格库，3:4 小红书画幅，移动端可读性优先",
    "完整交付：图文结构 + 统一视觉母版 + 逐页提示词 + 标题正文标签评论引导 + 自检清单",
    "提供视觉一致性协议与反模式清单，主动避开廉价 AI 模板感",
  ]),
  cardFit: "",
  sourceRepo: "ziguishian/xhs-visual-director-skill",
  sourceSite: "self",
  orderVal: 0,
};

const cols = [
  "slug", "title", "summary", "category", "tags", "coverUrl", "isMemberOnly",
  "installGuide", "repoUrl", "previewImages", "downloadFile",
  "metricLabel", "metricValue", "cardValue", "bestFor", "highlights",
  "cardFit", "sourceRepo", "sourceSite", "orderVal",
];
const ph = cols.map((c) => "@" + c).join(",");
const ins = db.prepare(
  `INSERT OR REPLACE INTO skills (${cols.join(",")}) VALUES (${ph})`
);

const records = [record, {
  slug: "xhs-topic-analyzer",
  title: "小红书选题分析助手（浏览器插件）",
  summary:
    "Chrome 浏览器插件：在小红书笔记页一键提取标题正文，调 DeepSeek 从选题定位、亮点短板、延展方向、风险提醒 5 个维度分析选题质量，支持暂存 100 条并批量导出 11 列 Excel。",
  category: "内容创作与运营",
  tags: JSON.stringify([
    "小红书", "选题", "浏览器插件", "DeepSeek", "竞品分析", "需APIKey",
  ]),
  coverUrl: "",
  isMemberOnly: 0,
  installGuide: `1. 克隆或下载仓库：
   git clone https://github.com/antonia-sz/xhs-topic-analyzer.git
2. 复制 config.example.js 为 config.js，填入你的 DeepSeek API Key：
   const CONFIG = {
     API_URL: 'https://api.deepseek.com/chat/completions',
     API_KEY: 'sk-xxxxxxxx'
   };
   （API Key 在 https://platform.deepseek.com/ 申请；config.js 已被 .gitignore 忽略，不会提交）
3. 打开 Chrome 访问 chrome://extensions/，开启右上角「开发者模式」
4. 点击「加载已解压的扩展程序」，选择本插件文件夹
5. 在小红书笔记详情页点击工具栏插件图标，打开侧边栏使用`,
  repoUrl: "https://github.com/antonia-sz/xhs-topic-analyzer",
  previewImages: "[]",
  downloadFile: "",
  metricLabel: "GitHub Stars",
  metricValue: 10,
  cardValue:
    "在浏览器里直接分析你在看的小红书笔记选题：自动提取标题正文，AI 从 5 个维度给出选题诊断，批量导出 Excel 做竞品对比。",
  bestFor: JSON.stringify([
    "拆解爆款笔记的选题逻辑",
    "发布前自查自己选题的质量与短板",
    "寻找同赛道的可延展选题方向",
    "批量收集同类笔记的分析结果做横向对比",
    "小红书内容竞品选题库积累",
  ]),
  highlights: JSON.stringify([
    "5 个分析维度：笔记内容概括与关键词、选题定位、亮点与短板、可延展选题、风险提醒",
    "调用 DeepSeek 分析（需自备 API Key，非官方插件）",
    "暂存区最多 100 条，用 chrome.storage.local 本地持久化，不上传",
    "批量导出 11 列 Excel：标题、链接、分析时间、概括、关键词、内容类型、目标人群、亮点、短板、延展选题、风险提醒",
    "导出文件自动命名「选题分析_YYYYMMDD_x篇笔记.xlsx」",
    "注意：这是 Chrome 插件，不是 Agent Skill，无法用 /命令 调用",
  ]),
  cardFit: "",
  sourceRepo: "antonia-sz/xhs-topic-analyzer",
  sourceSite: "self",
  orderVal: 0.5,
}];
for (const r of records) ins.run(r);

for (const r of records) {
  const got = db
    .prepare("SELECT slug,title,category,metricValue,repoUrl FROM skills WHERE slug=?")
    .get(r.slug);
  console.log("写入成功:", JSON.stringify(got));
}
console.log("skills 总数:", db.prepare("SELECT COUNT(*) n FROM skills").get().n);
const dup = db
  .prepare("SELECT slug,title FROM skills WHERE title LIKE '%视觉导演%'")
  .all();
console.log("同标题检查:", JSON.stringify(dup));