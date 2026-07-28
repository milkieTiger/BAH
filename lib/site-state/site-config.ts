// =============================================================================
// SITE STATE CONFIGURATION
// =============================================================================
// This is the single top-level place to set the website lifecycle state.
//
// Set the environment variable `WEBSITE_STATE` to one of:
//   D  | Dormant
//   T  | Teaser
//   A  | Announcement
//   TR | Ticket Registration
//   RC | Registration Closed
//   FIR| Final Information Release
//
// If `WEBSITE_STATE` is unset or invalid the app falls back to "D" (Dormant)
// and logs a warning — the site becomes an off-season / evergreen build.
//
// `ACTIVE_SITE_STATE` is only ever read on the server (see
// `./get-site-state.ts`, imported by `app/layout.tsx`).  Client Components
// receive the resolved state via props/context instead (see
// `components/client/SiteStateProvider.tsx`).  The `server-only` import below
// turns an accidental client-side import of this module into a build-time
// error.
// =============================================================================

import "server-only";
import { parseSiteState, type SiteState } from "./types";

function resolveSiteState(): SiteState {
  const raw = process.env.WEBSITE_STATE;
  const parsed = parseSiteState(raw);

  if (parsed) {
    return parsed;
  }

  if (raw) {
    console.warn(
      `[site-state] Unknown WEBSITE_STATE "${raw}" — falling back to "D" (Dormant). ` +
        `Valid values: D, T, A, TR, RC, FIR.`,
    );
  } else {
    console.warn(
      `[site-state] WEBSITE_STATE is not set — defaulting to "D" (Dormant).`,
    );
  }

  return "D";
}

/** The active website lifecycle state — resolved once at module init (server-only). */
export const ACTIVE_SITE_STATE: SiteState = resolveSiteState();
