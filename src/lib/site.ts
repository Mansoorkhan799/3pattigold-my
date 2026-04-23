export const SITE = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://3pattigolds.com.pk").replace(/\/$/, ""),
  name: process.env.NEXT_PUBLIC_SITE_NAME || "3Patti Gold",
  brand: "3Patti Gold",
  locale: "en_US",
  language: "en-US",
  twitter: "@3pattigold",
  appVersion: process.env.NEXT_PUBLIC_APP_VERSION || "1.1.2",
  appSizeMb: process.env.NEXT_PUBLIC_APP_SIZE_MB || "54",
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  defaultOgImage: "/og/3-patti-gold-apk-pakistan-download-latest-version-for-android.webp",
  logo: "/logo/3-patti-gold-apk-pakistan-download-latest-version-for-android.webp",
  publisher: "3Patti Gold Dev",
  supportedCountry: "PK",
  supportedLanguages: ["en", "ur"],
} as const;

export const ABSOLUTE = (path: string) =>
  path.startsWith("http") ? path : `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
