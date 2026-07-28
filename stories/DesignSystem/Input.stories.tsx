import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@base-ui/react/input";

/**
 * Documents the input style used in `components/client/home/RegisterForm.tsx`,
 * including `disabled` and pre-filled states. Theme-aware via the "Theme"
 * toolbar - the border/text colors resolve from CSS custom properties.
 */
const meta = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const className = "border-border w-full border px-3 py-2 text-sm outline-none";

export const Default: Story = {
  args: { type: "email", placeholder: "you@example.com" },
  render: (args) => <Input {...args} className={className} />,
};

export const Filled: Story = {
  args: { ...Default.args, defaultValue: "attendee@example.com" },
  render: (args) => <Input {...args} className={className} />,
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  render: (args) => <Input {...args} className={className} />,
};
