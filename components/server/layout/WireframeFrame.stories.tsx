import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import WireframeFrame from "./WireframeFrame";

const meta = {
  component: WireframeFrame,
  tags: ["ai-generated"],
} satisfies Meta<typeof WireframeFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4 text-center text-sm">
        Content inside wireframe brackets
      </div>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "mx-auto max-w-md",
    children: (
      <div className="p-6 text-center">
        <p className="text-sm font-semibold">Centered content</p>
      </div>
    ),
  },
};
