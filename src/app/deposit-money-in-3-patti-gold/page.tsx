import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import Accordion from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { howTo } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { HOME_META } from "@/content/home";

const TITLE = "How to Deposit Money in 3 Patti Gold — Easypaisa & More";
const DESC =
  "Add money to your 3Patti Gold wallet using local payment methods including Easypaisa. Fast deposits, clear limits, and no hidden fees.";
const PATH = "/deposit-money-in-3-patti-gold";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: HOME_META.dateModified,
  keywords: ["3 patti gold deposit", "3 patti gold easypaisa", "3 patti gold add money"],
});

const STEPS = [
  { id: "01-money-deposit-method", name: "Open Wallet", text: "In the 3Patti Gold app, open the Wallet or Recharge section." },
  { id: "choose-amount", name: "Choose Amount", text: "Pick a preset amount or enter a custom amount to deposit." },
  { id: "easypaisa", name: "Select Easypaisa", text: "Select Easypaisa or another supported local method." },
  { id: "confirm-payment", name: "Confirm Payment", text: "Complete the payment in your wallet app and return to 3Patti Gold." },
  { id: "credit-confirmation", name: "Credit Confirmation", text: "Your coins are credited to your wallet — usually within seconds." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={howTo({
          name: "How to Deposit Money in 3Patti Gold",
          description: DESC,
          totalTime: "PT3M",
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
          { name: "Deposit", path: PATH },
        ]}
      >
        <figure>
          <Image
            src="/3-patti-gold-deposit-money.webp"
            alt="Deposit money into 3Patti Gold wallet using Easypaisa"
            width={1200}
            height={560}
            priority
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption>Add funds to your 3Patti Gold wallet in seconds.</figcaption>
        </figure>
        <p>
          Wallet screens below match Android build <strong>v{SITE.appVersion}</strong>. If deposit
          options look different, update the APK from the{" "}
          <Link href={SITE.downloadPagePath}>download page</Link> first.
        </p>
        <h2 id="deposit-steps">Deposit Steps</h2>
        <ol>
          {STEPS.map((s) => (
            <li id={s.id} key={s.id}>
              <strong>{s.name}:</strong> {s.text}
            </li>
          ))}
        </ol>

        <h2 id="methods">Supported Payment Methods</h2>
        <ul>
          <li>Easypaisa</li>
          <li>JazzCash</li>
          <li>Bank transfer</li>
          <li>USDT (where available)</li>
        </ul>
        <p>
          Need to create an account first? Use our{" "}
          <Link href="/register-on-the-3-patti-gold">registration guide</Link>, or if you already
          have one, <Link href="/log-in-to-the-3-patti-gold">log in</Link>. Ready to cash out your
          winnings? See the{" "}
          <Link href="/withdraw-money-on-3-patti-gold">withdraw money</Link> page.
        </p>

        <h2 id="faq">Deposit FAQs</h2>
        <Accordion
          items={[
            { q: "Minimum deposit?", a: <p>The minimum deposit depends on the payment method. The in-app screen shows current limits.</p> },
            { q: "Deposit not credited?", a: <p>Keep your receipt and contact Support via the Contact Us page for assistance.</p> },
          ]}
        />
      </PageLayout>
    </>
  );
}
