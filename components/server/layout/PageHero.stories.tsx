import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import PageHero from "./PageHero";

const meta = {
  component: PageHero,
  tags: ["ai-generated"],
} satisfies Meta<typeof PageHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "Weekend Schedule",
    title: "Schedule",
    description:
      "The full timetable for Borneo Anthro Hub 2027 will be announced closer to the event.",
  },
};

export const Contact: Story = {
  args: {
    eyebrow: "Get in Touch",
    title: "Contact",
    description: "Have a question, want to sponsor, or just want to say hello?",
  },
};

export const Team: Story = {
  args: {
    eyebrow: "Organising Team",
    title: "Meet the Team",
    description: "The passionate volunteers bringing BAH to life.",
    index: "01",
  },
};

/**
 * Confirms the global CSS (Tailwind + theme vars) actually loaded. The
 * `font-bold` class on `<h1>` must resolve to `font-weight: 700` — if
 * Tailwind didn't load, the computed value would be the browser default
 * (`400` or `700` depending on the element's semantic weight).
 */
export const CssCheck: Story = {
  args: {
    eyebrow: "Theme Check",
    title: "CSS is working",
    description: "This proves Tailwind and theme CSS loaded correctly.",
  },
  play: async ({ canvas }) => {
    const heading = canvas.getByRole("heading", { name: /css is working/i });
    await expect(getComputedStyle(heading).fontWeight).toBe("700");
  },
};
