import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

export default async function LoginPage() {
  await requireFeature("login");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Welcome Back"
        title="Login"
        description="Sign in to your Borneo Anthro Hub attendee account."
        index=""
      />
      <ComingSoon emoji="🔐" message="Login form coming soon." />
    </div>
  );
}
