import Link from "next/link";
import { SITE } from "@/lib/site";

const COL1 = [
  { href: "/download-3patti-gold", label: "Download 3Patti Gold" },
  { href: "/3patti-gold-for-pc", label: "3Patti Gold For PC" },
  { href: "/3patti-gold-for-ios", label: "3Patti Gold For iOS" },
  { href: "/register-on-the-3-patti-gold", label: "Register" },
  { href: "/log-in-to-the-3-patti-gold", label: "Login" },
];
const COL2 = [
  { href: "/deposit-money-in-3-patti-gold", label: "Deposit Money" },
  { href: "/withdraw-money-on-3-patti-gold", label: "Withdraw Money" },
  { href: "/category/blog", label: "Blog" },
];
const COL3 = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="text-xl font-bold text-white">{SITE.name}</div>
          <p className="mt-3 text-sm text-neutral-400">
            Official information and guides for {SITE.name} in Pakistan. Play card games, earn
            rewards, and enjoy fast withdrawals.
          </p>
        </div>
        <nav aria-label="App">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-200">
            App
          </h3>
          <ul className="space-y-2 text-sm">
            {COL1.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Money & Resources">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-200">
            Money & Resources
          </h3>
          <ul className="space-y-2 text-sm">
            {COL2.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-200">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            {COL3.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-neutral-400">
          <p className="text-center md:text-left">
            <strong className="text-amber-400">18+ only.</strong> 3Patti Gold involves real-money
            wagering. Play responsibly, set daily limits in-app, and never wager what you cannot
            afford to lose. Need help?{" "}
            <a
              href="https://www.begambleaware.org/"
              rel="noopener nofollow"
              target="_blank"
              className="underline hover:text-amber-300"
            >
              BeGambleAware
            </a>{" "}
            ·{" "}
            <a
              href="https://www.gamblingtherapy.org/"
              rel="noopener nofollow"
              target="_blank"
              className="underline hover:text-amber-300"
            >
              Gambling Therapy
            </a>{" "}
            · See our <Link href="/disclaimer" className="underline hover:text-amber-300">Disclaimer</Link>.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Editorial site — not affiliated with any operator. See{" "}
            <Link href="/about-us#editorial-standards" className="underline hover:text-amber-400">
              editorial standards
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
