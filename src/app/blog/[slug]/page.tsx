import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { POSTS } from "@/content/posts";
import { SITE } from "@/lib/site";
import { HOME_META } from "@/content/home";

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return buildMetadata({ title: "Not Found", description: "", path: `/blog/${slug}`, noindex: true });
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified || post.datePublished,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();
  return (
    <PageLayout
      title={post.title}
      intro={post.description}
      path={`/blog/${post.slug}`}
      datePublished={post.datePublished}
      dateModified={post.dateModified}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/category/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]}
    >
      <p>{post.excerpt}</p>
      {slug === "latest-version-of-the-3patti-gold" ? (
        <>
          <h2 id="current-build">Current build we list</h2>
          <table>
            <tbody>
              <tr>
                <th scope="row">Version</th>
                <td>v{SITE.appVersion}</td>
              </tr>
              <tr>
                <th scope="row">Size</th>
                <td>{SITE.appSizeMb} MB</td>
              </tr>
              <tr>
                <th scope="row">Last reviewed</th>
                <td>
                  <time dateTime={HOME_META.dateModified}>
                    {new Date(HOME_META.dateModified).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </td>
              </tr>
              <tr>
                <th scope="row">Google Play</th>
                <td>Not listed — sideload the APK</td>
              </tr>
            </tbody>
          </table>
          <p>
            After install, open Android app info and confirm the version string matches{" "}
            <strong>v{SITE.appVersion}</strong>. If you still see 1.1.2 or another number, you
            installed a different file — delete it and use our tracked download again.
          </p>
        </>
      ) : null}
      <h2>Overview</h2>
      <p>
        This article gives you a complete look at <strong>{post.title}</strong>. Use the links in
        the navigation to explore related 3Patti Gold topics, including downloads, deposits,
        withdrawals, and bonuses.
      </p>
      <h2>Related guides</h2>
      <ul>
        <li><a href={SITE.downloadPagePath}>Download 3Patti Gold APK v{SITE.appVersion}</a></li>
        <li><a href="/register-on-the-3-patti-gold">Register on 3Patti Gold</a></li>
        <li><a href="/deposit-money-in-3-patti-gold">Deposit Money</a></li>
        <li><a href="/withdraw-money-on-3-patti-gold">Withdraw Money</a></li>
      </ul>
    </PageLayout>
  );
}
