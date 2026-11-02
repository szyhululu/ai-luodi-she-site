// 类型声明：src/lib/aihot.mjs 是纯 JS 模块，供 TS 服务端代码引用时提供类型。
declare module "@/lib/aihot.mjs" {
  export interface AihotItem {
    id: string;
    title: string;
    summary: string;
    source: string;
    category: string;
    url: string;
    originalUrl: string;
    publishedAt: string;
    publishedTs: string;
    timeText: string;
    featured: number;
    score: number | null;
    reason: string;
    avatar: string;
    image: string;
  }
  export function fetchAihotNews(): Promise<AihotItem[]>;
}
