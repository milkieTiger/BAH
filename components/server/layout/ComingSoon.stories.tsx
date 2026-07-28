import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import ComingSoon from "./ComingSoon";

const meta = {
  component: ComingSoon,
  tags: ["ai-generated"],
} satisfies Meta<typeof ComingSoon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    emoji: "📅",
    message: "Coming soon — stay tuned.",
  },
};

export const Gallery: Story = {
  args: {
    emoji: "📸",
    message: "Gallery coming soon.",
  },
};

export const ContactForm: Story = {
  args: {
    emoji: "📧",
    message: "Contact form and details coming soon.",
  },
};
