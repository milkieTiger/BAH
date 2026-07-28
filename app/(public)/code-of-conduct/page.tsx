import PageHero from "@/components/server/layout/PageHero";
import Section from "@/components/server/layout/Section";
import { requireFeature } from "@/lib/site-state/require-feature";

const guidelines = [
  {
    rule: 1,
    title: "Badge Required",
    text: "Always wear your designated badge within con spaces.",
  },
  {
    rule: 2,
    title: "Stay Healthy",
    text: "If you feel unwell, please quarantine, wear a mask, and maintain distance.",
  },
  {
    rule: 3,
    title: "Dress Code",
    text: "Dress appropriately. Explicit or indecent attire is not permitted.",
  },
  {
    rule: 4,
    title: "No Smoking",
    text: "Smoking or vaping is not permitted within con spaces or hotel premises.",
  },
  {
    rule: 5,
    title: "Prop Policy",
    text: "Imitation weaponry or props must be approved by the Security Team.",
  },
  {
    rule: 6,
    title: "No Contraband",
    text: "Contraband or being under the influence of one may result in ejection.",
  },
  {
    rule: 7,
    title: "Respect Property",
    text: "Avoid vandalizing hotel property. Damage will be held accountable.",
  },
  {
    rule: 8,
    title: "Fursuit Lounge",
    text: "No photography or videography within the Fursuit Lounge.",
  },
  {
    rule: 9,
    title: "No Harassment",
    text: "Harassment of any kind will not be tolerated.",
  },
  {
    rule: 10,
    title: "Need Help?",
    text: "Seek assistance at the Con Ops Room for support or inquiries.",
  },
];

export default function CodeOfConductPage() {
  requireFeature("codeOfConduct");

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Community Guidelines"
        title="Code of Conduct"
        description="Our commitment to a safe and inclusive environment for everyone."
      />

      <Section index="01" eyebrow="Guidelines">
        <div className="grid gap-3 sm:grid-cols-2">
          {guidelines.map((g) => (
            <div
              key={g.rule}
              className="border-border flex items-start gap-3 rounded border p-4"
            >
              <span className="border-border text-muted-foreground mt-0.5 shrink-0 border px-1.5 py-0.5 font-mono text-[10px]">
                {String(g.rule).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-semibold">{g.title}</p>
                <p className="text-muted-foreground mt-1 text-xs">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
