import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@base-ui/react/button";

/**
 * Documents the two button styles used across the site (see
 * `components/client/home/HeroActions.tsx`), including the `disabled` state.
 * Switch the "Theme" toolbar to preview these styles across every theme
 * (bah / cyberpunk / greyscale) - the Tailwind classes never hardcode colors,
 * they resolve from the active theme's CSS custom properties.
 */
const meta = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const primaryClassName =
  "bg-primary text-primary-foreground hover:bg-brand-hover focus-visible:ring-ring rounded px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

const secondaryClassName =
  "border-border hover:bg-brand-subtle hover:text-brand-surface focus-visible:ring-ring rounded border px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

export const Primary: Story = {
  args: { disabled: false, children: "Register Interest" },
  render: (args) => <Button {...args} className={primaryClassName} />,
};

export const PrimaryDisabled: Story = {
  args: { ...Primary.args, disabled: true },
  render: (args) => <Button {...args} className={primaryClassName} />,
};

export const Secondary: Story = {
  args: { disabled: false, children: "Learn More" },
  render: (args) => <Button {...args} className={secondaryClassName} />,
};

export const SecondaryDisabled: Story = {
  args: { ...Secondary.args, disabled: true },
  render: (args) => <Button {...args} className={secondaryClassName} />,
};
