import PageHero from "@/components/server/layout/PageHero";
import Section from "@/components/server/layout/Section";
import { requireFeature } from "@/lib/site-state/require-feature";

export default async function BadgePickupPage() {
  await requireFeature("badgePickupSelection");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Get Your Badge"
        title="Badge Pickup"
        description="Choose how you&rsquo;d like to receive your convention badge."
      />

      <Section index="01" eyebrow="Con-Badge">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Your convention badge is your key to everything at BAH. Customize it
          with your chosen name, and select your preferred pickup method during
          registration.
        </p>
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
          Certain customization options are available exclusively for Sponsors
          and Super Sponsors. Please be mindful of the cut-off date to update
          your badge information.
        </p>
      </Section>

      <Section index="02" eyebrow="Proxy Collection" noBorder>
        <p className="text-muted-foreground text-sm leading-relaxed">
          If you are unable to attend due to unforeseen circumstances, you may
          assign someone to collect your items on your behalf. Please write in
          to us with the details of the attendee who will be collecting on your
          behalf, and we&rsquo;ll handle the arranged collection.
        </p>
      </Section>
    </div>
  );
}
