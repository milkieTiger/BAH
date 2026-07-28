// =============================================================================
// SITE STATE RESOLVER (server-only)
// =============================================================================
// `getSiteState()` returns the effective lifecycle state for the current
// request.  In development it checks for a `dev-site-state` cookie override
// first (set by `DevSiteStateSwitcher`); otherwise it falls back to the
// env-var / `ACTIVE_SITE_STATE` constant.
//
// `isFeatureEnabled(feature, state?)` checks the feature matrix — call it
// in Server Components and route guards without importing client code.
// =============================================================================

import "server-only";
import { cookies } from "next/headers";
import { ACTIVE_SITE_STATE } from "./site-config";
import { FEATURE_MATRIX } from "./feature-matrix";
import { parseSiteState, type Feature, type SiteState } from "./types";

const DEV_COOKIE = "dev-site-state";

/**
 * Returns the effective `SiteState` for this request.
 *
 * In development (`NODE_ENV === "development"`) the caller can override the
 * state via the `dev-site-state` cookie (set by the dev-only
 * `DevSiteStateSwitcher`).  In production the cookie is ignored — the env
 * var is the sole source of truth.
 */
export async function getSiteState(): Promise<SiteState> {
  if (process.env.NODE_ENV === "development") {
    const jar = await cookies();
    const override = jar.get(DEV_COOKIE)?.value;
    const parsed = parseSiteState(override);
    if (parsed) return parsed;
  }

  return ACTIVE_SITE_STATE;
}

/**
 * Returns `true` when `feature` is enabled in the given `state`.
 *
 * @param feature  The feature to check.
 * @param state    The state to check against (defaults to `getSiteState()`).
 */
export async function isFeatureEnabled(
  feature: Feature,
  state?: SiteState,
): Promise<boolean> {
  const s = state ?? (await getSiteState());
  return (FEATURE_MATRIX[feature] as readonly SiteState[]).includes(s);
}
