import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { AUTHORS } from "@/content/authors";

const TITLE = "About Us — 3Patti Gold Pakistan";
const DESC =
  "Who runs the 3Patti Gold editorial desk, how we test apps, our editorial standards, and how to reach us.";
const PATH = "/about-us";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
});

export default function Page() {
  const editor = AUTHORS.admin;
  return (
    <PageLayout
      title={TITLE}
      intro={DESC}
      path={PATH}
      datePublished="2025-12-27T22:48:26+00:00"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "About Us", path: PATH },
      ]}
    >
      <h2 id="who-we-are">Who we are</h2>
      <p>
        3Patti Gold is an independent editorial site covering the 3Patti Gold card-game APK in
        Pakistan. We write hands-on installation guides, review payment flows, and track bonus
        terms for Android, PC-emulator, and iOS users. We are not affiliated with any specific
        operator and we do not accept payment in exchange for favourable coverage.
      </p>

      <h2 id="editors">Our editors</h2>
      <p>
        <Link href={`/author/${editor.slug}`}>
          <strong>{editor.name}</strong>
        </Link>{" "}
        — {editor.jobTitle}. {editor.bio}
      </p>

      <h2 id="editorial-standards">Editorial standards</h2>
      <ol>
        <li>
          <strong>Hands-on testing:</strong> every APK we cover is installed on a real device;
          we record the real version number, APK size, and permissions before publishing.
        </li>
        <li>
          <strong>Payment verification:</strong> we test small deposits and withdrawals using
          Easypaisa and JazzCash to confirm the flows work as documented.
        </li>
        <li>
          <strong>Transparent dating:</strong> every page shows a visible <em>Last updated</em>{" "}
          date and uses machine-readable <code>datePublished</code>/<code>dateModified</code>{" "}
          schema so readers (and search engines) see freshness.
        </li>
        <li>
          <strong>Corrections on request:</strong> found a mistake? Email us via the{" "}
          <Link href="/contact-us">Contact Us</Link> page. Real corrections are published with
          a dated note.
        </li>
        <li>
          <strong>No undisclosed affiliate payments:</strong> if a link is a paid placement, we
          will label it as "Sponsored" inline. As of the latest review, none of the internal
          links on this site are paid placements.
        </li>
      </ol>

      <h2 id="responsible-gambling">Responsible gambling</h2>
      <p>
        3Patti Gold involves real-money wagering. This site is for readers 18 years or older.
        Set daily deposit limits in-app, never wager money you cannot afford to lose, and take
        breaks. If gambling is affecting your life, please seek help:
      </p>
      <ul>
        <li>
          <a href="https://www.begambleaware.org/" rel="noopener nofollow" target="_blank">
            BeGambleAware
          </a>{" "}
          — free, confidential support (English &amp; Urdu resources).
        </li>
        <li>
          <a href="https://www.gamblingtherapy.org/" rel="noopener nofollow" target="_blank">
            Gambling Therapy
          </a>{" "}
          — international peer support.
        </li>
        <li>
          In Pakistan, contact <strong>Umang Helpline: 0311-7786264</strong> for general mental
          health support.
        </li>
      </ul>

      <h2 id="contact">Contact</h2>
      <p>
        Need help, a correction, or a tip? Head to the{" "}
        <Link href="/contact-us">Contact Us</Link> page or email the editorial team directly.
      </p>
    </PageLayout>
  );
}
