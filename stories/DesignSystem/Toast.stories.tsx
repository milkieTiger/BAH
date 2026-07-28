import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import { Toast } from "@base-ui/react/toast";

/**
 * Documents the toast style used in
 * `components/client/home/RegisterForm.tsx`. Rendered `static` (rather than
 * `fixed`) here so it stays inside the Storybook canvas. Theme-aware via the
 * "Theme" toolbar.
 */
function ToastDemo() {
  const toast = Toast.useToastManager();

  useEffect(() => {
    toast.add({
      title: "You're on the list!",
      description: "We'll notify you when registration opens.",
      timeout: 0,
    });
    // Only fire once on mount - intentionally excludes `toast` from deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Toast.Viewport className="static flex flex-col gap-2">
      {toast.toasts.map((t) => (
        <Toast.Root
          key={t.id}
          toast={t}
          className="bg-brand-surface text-brand-text border-border min-w-72 rounded border p-3 shadow-lg"
        >
          <div className="flex items-start justify-between gap-2">
            <Toast.Content>
              <Toast.Title className="text-sm font-semibold">
                {t.title}
              </Toast.Title>
              {t.description && (
                <p className="text-brand-text/70 mt-1 text-xs">
                  {t.description}
                </p>
              )}
            </Toast.Content>
            <Toast.Close className="text-brand-text/70 hover:text-brand-text">
              ✕
            </Toast.Close>
          </div>
        </Toast.Root>
      ))}
    </Toast.Viewport>
  );
}

const meta = {
  title: "Design System/Toast",
  component: ToastDemo,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Toast.Provider>
        <Story />
      </Toast.Provider>
    ),
  ],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
