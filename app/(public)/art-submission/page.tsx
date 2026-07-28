import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

export default async function ArtSubmissionPage() {
  await requireFeature("artSubmission");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Show Your Work"
        title="Art Submission"
        description="Submit your artwork for display at Borneo Anthro Hub."
      />
      <ComingSoon emoji="🖼️" message="Art submission portal coming soon." />
    </div>
  );
}
