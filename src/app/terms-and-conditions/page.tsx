import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageLayout from "@/components/PageLayout";
import { SITE } from "@/lib/site";

const TITLE = "Terms and Conditions — 3Patti Gold";
const DESC = `Any action you take upon the information you find on this website (${SITE.url}/) is strictly at your own risk.`;
const PATH = "/terms-and-conditions";

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
        { name: "Terms and Conditions", path: PATH },
      ]}
    >
      <p>
        By accessing this website, you accept these terms and conditions. Do not continue to use
        3Patti Gold if you do not agree to take all of the terms and conditions stated on this
        page.
      </p>
      <h2>License</h2>
      <p>
        Unless otherwise stated, 3Patti Gold and/or its licensors own the intellectual property
        rights for all material on this website. All rights are reserved.
      </p>
      <h2>Eligibility</h2>
      <p>
        You must be 18 years or older and legally allowed to play real-money games in your
        jurisdiction. You are responsible for compliance with local laws.
      </p>
      <h2>Disclaimer</h2>
      <p>See our <a href="/disclaimer">Disclaimer</a> page.</p>
    </PageLayout>
  );
}
