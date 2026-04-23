import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { personPage } from "@/lib/jsonld";
import { AUTHORS } from "@/content/authors";

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) {
    return buildMetadata({
      title: "Author Not Found",
      description: "",
      path: `/author/${slug}`,
      noindex: true,
    });
  }
  return buildMetadata({
    title: `${author.name} — ${author.jobTitle}`,
    description: author.bio,
    path: `/author/${author.slug}`,
    type: "profile",
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) return notFound();

  return (
    <>
      <JsonLd
        data={personPage({
          slug: author.slug,
          name: author.name,
          jobTitle: author.jobTitle,
          bio: author.longBio,
          image: author.image,
          sameAs: author.sameAs,
          knowsAbout: author.knowsAbout,
        })}
      />
      <PageLayout
        title={author.name}
        intro={author.bio}
        path={`/author/${author.slug}`}
        datePublished={new Date().toISOString()}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Authors", path: "/about-us" },
          { name: author.name, path: `/author/${author.slug}` },
        ]}
      >
        <h2 id="about">About {author.name}</h2>
        <p>{author.longBio}</p>

        {author.yearsExperience ? (
          <p>
            <strong>Experience:</strong> {author.yearsExperience}+ years covering Android
            card-game apps and fintech payment flows in Pakistan.
          </p>
        ) : null}

        <h2 id="topics">Topics we cover</h2>
        <ul>
          {author.knowsAbout.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <h2 id="editorial-standards">Editorial standards</h2>
        <p>
          Every guide we publish goes through the same process:
        </p>
        <ol>
          <li>
            <strong>Hands-on test</strong> — we install the APK on a real device and verify the
            version, size, and permission list against what we publish.
          </li>
          <li>
            <strong>Payment verification</strong> — deposit and withdrawal flows are tested with
            small amounts on Easypaisa and JazzCash. If something has changed, we update the page.
          </li>
          <li>
            <strong>Transparent dating</strong> — each page shows <em>datePublished</em> and{" "}
            <em>dateModified</em> so you can see how fresh the information is.
          </li>
          <li>
            <strong>Corrections</strong> — spotted something wrong? Email us via the{" "}
            <Link href="/contact-us">Contact Us</Link> page and we correct publicly.
          </li>
        </ol>

        <h2 id="responsible-gambling">Responsible gambling notice</h2>
        <p>
          3Patti Gold involves real-money wagering. Play only if you are 18 or older, never bet
          what you cannot afford to lose, and set daily limits in-app. See our{" "}
          <Link href="/disclaimer">Disclaimer</Link> for a full risk notice.
        </p>

        {author.sameAs.length ? (
          <>
            <h2 id="elsewhere">Find us elsewhere</h2>
            <ul>
              {author.sameAs.map((u) => (
                <li key={u}>
                  <a href={u} rel="me noopener" target="_blank">
                    {u}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </PageLayout>
    </>
  );
}
