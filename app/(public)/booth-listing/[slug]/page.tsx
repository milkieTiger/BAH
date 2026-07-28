import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BoothDetailPage({ params }: Props) {
  await requireFeature("boothListing");
  const { slug } = await params;

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Booth Detail"
        title={slug}
        description="Full booth details coming soon."
      />
      <ComingSoon emoji="🎨" message="Booth detail page coming soon." />
    </div>
  );
}
