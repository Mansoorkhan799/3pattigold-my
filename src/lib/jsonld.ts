import { SITE, ABSOLUTE } from "./site";

const org = () => ({
  "@type": ["Organization", "Person"],
  "@id": `${SITE.url}/#person`,
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
  image: {
    "@type": "ImageObject",
    "@id": `${SITE.url}/#logo`,
    url: ABSOLUTE(SITE.logo),
    contentUrl: ABSOLUTE(SITE.logo),
    caption: SITE.name,
    inLanguage: SITE.language,
  },
});

const website = () => ({
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#person` },
  inLanguage: SITE.language,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export function webPageGraph(params: {
  path: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const url = ABSOLUTE(params.path);
  const img = ABSOLUTE(params.image || SITE.defaultOgImage);
  return {
    "@context": "https://schema.org",
    "@graph": [
      org(),
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
  authorName?: string;
}) {
  const url = ABSOLUTE(params.path);
  const img = ABSOLUTE(params.image || SITE.defaultOgImage);
  const base = webPageGraph({
    ...params,
    dateModified: params.dateModified || params.datePublished,
  });
  base["@graph"].push(
    {
      "@type": "Person",
      "@id": `${SITE.url}/author/${(params.authorName || "admin").toLowerCase()}`,
      name: params.authorName || "admin",
      url: `${SITE.url}/about-us`,
    } as any,
    {
      "@type": "Article",
      "@id": `${url}#article`,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      headline: params.title,
      description: params.description,
      image: { "@id": img },
      datePublished: params.datePublished,
      dateModified: params.dateModified || params.datePublished,
      author: { "@id": `${SITE.url}/author/${(params.authorName || "admin").toLowerCase()}` },
      publisher: { "@id": `${SITE.url}/#person` },
      inLanguage: SITE.language,
    } as any,
  );
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "3200",
    },
    softwareVersion: SITE.appVersion,
    fileSize: `${SITE.appSizeMb} MB`,
    author: { "@id": `${SITE.url}/#person` },
    downloadUrl: `${SITE.url}/download-3patti-gold`,
  };
}
