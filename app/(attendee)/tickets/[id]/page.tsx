import PageHero from "@/components/server/layout/PageHero";
import ComingSoon from "@/components/server/layout/ComingSoon";
import { requireFeature } from "@/lib/site-state/require-feature";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TicketDetailPage({ params }: Props) {
  await requireFeature("ticketRegistration");
  const { id } = await params;

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Ticket Detail"
        title={id}
        description="Full ticket details coming soon."
      />
      <ComingSoon emoji="🎟️" message="Ticket detail page coming soon." />
    </div>
  );
}
