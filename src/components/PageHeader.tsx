// 页面头部（与 /tools 一致的 atlasnote 风格）：大标题 + 关键词高亮 + 副标题
export default function PageHeader({
  title,
  hl,
  subtitle,
}: {
  title: string;
  hl?: string;
  subtitle?: string;
}) {
  const idx = hl ? title.indexOf(hl) : -1;
  return (
    <header>
      <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
        {idx >= 0 ? (
          <>
            {title.slice(0, idx)}
            <span className="bg-[linear-gradient(transparent_62%,var(--hl)_62%)] [--hl:#FFEAE2] px-0.5">
              {hl}
            </span>
            {title.slice(idx + hl!.length)}
          </>
        ) : (
          title
        )}
      </h1>
      {subtitle && <p className="mt-4 text-stone-500">{subtitle}</p>}
    </header>
  );
}
