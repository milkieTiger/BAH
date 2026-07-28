import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ActivityDetailPage({ params }: Props) {
  await requireFeature("activities");
  const { slug } = await params;

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Activity Detail"
        title={slug}
        description="Full activity details coming soon."
      />
      <ComingSoon emoji="📋" message="Activity detail page coming soon." />
    </div>
  );
}
