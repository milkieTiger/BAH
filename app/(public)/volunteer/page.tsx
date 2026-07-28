import PageHero from "@/components/server/layout/PageHero";
import Section from "@/components/server/layout/Section";
import { requireFeature } from "@/lib/site-state/require-feature";

export default async function VolunteerPage() {
  await requireFeature("volunteerApplication");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Join the Team"
        title="Volunteer"
        description="Help us make Borneo Anthro Hub an unforgettable experience."
      />

      <Section index="01" eyebrow="The Totem Bearers">
        <p className="text-muted-foreground text-sm leading-relaxed">
          The Totem Bearers are the force and the beating heart of BAH, who have
          sworn to act as our sword and shield to ensure that the festival runs
          smoothly so that all BAHpals may enjoy it to the best.
        </p>
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
          The Totem Bearers play the role of volunteers who support various
          parts of the event, from assisting attendees and managing activity
          areas to helping behind the scenes with event operations. No prior
          experience is needed &mdash; just a positive attitude and willingness
          to help. Be a part of our team and help our local con grow. Your help
          means the world to us.
        </p>
      </Section>
    </div>
  );
}
