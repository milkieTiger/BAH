import PageHero from "@/components/server/layout/PageHero";
import Section from "@/components/server/layout/Section";
import { requireFeature } from "@/lib/site-state/require-feature";

export default function AboutPage() {
  requireFeature("aboutUs");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        description="Learn about Borneo Anthro Hub and the community behind it."
      />

      <Section index="01" eyebrow="Our Mission">
        <p className="mb-3 text-sm font-semibold">
          A welcoming local hub built for connection, joy, and Bornean warmth.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          As a furry convention established in Sabah, the name &lsquo;BAH&rsquo;
          carries our promise to our furry friends across Borneo &mdash; a
          welcoming and inclusive &lsquo;hub&rsquo; for all to gather and have a
          meaningful and enjoyable experience, serving as a bridge to connect
          with what and who matters the most to us. While upholding the concept
          of building a convention made by locals, for locals, we also welcome
          the rest of the world with open arms and a unique Bornean charm to
          experience a one-of-a-kind furry convention with a local twist like
          never before.
        </p>
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
          It began with the idea of bringing the fun and joy of a furry
          convention to celebrate with local furs who are unable to travel
          abroad to attend one. With that in mind, Borneo Anthro Hub provides a
          safe place for local furs to expand their horizons to connect with
          more furs around the world! We hope that when you hear our local
          friends utter the phrase &ldquo;jom BAH!&rdquo;, you&rsquo;ll not only
          be reminded of the meaningful and nostalgic memories made, but also
          the moments when you&rsquo;re greeted with the warm hospitality in the
          Land Below the Wind.
        </p>
      </Section>
    </div>
  );
}
