import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import TableOfContents from "@/components/TableOfContents";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { articleGraph, faqPage, howTo, softwareApp } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import {
  HOME_META,
  APK_DETAILS,
  NEW_USER_OFFERS,
  EXCLUSIVE_BONUSES,
  KEY_FEATURES,
  INSTALL_STEPS,
  STRATEGIES,
  PAYMENT_METHODS,
  POPULAR_GAMES,
  SECURITY_FAIRPLAY,
  PROS,
  CONS,
  FAQS,
} from "@/content/home";

export const metadata: Metadata = buildMetadata({
  title: HOME_META.title,
  description: HOME_META.description,
  path: "/",
  type: "article",
  publishedTime: HOME_META.datePublished,
  modifiedTime: HOME_META.dateModified,
  ogImage: SITE.defaultOgImage,
  keywords: [
    "3 patti gold",
    "3patti gold",
    "3 patti gold download",
    "3patti gold apk",
    "3 patti gold pakistan",
    "3 patti gold 2026",
  ],
});

const TOC = [
  { id: "3patti-gold-game-download", label: "3Patti Gold Game Download Latest Version" },
  { id: "3patti-gold-apk-details", label: "3Patti Gold APK Details" },
  { id: "what-is-3patti-gold-apk", label: "What is the 3Patti Gold APK?" },
  { id: "reasons-to-choose", label: "Reasons to Choose the 3Patti Gold App in Pakistan" },
  { id: "special-offers-new-users", label: "Special Offers for New Users" },
  { id: "exclusive-bonuses", label: "Exclusive Bonuses & Promotions" },
  { id: "key-features", label: "Key Features of 3Patti Gold APK" },
  { id: "download-install", label: "Download & Install 3Patti Gold APK for Android" },
  { id: "register-login-steps", label: "Steps to Register & Log in Account" },
  { id: "how-to-play-earn", label: "How to Play & Earn Money on 3Patti Gold" },
  { id: "supported-payment-methods", label: "Supported Payment Methods" },
  { id: "deposit-method", label: "Money Deposit Method" },
  { id: "withdraw-method", label: "Rewards Withdrawal Method" },
  { id: "customer-support", label: "Contact the Customer Support Team" },
  { id: "popular-games", label: "Popular Game Section of 3Patti Gold App" },
  { id: "security-fair-play", label: "Security & Fair Play System" },
  { id: "best-strategies", label: "Best Strategies to Earn Maximum on 3Patti Gold" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "final-thoughts", label: "Final Thoughts" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

export default function HomePage() {
  const article = articleGraph({
    path: "/",
    title: HOME_META.title,
    description: HOME_META.description,
    datePublished: HOME_META.datePublished,
    dateModified: HOME_META.dateModified,
    image: "/3-patti-gold-game.webp",
  });
  const faq = faqPage(FAQS);
  const install = howTo({
    name: "How to Download & Install 3Patti Gold APK on Android",
    description:
      "Step-by-step guide to downloading the 3Patti Gold APK, enabling unknown sources, and installing it safely on Android devices.",
    totalTime: "PT5M",
    steps: INSTALL_STEPS.map((s) => ({ name: s.title, text: s.text, url: `/#${s.id}` })),
  });
  const app = softwareApp();

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={faq} />
      <JsonLd data={install} />
      <JsonLd data={app} />

      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
              {HOME_META.title}
            </h1>
            <p className="mt-4 text-lg text-neutral-700">{HOME_META.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/download-3patti-gold"
                className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-black shadow hover:bg-amber-400"
              >
                Download 3Patti Gold
              </Link>
              <span className="text-sm text-neutral-500">
                <strong>Version: v{SITE.appVersion}</strong> · <strong>Size: {SITE.appSizeMb}MB</strong>
              </span>
            </div>
          </div>
          <div className="justify-self-center">
            <Image
              src={SITE.logo}
              alt={`${SITE.brand} logo`}
              width={256}
              height={256}
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 256px"
              className="h-40 w-40 object-contain sm:h-48 sm:w-48 md:h-64 md:w-64"
            />
          </div>
        </div>
      </section>

      <article
        className="prose-page mx-auto max-w-3xl px-4 pb-16 pt-10"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="author" content={HOME_META.author} />
        <meta itemProp="datePublished" content={HOME_META.datePublished} />
        <meta itemProp="dateModified" content={HOME_META.dateModified} />

        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-600">
          <span>
            Written by <strong className="text-neutral-800">{HOME_META.author}</strong>
          </span>
          <span aria-hidden="true">·</span>
          <span>{HOME_META.readingTimeMinutes} min read</span>
          <span aria-hidden="true">·</span>
          <time dateTime={HOME_META.dateModified}>
            Updated {new Date(HOME_META.dateModified).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>

        <TableOfContents items={TOC} />

        <h2 id="3patti-gold-game-download">
          3Patti Gold Game Download Latest Version For Android 2026
        </h2>
        <figure>
          <Image
            src="/3-patti-gold-game.webp"
            alt="3Patti Gold card game gameplay screenshot on Android"
            width={1200}
            height={560}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption>3Patti Gold — live multiplayer card game on Android.</figcaption>
        </figure>
        <p>
          <Link href="/download-3patti-gold">3Patti Gold</Link> is a popular online card game that
          offers multiple opportunities to play games and earn real money. It is designed
          explicitly for casino enthusiasts and provides a smooth, easy-to-use interface that
          enhances the gaming experience. Join live tables and compete with real players from
          various regions — a realistic game-playing experience from home.
        </p>
        <p>
          The app includes daily challenges, events, and social features that make your gameplay
          more fun and competitive. Whether you play for fun or for competition, this app gives
          you a realistic, best-in-class gaming experience, just like a real casino. You can also
          run it on a bigger screen — see our <Link href="/3patti-gold-for-pc">3Patti Gold For PC</Link>{" "}
          or <Link href="/3patti-gold-for-ios">3Patti Gold For iOS</Link> guides.
        </p>

        <h2 id="3patti-gold-apk-details">3Patti Gold APK Details</h2>
        <table>
          <tbody>
            {APK_DETAILS.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                <td>{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 id="what-is-3patti-gold-apk">What is the 3Patti Gold APK?</h2>
        <p>
          The <Link href="/">3Patti Gold APK</Link> is a popular betting app that lets you play
          various games, including Ludo, 3 Patti, Dragon vs Tiger, roulette, and more, to earn
          real cash. You can play a wide variety of games in one app for a more engaging
          experience. The most notable feature is that it keeps your{" "}
          <Link href="/deposit-money-in-3-patti-gold">deposits</Link> and{" "}
          <Link href="/withdraw-money-on-3-patti-gold">withdrawals</Link> safe and secure, so you
          can transact without worry.
        </p>
        <p>
          The latest version offers smooth gameplay, attractive graphics, and easy navigation. The
          combination of entertainment, security, and convenience makes the 3 Patti Gold APK a
          popular choice among online gamers.
        </p>

        <h2 id="reasons-to-choose">Reasons to Choose the 3Patti Gold App in Pakistan</h2>
        <figure>
          <Image
            src="/3-patti-gold-interface.webp"
            alt="Clean and modern 3Patti Gold app interface in Pakistan"
            width={1200}
            height={560}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption>Clean, intuitive 3Patti Gold interface built for Pakistani players.</figcaption>
        </figure>
        <h3 id="traditional-familiar-game">Traditional & Familiar Game</h3>
        <p>
          3Patti Gold brings classic gameplay to your mobile device while maintaining traditional
          rules with modern graphics and features, making it easy for beginners and veterans alike.
        </p>
        <h3 id="easy-to-use">Easy to Use</h3>
        <p>
          A simple, intuitive interface means new players can{" "}
          <Link href="/register-on-the-3-patti-gold">register</Link> and navigate without
          confusion. Menus, games, tables, and in-game actions are straightforward.
        </p>
        <h3 id="play-with-real-players">Play With Real Players</h3>
        <p>
          Connect with friends and players worldwide. Every match is unpredictable because you are
          competing against real people, not AI.
        </p>
        <h3 id="live-multiplayer-experience">Live Multiplayer Experience</h3>
        <p>
          Live game tables with multiple players in real time create a thrilling experience
          similar to playing in a real casino.
        </p>
        <h3 id="daily-rewards-bonuses">Daily Rewards & Bonuses</h3>
        <p>
          Daily login bonuses, virtual chips, and special rewards motivate users to{" "}
          <Link href="/log-in-to-the-3-patti-gold">log in</Link> every day for extra rewards.
        </p>
        <h3 id="social-features">Social Features</h3>
        <p>
          Chat options and a friends list let you communicate with other players during the game —
          more social, more fun.
        </p>

        <h2 id="special-offers-new-users">Special Offers for New Users by 3Patti Gold</h2>
        <figure>
          <Image
            src="/3-patti-gold-recharge-rebate.webp"
            alt="3Patti Gold recharge rebate bonus for new users"
            width={1200}
            height={560}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption>Daily recharge rebate rewards for every 3Patti Gold player.</figcaption>
        </figure>
        {NEW_USER_OFFERS.map((o) => (
          <div key={o.id}>
            <h3 id={o.id}>{o.title}</h3>
            <p>{o.text}</p>
          </div>
        ))}

        <h2 id="exclusive-bonuses">Exclusive Bonuses & Promotions of 3Patti Gold</h2>
        <figure>
          <Image
            src="/3-patti-gold-refer-and-earn.webp"
            alt="3Patti Gold refer and earn program"
            width={1200}
            height={560}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption>Refer and earn: invite friends to unlock bigger rewards.</figcaption>
        </figure>
        {EXCLUSIVE_BONUSES.map((b) => (
          <div key={b.id}>
            <h3 id={b.id}>{b.title}</h3>
            <p>{b.text}</p>
          </div>
        ))}

        <h2 id="key-features">Key Features of 3Patti Gold APK</h2>
        {KEY_FEATURES.map((f) => (
          <div key={f.id}>
            <h3 id={f.id}>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}

        <h2 id="download-install">Download & Install 3Patti Gold APK for Android Devices</h2>
        <figure>
          <Image
            src="/3-patti-gold-bind-mail.webp"
            alt="Bind email after installing 3Patti Gold on Android"
            width={1200}
            height={560}
            className="h-auto w-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption>Secure your account by binding an email after installation.</figcaption>
        </figure>
        <p>
          To download and install <Link href="/download-3patti-gold">3Patti Gold Download</Link> on
          your Android device, follow these steps:
        </p>
        <ol>
          {INSTALL_STEPS.map((s) => (
            <li key={s.id} id={s.id}>
              <strong>{s.title}:</strong> {s.text}
            </li>
          ))}
        </ol>
        <p>
          For a detailed walkthrough with APK versions and troubleshooting, visit the full{" "}
          <Link href="/download-3patti-gold">3Patti Gold download page</Link>.
        </p>

        <h2 id="register-login-steps">Steps to Register & Log in Account on 3Patti Gold</h2>
        <p>
          Once installed, create your account in minutes — see the full{" "}
          <Link href="/register-on-the-3-patti-gold">register on 3 Patti Gold</Link> guide. Open
          the app, tap <em>Register</em>, enter your mobile number, complete the captcha, set a
          strong password, and submit. Already have an account? Use the{" "}
          <Link href="/log-in-to-the-3-patti-gold">log in to 3 Patti Gold</Link> screen to sign in
          with your mobile number and password.
        </p>

        <h2 id="how-to-play-earn">How to Play & Earn Money on 3Patti Gold?</h2>
        <p>
          After you <Link href="/log-in-to-the-3-patti-gold">log in</Link>, open the lobby and
          start with free chips from your welcome and daily login bonuses. Choose a low-bet table
          to learn the pace, play smart hands, and withdraw winnings using{" "}
          <Link href="/withdraw-money-on-3-patti-gold">Easypaisa or JazzCash</Link> once your
          balance grows.
        </p>

        <h2 id="supported-payment-methods">Supported Payment Methods of the 3Patti Gold App</h2>
        {PAYMENT_METHODS.map((m) => (
          <div key={m.id}>
            <h3 id={m.id}>{m.title}</h3>
            <p>{m.text}</p>
          </div>
        ))}

        <h2 id="deposit-method">01: Money Deposit Method</h2>
        <p>
          Tap the <em>Deposit</em> section in the app, choose your payment method, enter the
          amount, confirm, and your coins will land in your wallet within seconds. For full
          limits, step-by-step flows, and troubleshooting, see our{" "}
          <Link href="/deposit-money-in-3-patti-gold">deposit money in 3 Patti Gold</Link> guide.
        </p>

        <h2 id="withdraw-method">02: Rewards Withdrawal Method</h2>
        <p>
          Open the <em>Withdraw</em> section, pick your method (Easypaisa or JazzCash), enter the
          amount, and submit. Full details live on the dedicated{" "}
          <Link href="/withdraw-money-on-3-patti-gold">withdraw money on 3 Patti Gold</Link> page.
        </p>

        <h2 id="customer-support">Contact the Customer Support Team of 3 Patti Gold</h2>
        <p>
          Need help? Reach out via in-app <strong>Live Chat</strong>, email the team, or browse
          the <Link href="/#faqs">FAQs</Link>. You can also reach us any time through the{" "}
          <Link href="/contact-us">Contact Us</Link> page for account, payment, or verification
          issues.
        </p>

        <h2 id="popular-games">Popular Game Section of 3Patti Gold App</h2>
        {POPULAR_GAMES.map((g) => (
          <div key={g.id}>
            <h3 id={g.id}>{g.title}</h3>
            <p>{g.text}</p>
          </div>
        ))}

        <h2 id="security-fair-play">Security & Fair Play System of 3Patti Gold</h2>
        {SECURITY_FAIRPLAY.map((s) => (
          <div key={s.id}>
            <h3 id={s.id}>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}

        <h2 id="best-strategies">Best Strategies to Earn Maximum on 3Patti Gold</h2>
        <ul>
          {STRATEGIES.map((s) => (
            <li key={s.id} id={s.id}>
              <strong>{s.title}:</strong> {s.text}
            </li>
          ))}
        </ul>

        <h2 id="pros-cons">Pros & Cons</h2>
        <h3 id="pros">Pros</h3>
        <ol>
          {PROS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
        <h3 id="cons">Cons</h3>
        <ol>
          {CONS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>

        <h2 id="final-thoughts">Final Thoughts</h2>
        <p>
          <Link href="/">3 Patti Gold</Link> is one of the best and most popular real-money gaming
          apps, offering a wide variety of games to earn real cash. The platform is secure and
          fair, offering multiple bonuses and rewards to make it beginner-friendly and engaging
          for regulars. Its user-friendly interface, fast transactions, and regular updates keep
          gameplay smooth and enjoyable. Because it is not available on the Google Play Store, you
          must download it from the official <Link href="/download-3patti-gold">download page</Link>.
        </p>
        <p>
          Always avoid fake or unknown websites — they can cause device issues and steal personal
          information. Read our <Link href="/disclaimer">Disclaimer</Link>,{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>, and{" "}
          <Link href="/terms-and-conditions">Terms and Conditions</Link> before playing. For more
          guides and tips, visit the <Link href="/category/blog">blog</Link> or learn more{" "}
          <Link href="/about-us">about us</Link>.
        </p>

        <h2 id="faqs">Frequently Asked Questions</h2>
        <Accordion items={FAQS.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))} />

        <p className="mt-10 text-sm text-neutral-500">
          Page last updated: {new Date(HOME_META.dateModified).toDateString()}.
        </p>
      </article>
    </>
  );
}
