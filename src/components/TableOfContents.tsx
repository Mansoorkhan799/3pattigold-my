import Link from "next/link";

export type TocItem = { id: string; label: string; children?: TocItem[] };

export default function TableOfContents({
  items,
  defaultOpen = false,
}: {
  items: TocItem[];
  defaultOpen?: boolean;
}) {
  return (
    <nav
      aria-label="Table of contents"
      className="kb-table-of-content my-6 rounded-xl border border-black/10 bg-amber-50 p-5"
    >
      <details open={defaultOpen} className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold uppercase tracking-wide text-amber-900">
          <span>Table of Contents</span>
          <span
            aria-hidden="true"
            className="ml-2 inline-block text-sm font-medium text-amber-800 transition-transform group-open:rotate-180"
          >
            ▼
          </span>
        </summary>
        <ol className="mt-3 list-decimal space-y-1 pl-6 text-[15px]">
          {items.map((it) => (
            <li key={it.id}>
              <Link href={`#${it.id}`} className="text-amber-800 hover:underline">
                {it.label}
              </Link>
              {it.children && it.children.length > 0 && (
                <ol className="mt-1 list-decimal space-y-1 pl-6 text-sm">
                  {it.children.map((c) => (
                    <li key={c.id}>
                      <Link href={`#${c.id}`} className="text-amber-800/90 hover:underline">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}
