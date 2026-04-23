import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { SITE } from "@/lib/site";

const TITLE = "Privacy Policy — 3Patti Gold";
const DESC = `At 3 Patti Gold, accessible from ${SITE.url}/, one of our main priorities is the privacy of our visitors.`;
const PATH = "/privacy-policy";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <PageLayout
      title={TITLE}
      intro={DESC}
      path={PATH}
      datePublished="2025-12-27T22:48:26+00:00"
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: PATH },
      ]}
    >
      <p>
        This Privacy Policy document contains types of information that is collected and recorded
        by 3Patti Gold and how we use it. If you have additional questions or require more
        information, feel free to contact us.
      </p>
      <h2>Information we collect</h2>
      <p>Basic analytics such as pages viewed, device type, and referring URL.</p>
      <h2>How we use your information</h2>
      <ul>
        <li>To operate and maintain the website</li>
        <li>To improve content and user experience</li>
        <li>To respond to support requests</li>
      </ul>
      <h2>Third-party services</h2>
      <p>We may use Cloudflare (CDN), Google Search Console, and Google Analytics.</p>
      <h2>Consent</h2>
      <p>By using our website, you consent to this privacy policy and agree to its terms.</p>
    </PageLayout>
  );
}
