import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import Accordion from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { howTo } from "@/lib/jsonld";

const TITLE = "How to Register on the 3 Patti Gold — Step-by-Step Guide";
const DESC =
  "Create a 3Patti Gold account in minutes. Enter your mobile number, verify the OTP, set a password, and claim your welcome bonus.";
const PATH = "/register-on-the-3-patti-gold";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  keywords: ["3 patti gold register", "3 patti gold sign up", "3 patti gold account"],
});

const STEPS = [
  { id: "01-register-account", name: "Open the App", text: "Launch 3Patti Gold after installing the APK." },
  { id: "enter-mobile-number", name: "Enter Mobile Number", text: "Tap Register, choose your country, and enter a valid mobile number." },
  { id: "enter-password", name: "Set Password", text: "Set a strong password containing letters and numbers." },
  { id: "verify-otp", name: "Verify OTP", text: "Enter the OTP you receive via SMS to confirm your number." },
  { id: "claim-welcome", name: "Claim Welcome Bonus", text: "Once registered, your welcome bonus is credited to your wallet automatically." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={howTo({
          name: "How to Register on 3Patti Gold",
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
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Register", path: PATH },
        ]}
      >
        <figure>
          <Image
            src="/3-patti-gold-referrals.webp"
            alt="3Patti Gold referral program after registration"
            width={1200}
            height={560}
            priority
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption>Register now and unlock the referral program to earn more.</figcaption>
        </figure>
        <h2 id="why-register">Why register on 3Patti Gold?</h2>
        <p>
          Registering unlocks the welcome bonus, referral program, daily login rewards, and access
          to live tables where you can play real opponents for real rewards. If you haven't
          installed the app yet, start with the{" "}
          <Link href="https://teenpattigold99.com/?from_gameid=8442895&channelCode=100000">3Patti Gold download page</Link>.
        </p>
        <h2 id="registration-steps">Registration Steps</h2>
        <ol>
          {STEPS.map((s) => (
            <li id={s.id} key={s.id}>
              <strong>{s.name}:</strong> {s.text}
            </li>
          ))}
        </ol>
        <p>
          Already registered? Head to the{" "}
          <Link href="/log-in-to-the-3-patti-gold">login page</Link>, then fund your wallet via
          the <Link href="/deposit-money-in-3-patti-gold">deposit guide</Link>.
        </p>
        <h2 id="faq">Registration FAQs</h2>
        <Accordion
          items={[
            { q: "Is registration free?", a: <p>Yes. Creating a 3Patti Gold account is free.</p> },
            { q: "What if I don't receive the OTP?", a: <p>Wait 60 seconds, then tap Resend. If it fails, see our OTP Problems guide.</p> },
          ]}
        />
      </PageLayout>
    </>
  );
}
