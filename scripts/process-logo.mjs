/**
 * AI落地社 logo 处理：抠掉白底（只删与图像边缘连通的白色）+ 裁边 + 压缩为透明 PNG。
 * 关键：不能用「亮度阈值」一刀切——图标内部有白色字母(AP)、文字有白色笔画，
 * 一刀切会把内容误删导致变形。正确做法是从四边向内做泛洪填充(flood fill)，
 * 只把「与边缘连通的浅色区域」判为背景，内部封闭的白色天然保留。
 *
 * 用法：
 *   NODE_PATH=/Users/songziyue/.workbuddy/binaries/node/workspace/node_modules \
 *   node scripts/process-logo.mjs [源图路径]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.argv[2] || "/Users/songziyue/Desktop/微信图片_20261009161519_13483_23.png";
const TMP = path.join(ROOT, "public", "logo-cut.png");
const OUT = path.join(ROOT, "public", "logo.png");

// 背景判定：max通道 >= 240 且饱和度 <= 8 视为「可作为背景的浅色」
const BG_LIGHT = 240;
const BG_SAT = 8;

const src = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = src.info;
const px = src.data;

const isBgLike = (x, y) => {
  const i = (y * W + x) * C;
  if (px[i + 3] === 0) return true; // 原本就透明 → 视作背景
  const r = px[i], g = px[i + 1], b = px[i + 2];
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  return max >= BG_LIGHT && max - min <= BG_SAT;
};

// 泛洪填充：从四条边出发，标记所有与边缘连通的背景像素
const bg = new Uint8Array(W * H);
const stack = [];
const push = (x, y) => {
  const k = y * W + x;
  if (!bg[k] && isBgLike(x, y)) { bg[k] = 1; stack.push(k); }
};
for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
while (stack.length) {
  const k = stack.pop();
  const x = k % W, y = (k / W) | 0;
  if (x > 0) push(x - 1, y);
  if (x < W - 1) push(x + 1, y);
  if (y > 0) push(x, y - 1);
  if (y < H - 1) push(x, y + 1);
}

const bgCount = bg.reduce((a, b) => a + b, 0);
console.log(`泛洪识别背景像素: ${bgCount} / ${W * H} (${(bgCount / (W * H) * 100).toFixed(1)}%)`);

// 计算非背景内容的精确包围盒（手动裁剪，不用 sharp.trim()——实测 trim 会误判导致变形）
let minX = W, minY = H, maxX = -1, maxY = -1;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (!bg[y * W + x]) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
const cw = maxX - minX + 1, ch = maxY - minY + 1;
console.log(`内容包围盒: x ${minX}~${maxX} (宽${cw}) y ${minY}~${maxY} (高${ch})`);

// 生成带 alpha 的图：背景 → 透明，内容 → 原样保留
const out = Buffer.alloc(W * H * 4);
for (let k = 0, j = 0; k < W * H; k++, j += 4) {
  const i = k * C;
  out[j] = px[i];
  out[j + 1] = px[i + 1];
  out[j + 2] = px[i + 2];
  out[j + 3] = bg[k] ? 0 : px[i + 3];
}

// 写文件时直接 extract 精确区域 + 等比 resize（不要用 fit:"fill"，会强制拉伸变形）
const TARGET_W = 360;
const cut = await sharp(out, { raw: { width: W, height: H, channels: 4 } })
  .extract({ left: minX, top: minY, width: cw, height: ch })
  .resize({ width: TARGET_W }) // 默认 preserveAspectRatio，比例正确
  .png({ compressionLevel: 9, quality: 92, palette: true, effort: 10 })
  .toBuffer();

await sharp(cut).toFile(OUT);

const fin = await sharp(OUT).metadata();
const kb = (p) => (fs.statSync(p).size / 1024).toFixed(1);
console.log(`\n原图: ${W}x${H}, ${kb(SRC)} KB（含白底）`);
console.log(
  `最终: ${fin.width}x${fin.height}, ${kb(OUT)} KB  比例 ${(fin.width / fin.height).toFixed(2)}`
);

// 校验
const { data: chk, info: ci } = await sharp(OUT).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const alpha = (x, y) => chk[(y * ci.width + x) * ci.channels + 3];
const corners = [alpha(0, 0), alpha(ci.width - 1, 0), alpha(0, ci.height - 1), alpha(ci.width - 1, ci.height - 1)];
let op = 0, white = 0;
for (let i = 0; i < chk.length; i += ci.channels) {
  if (chk[i + 3] === 255) { op++; if (chk[i] > 240 && chk[i + 1] > 240 && chk[i + 2] > 240) white++; }
}
console.log(`\n四角 alpha: ${corners.join(", ")} (应全 0)`);
console.log(`不透明区近白残留: ${(white / op * 100).toFixed(1)}% (图标内白色字母属正常)`);
console.log(`不透明内容像素: ${op}`);