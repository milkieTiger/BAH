import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import HeroActions from "./HeroActions";

const meta = {
  component: HeroActions,
  tags: ["ai-generated"],
} satisfies Meta<typeof HeroActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const buttons = await canvas.findAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent(/register interest/i);
    expect(buttons[1]).toHaveTextContent(/learn more/i);
  },
};
