import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { POSTS } from "@/content/posts";

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
      <h2>Overview</h2>
      <p>
        This article gives you a complete look at <strong>{post.title}</strong>. Use the links in
        the navigation to explore related 3Patti Gold topics, including downloads, deposits,
        withdrawals, and bonuses.
      </p>
      <h2>Related guides</h2>
      <ul>
        <li><a href="https://teenpattigold99.com/?from_gameid=8442895&channelCode=100000">Download 3Patti Gold APK</a></li>
        <li><a href="/register-on-the-3-patti-gold">Register on 3Patti Gold</a></li>
        <li><a href="/deposit-money-in-3-patti-gold">Deposit Money</a></li>
        <li><a href="/withdraw-money-on-3-patti-gold">Withdraw Money</a></li>
      </ul>
    </PageLayout>
  );
}
