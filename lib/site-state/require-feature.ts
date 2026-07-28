// =============================================================================
// ROUTE GUARD — requireFeature
// =============================================================================
// Drop this at the top of a Server Component `page.tsx` to 404 the route
// when the feature is not enabled for the current website lifecycle state.
//
// Usage:
//   import { requireFeature } from "@/lib/site-state/require-feature";
//   await requireFeature("eventSchedule");  // calls notFound() if disabled
//   export default function SchedulePage() { … }
// =============================================================================

import "server-only";
import { notFound } from "next/navigation";
import { isFeatureEnabled } from "./get-site-state";
import type { Feature } from "./types";

/**
 * Guards a route: calls `notFound()` (HTTP 404) if `feature` is not enabled
 * in the current website lifecycle state.
 *
 * Must be `await`ed in a Server Component or route handler.
 */
export async function requireFeature(feature: Feature): Promise<void> {
  if (!(await isFeatureEnabled(feature))) {
    notFound();
  }
}
