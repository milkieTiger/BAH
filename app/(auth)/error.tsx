"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

/**
 * Error boundary for the auth route group.
 *
 * Renders inside the auth layout's centered card — no header/footer chrome,
 * consistent with the login / register page layout.
 */
export default function AuthErrorPage({
  error,
  unstable_retry,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Auth error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <span className="border-border text-muted-foreground border px-2 py-1 font-mono text-xs">
        Error
      </span>
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground max-w-md text-sm">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => unstable_retry()}
        className="text-brand-accent text-sm font-medium hover:underline"
      >
        Try again
      </button>
    </div>
  );
}
