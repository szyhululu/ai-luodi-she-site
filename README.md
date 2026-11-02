# AI落地社 · 个人网站

一个面向 AI 学习者的内容站：**知识库**（课程）、**技能**（Skills 汇总）、**工具**、**AI动态** 四大板块，带会员解锁、兑换码、订单等基础付费能力。

> Slogan：想法，不至于想

品牌主色 `#F84818`。

---

## 技术栈

| 层 | 选型 |
|---|---|
| 框架 | Next.js 14.2（App Router）+ React 18 + TypeScript |
| 样式 | Tailwind CSS 3.4 |
| 数据库 | SQLite（本地/生产双引擎，见下方说明） |
| 内容渲染 | react-markdown + remark-gfm |
| 部署 | 任意支持 Node 的环境（Vercel / 自建服务器 / Docker） |

## 目录结构

```
.
├── src/
│   ├── app/                 # App Router 路由
│   │   ├── page.tsx         # 首页
│   │   ├── courses/         # 知识库（列表 + [slug] 详情）
│   │   ├── skills/          # 技能（列表 + [slug] 详情）
│   │   ├── tools/           # 工具（外链卡片，无详情页）
│   │   ├── hot/             # AI动态（请求时实时抓取 aihot.news）
│   │   ├── pricing/ login/ admin/ resources/ workflows/
│   │   └── api/             # 认证、订单、兑换、下载等接口
│   ├── components/          # 前端组件（*Browser.tsx 为各板块筛选视图）
│   └── lib/
│       ├── db.ts            # 数据库连接 + 建表 + seed（核心）
│       ├── auth.ts          # scrypt 密码哈希 + 会话
│       ├── course-tree.ts   # 课程分组/排序
│       └── aihot.mjs        # aihot.news 抓取解析（页面与脚本共用）
├── scripts/                 # 数据导入与同步脚本
├── data/
│   ├── app.db               # SQLite 数据库（已脱敏，仅含内容数据）
│   └── files/               # 会员下载的演示文件
└── public/                  # 封面图、logo、favicon
```

## 快速开始

环境要求：**Node.js ≥ 18**（若使用内置 `node:sqlite` 则需 **≥ 22.5**）。

```bash
git clone https://github.com/szyhululu/ai-luodi-she-site.git
cd ai-luodi-she-site
npm install
npm run dev          # http://localhost:3000
```

生产构建：

```bash
npm run build
npm start
```

### 默认管理员账号

```
邮箱：admin@site.local
密码：admin123
```

> 首次启动若 `users` 表为空，`src/lib/db.ts` 的 `seed()` 会自动创建该账号并生成 20 个演示兑换码。**上线前请务必修改密码。**

## 数据库说明

项目使用 SQLite，`data/app.db` 已随仓库提供，**开箱即有完整内容**（课程 420 条、技能 364 个、工具 59 个、AI动态 184 条）。

> ⚠️ 仓库里的数据库是**脱敏版**：`users`、`sessions`、`orders`、`redeem_codes` 四张表已清空，不含任何真实用户或订单信息。

### 双引擎自适应

`src/lib/db.ts` 会按以下顺序选择驱动：

1. `better-sqlite3`（原生模块，性能最好）— 在 `optionalDependencies` 中，装不上会自动跳过；
2. Node 内置 `node:sqlite`（Node ≥ 22.5，零编译）— 兜底方案。

两者接口做了统一封装（`wrapNodeSqlite`），会自动把 `Buffer` 转成字符串、`BigInt` 转成数字、把无原型对象重建为标准对象。

> **踩坑提醒**：`node:sqlite` 返回的行是 `Object.create(null)`（无原型对象），直接传给 React Server Component 会因序列化失败导致 500，所以千万别绕过这层封装。

### 内容数据来源

| 数据 | 来源 | 脚本 |
|---|---|---|
| 课程 | 飞书知识库 / 本地 Markdown | `npm run sync:courses`、`scripts/apply-extra.mjs` |
| 技能 | atlasnote 榜单 + 手动录入 | `scripts/import_atlasnote_*.mjs`、`scripts/add-skill-*.mjs` |
| 工具 | atlasnote 工具榜 | `scripts/fetch_atlasnote_tools.mjs` |
| AI动态 | aihot.news（**请求时实时抓取**，不在数据库里固化） | `src/lib/aihot.mjs` |

## 二次开发提示

- **改文案/配色**：品牌色在 `tailwind.config.ts` 与 `src/app/globals.css`；导航项在 `src/components/Nav.tsx`。
- **加内容**：直接往 `data/app.db` 对应表插数据即可；`*Browser.tsx` 组件按 `category` 自动分组，无需改代码。
- **改板块**：四个板块页面结构高度同构（列表页 + `*Browser` 客户端筛选组件），照抄改数据源最省事。
- **AI动态**：`/hot` 是 `async` 服务端组件，每次请求实时拉取（带 10 分钟内存缓存），源站不可达时回退数据库。所以不用为了更新新闻而重新部署。

## 部署注意

1. **WAL 模式**：部署前先执行 `PRAGMA wal_checkpoint(TRUNCATE)`，否则 `app.db-wal` 里的改动不会进主库，线上会丢数据。
2. **只上传主库**：`data/app.db-wal`、`data/app.db-shm` 不要一起传。
3. 若目标环境装不了原生模块，删掉 `better-sqlite3` 即可，会自动走 `node:sqlite`。

## License

代码可自由学习与修改。站内课程/技能正文内容的版权归原作者所有，转载前请自行确认授权。
