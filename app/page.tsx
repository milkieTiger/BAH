import { Accordion } from "@base-ui/react/accordion";
import Section from "@/components/server/layout/Section";
import WireframeFrame from "@/components/server/layout/WireframeFrame";
import HeroActions from "@/components/client/home/HeroActions";
import RegisterForm from "@/components/client/home/RegisterForm";

const highlights = [
  {
    title: "Panels & Workshops",
    description:
      "Learn fursuit making, digital art, and storytelling from creators across the region.",
    icon: "🎨",
  },
  {
    title: "Artist Alley",
    description:
      "Browse and commission original art, badges, and prints from local and visiting artists.",
    icon: "🖌️",
  },
  {
    title: "Fursuit Parade",
    description:
      "Strut your suit through the heart of the con in our signature evening parade.",
    icon: "🦊",
  },
  {
    title: "Dances & Socials",
    description:
      "Unwind with themed dances, meetups, and late-night lounges for every kind of fan.",
    icon: "🎶",
  },
];

const faqs = [
  {
    question: "When and where is Borneo Anthro Hub 2027?",
    answer:
      "BAH 2027 runs across a weekend in Kota Kinabalu, Sabah. Exact dates and venue details will be announced as they're confirmed — join our Telegram to get updates first.",
  },
  {
    question: "Who can attend?",
    answer:
      "Everyone! BAH welcomes fans, artists, fursuiters, and newcomers of all backgrounds. We're a family-friendly, inclusive community event.",
  },
  {
    question: "Do I need a fursuit to attend?",
    answer:
      "Not at all. Most attendees don't wear suits — come as you are and enjoy panels, art, and hanging out with the community.",
  },
  {
    question: "How do I register?",
    answer:
      "Registration isn't open yet. Follow the announcements below and register your interest so we can notify you the moment tickets go live.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="border-border border-b px-4 py-10 md:px-8">
        <WireframeFrame className="mx-auto flex max-w-md flex-col items-center gap-4 p-6 text-center">
          <div className="flex items-center gap-2">
            <span className="border-border text-muted-foreground border px-1.5 py-0.5 font-mono text-[10px]">
              00
            </span>
            <p className="text-muted-foreground text-xs tracking-widest uppercase">
              Kota Kinabalu · Sabah
            </p>
          </div>
          <h1 className="text-3xl font-bold">Borneo Anthro Hub 2027</h1>
          <p className="text-muted-foreground text-sm">
            The anthro &amp; furry fandom gathering in the heart of Borneo.
            Panels, art, fursuits, and community — all in one weekend.
          </p>
          <HeroActions />
        </WireframeFrame>
      </section>

      <Section id="about" index="01" eyebrow="About">
        <p className="mb-2 font-semibold">
          A home-grown celebration of the anthro community in Southeast Asia
        </p>
        <p className="text-muted-foreground text-sm">
          Borneo Anthro Hub brings together fans, artists, and fursuiters from
          across the region for a weekend of creativity and connection — set
          against the natural beauty of Sabah.
        </p>
      </Section>

      <Section id="highlights" index="02" eyebrow="Highlights of the weekend">
        <div className="border-border divide-border grid grid-cols-1 divide-y border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-2">
                <span className="border-border flex h-8 w-8 shrink-0 items-center justify-center border text-base">
                  {item.icon}
                </span>
                <p className="text-foreground text-sm font-semibold">
                  {item.title}
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" index="03" eyebrow="Frequently asked questions">
        <Accordion.Root className="border-border divide-border divide-y border">
          {faqs.map((faq, i) => (
            <Accordion.Item key={faq.question}>
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center gap-3 px-3 py-3 text-left text-sm font-medium">
                  <span className="border-border text-muted-foreground shrink-0 border px-1.5 py-0.5 font-mono text-[10px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{faq.question}</span>
                  <span className="text-muted-foreground">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="border-border text-muted-foreground border-t px-3 py-3 pl-14 text-sm">
                {faq.answer}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Section>

      <Section id="register" index="04" eyebrow="Register" noBorder>
        <RegisterForm />
      </Section>
    </div>
  );
}
