import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

const MAIN_NAV = [
  { href: "/", label: "Home" },
  { href: "https://teenpattigold99.com/?from_gameid=8442895&channelCode=100000", label: "Download 3Patti Gold" },
  { href: "/category/blog", label: "Blog" },
  { href: "/3patti-gold-for-pc", label: "For PC" },
  { href: "/3patti-gold-for-ios", label: "For iOS" },
  { href: "/register-on-the-3-patti-gold", label: "Register" },
  { href: "/log-in-to-the-3-patti-gold", label: "Login" },
  { href: "/deposit-money-in-3-patti-gold", label: "Deposit" },
  { href: "/withdraw-money-on-3-patti-gold", label: "Withdraw" },
  { href: "/about-us", label: "About us" },
];

export default function Header() {
  return (
    <header
      id="masthead"
      className="site-header sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5"
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:bg-amber-500 focus:text-black focus:px-3 focus:py-1 focus:rounded"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" rel="home" className="flex items-center gap-2" aria-label={SITE.name}>
          <Image
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            width={200}
            height={76}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav
          id="site-navigation"
          className="hidden md:block"
          aria-label="Primary"
          role="navigation"
        >
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch
                  className="hover:text-amber-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="https://teenpattigold99.com/?from_gameid=8442895&channelCode=100000"
          rel="noopener noreferrer nofollow sponsored"
          target="_blank"
          className="inline-flex items-center rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-amber-400"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
