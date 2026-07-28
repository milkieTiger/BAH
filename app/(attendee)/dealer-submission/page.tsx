import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

export default async function DealerSubmissionPage() {
  await requireFeature("dealerSubmission");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Exhibit With Us"
        title="Dealer Submission"
        description="Apply for a booth in the Dealer&rsquo;s Den."
      />
      <ComingSoon emoji="🛍️" message="Dealer submission portal coming soon." />
    </div>
  );
}
