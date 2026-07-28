import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import Footer from "./Footer";

const meta = {
  component: Footer,
  tags: ["ai-generated"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    expect(canvas.getByText(/borneo anthro hub/i)).toBeVisible();
    expect(canvas.getByText(/kota kinabalu/i)).toBeVisible();
  },
};
