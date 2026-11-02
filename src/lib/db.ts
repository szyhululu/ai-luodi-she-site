import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { hashPassword } from "./auth";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "app.db");
const FILES_DIR = path.join(DATA_DIR, "files");

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(FILES_DIR, { recursive: true });

// 优先用原生 better-sqlite3（本地开发，实时读写）；线上部署用 Node 22 内置的 node:sqlite（同步、零编译、无需原生模块）。
// 两者 API 基本一致（exec / prepare / run / get / all / 命名参数），仅 pragma 调用方式略有不同，已分别适配。
const req = createRequire(import.meta.url);
let BETTER_SQLITE3: any = null;
let NODE_SQLITE: any = null;
try {
  BETTER_SQLITE3 = req("better-sqlite3");
} catch {
  BETTER_SQLITE3 = null;
}
if (!BETTER_SQLITE3) {
  try {
    NODE_SQLITE = req("node:sqlite");
  } catch {
    NODE_SQLITE = null;
  }
}

function normalizeBind(p: any[]): any {
  if (
    p.length === 1 &&
    p[0] &&
    typeof p[0] === "object" &&
    !Array.isArray(p[0])
  ) {
    const obj = p[0] as Record<string, any>;
    const out: Record<string, any> = {};
    for (const k of Object.keys(obj)) {
      out[
        k.startsWith(":") || k.startsWith("@") || k.startsWith("$") ? k : "@" + k
      ] = obj[k];
    }
    return out;
  }
  return p;
}

// 把 sql.js 的底层游标包装成与 better-sqlite3 一致的同步 API
function wrapSqlJs(db: any) {
  const api: any = {
    exec(sql: string) {
      db.exec(sql);
    },
    prepare(sql: string) {
      const stmt = db.prepare(sql);
      let done = false;
      const free = () => {
        if (!done) {
          done = true;
          stmt.free();
        }
      };
      return {
        all(...params: any[]) {
          if (params.length) stmt.bind(normalizeBind(params));
          const rows: any[] = [];
          while (stmt.step()) rows.push(stmt.getAsObject());
          free();
          return rows;
        },
        get(...params: any[]) {
          if (params.length) stmt.bind(normalizeBind(params));
          let row: any = null;
          if (stmt.step()) row = stmt.getAsObject();
          free();
          return row;
        },
        run(...params: any[]) {
          if (params.length) stmt.bind(normalizeBind(params));
          stmt.step();
          free();
          const idRes = db.exec("SELECT last_insert_rowid() AS id");
          const lastInsertRowid = idRes.length
            ? (idRes[0].values[0]?.[0] ?? 0)
            : 0;
          const chRes = db.exec("SELECT changes() AS c");
          const changes = chRes.length ? (chRes[0].values[0]?.[0] ?? 0) : 0;
          return { lastInsertRowid, changes };
        },
      };
    },
  };
  return api;
}

let _db: any = null;
let _mtime = 0;

// node:sqlite 会把某些 TEXT 列（实际以 BLOB 存储 / 含非 UTF-8 字节）返回为 Buffer，
// 而 RSC 无法序列化 Buffer，会导致页面 SSR 500；另外 node:sqlite 用 Object.create(null)
// 返回「无原型」的普通对象，RSC 同样拒绝（"null prototypes are not supported"）。
// 这里统一：① Buffer → UTF-8 字符串；② BigInt → number；③ 重建为标准原型对象。
function jsonifyRow(row: any): any {
  if (!row || typeof row !== "object" || Array.isArray(row)) return row;
  const out: Record<string, any> = {};
  for (const k of Object.keys(row)) {
    const v = row[k];
    if (v && typeof v === "object" && Buffer.isBuffer(v)) {
      out[k] = v.toString("utf8");
    } else if (typeof v === "bigint") {
      out[k] = Number(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function wrapNodeSqlite(db: any): any {
  const origPrepare = db.prepare.bind(db);
  db.prepare = (sql: string) => {
    const stmt = origPrepare(sql);
    const origAll = stmt.all.bind(stmt);
    const origGet = stmt.get.bind(stmt);
    const origRun = stmt.run.bind(stmt);
    stmt.all = (...args: any[]) => origAll(...args).map(jsonifyRow);
    stmt.get = (...args: any[]) => {
      const r = origGet(...args);
      return r ? jsonifyRow(r) : r;
    };
    stmt.run = (...args: any[]) => {
      const info = origRun(...args);
      if (info && typeof info.lastInsertRowid === "bigint")
        info.lastInsertRowid = Number(info.lastInsertRowid);
      if (info && typeof info.changes === "bigint")
        info.changes = Number(info.changes);
      return info;
    };
    return stmt;
  };
  return db;
}

function openRaw() {
  if (BETTER_SQLITE3) {
    const db = new BETTER_SQLITE3(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");
    return db;
  }
  if (NODE_SQLITE) {
    // 线上：Node 22 内置 node:sqlite（同步、零编译）。部署前需先 checkpoint WAL，确保数据完整写入主库。
    const db = new NODE_SQLITE.DatabaseSync(DB_PATH);
    db.exec("PRAGMA journal_mode = WAL");
    db.exec("PRAGMA foreign_keys = ON");
    return wrapNodeSqlite(db);
  }
  throw new Error(
    "缺少可用的 SQLite 引擎：本地需 better-sqlite3，线上需 Node 22 内置 node:sqlite"
  );
}

export function getDB(): any {
  const mtime = fs.existsSync(DB_PATH) ? fs.statSync(DB_PATH).mtimeMs : 0;
  if (!_db || _mtime !== mtime) {
    const raw = openRaw();
    _db = raw;
    _mtime = mtime;
    migrate(_db);
    seed(_db);
  }
  return _db;
}

function migrate(db: any) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT,
      isPaid INTEGER DEFAULT 0,
      paidAt TEXT,
      redeemedCode TEXT,
      role TEXT DEFAULT 'user',
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      userId INTEGER NOT NULL,
      expiresAt TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS skills (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      summary TEXT,
      category TEXT,
      tags TEXT,
      coverUrl TEXT,
      isMemberOnly INTEGER DEFAULT 1,
      installGuide TEXT,
      repoUrl TEXT,
      previewImages TEXT,
      downloadFile TEXT,
      orderVal INTEGER DEFAULT 0,
      createdAt TEXT DEFAULT (datetime('now')),
      updatedAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS workflows (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      scenario TEXT,
      coverUrl TEXT,
      tags TEXT,
      steps TEXT,
      sourceFile TEXT,
      isMemberOnly INTEGER DEFAULT 1,
      orderVal INTEGER DEFAULT 0,
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS tools (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      cardValue TEXT,
      summary TEXT,
      category TEXT,
      categoryAll TEXT,
      tags TEXT,
      url TEXT,
      altUrl TEXT,
      altLabel TEXT,
      domain TEXT,
      bestFor TEXT,
      highlights TEXT,
      hero TEXT,
      addedAt TEXT,
      sourceSite TEXT,
      isFeatured INTEGER DEFAULT 0,
      orderVal INTEGER DEFAULT 0,
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT NOT NULL,
      sizeKB INTEGER DEFAULT 0,
      category TEXT,
      url TEXT,
      downloadCount INTEGER DEFAULT 0,
      isMemberOnly INTEGER DEFAULT 1,
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS redeem_codes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code TEXT UNIQUE NOT NULL,
      status TEXT DEFAULT 'unsold',
      soldAt TEXT,
      soldTo TEXT,
      usedBy INTEGER,
      usedAt TEXT,
      plan TEXT DEFAULT 'lifetime',
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      orderNo TEXT UNIQUE NOT NULL,
      userId INTEGER,
      amount INTEGER DEFAULT 68,
      channel TEXT DEFAULT 'wechat',
      status TEXT DEFAULT 'pending',
      assignedCode TEXT,
      paidAt TEXT,
      note TEXT,
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      summary TEXT,
      category TEXT,
      feishuUrl TEXT,
      coverUrl TEXT,
      isMemberOnly INTEGER DEFAULT 1,
      orderVal INTEGER DEFAULT 0,
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      summary TEXT,
      source TEXT,
      category TEXT,
      url TEXT,
      originalUrl TEXT,
      publishedAt TEXT,
      sourceSite TEXT DEFAULT 'aihot',
      fetchedAt TEXT DEFAULT (datetime('now')),
      orderVal INTEGER DEFAULT 0
    );
  `);
  // 兼容旧库：补 soldTo 列（已存在则忽略）
  try {
    db.exec("ALTER TABLE redeem_codes ADD COLUMN soldTo TEXT");
  } catch {}
  // 兼容旧库：补 courses 表（已存在则忽略）
  try {
    db.exec(
      `CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        summary TEXT,
        category TEXT,
        feishuUrl TEXT,
        coverUrl TEXT,
        isMemberOnly INTEGER DEFAULT 0,
        orderVal INTEGER DEFAULT 0,
        createdAt TEXT DEFAULT (datetime('now'))
      )`
    );
  } catch {}
  // 兼容旧库：courses 表新增层级与内容缓存字段
  [
    "ALTER TABLE courses ADD COLUMN parent_node_token TEXT",
    "ALTER TABLE courses ADD COLUMN node_level INTEGER DEFAULT 1",
    "ALTER TABLE courses ADD COLUMN has_child INTEGER DEFAULT 0",
    "ALTER TABLE courses ADD COLUMN content TEXT",
    "ALTER TABLE courses ADD COLUMN content_html TEXT",
    "ALTER TABLE courses ADD COLUMN isFile INTEGER DEFAULT 0",
    "ALTER TABLE courses ADD COLUMN fetchedAt TEXT",
    "ALTER TABLE courses ADD COLUMN source TEXT DEFAULT 'feishu'",
  ].forEach((sql) => {
    try {
      db.exec(sql);
    } catch {}
  });
}

function seed(db: any) {
  const userCount = (db.prepare("SELECT COUNT(*) c FROM users").get() as any).c;
  if (userCount > 0) return;

  // admin
  db.prepare(
    "INSERT INTO users (email, password, isPaid, role) VALUES (?, ?, 1, 'admin')"
  ).run("admin@site.local", hashPassword("admin123"));

  // sample skills
  const skills = [
    {
      slug: "photo-diorama-poster",
      title: "微缩景观海报生成 Skill",
      summary: "一句话生成立体微缩模型风格海报，支持图生图与多平台适配。",
      category: "图像创作",
      tags: JSON.stringify(["海报", "图像", "开源"]),
      coverUrl: "",
      installGuide:
        "1. 下载安装包解压；\n2. 放到 WorkBuddy skills 目录；\n3. 在对话中输入 /photo-diorama-poster 调用。",
      repoUrl: "https://github.com/szyhululu/photo-diorama-poster",
      previewImages: JSON.stringify([]),
      downloadFile: "skill-photo-diorama-poster.zip",
      orderVal: 1,
    },
    {
      slug: "xhs-title-scorer",
      title: "小红书标题打分 Skill",
      summary: "输入标题，按点击率、情绪钩子、关键词给出评分与改写建议。",
      category: "内容运营",
      tags: JSON.stringify(["小红书", "标题", "运营"]),
      coverUrl: "",
      installGuide: "下载后放入 skills 目录，调用 /xhs-title-score 使用。",
      repoUrl: "",
      previewImages: JSON.stringify([]),
      downloadFile: "skill-xhs-title-scorer.zip",
      orderVal: 2,
    },
    {
      slug: "prompt-enhancer",
      title: "提示词增强器 Skill",
      summary: "把粗糙需求改写成结构化、可复用的高质量提示词。",
      category: "提示词",
      tags: JSON.stringify(["提示词", "效率"]),
      coverUrl: "",
      installGuide: "放入 skills 目录，调用 /prompt-enhancer。",
      repoUrl: "",
      previewImages: JSON.stringify([]),
      downloadFile: "skill-prompt-enhancer.zip",
      orderVal: 3,
    },
  ];
  // 用 INSERT OR IGNORE：库里可能已经导入过全量内容（slug 冲突时跳过，而不是抛错）
  const insSkill = db.prepare(
    `INSERT OR IGNORE INTO skills (slug,title,summary,category,tags,coverUrl,isMemberOnly,installGuide,repoUrl,previewImages,downloadFile,orderVal)
     VALUES (@slug,@title,@summary,@category,@tags,@coverUrl,0,@installGuide,@repoUrl,@previewImages,@downloadFile,@orderVal)`
  );
  skills.forEach((s) => insSkill.run(s));

  // sample workflows
  const wf = [
    {
      slug: "ai-newsletter-3day",
      title: "3 天上线一个 AI Newsletter",
      scenario: "用 Codex/WorkBuddy 从 0 搭一个自动采集+生成的资讯产品。",
      tags: JSON.stringify(["Codex", "自动化", "产品"]),
      steps: JSON.stringify([
        { title: "第1天：定主题与采集源", desc: "列出 3-5 个 RSS/搜索源", prompt: "帮我列出 AI 资讯的 5 个高质量采集源，并说明筛选标准。" },
        { title: "第2天：写生成流水", desc: "用 Agent 跑二创长文", prompt: "把以下素材改写为一篇 800 字二创长文，保留来源链接。" },
        { title: "第3天：部署与推送", desc: "定时任务 + 推送到飞书/邮件", prompt: "写一个每日 9 点执行的 cron，抓取并推送。" },
      ]),
      sourceFile: "wf-ai-newsletter-3day.zip",
      orderVal: 1,
    },
    {
      slug: "xhs-note-pipeline",
      title: "小红书笔记生产流水线",
      scenario: "选题 → 标题 → 正文 → 配图一气呵成。",
      tags: JSON.stringify(["小红书", "内容"]),
      steps: JSON.stringify([
        { title: "选题", desc: "基于热点与人群选方向", prompt: "给女性 AI 创业人群列 10 个选题。" },
        { title: "正文", desc: "实操干货风格", prompt: "写一篇 600 字小红书笔记，避免鸡汤。" },
      ]),
      sourceFile: "wf-xhs-note-pipeline.zip",
      orderVal: 2,
    },
  ];
  const insWf = db.prepare(
    `INSERT OR IGNORE INTO workflows (slug,title,scenario,coverUrl,tags,steps,sourceFile,isMemberOnly,orderVal)
     VALUES (@slug,@title,@scenario,'',@tags,@steps,@sourceFile,1,@orderVal)`
  );
  wf.forEach((w) => insWf.run(w));

  // sample resources
  const res = [
    { filename: "AI基础提示词包.md", sizeKB: 42, category: "提示词", url: "AI基础提示词包.md" },
    { filename: "全栈学习资料总览.pdf", sizeKB: 880, category: "资料", url: "全栈学习资料总览.md" },
  ];
  const insRes = db.prepare(
    `INSERT INTO resources (filename,sizeKB,category,url,isMemberOnly) VALUES (@filename,@sizeKB,@category,@url,1)`
  );
  // resources 表没有唯一键，先判空避免重复插入
  const resCount = (db.prepare("SELECT COUNT(*) c FROM resources").get() as any).c;
  if (resCount === 0) res.forEach((r) => insRes.run(r));

  // sample files（已存在则跳过，避免覆盖克隆者自己的文件）
  const writeIfAbsent = (name: string, content: string) => {
    const p = path.join(FILES_DIR, name);
    if (!fs.existsSync(p)) fs.writeFileSync(p, content);
  };
  writeIfAbsent(
    "skill-photo-diorama-poster.zip",
    "这是 photo-diorama-poster 技能安装包的占位文件（演示用）。正式版请替换为真实安装包。\n"
  );
  writeIfAbsent("skill-xhs-title-scorer.zip", "占位：小红书标题打分 skill 安装包。\n");
  writeIfAbsent("skill-prompt-enhancer.zip", "占位：提示词增强器 skill 安装包。\n");
  writeIfAbsent("wf-ai-newsletter-3day.zip", "占位：AI Newsletter 工作流源文件。\n");
  writeIfAbsent("wf-xhs-note-pipeline.zip", "占位：小红书笔记流水线源文件。\n");
  writeIfAbsent(
    "AI基础提示词包.md",
    "# AI 基础提示词包\n\n1. 角色设定：你是一名资深 AI 产品经理……\n2. 结构化输出模板……\n"
  );
  writeIfAbsent(
    "全栈学习资料总览.md",
    "# 全栈学习资料总览\n\n包含：Skills 汇总、AI 工作流、提示词与基础资料。\n"
  );

  // redeem codes
  const insCode = db.prepare(
    "INSERT INTO redeem_codes (code, status, plan) VALUES (?, 'unsold', 'lifetime')"
  );
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  for (let i = 0; i < 20; i++) {
    let c = "LEARN68-";
    for (let j = 0; j < 6; j++)
      c += chars[Math.floor(Math.random() * chars.length)];
    insCode.run(c);
  }
}

// 课程数据由 scripts/sync-courses.mjs 从飞书「AI知识库」同步填充（见 package.json 的 sync:courses）。
// 不在代码中硬编码种子，以便随时从飞书刷新。
