import Breadcrumbs, { Crumb } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { articleGraph } from "@/lib/jsonld";

type Props = {
  title: string;
  intro: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  crumbs: Crumb[];
  image?: string;
  children: React.ReactNode;
};

export default function PageLayout({
  title,
  intro,
  path,
  datePublished,
  dateModified,
  crumbs,
  image,
  children,
}: Props) {
  const data = articleGraph({
    path,
    title,
    description: intro,
    datePublished,
    dateModified: dateModified || datePublished,
    image,
  });
  return (
    <>
      <JsonLd data={data} />
      <Breadcrumbs items={crumbs} />
      <header className="mx-auto max-w-3xl px-4 pt-4 pb-6">
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{title}</h1>
        <p className="mt-3 text-lg text-neutral-700">{intro}</p>
      </header>
      <article className="prose-page mx-auto max-w-3xl px-4 pb-16">{children}</article>
    </>
  );
}
