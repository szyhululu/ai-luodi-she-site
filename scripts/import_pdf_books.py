#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把两本 PDF 接入「AI书籍」书架：
  - WorkBuddy橙皮书.pdf  : 文本型，逐页抽取文字 → Markdown 章节
  - WorkBuddy从上手到变现.pdf : 图片型，逐页渲染成 JPG → 图文章节
产物：
  scripts/orange-book/page-NN.md          文字章节源
  public/courses/shangshou/page-NNN.jpg   逐页扫描图
  scripts/shangshou/page-NNN.md           图文章节源（引用上面的 jpg）
  extra-courses.json 追加两本书（父节点 + 各页子节点）
"""
import os, re, json, pymupdf

ROOT = "/Users/songziyue/WorkBuddy/个人网站"
SCRIPTS = os.path.join(ROOT, "scripts")
PUBLIC_COURSES = os.path.join(ROOT, "public", "courses")

ORANGE_PDF = "/Users/songziyue/Downloads/课后资料/WorkBuddy橙皮书.pdf"
SHANG_PDF  = "/Users/songziyue/Downloads/课后资料/WorkBuddy从上手到变现.pdf"

EXTRA_JSON = os.path.join(SCRIPTS, "extra-courses.json")

IMG_WIDTH = 1000  # 扫描图渲染宽度(px)

def clean_text(t: str) -> str:
    lines = [l.strip() for l in t.split("\n")]
    out = []
    blank = False
    for l in lines:
        if not l:
            blank = True
            continue
        # 折叠 2+ 连续空格（修正常见字母间距伪影）
        l = re.sub(r" {2,}", " ", l)
        if blank and out:
            out.append("")
        out.append(l)
        blank = False
    return "\n".join(out).strip() + "\n"

def first_line_title(text: str, idx: int, n: int) -> str:
    if idx == 0:
        return "封面"
    for l in [x.strip() for x in text.split("\n")]:
        if not l:
            continue
        if 2 <= len(l) <= 40 and not l.lower().startswith("http"):
            return l
    return f"第 {n} 页"

# ---------- 1) 橙皮书：文本型 ----------
orange_entries = []
orange_dir = os.path.join(SCRIPTS, "orange-book")
os.makedirs(orange_dir, exist_ok=True)
odoc = pymupdf.open(ORANGE_PDF)
o_n = odoc.page_count
orange_parent = {
    "slug": "orange-book",
    "title": "WorkBuddy 橙皮书（全本）",
    "category": "AI书籍",
    "url": "",
    "contentFile": "",
    "parent_node_token": "ai-data",
    "node_level": 2,
    "has_child": 1,
    "orderVal": 5000,
}
orange_entries.append(orange_parent)
for i in range(o_n):
    n = i + 1
    text = odoc[i].get_text("text") or ""
    md = clean_text(text)
    fname = f"page-{n:02d}.md"
    with open(os.path.join(orange_dir, fname), "w", encoding="utf-8") as f:
        f.write(md)
    title = first_line_title(text, i, n)
    orange_entries.append({
        "slug": f"orange-book-p{n:02d}",
        "title": title,
        "category": "AI书籍",
        "url": "",
        "contentFile": f"orange-book/{fname}",
        "parent_node_token": "orange-book",
        "node_level": 3,
        "has_child": 0,
        "orderVal": 5000 + n,
    })
odoc.close()
print(f"[orange] {o_n} 页文字章节已写入 scripts/orange-book/")

# ---------- 2) 从上手到变现：图片型 ----------
shang_entries = []
shang_img_dir = os.path.join(PUBLIC_COURSES, "shangshou")
shang_md_dir = os.path.join(SCRIPTS, "shangshou")
os.makedirs(shang_img_dir, exist_ok=True)
os.makedirs(shang_md_dir, exist_ok=True)
sdoc = pymupdf.open(SHANG_PDF)
s_n = sdoc.page_count
shang_parent = {
    "slug": "shangshou-book",
    "title": "WorkBuddy 从上手到变现（全本）",
    "category": "AI书籍",
    "url": "",
    "contentFile": "",
    "parent_node_token": "ai-data",
    "node_level": 2,
    "has_child": 1,
    "orderVal": 6000,
}
shang_entries.append(shang_parent)
total_digits = len(str(s_n))
for i in range(s_n):
    n = i + 1
    page = sdoc[i]
    zoom = IMG_WIDTH / page.rect.width
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom))
    img_name = f"page-{n:03d}.jpg"
    img_path = os.path.join(shang_img_dir, img_name)
    pix.save(img_path, jpg_quality=82)
    # 图文章节源
    md = (
        f"![WorkBuddy 从上手到变现 · 第 {n} 页](/courses/shangshou/{img_name})\n\n"
        f"*第 {n} 页 / 共 {s_n} 页*\n"
    )
    md_name = f"page-{n:03d}.md"
    with open(os.path.join(shang_md_dir, md_name), "w", encoding="utf-8") as f:
        f.write(md)
    shang_entries.append({
        "slug": f"shangshou-book-p{n:03d}",
        "title": f"第 {n} 页",
        "category": "AI书籍",
        "url": "",
        "contentFile": f"shangshou/{md_name}",
        "parent_node_token": "shangshou-book",
        "node_level": 3,
        "has_child": 0,
        "orderVal": 6000 + n,
    })
sdoc.close()
print(f"[shangshou] {s_n} 页扫描图已写入 public/courses/shangshou/")

# ---------- 3) 合并进 extra-courses.json ----------
with open(EXTRA_JSON, "r", encoding="utf-8") as f:
    data = json.load(f)
existing_slugs = {e["slug"] for e in data}
new_entries = [e for e in (orange_entries + shang_entries) if e["slug"] not in existing_slugs]
data.extend(new_entries)
with open(EXTRA_JSON, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print(f"[json] 新增 {len(new_entries)} 条（橙皮书 {o_n} + 从上手到变现 {s_n} + 2 父节点）")

# ---------- 4) 统计图片总体积 ----------
total = 0
for fn in os.listdir(shang_img_dir):
    if fn.endswith(".jpg"):
        total += os.path.getsize(os.path.join(shang_img_dir, fn))
print(f"[size] 扫描图总体积 {total/1024/1024:.1f} MB（{s_n} 张）")
