import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbList } from "@/lib/jsonld";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const data = breadcrumbList(items);
  return (
    <>
      <JsonLd data={data} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-4 text-sm text-neutral-500">
        <ol className="flex flex-wrap items-center gap-x-2">
          {items.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>›</span>}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-neutral-800">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-amber-600">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
