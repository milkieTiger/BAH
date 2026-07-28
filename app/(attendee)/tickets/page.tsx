import { Accordion } from "@base-ui/react/accordion";
import PageHero from "@/components/server/layout/PageHero";
import Section from "@/components/server/layout/Section";
import { requireFeature } from "@/lib/site-state/require-feature";

const tiers = [
  {
    name: "Attendee (BAHpals A)",
    color: "bg-[#54CCC9]",
    desc: "Join the festival and experience the spirit of community.",
    boons: ["Poster & Conbook", "Button Badge", "Lanyard"],
  },
  {
    name: "Sponsor (BAHpals S)",
    color: "bg-[#FFCB65]",
    desc: "Stand as a guardian who supports the harvest and traditions.",
    boons: [
      "Poster & Conbook",
      "Button Badge",
      "Lanyard",
      "BAH T-shirt",
      "Sticker Pack",
    ],
  },
  {
    name: "SuperSponsor (BAHpals SS)",
    color: "bg-[#773910]",
    desc: "Honour the Spirit of Sacrifice and bring forth a legacy of abundance.",
    boons: [
      "Poster & Conbook",
      "Button Badge",
      "BAH T-shirt",
      "Sticker Pack",
      "Special Lanyard",
      "Tote Bag",
      "Limited Edition Acrylic Standee",
    ],
  },
];

const faqs = [
  {
    question: "How do I purchase a BAH Entry Ticket?",
    answer:
      "Select your preferred tier above and you will be redirected to fill in the Ticketing Form. All the information you need will be available in the form itself.",
  },
  {
    question: "Do I get a confirmation when my registration goes through?",
    answer:
      "Yes! Once your submission has been verified, you will receive a Confirmation Email within 72 hours, along with the link to your Convention Profile Form.",
  },
  {
    question: "Can I customize my Con-Badge?",
    answer:
      "Yes! You can update your information in the Convention Profile Form linked in your confirmation email. Certain options are available exclusively for Sponsors and SuperSponsors.",
  },
  {
    question: "What is the age eligibility?",
    answer:
      "Participation is open to individuals aged 16 and above. Attendees aged 16 or 17 must present a signed Parental Consent Form at check-in.",
  },
  {
    question: "Are tickets refundable or transferable?",
    answer:
      "Tickets are non-refundable. Transfers are available if you inform us before the cut-off date (3 months before the convention).",
  },
];

export default async function TicketsPage() {
  await requireFeature("ticketRegistration");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Registration"
        title="My Tickets"
        description="View and manage your convention tickets."
      />

      <Section index="01" eyebrow="Ticket Tiers">
        <div className="grid gap-4 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${tier.color} border-border flex flex-col gap-3 rounded border p-4`}
            >
              <h3 className="text-sm font-bold">{tier.name}</h3>
              <p className="text-xs leading-relaxed opacity-80">{tier.desc}</p>
              <ul className="mt-auto space-y-1">
                {tier.boons.map((boon) => (
                  <li key={boon} className="flex items-center gap-1.5 text-xs">
                    <span className="text-[10px]">+</span>
                    {boon}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section index="02" eyebrow="Frequently Asked Questions" noBorder>
        <Accordion.Root className="mx-auto max-w-2xl">
          {faqs.map((faq, i) => (
            <Accordion.Item key={i} className="border-border border-b py-2">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-2 text-left text-sm font-medium">
                  {faq.question}
                  <span className="text-muted-foreground ml-2 text-xs">
                    +/&minus;
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="text-muted-foreground pb-3 text-xs leading-relaxed">
                {faq.answer}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Section>
    </div>
  );
}
