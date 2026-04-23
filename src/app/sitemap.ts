import type { MetadataRoute } from "next";
import { SITE, ABSOLUTE } from "@/lib/site";
import { POSTS } from "@/content/posts";

const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/download-3patti-gold", priority: 0.9, changeFrequency: "weekly" },
  { path: "/register-on-the-3-patti-gold", priority: 0.8, changeFrequency: "monthly" },
  { path: "/log-in-to-the-3-patti-gold", priority: 0.8, changeFrequency: "monthly" },
  { path: "/deposit-money-in-3-patti-gold", priority: 0.8, changeFrequency: "monthly" },
  { path: "/withdraw-money-on-3-patti-gold", priority: 0.8, changeFrequency: "monthly" },
  { path: "/3patti-gold-for-pc", priority: 0.7, changeFrequency: "monthly" },
  { path: "/3patti-gold-for-ios", priority: 0.7, changeFrequency: "monthly" },
  { path: "/category/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.4, changeFrequency: "yearly" },
  { path: "/contact-us", priority: 0.4, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: ABSOLUTE(p.path),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
  const postEntries: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: ABSOLUTE(`/blog/${p.slug}`),
    lastModified: new Date(p.dateModified || p.datePublished),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  // void host reference to satisfy SITE import tree-shake in dev
  void SITE;
  return [...staticEntries, ...postEntries];
}
