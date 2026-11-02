// 课程树通用工具：排序规则 + 侧栏「总览」树构建
// courses 表是扁平结构，用 parent_node_token 指向父节点（父节点的 slug）

export function sortKey(n: any): [number, number] {
  const t = n.title || "";
  const m = t.match(/第\s*(\d+)\s*章/);
  if (m) return [0, parseInt(m[1], 10)];
  const a = t.match(/附录\s*([A-Za-z])/);
  if (a) return [1, a[1].toUpperCase().charCodeAt(0)];
  return [2, n.orderVal ?? 0];
}

export function sortKids(nodes: any[]): any[] {
  return [...nodes].sort((x: any, y: any) => {
    const kx = sortKey(x);
    const ky = sortKey(y);
    if (kx[0] !== ky[0]) return kx[0] - ky[0];
    return kx[1] - ky[1];
  });
}

export function buildByParent(courses: any[]): Record<string, any[]> {
  const bp: Record<string, any[]> = {};
  for (const c of courses) {
    const key = c.parent_node_token || "";
    (bp[key] = bp[key] || []).push(c);
  }
  return bp;
}

export interface OutlineItem {
  slug: string;
  title: string;
  /** 该节点自身是否有正文（决定分组标题能否点进） */
  hasContent: boolean;
  /** 是否是文件类节点（PDF 等）：无正文但详情页可看，同样要能点 */
  isFile: boolean;
  children: OutlineItem[];
}

/** 由某个节点出发，递归构建其子树的「总览」结构 */
export function buildOutline(
  node: any,
  byParent: Record<string, any[]>
): OutlineItem[] {
  return sortKids(byParent[node.slug] || []).map((k) => ({
    slug: k.slug,
    title: k.title,
    hasContent: !k.isFile && !!k.content,
    isFile: !!k.isFile,
    children: buildOutline(k, byParent),
  }));
}

/**
 * 判断一个节点是不是「分类货架」而不是「一本书」：
 * 货架 = 它的子节点全是纯容器（自己没正文、下面还有内容），
 * 例如「AI书籍」下面挂着 7 本没有正文的书。
 * 反之，若子节点自带正文（如「抖音AI夜校」下的 8 节课），那它就是一本可以直接翻阅的书。
 */
function isShelf(node: any, byParent: Record<string, any[]>): boolean {
  const kids = byParent[node.slug] || [];
  if (!kids.length) return false;
  return kids.every(
    (k) => (byParent[k.slug] || []).length > 0 && !k.content && !k.isFile
  );
}

/**
 * 找到当前页所属的「书」——侧栏要列出哪些章节供翻阅：
 * 从根往下找第一个「有子节点、且不是分类货架」的祖先。
 *   - 章节页（蓝皮书 → 第1章）→ 命中「蓝皮书」，列出 31 章
 *   - 抖音AI夜校 → 子节点自带正文，命中它本身，列出 8 节课（当前课自动展开其子项）
 *   - AI书籍 → 子节点全是无正文的书，算货架被跳过
 *   - 顶层独立文档（无子节点）→ null，没有章节可翻，不显示侧栏
 */
export function findBookScope(
  course: any,
  byToken: Record<string, any>,
  byParent: Record<string, any[]>
): any | null {
  const chain: any[] = [];
  const guard = new Set<string>();
  let cur: any = course;
  while (cur && !guard.has(cur.slug)) {
    guard.add(cur.slug);
    chain.push(cur);
    cur = cur.parent_node_token ? byToken[cur.parent_node_token] : null;
  }
  // chain[0] 是当前页，chain[last] 是顶层区块；自上而下找
  for (let i = chain.length - 1; i >= 0; i--) {
    const n = chain[i];
    if ((byParent[n.slug] || []).length === 0) continue;
    if (isShelf(n, byParent)) continue;
    return n;
  }
  return null;
}

/** 去掉标题里的零宽字符与「（全本）」等后缀，用于侧栏窄栏展示 */
export function shortTitle(t: string): string {
  return (t || "")
    .replace(/[\u200b-\u200f\ufeff]/g, "")
    .replace(/\s*[（(]\s*全本\s*[)）]\s*$/, "")
    .trim();
}
