import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";

const TITLE = "Download 3Patti Gold For iOS Latest Version For Free 2026";
const DESC =
  "Install 3Patti Gold on iPhone or iPad. Fluent performance, quick gameplay, and full access to bonuses, deposits, and withdrawals on iOS.";
const PATH = "/3patti-gold-for-ios";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  keywords: ["3 patti gold for ios", "3patti gold iphone", "3 patti gold ipad"],
});

export default function Page() {
  return (
    <PageLayout
      title={TITLE}
      intro={DESC}
      path={PATH}
      datePublished={PUBLISHED}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "3Patti Gold For iOS", path: PATH },
      ]}
    >
      <h2 id="overview">Overview</h2>
      <p>
        3Patti Gold for iOS brings the popular card-game lineup to iPhone and iPad. Gameplay is
        smooth, the interface is simple, and the same welcome bonus and referral program are
        available to iOS users. Prefer Android? See the{" "}
        <Link href="/download-3patti-gold">official download page</Link>, or use a desktop
        emulator via the <Link href="/3patti-gold-for-pc">PC install guide</Link>.
      </p>
      <h2 id="install-steps">How to install on iOS</h2>
      <ol>
        <li>Open Safari on your iPhone or iPad and visit the official 3Patti Gold iOS page.</li>
        <li>Follow the on-screen instructions to add the app profile (if required).</li>
        <li>Trust the profile in Settings → General → VPN & Device Management.</li>
        <li>Launch the app, register or log in, and start playing.</li>
      </ol>
      <h2 id="requirements">Requirements</h2>
      <ul>
        <li>iOS 13 or higher</li>
        <li>At least 250 MB free storage</li>
        <li>Stable Wi-Fi or mobile data</li>
      </ul>
      <p>
        Once installed, <Link href="/register-on-the-3-patti-gold">create your account</Link>,{" "}
        <Link href="/log-in-to-the-3-patti-gold">log in</Link>, then head to the{" "}
        <Link href="/deposit-money-in-3-patti-gold">deposit</Link> or{" "}
        <Link href="/withdraw-money-on-3-patti-gold">withdraw</Link> pages when you are ready to
        play for real money.
      </p>
    </PageLayout>
  );
}
