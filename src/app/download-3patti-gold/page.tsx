import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import Accordion from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { howTo, softwareApp } from "@/lib/jsonld";
import { INSTALL_STEPS, APK_DETAILS } from "@/content/home";

const TITLE = "Download 3Patti Gold APK Latest Version 2026 For Android";
const DESC =
  "Download the latest 3Patti Gold APK for Android in Pakistan. Safe install, fast updates, and earn real money with 24/7 support.";
const PATH = "/download-3patti-gold";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: new Date().toISOString(),
  keywords: ["3 patti gold download", "3patti gold apk", "3 patti gold apk download", "3 patti gold latest version"],
});

export default function Page() {
  const install = howTo({
    name: "How to Download 3Patti Gold APK on Android",
    description: "Download and install 3Patti Gold APK safely on your Android device.",
    totalTime: "PT5M",
    steps: INSTALL_STEPS.map((s) => ({ name: s.title, text: s.text })),
  });

  return (
    <>
      <JsonLd data={install} />
      <JsonLd data={softwareApp()} />
      <PageLayout
        title={TITLE}
        intro={DESC}
        path={PATH}
        datePublished={PUBLISHED}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Download 3Patti Gold", path: PATH },
        ]}
      >
        <h2 id="about-the-apk">About the 3Patti Gold APK</h2>
        <p>
          The 3Patti Gold APK lets you play card games such as Teen Patti, Andar Bahar, Dragon vs
          Tiger, and more — all from one app. Fast deposits, quick withdrawals, and attractive
          bonuses make it one of the most popular options in Pakistan.
        </p>

        <h2 id="apk-details">3Patti Gold APK Details</h2>
        <table>
          <tbody>
            {APK_DETAILS.map((r) => (
              <tr key={r.label}>
                <th>{r.label}</th>
                <td>{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 id="download-steps">How to Download 3Patti Gold APK</h2>
        <ol>
          {INSTALL_STEPS.map((s) => (
            <li id={s.id} key={s.id}>
              <strong>{s.title}:</strong> {s.text}
            </li>
          ))}
        </ol>

        <h2 id="system-requirements">Android System Requirements</h2>
        <ul>
          <li>Android 5.0 (Lollipop) or higher</li>
          <li>At least 200 MB free storage</li>
          <li>Stable internet connection</li>
          <li>1 GB RAM recommended</li>
        </ul>

        <h2 id="safe-install">Is 3Patti Gold APK Safe to Install?</h2>
        <p>
          Always download the APK from the official source to avoid fake apps. Prefer a different
          device? See our <Link href="/3patti-gold-for-pc">3Patti Gold For PC</Link> and{" "}
          <Link href="/3patti-gold-for-ios">3Patti Gold For iOS</Link> install guides.
        </p>
        <p>
          Once installed, follow the <Link href="/register-on-the-3-patti-gold">register guide</Link>,
          then <Link href="/log-in-to-the-3-patti-gold">log in</Link> and top up your wallet via
          the <Link href="/deposit-money-in-3-patti-gold">deposit guide</Link>. When you win, cash
          out with our <Link href="/withdraw-money-on-3-patti-gold">withdraw guide</Link>.
        </p>

        <h2 id="faq">Download FAQs</h2>
        <Accordion
          items={[
            {
              q: "Is 3Patti Gold on Google Play Store?",
              a: (
                <p>
                  No. Because it is an APK with real-money features, it is not available on the
                  Play Store in Pakistan. Download from the official website only.
                </p>
              ),
            },
            {
              q: "How do I update 3Patti Gold?",
              a: (
                <p>
                  Visit the <Link href={PATH}>download page</Link> and re-download the latest APK.
                  Open the file to update over the existing install — your account is preserved.
                </p>
              ),
            },
          ]}
        />
      </PageLayout>
    </>
  );
}
