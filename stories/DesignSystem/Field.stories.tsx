import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";

/**
 * Documents the `Field` (label + control + error) composition used in
 * `components/client/home/RegisterForm.tsx`, including `disabled` and
 * `invalid` states. Theme-aware via the "Theme" toolbar.
 */
const meta = {
  title: "Design System/Field",
  component: Field.Root,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
} satisfies Meta<typeof Field.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const inputClassName =
  "border-border w-full border px-3 py-2 text-sm outline-none";

export const Default: Story = {
  args: {},
  render: (args) => (
    <Field.Root {...args} name="email" className="text-left">
      <Field.Label className="text-muted-foreground mb-1 block text-xs">
        Email address
      </Field.Label>
      <Input
        type="email"
        placeholder="you@example.com"
        className={inputClassName}
      />
    </Field.Root>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
};

export const Invalid: Story = {
  args: { invalid: true },
  render: (args) => (
    <Field.Root {...args} name="email" className="text-left">
      <Field.Label className="text-muted-foreground mb-1 block text-xs">
        Email address
      </Field.Label>
      <Input
        type="email"
        placeholder="you@example.com"
        className={inputClassName}
      />
      <Field.Error match className="text-destructive mt-1 block text-xs">
        Enter a valid email address.
      </Field.Error>
    </Field.Root>
  ),
};
