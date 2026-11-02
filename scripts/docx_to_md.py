#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把 .docx 转成 Markdown（仅用 Python 标准库：zipfile + xml.etree）。
支持：标题层级（heading 1~9 / Title / Subtitle）、列表段落、加粗/斜体、
      换行与制表符、超链接（读 document.xml.rels）、表格（首行作表头）。
用法：python3 scripts/docx_to_md.py <in.docx> [out.md]
"""
import sys, os, re, zipfile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
R = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"
PKGREL = "{http://schemas.openxmlformats.org/package/2006/relationships}"


def style_map(z):
    """styleId → 样式名（中文 Word 的 styleId 是 '1'/'21'/'a0' 这类，必须靠 styles.xml 还原）"""
    out = {}
    try:
        root = ET.fromstring(z.read("word/styles.xml"))
    except KeyError:
        return out
    for st in root.findall(f"{W}style"):
        sid = st.get(f"{W}styleId")
        nm = st.find(f"{W}name")
        if sid and nm is not None:
            out[sid] = nm.get(f"{W}val", "")
    return out


def rel_map(z):
    """rId → 外部链接地址"""
    out = {}
    try:
        root = ET.fromstring(z.read("word/_rels/document.xml.rels"))
    except KeyError:
        return out
    for rel in root.findall(f"{PKGREL}Relationship"):
        if rel.get("TargetMode") == "External" and rel.get("Target"):
            out[rel.get("Id")] = rel.get("Target")
    return out


def run_text(run, rels):
    """单个 run → Markdown 内联文本"""
    parts = []
    for el in run.iter():
        tag = el.tag
        if tag == f"{W}t":
            parts.append(el.text or "")
        elif tag == f"{W}tab":
            parts.append("\t")
        elif tag == f"{W}br":
            parts.append("\n")
    txt = "".join(parts)
    if not txt:
        return ""
    rpr = run.find(f"{W}rPr")
    if rpr is not None:
        if rpr.find(f"{W}b") is not None and txt.strip():
            txt = "**" + txt + "**"
        if rpr.find(f"{W}i") is not None and txt.strip():
            txt = "*" + txt + "*"
    return txt


def para_text(p, rels):
    """段落 → 内联 Markdown（处理超链接）"""
    out = []
    for child in p:
        if child.tag == f"{W}r":
            out.append(run_text(child, rels))
        elif child.tag == f"{W}hyperlink":
            inner = "".join(run_text(r, rels) for r in child.findall(f"{W}r"))
            rid = child.get(f"{R}id")
            href = rels.get(rid)
            if inner and href:
                out.append(f"[{inner}]({href})")
            else:
                out.append(inner)
    return "".join(out).strip()


def heading_level(pstyle, styles):
    """段落样式 → Markdown 标题级别；不是标题返回 None"""
    name = styles.get(pstyle, "")
    low = name.lower()
    m = re.match(r"heading\s*(\d)", low)
    if m:
        return min(int(m.group(1)), 6)
    if low == "title":
        return 1
    if low == "subtitle":
        return 2
    return None


def table_md(tbl):
    rows = []
    for tr in tbl.findall(f"{W}tr"):
        cells = []
        for tc in tr.findall(f"{W}tc"):
            texts = []
            for p in tc.findall(f"{W}p"):
                t = para_text(p, {})
                if t:
                    texts.append(t)
            # Markdown 表格单元格不能含换行（会把表格结构冲散）→ 统一压成一行
            cell = "；".join(texts)
            cell = re.sub(r"\s*\n\s*", "；", cell)   # 段落内 <w:br/> 造成的换行
            cell = re.sub(r"[ \t]+", " ", cell).strip()
            cells.append(cell.replace("|", "\\|"))
        if cells:
            rows.append(cells)
    if not rows:
        return ""
    ncol = max(len(r) for r in rows)
    pad = lambda r: r + [""] * (ncol - len(r))
    out = ["| " + " | ".join(pad(rows[0])) + " |", "|" + "---|" * ncol]
    for r in rows[1:]:
        out.append("| " + " | ".join(pad(r)) + " |")
    return "\n".join(out)


def reflow_flat(md):
    """完全没有标题样式的文档（原文格式信息已丢失）→ 按文本模式还原层级：
       - "1. xxx" 编号小节 → 二级标题
       - 短标签行（以：结尾）→ 加粗，其后的非空行转为列表项
       - 其余短独立行（无结尾标点）→ 列表项
    """
    lines = md.split("\n")
    out = []
    i = 0
    seen_first = False
    END_PUNCT = ("。", "！", "？", "，", "、", "；", ":", "：", "…", "）", ")")
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            out.append("")
            i += 1
            continue
        # 全文首行且较短 → 作为文档内首个标题
        if not seen_first:
            seen_first = True
            if len(line) <= 12 and not line.endswith(END_PUNCT):
                out.append("## " + line)
                i += 1
                continue
        # 编号小节 → ##
        m = re.match(r"^(\d{1,2})[.、]\s*(\S.*)$", line)
        if m and len(m.group(2)) <= 40:
            out.append("## " + m.group(2))
            i += 1
            continue
        # 短标签行 → 加粗 + 后续行转列表
        if len(line) <= 10 and line.endswith(("：", ":")):
            out.append("**" + line.rstrip("：:") + "**")
            i += 1
            while i < len(lines) and lines[i].strip():
                t = lines[i].strip()
                if re.match(r"^\d{1,2}[.、]\s*", t) or (
                    len(t) <= 10 and t.endswith(("：", ":"))
                ):
                    break
                out.append("- " + t)
                i += 1
            continue
        # 其余短独立行 → 列表项
        if len(line) <= 12 and not line.endswith(END_PUNCT) and not line.startswith(("|", ">", "-", "#", "*", "`")):
            out.append("- " + line)
            i += 1
            continue
        out.append(line)
        i += 1
    return "\n".join(out)


def convert(path):
    z = zipfile.ZipFile(path)
    styles = style_map(z)
    rels = rel_map(z)
    root = ET.fromstring(z.read("word/document.xml"))
    body = root.find(f"{W}body")
    if body is None:
        return ""

    blocks = []
    has_heading_style = False
    for el in body:
        if el.tag == f"{W}p":
            ppr = el.find(f"{W}pPr")
            pstyle = None
            is_list = False
            if ppr is not None:
                ps = ppr.find(f"{W}pStyle")
                if ps is not None:
                    pstyle = ps.get(f"{W}val")
                if ppr.find(f"{W}numPr") is not None:
                    is_list = True
            text = para_text(el, rels)
            if not text:
                continue
            lvl = heading_level(pstyle, styles)
            # 正文里本来就写着 markdown 标题（如提示词中的「# 角色」）→ 识别出来并降一级
            mh = re.match(r"^(#{1,4})\s+(\S.*)$", text)
            if mh:
                blocks.append("#" * min(len(mh.group(1)) + 1, 6) + " " + mh.group(2))
            elif lvl:
                has_heading_style = True
                # 降一级：页面本身已用课程标题渲染 <h1>，正文标题从 ## 起，页面只保留一个 h1
                blocks.append("#" * min(lvl + 1, 6) + " " + text)
            elif styles.get(pstyle, "").lower() == "list paragraph" or is_list:
                blocks.append("- " + text)
            else:
                blocks.append(text)
        elif el.tag == f"{W}tbl":
            t = table_md(el)
            if t:
                blocks.append(t)

    md = "\n\n".join(blocks)
    md = re.sub(r"\n{3,}", "\n\n", md)
    # 全文没有任何标题样式 → 原文格式信息已丢失，用文本模式还原层级。
    # 这类文档每个段落本就是原文的一行，改用单换行拼接以保留原始行结构。
    if not has_heading_style:
        md = "\n".join(blocks)
        md = reflow_flat(md)
    return md.strip() + "\n"


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    src = sys.argv[1]
    md = convert(src)
    if len(sys.argv) > 2:
        with open(sys.argv[2], "w", encoding="utf-8") as f:
            f.write(md)
        print(f"→ {sys.argv[2]}（{len(md)} 字符）")
    else:
        sys.stdout.write(md)


if __name__ == "__main__":
    main()
