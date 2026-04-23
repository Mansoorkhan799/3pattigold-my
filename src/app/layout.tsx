import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeculationRules from "@/components/SpeculationRules";
import { JsonLd } from "@/components/JsonLd";
import { SITE, ABSOLUTE } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} Game Download Latest Version For Android 2026`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "3Patti Gold is the most popular card game in Pakistan, where you can play online casino games to earn real money with fast withdrawals and 24/7 Support.",
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
    title: `${SITE.brand} Game Download Latest Version For Android 2026`,
    description:
      "3Patti Gold is the most popular card game in Pakistan, where you can play online casino games to earn real money with fast withdrawals and 24/7 Support.",
    locale: SITE.locale,
    images: [{ url: ABSOLUTE(SITE.defaultOgImage), width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brand} Game Download Latest Version For Android 2026`,
    description:
      "3Patti Gold is the most popular card game in Pakistan, where you can play online casino games to earn real money with fast withdrawals and 24/7 Support.",
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
  logo: ABSOLUTE(SITE.logo),
  sameAs: [
    "https://play.google.com/store",
    "https://apps.apple.com",
  ],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
