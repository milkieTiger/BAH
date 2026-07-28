import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import RegisterForm from "./RegisterForm";

const meta = {
  component: RegisterForm,
  tags: ["ai-generated"],
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SubmitEmail: Story = {
  play: async ({ canvas, userEvent, canvasElement }) => {
    const input = canvas.getByRole("textbox", { name: /email address/i });
    await userEvent.type(input, "attendee@example.com");
    await userEvent.click(canvas.getByRole("button", { name: /notify me/i }));

    // Toast should appear on success — query via portal root
    const toast = await within(canvasElement.ownerDocument.body).findByText(
      /you're on the list/i,
    );
    await expect(toast).toBeVisible();
  },
};
