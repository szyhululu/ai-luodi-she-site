// 下载《AI编程蓝皮书2.0》正文里的飞书图片到本地并改写 Markdown 链接。
// 为什么不用飞书原链：https://feishu.cn/file/<token> 对未登录访客会跳登录页 → 站内裂图。
// 流程：lark-cli docs +media-preview 拉原图 → sharp 压成宽≤1200 的 JPEG（q80）→ 存 public/courses/aicoding/img/
//        → 把 Markdown 里的 https://feishu.cn/file/<token> 换成 /courses/aicoding/img/<token>.jpg
// 幂等：已存在目标文件则跳过下载，可中断续跑。
// 用法：node scripts/fetch_aicoding_images.mjs
import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require(
  "/Users/songziyue/.workbuddy/binaries/node/workspace/node_modules/sharp"
);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MD_DIR = path.join(ROOT, "scripts", "aicoding");
const IMG_DIR = path.join(ROOT, "public", "courses", "aicoding", "img");
// 注意：必须用字面量 /tmp，不能用 os.tmpdir()——macOS 下后者是 /var/folders/...，
// 而 lark-cli 的 --output 白名单只允许 cwd、/tmp、~/files 三个根目录
const TMP_DIR = "/tmp/aicoding-img";
// 并发必须很低：多个 lark-cli 进程同时跑会争抢 token 缓存，报 failed_precondition
const CONCURRENCY = 1;
const MAX_WIDTH = 1200;
const QUALITY = 80;
const RETRIES = 4;

const run = (cmd, args) =>
  new Promise((resolve, reject) => {
    execFile(cmd, args, { maxBuffer: 1024 * 1024 * 64 }, (err, stdout, stderr) => {
      if (err) reject(new Error(stderr || err.message));
      else resolve(stdout);
    });
  });

async function download(token) {
  const out = path.join(TMP_DIR, token);
  const stdout = await run("lark-cli", [
    "docs",
    "+media-preview",
    "--token",
    token,
    "--output",
    out,
    "--overwrite",
    "--as",
    "user",
  ]);
  // lark-cli 会自动补扩展名（如 .jpg），实际落盘路径以返回的 saved_path 为准
  let saved = out;
  try {
    const j = JSON.parse(stdout);
    if (j?.data?.saved_path) saved = j.data.saved_path;
  } catch {}
  if (!fs.existsSync(saved)) {
    // 兜底：扫描同名带扩展名的文件
    const hit = fs
      .readdirSync(TMP_DIR)
      .find((f) => f === token || f.startsWith(token + "."));
    if (!hit) throw new Error("下载后未找到文件: " + token);
    saved = path.join(TMP_DIR, hit);
  }
  return saved;
}

async function compress(src, dest) {
  try {
    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(dest);
    return dest;
  } catch {
    // 非图片（如视频/附件）原样保留
    fs.copyFileSync(src, dest);
    return dest;
  }
}

async function main() {
  fs.mkdirSync(IMG_DIR, { recursive: true });
  // 清空临时目录：lark-cli 遇到已存在的输出文件会报
  // "output file already exists ... (use --overwrite to replace)"
  fs.rmSync(TMP_DIR, { recursive: true, force: true });
  fs.mkdirSync(TMP_DIR, { recursive: true });

  // 收集所有 md 里的图片 token
  const files = fs
    .readdirSync(MD_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(MD_DIR, f));
  const tokens = new Set();
  for (const f of files) {
    const s = fs.readFileSync(f, "utf8");
    for (const m of s.matchAll(/https:\/\/feishu\.cn\/file\/([A-Za-z0-9]+)/g)) {
      tokens.add(m[1]);
    }
  }
  const list = [...tokens];
  console.log(`待处理图片 ${list.length} 张`);

  let done = 0;
  let ok = 0;
  let failed = 0;
  let skipped = 0;
  const queue = [...list];

  async function worker() {
    while (queue.length) {
      const token = queue.shift();
      const dest = path.join(IMG_DIR, `${token}.jpg`);
      if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
        skipped++;
      } else {
        let doneOne = false;
        for (let attempt = 1; attempt <= RETRIES && !doneOne; attempt++) {
          try {
            const src = await download(token);
            await compress(src, dest);
            fs.rmSync(src, { force: true });
            ok++;
            doneOne = true;
          } catch (e) {
            const msg = String(e.message).replace(/\s+/g, " ").slice(0, 600);
            if (attempt === RETRIES) {
              failed++;
              console.error(`  ✗ ${token}: ${msg}`);
            } else {
              // 瞬时失败（token 缓存争抢 / 限流）→ 退避后重试
              await new Promise((r) => setTimeout(r, attempt * 1200));
            }
          }
        }
        if (!doneOne) continue;
      }
      done++;
      if (done % 40 === 0 || done === list.length) {
        console.log(
          `  进度 ${done}/${list.length}（成功 ${ok}，跳过 ${skipped}，失败 ${failed}）`
        );
      }
    }
  }

  await Promise.all(
    Array.from({ length: CONCURRENCY }, () => worker())
  );

  // 改写 Markdown 链接为站内路径
  let rewritten = 0;
  for (const f of files) {
    let s = fs.readFileSync(f, "utf8");
    s = s.replace(
      /https:\/\/feishu\.cn\/file\/([A-Za-z0-9]+)/g,
      (_m, token) => {
        const p = path.join(IMG_DIR, `${token}.jpg`);
        if (fs.existsSync(p)) {
          rewritten++;
          return `/courses/aicoding/img/${token}.jpg`;
        }
        return _m;
      }
    );
    fs.writeFileSync(f, s, "utf8");
  }

  const total = fs
    .readdirSync(IMG_DIR)
    .reduce((sum, f) => sum + fs.statSync(path.join(IMG_DIR, f)).size, 0);
  console.log(
    `完成：成功 ${ok}，跳过 ${skipped}，失败 ${failed}；` +
      `改写链接 ${rewritten} 处；图片目录共 ${fs.readdirSync(IMG_DIR).length} 个文件，` +
      `${(total / 1024 / 1024).toFixed(1)} MB`
  );
}

main();
