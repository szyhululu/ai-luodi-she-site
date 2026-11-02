// 临时录入脚本：把用户指定的 3 个视频类 Agent Skill 加入 skills 表，
// 分类固定为「内容创作与运营」（用户已确认：已有的 HyperFrames/Remotion/Manim
// 留在「音视频创作」，本次只新增这 3 个）。
// 数据来源：各项目 GitHub 仓库（2026-10-28 核实）。
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const db = new Database(path.join(ROOT, "data", "app.db"));

const records = [
  {
    slug: "ffmpeg-skill",
    title: "FFmpeg Skill：本地视频剪辑引擎",
    summary:
      "给编程 Agent 的本地视频剪辑引擎：42 个 FFmpeg 工具 + 机器可读契约 + MCP 服务。覆盖剪切、拼接、静音去除、重构图与画幅、字幕与卡拉OK、叠加与动效、HDR→SDR、响度与平台导出。探针→无损剪辑→校验→验证的固定工作流，本地离线、无需云端、无需 API Key。",
    category: "内容创作与运营",
    tags: JSON.stringify(["视频剪辑", "FFmpeg", "MCP", "本地离线", "开源"]),
    coverUrl: "",
    isMemberOnly: 0,
    installGuide:
      "npx skills add kajisho5/ffmpeg-skill\n\n或手动安装：\n1. git clone https://github.com/kajisho5/ffmpeg-skill.git\n2. 进入目录，依赖仅用 Python 标准库 + 本机 FFmpeg\n3. 在 Claude Code / Cursor / Codex 等支持的 Agent 中引用该 Skill\n（需要本机已安装 ffmpeg 与 python3，全程离线）",
    repoUrl: "https://github.com/kajisho5/ffmpeg-skill",
    previewImages: "[]",
    downloadFile: "",
    metricLabel: "GitHub Stars",
    metricValue: 2100,
    cardValue:
      "把 FFmpeg 封装成 Agent 能直接调用的 42 个结构化工具 + MCP 服务，本地离线剪辑、加字幕、调响度、做平台导出，全程不依赖任何云端 API 或 Key。",
    bestFor: JSON.stringify([
      "用自然语言让 Agent 剪视频、去静音、改画幅",
      "给视频批量加字幕、做卡拉OK歌词特效",
      "本地离线处理不想上传云端的素材",
      "需要可校验、可复现的确定性剪辑结果",
    ]),
    highlights: JSON.stringify([
      "42 个工具覆盖剪切/拼接/静音/重构图/字幕/响度/平台导出",
      "每个工具同时是 MCP 工具，支持 tools/list 按需暴露",
      "用 SPEC 契约自动从 argparse 生成输入 schema，CI 校验防漂移",
      "固定工作流：探针→无损剪辑→校验→验证，Agent 还能自查输出",
      "纯 Python 标准库 + 本机 FFmpeg，无云端、无 API Key",
    ]),
    cardFit: "",
    sourceRepo: "kajisho5/ffmpeg-skill",
    sourceSite: "kajisho5",
    orderVal: 1,
  },
  {
    slug: "openmontage",
    title: "OpenMontage：开源 Agentic 视频生产系统",
    summary:
      "首个开源的 agentic 视频生产系统，把 AI 编程助手（Claude Code、Cursor、Copilot、Codex 等）变成制片人。描述一句需求，Agent 自动完成调研、写带导演提示的脚本、找素材、剪辑、合成成片；支持真实素材库与 AI 生成素材混合，本地优先、开源，还带成本预估与多维度自检。官网 openmontage.video。",
    category: "内容创作与运营",
    tags: JSON.stringify(["视频生产", "Agent工作流", "AI视频", "本地优先", "开源"]),
    coverUrl: "",
    isMemberOnly: 0,
    installGuide:
      "git clone https://github.com/calesthio/OpenMontage.git\ncd OpenMontage\nmake setup\n\n然后在 Claude Code / Cursor / Copilot / Codex 等支持的 Agent 中，用自然语言描述你要的视频即可。\n前置：Python 3.10+ · FFmpeg · Node.js 18+",
    repoUrl: "https://github.com/calesthio/OpenMontage",
    previewImages: "[]",
    downloadFile: "",
    metricLabel: "GitHub Stars",
    metricValue: 52000,
    cardValue:
      "把 AI 编程助手变成视频制片厂——一句话描述需求，Agent 自动完成从调研、脚本、素材、剪辑到合成出片的全流程；内置自检与成本预估，本地优先、完全开源。",
    bestFor: JSON.stringify([
      "用一句话生成科普动画 / 纪录短片 / 产品片",
      "参考一个 YouTube 短视频，做出同风格的衍生内容",
      "把长视频（播客、讲座）切成十几条社交短片",
      "团队标准化的「研究→提案→审批→成片」视频流水线",
    ]),
    highlights: JSON.stringify([
      "首个开源 agentic 视频生产系统，让 Agent 当制片人",
      "完整流水线：调研→提案→脚本→场景→素材→剪辑→合成",
      "真实素材（Pexels/Pixabay/Archive.org）与 AI 生成素材可混合",
      "成本预估 + 7 维度评分 + 可审计决策日志 + 多 provider",
      "本地优先架构，核心流程不依赖云端；支持本地 GPU 免费渲染",
    ]),
    cardFit: "",
    sourceRepo: "calesthio/OpenMontage",
    sourceSite: "calesthio",
    orderVal: 2,
  },
  {
    slug: "video-use",
    title: "Video-Use：对话式视频剪辑 Agent",
    summary:
      "browser-use 团队出品的视频剪辑技能，把剪辑变成与 AI 编程 Agent 的对话：把素材丢进文件夹，让 Claude Code 剪出成片。通过「转录文本 + 按需可视化」做剪辑决策（而非让模型逐帧看视频），自动去填充词、调色、音频淡入淡出、烧录字幕，并内置自评估循环反复重渲染直到达标。",
    category: "内容创作与运营",
    tags: JSON.stringify(["视频剪辑", "browser-use", "Agent", "本地离线", "开源"]),
    coverUrl: "",
    isMemberOnly: 0,
    installGuide:
      "git clone https://github.com/browser-use/video-use.git ~/Developer/video-use\nln -sfn ~/Developer/video-use ~/.claude/skills/video-use   # Claude Code\n# ln -sfn ~/Developer/video-use ~/.codex/skills/video-use  # Codex\ncd ~/Developer/video-use && uv sync   # 或 pip install -e .\nbrew install ffmpeg   # 必需\ncp .env.example .env  # 填入 ELEVENLABS_API_KEY（转录用）",
    repoUrl: "https://github.com/browser-use/video-use",
    previewImages: "[]",
    downloadFile: "",
    metricLabel: "GitHub Stars",
    metricValue: 30000,
    cardValue:
      "browser-use 把「对话式剪辑」搬进 Agent——素材丢进文件夹，Agent 盘点、提策略、等你确认、渲染 final.mp4；用转录文本而非原始像素做决策，Token 成本极低，自动去口癖、调色、加字幕。",
    bestFor: JSON.stringify([
      "把访谈 / 教程 / 旅行 vlog 素材剪成分发版",
      "自动去除填充词（umm/uh）和段落间空白",
      "逐段智能调色、加字幕、做音频淡入淡出",
      "脚本化批量剪辑，团队复用同一套规则",
    ]),
    highlights: JSON.stringify([
      "LLM 不「看」视频，只读转录文本 + 按需时间轴图，Token 成本极低",
      "自动去填充词、智能调色、30ms 音频淡入淡出防爆音",
      "定制字幕烧录（默认两词大写块，可自定义）",
      "动画叠层用 HyperFrames / Remotion / Manim / PIL 并行子 Agent 生成",
      "自评估循环在每处切点校验，最多 3 轮修复重渲染",
    ]),
    cardFit: "",
    sourceRepo: "browser-use/video-use",
    sourceSite: "browser-use",
    orderVal: 3,
  },
];

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
const tx = db.transaction(() => {
  for (const r of records) ins.run(r);
});
tx();

for (const r of records) {
  const got = db
    .prepare("SELECT slug,title,category,metricValue,repoUrl FROM skills WHERE slug=?")
    .get(r.slug);
  console.log("写入成功:", JSON.stringify(got));
}
console.log("skills 总数:", db.prepare("SELECT COUNT(*) n FROM skills").get().n);
const inCat = db
  .prepare("SELECT COUNT(*) n FROM skills WHERE category='内容创作与运营'")
  .get().n;
console.log("「内容创作与运营」条目数:", inCat);
