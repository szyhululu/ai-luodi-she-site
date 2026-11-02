// 处理知识库文档卡封面（第二批 25 张）：抹水印后 → 裁剪 → 压缩输出 JPEG
// 用法: node scripts/process_covers2.mjs
import { createRequire } from "module";
import path from "path";
import fs from "fs";
const require = createRequire(import.meta.url);
const sharp = require("sharp");

const SRC = "/tmp/covers_gen";
const OUT = path.resolve("public/covers");
fs.mkdirSync(OUT, { recursive: true });

// 生成顺序 → slug 映射（2026-10-24 第二批：AI工具集/工作台4/加餐11/AI实用入门1/夜校8）
const MAP = [
  ["Keep_the_exact_same_illustrati_2026-10-24T01-28-44.png", "WY8OwmUQQiUSMDkTBOOcBXBQnhh"], // AI工具集
  ["Keep_the_exact_same_illustrati_2026-10-24T01-29-09.png", "WXKgwbT1XiyKCikfIjtcpRW4nFk"], // 工作台-生活
  ["Keep_the_exact_same_illustrati_2026-10-24T01-29-32.png", "M02vwM8BeiWPa6kqwpFcyoo9nlf"], // 工作台-学习网站
  ["Keep_the_exact_same_illustrati_2026-10-24T01-29-57.png", "KVWEwjXWxitFCIkeF9UcMc2inLe"], // 工作台-资讯早报
  ["Keep_the_exact_same_illustrati_2026-10-24T01-30-22.png", "RUgjwVMFJiCzA3k7SezcmwWNnvc"], // 工作台-html
  ["Keep_the_exact_same_illustrati_2026-10-24T01-30-48.png", "N9edw7uj7iSJ3CkcpXacnNLwnlf"], // 加餐-公众号爆文
  ["Keep_the_exact_same_illustrati_2026-10-24T01-31-15.png", "TBRbwM1thixzGOkMQrBcVRLwntf"], // 加餐-多Agent
  ["Keep_the_exact_same_illustrati_2026-10-24T01-31-42.png", "K53pwBmAuiyIaZkH8NqcHbJgnhf"], // 加餐-ima知识库
  ["Keep_the_exact_same_illustrati_2026-10-24T01-32-07.png", "MJO0wcuReilsVgkBdA4cHjD3nWg"], // 加餐-Prompt模板
  ["Keep_the_exact_same_illustrati_2026-10-24T01-32-30.png", "HqxbwDVirimawqkGKh0cJvTGnZd"], // 加餐-ima自动管理
  ["Keep_the_exact_same_illustrati_2026-10-24T01-32-53.png", "KiXgwh4UNiYwtNkrbm3c9Yp3nLb"], // 加餐-5000字手册
  ["Keep_the_exact_same_illustrati_2026-10-24T01-33-20.png", "Wf4HwsVYBiPXLRk4ZEQc4Ma8nbd"], // 加餐-100应用案例
  ["Keep_the_exact_same_illustrati_2026-10-24T01-33-44.png", "LF5Ew2JzqiqKr4kt5eJcIiILnHg"], // 加餐-100+指令
  ["Keep_the_exact_same_illustrati_2026-10-24T01-34-15.png", "EqUUwbVgkiv03bkXWHCcchyOn4y"], // 加餐-三层架构
  ["Keep_the_exact_same_illustrati_2026-10-24T01-34-40.png", "VLjnwHRUviEdmCk8nkgcfOlbnec"], // 加餐-Obsidian
  ["Keep_the_exact_same_illustrati_2026-10-24T01-35-07.png", "AAflwVLxAiqe8wk0CDmceEhanPh"], // 加餐-辅导孩子
  ["Keep_the_exact_same_illustrati_2026-10-24T01-35-32.png", "HrSJwjx8piL8Q1kLQELcX9Esnzc"], // AI实用入门
  ["Keep_the_exact_same_illustrati_2026-10-24T01-35-58.png", "ESwUw7Y54ikAXCk9a7FcaEJvnSg"], // 夜校01-简历
  ["Keep_the_exact_same_illustrati_2026-10-24T01-36-28.png", "Twhrwd2jviCFLDkmQpFcQeXOn1g"], // 夜校02-票根
  ["Keep_the_exact_same_illustrati_2026-10-24T01-36-57.png", "DGutwkYB2iBAc6kUV2AcwtjQnUf"], // 夜校03-设计师
  ["Keep_the_exact_same_illustrati_2026-10-24T01-37-23.png", "MAhPwp7ouiiscTkF6LfcNmnGn3f"], // 夜校04-音乐MV
  ["Keep_the_exact_same_illustrati_2026-10-24T01-37-47.png", "MOWWwW9G0iV6W5kfmV9c5eBjnqg"], // 夜校05-短片
  ["Keep_the_exact_same_illustrati_2026-10-24T01-38-13.png", "XAn7w5JBBi7nz7kv1ZocJpxunqt"], // 夜校06-开窍
  ["Keep_the_exact_same_illustrati_2026-10-24T01-38-41.png", "PyODwXilwihTUlkTT6XcUy0vnLb"], // 夜校07-选修课
  ["Keep_the_exact_same_illustrati_2026-10-24T01-39-13.png", "CvYQwYbSAi34hMkp8lucUTfTnda"], // 夜校08-下班
];

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
