import { SITE, ABSOLUTE } from "./site";

const organization = () => ({
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE.url}/#logo`,
    url: ABSOLUTE(SITE.logo),
    contentUrl: ABSOLUTE(SITE.logo),
    caption: SITE.name,
    inLanguage: SITE.language,
  },
  image: { "@id": `${SITE.url}/#logo` },
});

const website = () => ({
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: SITE.language,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

type GraphNode = Record<string, unknown>;
type Graph = { "@context": string; "@graph": GraphNode[] };

export function webPageGraph(params: {
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}): Graph {
  const url = ABSOLUTE(params.path);
  const img = ABSOLUTE(params.image || SITE.defaultOgImage);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      website(),
      {
        "@type": "ImageObject",
        "@id": img,
        url: img,
        width: 1200,
        height: 630,
        inLanguage: SITE.language,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: params.title,
        description: params.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        primaryImageOfPage: { "@id": img },
        datePublished: params.datePublished,
        dateModified: params.dateModified || params.datePublished,
        inLanguage: SITE.language,
      },
    ],
  };
}

export function articleGraph(params: {
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorSlug?: string;
  authorName?: string;
  authorBio?: string;
  authorUrl?: string;
  reviewerSlug?: string;
  reviewerName?: string;
}) {
  const url = ABSOLUTE(params.path);
  const img = ABSOLUTE(params.image || SITE.defaultOgImage);
  const authorSlug = params.authorSlug || "admin";
  const authorName = params.authorName || "Admin";
  const authorUrl = params.authorUrl || `${SITE.url}/author/${authorSlug}`;
  const base = webPageGraph({
    ...params,
    dateModified: params.dateModified || params.datePublished,
  });

  const authorPerson = {
    "@type": "Person",
    "@id": `${SITE.url}/author/${authorSlug}#person`,
    name: authorName,
    url: authorUrl,
    ...(params.authorBio ? { description: params.authorBio } : {}),
    worksFor: { "@id": `${SITE.url}/#organization` },
  };

  const article: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${url}#article`,
    isPartOf: { "@id": `${url}#webpage` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    headline: params.title,
    description: params.description,
    image: { "@id": img },
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: { "@id": `${SITE.url}/author/${authorSlug}#person` },
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: SITE.language,
  };

  if (params.reviewerSlug && params.reviewerName) {
    base["@graph"].push({
      "@type": "Person",
      "@id": `${SITE.url}/author/${params.reviewerSlug}#person`,
      name: params.reviewerName,
      url: `${SITE.url}/author/${params.reviewerSlug}`,
      worksFor: { "@id": `${SITE.url}/#organization` },
    });
    article.reviewedBy = { "@id": `${SITE.url}/author/${params.reviewerSlug}#person` };
  }

  base["@graph"].push(authorPerson, article);
  return base;
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: ABSOLUTE(it.path),
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howTo(params: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string; url?: string }[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    totalTime: params.totalTime,
    image: ABSOLUTE(params.image || SITE.defaultOgImage),
    step: params.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: s.url ? ABSOLUTE(s.url) : undefined,
    })),
  };
}

export function softwareApp() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: `${SITE.brand} APK`,
    operatingSystem: "ANDROID",
    applicationCategory: "GameApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    softwareVersion: SITE.appVersion,
    fileSize: `${SITE.appSizeMb} MB`,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    downloadUrl: `${SITE.url}/download-3patti-gold`,
    contentRating: "18+",
  };
}

export function personPage(params: {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  image?: string;
  sameAs?: string[];
  knowsAbout?: string[];
}) {
  const url = `${SITE.url}/author/${params.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profilepage`,
    mainEntity: {
      "@type": "Person",
      "@id": `${url}#person`,
      name: params.name,
      url,
      jobTitle: params.jobTitle,
      description: params.bio,
      worksFor: { "@id": `${SITE.url}/#organization` },
      ...(params.image ? { image: ABSOLUTE(params.image) } : {}),
      ...(params.sameAs?.length ? { sameAs: params.sameAs } : {}),
      ...(params.knowsAbout?.length ? { knowsAbout: params.knowsAbout } : {}),
    },
  };
}
