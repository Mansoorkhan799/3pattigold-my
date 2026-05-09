import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import Accordion from "@/components/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { howTo } from "@/lib/jsonld";

const TITLE = "How to Log in to the 3 Patti Gold — Secure Login Guide";
const DESC =
  "Log in to 3Patti Gold with your registered mobile number and password. Learn how to recover your password and keep your account safe.";
const PATH = "/log-in-to-the-3-patti-gold";
const PUBLISHED = "2025-12-27T22:48:26+00:00";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  keywords: ["3 patti gold login", "3 patti gold sign in", "3 patti gold account login"],
});

const STEPS = [
  { id: "02-login-account", name: "Open the App", text: "Launch 3Patti Gold and tap Login." },
  { id: "enter-number", name: "Enter Registered Number", text: "Type the mobile number you registered with." },
  { id: "enter-password-login", name: "Enter Password", text: "Type the password you set during registration." },
  { id: "verify-captcha", name: "Verify Captcha", text: "Complete the captcha if shown to protect your account." },
  { id: "enter-lobby", name: "Enter the Lobby", text: "Once logged in, choose a game and start playing." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={howTo({
          name: "How to Log in to 3Patti Gold",
          description: DESC,
          totalTime: "PT2M",
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
          { name: "Login", path: PATH },
        ]}
      >
        <p>
          New to the app? Start by creating an account on the{" "}
          <Link href="/register-on-the-3-patti-gold">register on 3 Patti Gold</Link> page, or
          grab the APK first via the <Link href="https://teenpattigold99.com/?from_gameid=8442895&channelCode=100000">download guide</Link>.
        </p>
        <h2 id="login-steps">Login Steps</h2>
        <ol>
          {STEPS.map((s) => (
            <li id={s.id} key={s.id}>
              <strong>{s.name}:</strong> {s.text}
            </li>
          ))}
        </ol>
        <h2 id="security-tips">Keep your account safe</h2>
        <ul>
          <li>Never share your password or OTP with anyone.</li>
          <li>Log out on shared devices.</li>
          <li>Use a unique password you don't use elsewhere.</li>
        </ul>
        <p>
          Once logged in, fund your wallet via the{" "}
          <Link href="/deposit-money-in-3-patti-gold">deposit guide</Link> and cash out winnings
          using the <Link href="/withdraw-money-on-3-patti-gold">withdraw guide</Link>.
        </p>
        <h2 id="faq">Login FAQs</h2>
        <Accordion
          items={[
            { q: "Forgot password?", a: <p>Tap Forgot Password on the login screen and verify via OTP to reset.</p> },
            { q: "Login not working?", a: <p>Ensure you have a stable connection, correct number, and the latest APK installed.</p> },
          ]}
        />
      </PageLayout>
    </>
  );
}
