#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
重排《WorkBuddy 橙皮书》逐页内容，提升辨识度与美观：
  - 单词级抽取（dict 字号 + words 坐标对齐），按行/列还原结构
  - 表格：要求连续 >=2 行且「列轨道在行间对齐」才成表（剔除单句内偶发大间距的伪表格）
  - 标题：连续大字号行合并为同一标题；第X篇/章、目录/附录、N. 编号章节、emoji 卡片 → 标题层级
  - 编号章节：数字单独成行时与下一行标题文字合并（如 "2." + "WorkBuddy具备…"）
  - 列表：以「：」结尾的引导句之后的短行 → 无序列表项；目录编号（0.1 / 0.3 是什么）做合并与补空格
  - 段落：零散换行碎片 → 拼接为整段（CJK 与 ASCII 边界自动加空格）
  - 元数据：版本/最后校验/资料性质 → 加粗成行
  - 图注：字号 <=10 的标签行 → 引用块
  - 封面：定点清理字母间距与断行
重写 scripts/orange-book/page-NN.md，并同步 extra-courses.json 页面标题。
依赖 venv 的 pymupdf。
"""
import os, re, json, pymupdf

ROOT = "/Users/songziyue/WorkBuddy/个人网站"
SCRIPTS = os.path.join(ROOT, "scripts")
ORANGE_DIR = os.path.join(SCRIPTS, "orange-book")
PDF = "/Users/songziyue/Downloads/课后资料/WorkBuddy橙皮书.pdf"
EXTRA_JSON = os.path.join(SCRIPTS, "extra-courses.json")

COLUMN_GAP = 28.0   # 行内相邻单词空白 > 此值视为列分隔
REGION_GAP = 15.0   # 表格区域内单元格左缘聚类间距
ALIGN_TOL = 30.0    # 表格列轨道对齐容差
TITLE_YGAP = 130.0  # 相邻大字号行纵向间距 < 此值则合并为同一标题
TITLE_SIZE = 15.0   # >= 此字号的孤立行视为大标题

LABEL_RE = re.compile(r"^(版本|最后校验|资料性质)(：|:)?(.*)$", re.S)
EMOJI_RE = re.compile(r"^[\U0001F000-\U0001FAFF\u2190-\u2BFF\u2600-\u27BF]")
QA_RE = re.compile(r"^(Q|A)[:：]|^(问|答)[:：]")

# 行首/行尾的图表箭头、几何图形、装饰符号、间隔点等噪音
JUNK_RE = re.compile(
    r"^[\u2190-\u21FF\u25A0-\u25FF\u2600-\u27BF\u2B00-\u2BFF\u00B7+=*<>|/\\~\-]+|"
    r"[\u2190-\u21FF\u25A0-\u25FF\u2600-\u27BF\u2B00-\u2BFF\u00B7+=*<>|/\\~\-]+$"
)

# 夹在中文之间的「WorkBuddy」多为内联 logo：仅当两侧都是实词时才剔除，
# 避免误删「是 WorkBuddy」「你用 WorkBuddy」这类正常指代。
FUNC_CHARS = set(
    "很就都也不没别会可能是否是和或与并但而因此这那你我他她它们有在用对给让把被从到比为以向跟同于及等其此该各每任若如若将已才再又还却当则且"
)

def clean_inline_logo(text: str) -> str:
    def repl(m):
        pre, post = m.group(1), m.group(2)
        if pre in FUNC_CHARS or post in FUNC_CHARS:
            return m.group(0)
        return pre + post
    return re.sub(r"([\u4e00-\u9fff])WorkBuddy([\u4e00-\u9fff])", repl, text, flags=re.I)

def is_ascii_alnum(c):
    return ("a" <= c <= "z") or ("A" <= c <= "Z") or ("0" <= c <= "9")

def is_cjk(c):
    return ("\u3400" <= c <= "\u9fff") or ("\u3040" <= c <= "\u30ff")

def join_words(texts):
    out = ""
    for t in texts:
        if not t:
            continue
        if not out:
            out = t
        else:
            prev, first = out[-1], t[0]
            pa, fa = is_ascii_alnum(prev), is_ascii_alnum(first)
            if pa and fa:
                out += " " + t
            elif (pa and is_cjk(first)) or (is_cjk(prev) and fa):
                # CJK <-> ASCII 边界补一个空格，提升混排可读性
                out += " " + t
            else:
                out += t
    return out

def heading_level(t: str):
    t = t.strip()
    if re.match(r"^第[一二三四五六七八九十百零]+篇[：:]", t):
        return 2, t, True
    if re.match(r"^第[一二三四五六七八九十百零]+章[：:]", t):
        return 2, t, True
    if t in ("目录", "附录"):
        return 2, t, True
    if re.match(r"^\d{1,2}\.\d+", t):
        return 4, t, False
    if re.match(r"^\d{1,2}\.", t):
        return 3, t, False
    if re.match(r"^[一二三四五六七八九十]+、", t):
        return 3, t, False
    return None, t, False

def get_size_lookup(page):
    d = page.get_text("dict")
    spans = []
    for b in d["blocks"]:
        if b["type"] != 0:
            continue
        for l in b["lines"]:
            for s in l["spans"]:
                bb = s["bbox"]
                spans.append((bb[0], bb[1], bb[2], bb[3], round(s["size"], 1)))
    return spans

def size_at(spans, cx, cy):
    for (x0, y0, x1, y1, sz) in spans:
        if x0 - 2 <= cx <= x1 + 2 and y0 - 2 <= cy <= y1 + 2:
            return sz
    best, bestd = 12.0, 1e9
    for (x0, y0, x1, y1, sz) in spans:
        d = abs((x0 + x1) / 2 - cx) + abs((y0 + y1) / 2 - cy)
        if d < bestd:
            bestd, best = d, sz
    return best

def extract_elements(page):
    spans = get_size_lookup(page)
    words_raw = page.get_text("words")
    words = []
    for w in words_raw:
        x0, y0, x1, y1, txt = w[0], w[1], w[2], w[3], w[4]
        if not txt.strip():
            continue
        cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
        sz = size_at(spans, cx, cy)
        words.append({"x0": x0, "x1": x1, "y0": y0, "y1": y1,
                      "t": txt, "s": sz, "yc": cy})

    words.sort(key=lambda w: (round(w["yc"] / 3), w["x0"]))
    lines, cur = [], None
    for w in words:
        key = round(w["yc"] / 3)
        if cur is None or key != cur["key"]:
            if cur:
                lines.append(cur)
            cur = {"key": key, "words": [w], "y0": w["y0"], "y1": w["y1"]}
        else:
            cur["words"].append(w)
            cur["y0"] = min(cur["y0"], w["y0"])
            cur["y1"] = max(cur["y1"], w["y1"])
    if cur:
        lines.append(cur)

    line_info = []
    for ln in lines:
        ws = sorted(ln["words"], key=lambda w: w["x0"])
        cells, curc, prev = [], [], None
        for w in ws:
            if prev is not None and (w["x0"] - prev["x1"]) > COLUMN_GAP:
                cells.append(curc); curc = [w]
            else:
                curc.append(w)
            prev = w
        cells.append(curc)
        full = join_words([w["t"] for w in ws])
        size = max((w["s"] for w in ws), default=12)
        yc = (ln["y0"] + ln["y1"]) / 2
        if len(cells) >= 2:
            cell_objs = [{"text": join_words([cw["t"] for cw in c]),
                          "x0": c[0]["x0"]} for c in cells]
            line_info.append({"tabular": True, "text": full, "size": round(size, 1),
                              "yc": yc, "cells": cell_objs})
        else:
            line_info.append({"tabular": False, "text": full, "size": round(size, 1),
                              "yc": yc})

    # 连续 tabular 行成 run；仅当「列数一致且列轨道在行间对齐」才视为真表格
    def tracks_align(rows_cells):
        if len(rows_cells) < 2:
            return False
        tracks = sorted(c["x0"] for c in rows_cells[0])
        for row in rows_cells[1:]:
            xs = sorted(c["x0"] for c in row)
            if len(xs) != len(tracks):
                return False
            for x in xs:
                if not any(abs(x - t) < ALIGN_TOL for t in tracks):
                    return False
        return True

    runs = []
    i = 0
    while i < len(line_info):
        if line_info[i]["tabular"]:
            j = i
            while j < len(line_info) and line_info[j]["tabular"]:
                j += 1
            runs.append((i, j))
            i = j
        else:
            i += 1

    valid = set()
    for (s, e) in runs:
        rows_cells = [line_info[k]["cells"] for k in range(s, e)]
        if e - s >= 3 and all(len(r) == len(rows_cells[0]) for r in rows_cells) \
                and tracks_align(rows_cells):
            for k in range(s, e):
                valid.add(k)

    elements, i, n = [], 0, len(line_info)
    while i < n:
        if i in valid:
            tbl_cells, j = [], i
            while j < n and j in valid:
                tbl_cells.append(line_info[j]["cells"])
                j += 1
            xs = sorted({round(c["x0"]) for row in tbl_cells for c in row})
            tracks = []
            for x in xs:
                if tracks and x - tracks[-1][-1] < REGION_GAP:
                    tracks[-1].append(x)
                else:
                    tracks.append([x])
            centers = [(min(t) + max(t)) / 2 for t in tracks]

            def track_of(x):
                bi, best = 0, 1e9
                for k, c in enumerate(centers):
                    d = abs(c - x)
                    if d < best:
                        best, bi = d, k
                return bi

            rows, ncol = [], 0
            for row in tbl_cells:
                cells_by_track = {}
                for c in row:
                    cells_by_track[track_of(c["x0"])] = c["text"]
                ncol = max(ncol, max(cells_by_track) if cells_by_track else -1)
                rows.append(cells_by_track)
            ncol += 1
            grid = [[""] * ncol for _ in rows]
            for r, cells_by_track in enumerate(rows):
                for tk, txt in cells_by_track.items():
                    grid[r][tk] = txt
            elements.append(("table", grid))
            i = j
            continue
        flow = []
        j = i
        while j < n and j not in valid:
            flow.append((line_info[j]["text"], line_info[j]["size"], line_info[j]["yc"]))
            j += 1
        elements.append(("flow", flow))
        i = j
    return elements

def fix_toc(md: str) -> str:
    lines = md.split("\n")
    res, i = [], 0
    while i < len(lines):
        line = lines[i]
        # 删除孤立的 "N." 当下一行是 "N.M…"（目录里重复出现的章号）
        m3 = re.match(r"^(\s*-\s+)(\d+)\.\s*$", line)
        if m3 and i + 1 < len(lines):
            nxt = lines[i + 1]
            if re.match(r"^\s*-\s*" + re.escape(m3.group(2)) + r"\.\d+\s*\S", nxt):
                i += 1
                continue
        # 孤立的 "N.M" 项与下一行合并：0.3 + 是什么 -> 0.3 是什么
        m2 = re.match(r"^(\s*-\s+)(\d+\.\d+)\s*$", line)
        if m2 and i + 1 < len(lines) and re.match(r"^\s*-\s+\S", lines[i + 1]):
            nxt = re.sub(r"^\s*-\s+", "", lines[i + 1])
            line = m2.group(1) + m2.group(2) + " " + nxt
            i += 1
        # 给 "N.M正文" 补空格：0.1重要声明 -> 0.1 重要声明
        m = re.match(r"^(\s*-\s+)(\d+\.\d+)(?=\S)", line)
        if m:
            line = m.group(1) + m.group(2) + " " + line[m.end():]
        res.append(line)
        i += 1
    return "\n".join(res)

def smart_concat(parts):
    """把若干字符串按 CJK/ASCII 边界智能拼接（标题块换行合并时用）。"""
    out = ""
    for p in parts:
        p = p.strip()
        if not p:
            continue
        if not out:
            out = p
        else:
            prev, first = out[-1], p[0]
            pa, fa = is_ascii_alnum(prev), is_ascii_alnum(first)
            if pa and fa:
                out += " " + p
            elif (pa and is_cjk(first)) or (is_cjk(prev) and fa):
                out += " " + p
            else:
                out += p
    return out

def smart_spacing(s: str) -> str:
    """在已拼接（可能无空格）的字符串上，仅在 CJK <-> ASCII 字母数字边界补一个空格。
    不会在已有空格处重复插入，也不动标点。用于段落合并后统一混排间距。"""
    out = []
    for i, ch in enumerate(s):
        out.append(ch)
        if i + 1 < len(s):
            nxt = s[i + 1]
            if (is_cjk(ch) and is_ascii_alnum(nxt)) or (is_ascii_alnum(ch) and is_cjk(nxt)):
                out.append(" ")
    return "".join(out)

def new_heading_start(txt):
    """下一行是否本身就是一个新的标题（用于标题块合并时判断终止）。"""
    t = txt.strip()
    if heading_level(t)[0]:
        return True
    if EMOJI_RE.match(t):
        return True
    return False

def reflow_flow(flow):
    # flow: list of (text, size, yc)
    n = len(flow)
    cap = [False] * n
    for idx in range(n):
        sz = flow[idx][1]
        txt = flow[idx][0].strip()
        c = sz <= 10
        if not c and sz <= 12 and 0 < len(txt) <= 8 and txt[-1] not in "。！？；：，、." \
                and idx + 1 < n and flow[idx + 1][1] <= 10:
            c = True
        cap[idx] = c
    flow = [(t, s, y, c) for (t, s, y), c in zip(flow, cap)]

    out, para_buf, list_buf = [], [], []
    in_list = False
    toc_active = False  # 处于目录/附录罗列语境时，编号项按列表项处理

    def flush_para():
        if para_buf:
            # 先无空格拼接，再清内联 logo（跨行「关/WorkBuddy/键」在拼接后才相邻），
            # 最后再补 CJK/ASCII 间距，避免先加空格导致 logo 清洗匹配失效。
            joined = "".join(para_buf).strip()
            joined = clean_inline_logo(joined)
            out.append(smart_spacing(joined))
            para_buf.clear()

    def flush_list():
        if list_buf:
            out.append("\n".join(list_buf))
            list_buf.clear()

    i = 0
    while i < n:
        text, sz, yc, c = flow[i]
        raw = text.strip()
        raw = JUNK_RE.sub("", raw)
        if not raw:
            i += 1
            continue
        raw = clean_inline_logo(raw)
        # 图注：字号极小，渲染为引用块
        if c:
            flush_para(); flush_list()
            grp = [raw]
            j = i + 1
            while j < n and flow[j][3]:
                grp.append(JUNK_RE.sub("", flow[j][0].strip()))
                j += 1
            out.append("> " + " · ".join(g for g in grp if g))
            i = j
            continue
        # 大字号标题块：合并连续大字号行，但遇到新的标题起始则终止
        if sz >= TITLE_SIZE:
            block, last_yc, j = [raw], yc, i + 1
            while j < n and flow[j][1] >= TITLE_SIZE and abs(flow[j][2] - last_yc) < TITLE_YGAP \
                    and not new_heading_start(flow[j][0].strip()):
                cand = smart_concat(block + [JUNK_RE.sub("", flow[j][0].strip())])
                # 已是一个完整的章节标题（含「篇/章」），不再并入后续小节名
                if "篇" in cand or "章" in cand:
                    break
                block.append(JUNK_RE.sub("", flow[j][0].strip()))
                last_yc = flow[j][2]
                j += 1
            merged = smart_concat(block)
            flush_para(); flush_list()
            h, htext, li = heading_level(merged)
            lvl = h if h else 2
            out.append("#" * lvl + " " + merged)
            in_list = li or merged.rstrip().endswith(("：", ":"))
            toc_active = (htext in ("目录", "附录")) if h else toc_active
            i = j
            continue
        # 目录 / 附录：进入 TOC 罗列语境
        if raw in ("目录", "附录"):
            flush_para(); flush_list()
            out.append("## " + raw)
            in_list = True
            toc_active = True
            i += 1
            continue
        # 模式化标题（非 TOC 语境；编号章节即使在列表内也算标题）
        if not toc_active:
            h, htext, list_intro = heading_level(raw)
            if h:
                # 编号单独成行时，与下一行标题文字合并
                if re.match(r"^(\d+\.|\d+\.\d+)$", htext) and i + 1 < n \
                        and flow[i + 1][1] < TITLE_SIZE \
                        and not heading_level(flow[i + 1][0].strip())[0]:
                    htext = htext + " " + flow[i + 1][0].strip()
                    i += 1
                # 合并后若仍是纯编号（内容缺失），跳过该空标题
                if re.match(r"^(\d+\.|\d+\.\d+)$", htext):
                    i += 1
                    continue
                flush_para(); flush_list()
                out.append("#" * h + " " + htext)
                in_list = list_intro or htext.rstrip().endswith(("：", ":"))
                toc_active = False
                i += 1
                continue
        # emoji 卡片：纯 emoji 行与下一行合并为卡片标题
        if EMOJI_RE.match(raw) and not re.search(r"[\u4e00-\u9fffA-Za-z0-9]", raw):
            nxt = flow[i + 1][0].strip() if i + 1 < n else ""
            title = raw + (" " + nxt if nxt and flow[i + 1][1] < TITLE_SIZE else "")
            if i + 1 < n and nxt and flow[i + 1][1] < TITLE_SIZE:
                i += 1
            flush_para(); flush_list()
            out.append("### " + title)
            i += 1
            continue
        # 问答
        qm = QA_RE.match(raw)
        if qm:
            flush_para(); flush_list()
            label = qm.group(0).rstrip("：:")
            out.append("**%s**：%s" % (label, raw[qm.end():]))
            i += 1
            continue
        # 元数据标签
        m = LABEL_RE.match(raw)
        if m:
            flush_para(); flush_list()
            out.append("**%s**：%s" % (m.group(1), m.group(3).strip()))
            i += 1
            continue
        # 列表引导句 / 列表项 / 正文段落
        if raw.endswith(("：", ":")):
            flush_list(); out.append(raw); in_list = True; toc_active = False; i += 1; continue
        if in_list:
            if raw[-1] in "。！？；":
                in_list = False; flush_list(); para_buf.append(raw); toc_active = False
            else:
                list_buf.append("- " + raw)
            i += 1
            continue
        para_buf.append(raw)
        toc_active = False
        i += 1
    flush_para(); flush_list()
    md = "\n\n".join(x for x in out if x)
    md = fix_toc(md)
    # 全局再清一遍内联 logo：逐行清洗无法处理「关 / WorkBuddy / 键」被拆成
    # 多行、拼接后才相邻成「关WorkBuddy键」的情况；此处整篇统一还原。
    md = clean_inline_logo(md)
    return md

def render_table(grid):
    if not grid:
        return ""
    ncol = max(len(r) for r in grid)
    out = ["| " + " | ".join(r + [""] * (ncol - len(r))) + " |" for r in grid]
    out.insert(1, "|" + "---|" * ncol)
    return "\n".join(out)

COVER_MD = """NON-OFFICIAL GUIDE / 非官方指南

## WorkBuddy 橙皮书

从安装到实战案例的全链路使用指南

非官方开源指南 · 持续更新版

写给职场人、开发者和 AI 工具重度用户的使用手册

- 01 认识 WorkBuddy
- 02 安装与配置
- 03 核心功能
- 04 标准工作流
- 05 实战案例库

适合零基础上手、想把 WorkBuddy 接入真实工作场景，以及对比 Codex / Cursor / Claude Code 工作流的职场人与开发者。

v0.1.0 · 2026 · 06
"""

def reflow_page(page, page_index):
    if page_index == 0:
        return COVER_MD, "封面"
    elements = extract_elements(page)
    parts = []
    for kind, payload in elements:
        if kind == "table":
            parts.append(render_table(payload))
        else:
            parts.append(reflow_flow(payload))
    md = "\n\n".join(p for p in parts if p).strip() + "\n"
    title = None
    if title is None:
        for p in parts:
            for line in p.split("\n"):
                if line.startswith("#"):
                    title = re.sub(r"^#+\s*", "", line).strip()
                    break
            if title:
                break
        if not title:
            title = "第 %d 页" % (page_index + 1)
    if len(title) > 30:
        title = title[:29] + "…"
    return md, title

def main():
    doc = pymupdf.open(PDF)
    n = doc.page_count
    new_titles = {}
    for i in range(n):
        md, title = reflow_page(doc[i], i)
        with open(os.path.join(ORANGE_DIR, "page-%02d.md" % (i + 1)), "w", encoding="utf-8") as f:
            f.write(md)
        new_titles["orange-book-p%02d" % (i + 1)] = title
    doc.close()
    with open(EXTRA_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    updated = 0
    for e in data:
        if e["slug"] in new_titles:
            e["title"] = new_titles[e["slug"]]
            updated += 1
    with open(EXTRA_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("reflow 完成：%d 页；更新标题 %d 条" % (n, updated))

if __name__ == "__main__":
    main()
