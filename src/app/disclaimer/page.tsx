import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { SITE } from "@/lib/site";

const TITLE = "Disclaimer — 3Patti Gold";
const DESC = `All information on ${SITE.url}/ is provided in good faith and solely for the purpose of providing general information.`;
const PATH = "/disclaimer";

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
        { name: "Disclaimer", path: PATH },
      ]}
    >
      <p>
        All information on this website is provided in good faith and for general information
        only. Any action you take upon the information on this website is strictly at your own
        risk. This website will not be liable for any losses or damages in connection with the use
        of our website.
      </p>
      <p>
        Real-money gaming and gambling may be regulated or restricted in your jurisdiction. Players
        are responsible for confirming the legality of gameplay in their region and for complying
        with local laws. Participation is restricted to users aged 18 years or older.
      </p>
      <p>
        Please <a href="/contact-us">contact us</a> if you have any questions about this
        disclaimer.
      </p>
    </PageLayout>
  );
}
