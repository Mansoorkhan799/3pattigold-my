import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import Accordion from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { howTo } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { HOME_META } from "@/content/home";

const TITLE = "How to Withdraw Money on 3 Patti Gold — Fast Payouts Guide";
const DESC =
  "Withdraw your 3Patti Gold winnings quickly to Easypaisa, JazzCash, or bank. Clear steps, limits, and what to do if a payout is delayed.";
const PATH = "/withdraw-money-on-3-patti-gold";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: HOME_META.dateModified,
  keywords: ["3 patti gold withdraw", "3 patti gold payout", "3 patti gold easypaisa withdraw"],
});

const STEPS = [
  { id: "02-rewards-withdrawal-method", name: "Open Wallet", text: "Open the Wallet section and tap Withdraw." },
  { id: "enter-amount", name: "Enter Amount", text: "Enter the amount you want to withdraw (respect daily limits)." },
  { id: "choose-method", name: "Choose Method", text: "Pick Easypaisa, JazzCash, or bank as the payout method." },
  { id: "verify-identity", name: "Verify Identity", text: "Complete any identity / captcha verification if prompted." },
  { id: "receive-funds", name: "Receive Funds", text: "Funds typically arrive within minutes to a few hours depending on method." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={howTo({
          name: "How to Withdraw Money on 3Patti Gold",
          description: DESC,
          totalTime: "PT5M",
          steps: STEPS.map((s) => ({ name: s.name, text: s.text })),
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
          { name: "Withdraw", path: PATH },
        ]}
      >
        <p>
          These steps apply to <strong>v{SITE.appVersion}</strong>. Older builds may miss JazzCash
          or Easypaisa payout options — update via the{" "}
          <Link href={SITE.downloadPagePath}>download page</Link> before you open a ticket.
        </p>
        <h2 id="withdraw-steps">Withdrawal Steps</h2>
        <ol>
          {STEPS.map((s) => (
            <li id={s.id} key={s.id}>
              <strong>{s.name}:</strong> {s.text}
            </li>
          ))}
        </ol>
        <h2 id="limits">Withdrawal Limits</h2>
        <p>Limits depend on VIP level and payment method. Full limits are shown in the Wallet screen.</p>
        <p>
          Need to top up first? Use the{" "}
          <Link href="/deposit-money-in-3-patti-gold">deposit money</Link> guide. Haven't signed
          in yet? Head to <Link href="/log-in-to-the-3-patti-gold">login</Link>, or see our
          <Link href="/register-on-the-3-patti-gold"> registration guide</Link> if you are new.
        </p>
        <h2 id="faq">Withdrawal FAQs</h2>
        <Accordion
          items={[
            { q: "How long do withdrawals take?", a: <p>Most payouts land within a few hours. Some may be delayed during bank off-hours.</p> },
            { q: "Do I need to verify my account?", a: <p>Large withdrawals may require identity verification as part of standard security.</p> },
          ]}
        />
      </PageLayout>
    </>
  );
}
