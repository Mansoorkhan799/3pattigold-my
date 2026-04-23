import type { Metadata } from "next";
import { SITE, ABSOLUTE } from "./site";

type PageSEO = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  noindex?: boolean;
};

export function buildMetadata(s: PageSEO): Metadata {
  const url = ABSOLUTE(s.path);
  const image = ABSOLUTE(s.ogImage || SITE.defaultOgImage);
  return {
    metadataBase: new URL(SITE.url),
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: url },
    robots: s.noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: s.type || "website",
      url,
      siteName: SITE.name,
      title: s.title,
      description: s.description,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: s.title }],
      publishedTime: s.publishedTime,
      modifiedTime: s.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description: s.description,
      images: [image],
      site: SITE.twitter,
      creator: SITE.twitter,
    },
    verification: SITE.gscVerification ? { google: SITE.gscVerification } : undefined,
    other: {
      "og:updated_time": s.modifiedTime || new Date().toISOString(),
    },
  };
}
