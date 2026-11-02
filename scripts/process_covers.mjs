// 处理知识库书卡封面：抹水印 → 裁剪到卡片比例 → 压缩输出 JPEG
// 用法: node scripts/process_covers.mjs
import { createRequire } from "module";
import path from "path";
import fs from "fs";
const require = createRequire(import.meta.url);
const sharp = require("sharp");

const SRC = "/tmp/covers_gen";
const OUT = path.resolve("public/covers");
fs.mkdirSync(OUT, { recursive: true });

// 生成顺序 → slug 映射（AI书籍总卡 + 7 本书）
const MAP = [
  ["Modern_flat_vector_illustratio_2026-10-23T16-29-33.png", "ai-data"],
  ["Keep_the_exact_same_illustrati_2026-10-23T16-30-02.png", "bluebook"],
  ["Keep_the_exact_same_illustrati_2026-10-23T16-30-31.png", "doubao-bluebook"],
  ["Keep_the_exact_same_illustrati_2026-10-23T16-30-57.png", "pi-bluebook"],
  ["Keep_the_exact_same_illustrati_2026-10-23T16-31-27.png", "codex-bluebook"],
  ["Keep_the_exact_same_illustrati_2026-10-23T16-31-55.png", "orange-book"],
  ["Keep_the_exact_same_illustrati_2026-10-23T16-32-28.png", "shangshou-book"],
  ["Keep_the_exact_same_illustrati_2026-10-23T16-32-53.png", "aicoding-bluebook"],
];

// BookCard 封面区域约 370x144 → 2.55:1；输出 1200x470，attention 聚焦主体
for (const [file, slug] of MAP) {
  const src = path.join(SRC, file);
  const out = path.join(OUT, `${slug}.jpg`);
  const buf = await sharp(src).toBuffer();
  await sharp(buf)
    .resize({
      width: 1200,
      height: 470,
      fit: "cover",
      position: sharp.strategy.attention,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`${slug}.jpg  ${kb}KB`);
}
console.log("DONE");
