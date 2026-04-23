import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";

const TITLE = "About Us — 3Patti Gold";
const DESC =
  "3 Patti Gold is a leading casino gaming platform in Pakistan, offering users an exciting opportunity to earn real money through engaging and easy-to-play games.";
const PATH = "/about-us";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  type: "article",
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
        { name: "About Us", path: PATH },
      ]}
    >
      <p>
        3Patti Gold is a popular card-game platform in Pakistan where players can enjoy Teen Patti,
        Andar Bahar, Dragon vs Tiger, and many more titles from a single, easy-to-use app.
      </p>
      <h2>Our Mission</h2>
      <p>
        We aim to deliver a safe, smooth, and enjoyable gaming experience with fast withdrawals,
        responsive support, and transparent bonus terms.
      </p>
      <h2>Contact</h2>
      <p>
        Need help? Visit our <a href="/contact-us">Contact Us</a> page.
      </p>
    </PageLayout>
  );
}
