CASE 06 · 可练习

# 从检查点恢复

## 结果

先处理一篇并停止，再由新会话读取 `long-task/progress.md` 完成剩余两篇；最终三篇不重不漏，失败项有记录。

## 固定材料

- [article-a.md](https://pi.xiaomovps.com/examples/long-task/source/article-a.md)
- [article-b.md](https://pi.xiaomovps.com/examples/long-task/source/article-b.md)
- [article-c.md](https://pi.xiaomovps.com/examples/long-task/source/article-c.md)
- [进度模板](https://pi.xiaomovps.com/examples/long-task/progress-template.md)

三篇材料都是短小的虚构文本；进度模板明确分开已完成、已处理、失败和下一步。

## 1. 准备一个空任务

```bash
cd ~/Downloads/pi-practice
mkdir -p long-task/source long-task/output
curl -fL https://pi.xiaomovps.com/examples/long-task/source/article-a.md -o long-task/source/article-a.md
curl -fL https://pi.xiaomovps.com/examples/long-task/source/article-b.md -o long-task/source/article-b.md
curl -fL https://pi.xiaomovps.com/examples/long-task/source/article-c.md -o long-task/source/article-c.md
curl -fL https://pi.xiaomovps.com/examples/long-task/progress-template.md -o long-task/progress.md
find long-task -type f -print
```

Windows 用户把第一行换成 `cd ~/pi-practice`。开始前应只有三篇 `source` 和 `progress.md`；`output` 中出现旧文件时换新目录，不覆盖继续。

## 2. 第一条 Session 只做一篇

```bash
pi --name "检查点练习-第一步"
```

发送：

```text
读取 long-task/progress.md 和 long-task/source/article-a.md。
在 long-task/output/index.md 中用“## 文件名”作为二级标题，下一行写原文标题与一句话摘要，
再更新 long-task/progress.md 的已完成数量、已处理文件和下一步。
只处理这一篇，然后停止等待我验收。
```

退出 Pi，打开 `index.md` 和 `progress.md`，确认已完成数为 1、列表只有 `article-a.md`，下一步仍指向未处理材料。

## 3. 新 Session 从检查点恢复

```bash
pi --name "检查点练习-恢复"
```

发送：

```text
先读取 long-task/progress.md，再列出 long-task/source 中尚未处理的文件。
逐篇完成剩余文件；在 long-task/output/index.md 中继续用“## 文件名”作二级标题，
每完成一篇就同时更新 long-task/output/index.md 和 long-task/progress.md。
不要重复已经记录为完成的文件。遇到损坏或无法读取的文件时记录到失败列表并停止。
```

## 关键现象

恢复 Session 先读取磁盘进度，而不是猜测前一个会话做到哪里。[第 13 课](https://pi.xiaomovps.com/guide/vps-and-long-running)进一步解释 VPS 与 tmux 边界。

![完成三篇材料后对照数量与进度文件](https://pi.xiaomovps.com/images/07-Pi-长任务检查点-实操图.png)

恢复会话先读 `progress.md`，完成后再做这张图里的三处核对。不要从“会话还在”推断任务已经完成。

## 独立验收

```bash
find long-task/source -type f -name '*.md' | wc -l
grep -c '^## ' long-task/output/index.md
sed -n '1,180p' long-task/progress.md
```

输入文件数、索引条目数、进度中的已完成数都为 3；已处理列表无重复，失败列表与实际一致。再逐篇核对摘要，不能只比数字。

## 失败恢复

中断后先读进度和现有输出，不从头盲跑。发现重复时保留现场，列出重复项及来源后再决定修正；文件损坏时写入失败列表并停止。

## 选学：Pi Durable

如果你准备开发能在进程中断后恢复任务的 Agent 应用，可继续阅读[Pi Durable：让 Agent 在中断后继续工作](https://pi.xiaomovps.com/guide/pi-durable)。它是实验性框架，本书原有的进度文件练习仍可独立完成。想直接看到框架自动存档的效果，可以接着做[选学案例：用 Pi Durable Assistant 观察断点恢复](https://pi.xiaomovps.com/cases/durable-assistant)。

---

> 本文转载自 [Pi Coding Agent 学习蓝皮书](https://pi.xiaomovps.com/cases/checkpoint-recovery)，原项目以 MIT License 发布；依据许可要求，保留原版权声明与来源链接。
