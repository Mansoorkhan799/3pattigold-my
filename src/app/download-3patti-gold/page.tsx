import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import Accordion from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { howTo, softwareApp } from "@/lib/jsonld";
import { APK_DETAILS, HOME_META, INSTALL_STEPS, SYSTEM_REQUIREMENTS } from "@/content/home";
import { SITE } from "@/lib/site";

const TITLE = `Download 3Patti Gold APK v${SITE.appVersion} (${SITE.appSizeMb} MB) — Android 2026`;
const DESC = `Get 3Patti Gold APK v${SITE.appVersion} for Android in Pakistan. ${SITE.appSizeMb} MB install, JazzCash & Easypaisa wallets, and 24/7 support. 18+ only.`;
const PATH = "/download-3patti-gold";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: HOME_META.dateModified,
  keywords: [
    "3 patti gold download",
    "3patti gold apk",
    "3 patti gold apk download",
    "3 patti gold latest version",
    `3 patti gold ${SITE.appVersion}`,
  ],
});

export default function Page() {
  const install = howTo({
    name: `How to Download 3Patti Gold APK v${SITE.appVersion} on Android`,
    description: `Download and install 3Patti Gold APK v${SITE.appVersion} safely on your Android device.`,
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
        dateModified={HOME_META.dateModified}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Download 3Patti Gold", path: PATH },
        ]}
      >
        <p>
          Current Android build we list: <strong>v{SITE.appVersion}</strong> ·{" "}
          <strong>{SITE.appSizeMb} MB</strong>. Tap the button below for the tracked APK — avoid
          older 1.1.x files and unrelated white-label copies.
        </p>
        <p>
          <Link
            href={SITE.downloadOfferUrl}
            rel="noopener noreferrer nofollow sponsored"
            target="_blank"
            className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-black no-underline shadow hover:bg-amber-400"
          >
            Download APK v{SITE.appVersion}
          </Link>
        </p>

        <h2 id="about-the-apk">About the 3Patti Gold APK</h2>
        <p>
          Version <strong>{SITE.appVersion}</strong> is the Teen Patti and casino client for
          Pakistan: live tables, JazzCash / Easypaisa / bank transfer, and welcome chips after OTP.
          It is not on Google Play — update by installing this APK over the previous build.
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
        <table>
          <thead>
            <tr>
              <th scope="col">System</th>
              <th scope="col">Minimum</th>
              <th scope="col">Recommended</th>
            </tr>
          </thead>
          <tbody>
            {SYSTEM_REQUIREMENTS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.minimum}</td>
                <td>{row.recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 id="safe-install">Is 3Patti Gold APK Safe to Install?</h2>
        <p>
          After install, open the app info screen and confirm the version is{" "}
          <strong>v{SITE.appVersion}</strong>. Prefer a different device? See{" "}
          <Link href="/3patti-gold-for-pc">3Patti Gold For PC</Link> and{" "}
          <Link href="/3patti-gold-for-ios">3Patti Gold For iOS</Link>.
        </p>
        <p>
          Then follow the <Link href="/register-on-the-3-patti-gold">register guide</Link>,{" "}
          <Link href="/log-in-to-the-3-patti-gold">log in</Link>, and the{" "}
          <Link href="/deposit-money-in-3-patti-gold">deposit</Link> /{" "}
          <Link href="/withdraw-money-on-3-patti-gold">withdraw</Link> guides.
        </p>

        <h2 id="faq">Download FAQs</h2>
        <Accordion
          items={[
            {
              q: "Is 3Patti Gold on Google Play Store?",
              a: (
                <p>
                  No. Real-money APKs in Pakistan are usually sideloaded. Download only via our
                  tracked button, then confirm <strong>v{SITE.appVersion}</strong> after install.
                </p>
              ),
            },
            {
              q: `How do I update to v${SITE.appVersion}?`,
              a: (
                <p>
                  Open the <Link href={SITE.downloadOfferUrl}>download destination</Link>, get the
                  new APK, and install over the existing app. Your login stays; you do not need to
                  unregister.
                </p>
              ),
            },
          ]}
        />
      </PageLayout>
    </>
  );
}
