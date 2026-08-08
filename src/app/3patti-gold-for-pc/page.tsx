import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { JsonLd } from "@/components/JsonLd";
import { howTo } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { HOME_META } from "@/content/home";

const TITLE = `3Patti Gold For PC — Install APK v${SITE.appVersion} via Emulator (2026)`;
const DESC = `Run 3Patti Gold v${SITE.appVersion} (${SITE.appSizeMb} MB) on Windows or macOS with BlueStacks or LDPlayer. Same JazzCash / Easypaisa account as Android.`;
const PATH = "/3patti-gold-for-pc";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: HOME_META.dateModified,
  keywords: ["3 patti gold for pc", "3patti gold pc", "3 patti gold windows", "3 patti gold emulator"],
});

const STEPS = [
  { name: "Install an Android Emulator", text: "Download and install BlueStacks or LDPlayer on your PC from its official site." },
  { name: "Sign in with Google", text: "Open the emulator and sign in with a Google account." },
  { name: "Load the APK", text: "Drag and drop the 3Patti Gold APK into the emulator window, or open it inside the emulator browser." },
  { name: "Install & Launch", text: "Let the emulator install the APK, then launch 3Patti Gold and log in." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={howTo({
          name: "How to Install 3Patti Gold on PC",
          description: DESC,
          totalTime: "PT8M",
          steps: STEPS,
        })}
      />
      <PageLayout
        title={TITLE}
        intro={DESC}
        path={PATH}
        datePublished={PUBLISHED}
        dateModified={HOME_META.dateModified}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "3Patti Gold For PC", path: PATH },
        ]}
      >
        <p>
          Use the same Android APK we list on mobile: <strong>v{SITE.appVersion}</strong> ·{" "}
          <strong>{SITE.appSizeMb} MB</strong>. Download it from the{" "}
          <Link href={SITE.downloadPagePath}>3Patti Gold download page</Link>, then drop the
          file into your emulator. iPhone users should follow the{" "}
          <Link href="/3patti-gold-for-ios">iOS install guide</Link> instead.
        </p>
        <h2 id="system-requirements">PC System Requirements</h2>
        <ul>
          <li>Windows 10 or 11 (64-bit) / macOS 11+</li>
          <li>4 GB RAM (8 GB recommended)</li>
          <li>5 GB free disk space</li>
          <li>Stable internet connection</li>
        </ul>
        <h2 id="install-steps">Install Steps</h2>
        <ol>
          {STEPS.map((s, i) => (
            <li key={i}><strong>{s.name}:</strong> {s.text}</li>
          ))}
        </ol>
        <p>
          Once installed, <Link href="/register-on-the-3-patti-gold">register your account</Link>{" "}
          or <Link href="/log-in-to-the-3-patti-gold">log in</Link>, then top up via the{" "}
          <Link href="/deposit-money-in-3-patti-gold">deposit guide</Link> to start playing.
        </p>
      </PageLayout>
    </>
  );
}
