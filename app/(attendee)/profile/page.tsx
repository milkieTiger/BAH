import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

export default async function ProfilePage() {
  await requireFeature("profileEditing");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Your Profile"
        title="Profile"
        description="Customize your attendee profile and preferences."
      />
      <ComingSoon emoji="👤" message="Profile editing coming soon." />
    </div>
  );
}
