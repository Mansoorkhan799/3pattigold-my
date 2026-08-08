import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeculationRules from "@/components/SpeculationRules";
import { JsonLd } from "@/components/JsonLd";
import { SITE, ABSOLUTE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} APK Pakistan Hands-on Review (v${SITE.appVersion})`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "Download 3Patti Gold APK for Android in Pakistan. Play Teen Patti, Rummy, and casino tables, deposit via JazzCash or Easypaisa, and withdraw with 24/7 support. 18+ only.",
  applicationName: SITE.name,
  generator: "Next.js",
  keywords: [
    "3 patti gold",
    "3patti gold",
    "3patti gold apk",
    "3 patti gold download",
    "teen patti gold",
    "3 patti gold pakistan",
    "3 patti gold for pc",
    "3 patti gold for ios",
    "3 patti gold register",
    "3 patti gold login",
  ],
  authors: [{ name: "admin", url: `${SITE.url}/about-us` }],
  creator: SITE.publisher,
  publisher: SITE.publisher,
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.brand} APK Pakistan Hands-on Review (v${SITE.appVersion})`,
    description:
      "Download 3Patti Gold APK for Android in Pakistan. Play Teen Patti, Rummy, and casino tables, deposit via JazzCash or Easypaisa, and withdraw with 24/7 support. 18+ only.",
    locale: SITE.locale,
    images: [{ url: ABSOLUTE(SITE.defaultOgImage), width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brand} APK Pakistan Hands-on Review (v${SITE.appVersion})`,
    description:
      "Download 3Patti Gold APK for Android in Pakistan. Play Teen Patti, Rummy, and casino tables, deposit via JazzCash or Easypaisa, and withdraw with 24/7 support. 18+ only.",
    images: [ABSOLUTE(SITE.defaultOgImage)],
    site: SITE.twitter,
  },
  robots: {
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
  alternates: { canonical: SITE.url },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: SITE.logo, type: "image/webp", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: SITE.logo,
  },
  verification: SITE.gscVerification ? { google: SITE.gscVerification } : undefined,
  other: {
    "msapplication-TileColor": "#f59e0b",
    "msapplication-TileImage": SITE.logo,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#f59e0b",
};

const globalOrg = {
  "@context": "https://schema.org",
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
};
const globalSite = {
  "@context": "https://schema.org",
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-US"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
      prefix="og: https://ogp.me/ns#"
      data-scroll-behavior="smooth"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <head>
        <SpeculationRules />
        <JsonLd data={globalOrg} />
        <JsonLd data={globalSite} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
