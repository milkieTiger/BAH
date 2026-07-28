import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import Section from "./Section";

const meta = {
  component: Section,
  tags: ["ai-generated"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: "01",
    eyebrow: "About",
    children: (
      <p className="text-muted-foreground text-sm">
        This is the section content.
      </p>
    ),
  },
};

export const WithId: Story = {
  args: {
    ...Default.args,
    id: "about-section",
    children: (
      <p className="text-muted-foreground text-sm">
        Scrolled to by the hero CTA buttons.
      </p>
    ),
  },
};

export const NoBorder: Story = {
  args: {
    ...Default.args,
    noBorder: true,
    eyebrow: "Register",
    children: (
      <p className="text-muted-foreground text-sm">Last section, no divider.</p>
    ),
  },
};
