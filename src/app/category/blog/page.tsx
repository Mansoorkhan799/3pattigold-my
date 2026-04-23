import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { POSTS } from "@/content/posts";
import { SITE, ABSOLUTE } from "@/lib/site";

const TITLE = "Blog — 3Patti Gold";
const DESC = "Guides, reviews, and tips about 3Patti Gold. Latest news, strategies, and updates.";
const PATH = "/category/blog";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${ABSOLUTE(PATH)}#webpage`,
    url: ABSOLUTE(PATH),
    name: TITLE,
    isPartOf: { "@id": `${SITE.url}/#website` },
    inLanguage: SITE.language,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: POSTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: ABSOLUTE(`/blog/${p.slug}`),
        name: p.title,
      })),
    },
  };
  return (
    <>
      <JsonLd data={collection} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: PATH },
        ]}
      />
      <section className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-extrabold md:text-4xl">Blog</h1>
        <p className="mt-3 text-neutral-700">{DESC}</p>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <li
              key={p.slug}
              className="rounded-xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-lg font-bold">
                <Link href={`/blog/${p.slug}`} className="hover:text-amber-700">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-neutral-600">{p.excerpt}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-3 inline-block text-sm font-semibold text-amber-700 hover:underline"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
