"use client";

import { Button } from "@base-ui/react/button";
import { Field } from "@base-ui/react/field";
import { Input } from "@base-ui/react/input";
import { Toast } from "@base-ui/react/toast";
import { useState } from "react";
import WireframeFrame from "@/components/server/layout/WireframeFrame";

function RegisterFormFields() {
  const [email, setEmail] = useState("");
  const toast = Toast.useToastManager();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.add({
        title: "You're on the list!",
        description: "We'll notify you when registration opens.",
        timeout: 4000,
      });
      setEmail("");
    }
  };

  return (
    <>
      <WireframeFrame className="border-border mx-auto max-w-md border border-dashed p-6 text-center">
        <h3 className="mb-2 font-semibold">Don&apos;t miss out</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Registration opens soon. Leave your details and we&apos;ll let you
          know the moment tickets are available.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Field.Root name="email" className="text-left">
            <Field.Label className="text-muted-foreground mb-1 block text-xs">
              Email address
            </Field.Label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="border-border w-full border px-3 py-2 text-sm outline-none"
            />
          </Field.Root>
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-brand-hover focus-visible:ring-ring rounded px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Notify Me
          </Button>
        </form>
      </WireframeFrame>

      <Toast.Viewport className="fixed top-4 right-4 z-50 flex flex-col gap-2">
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
    </>
  );
}

/**
 * Self-contained "register interest" form for the home page's Register
 * section. Owns its own `Toast.Provider` (rather than wrapping the whole
 * page, as before) since toast usage never crosses this boundary - this
 * lets the rest of `app/page.tsx` render as a Server Component.
 */
export default function RegisterForm() {
  return (
    <Toast.Provider>
      <RegisterFormFields />
    </Toast.Provider>
  );
}
