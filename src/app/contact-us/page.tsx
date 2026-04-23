import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";

const TITLE = "Contact Us | 3Patti Gold";
const DESC =
  "Questions about 3Patti Gold? Reach our team 24/7. Get help with downloads, login, deposits, withdrawals, and bonuses.";
const PATH = "/contact-us";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
});

export default function Page() {
  return (
    <PageLayout
      title={TITLE}
      intro={DESC}
      path={PATH}
      datePublished="2025-12-27T22:48:26+00:00"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Contact Us", path: PATH },
      ]}
    >
      <p>Welcome to 3Patti Gold. If you have any questions, feel free to reach out.</p>
      <ul>
        <li>Email: support@3pattigolds.com.pk</li>
        <li>Support hours: 24/7</li>
      </ul>
      <h2>Popular help topics</h2>
      <ul>
        <li><a href="/download-3patti-gold">Download the APK</a></li>
        <li><a href="/register-on-the-3-patti-gold">Register an account</a></li>
        <li><a href="/deposit-money-in-3-patti-gold">Deposit money</a></li>
        <li><a href="/withdraw-money-on-3-patti-gold">Withdraw money</a></li>
      </ul>
    </PageLayout>
  );
}
