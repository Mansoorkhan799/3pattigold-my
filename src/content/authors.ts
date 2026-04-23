export type Author = {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  longBio: string;
  image?: string;
  email?: string;
  sameAs: string[];
  knowsAbout: string[];
  yearsExperience?: number;
};

export const AUTHORS: Record<string, Author> = {
  admin: {
    slug: "admin",
    name: "3Patti Gold Editorial Team",
    jobTitle: "Editor, 3Patti Gold Pakistan",
    bio: "Independent editorial team covering card-game apps, payment flows, and responsible play in Pakistan.",
    longBio:
      "The 3Patti Gold editorial team has been testing and writing about Android card-game apps in Pakistan since 2023. Every guide on this site is written after hands-on installation, test deposits with Easypaisa and JazzCash, and review of each bonus and withdrawal path. We publish version numbers, APK sizes, last-review dates, and known issues transparently, and we do not accept payment in exchange for favourable coverage. We flag responsible-gambling resources on every money-related page.",
    sameAs: [],
    knowsAbout: [
      "Teen Patti",
      "3 Patti Gold",
      "Android APK installation",
      "Easypaisa",
      "JazzCash",
      "Responsible gambling in Pakistan",
      "Card game strategy",
    ],
    yearsExperience: 3,
  },
};

export const DEFAULT_AUTHOR = AUTHORS.admin;
