import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

export default function RegisterPage() {
  requireFeature("accountCreation");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Join BAH"
        title="Register"
        description="Create your attendee account for Borneo Anthro Hub."
        index=""
      />
      <ComingSoon emoji="📝" message="Registration form coming soon." />
    </div>
  );
}
