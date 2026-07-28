// =============================================================================
// WEBSITE LIFECYCLE STATE — TYPES
// =============================================================================
// Maps to the lifecycle states defined in docs/codebase/Temporarily/
//   01-website-lifecycle.md
//   03-feature-matrix.md
// =============================================================================

/**
 * Website lifecycle state code.
 *
 * | Code | Name                      |
 * | ---- | ------------------------- |
 * | D    | Dormant                   |
 * | T    | Teaser                    |
 * | A    | Announcement              |
 * | TR   | Ticket Registration       |
 * | RC   | Registration Closed       |
 * | FIR  | Final Information Release |
 */
export type SiteState = "D" | "T" | "A" | "TR" | "RC" | "FIR";

/** Human-readable label for each state. Used by dev-switcher UI. */
export const SITE_STATE_LABELS: Record<SiteState, string> = {
  D: "Dormant",
  T: "Teaser",
  A: "Announcement",
  TR: "Ticket Registration",
  RC: "Registration Closed",
  FIR: "Final Information Release",
};

/**
 * Every feature / page group that can be toggled per state.
 * One entry per row in the feature-availability matrix.
 */
export type Feature =
  | "aboutUs"
  | "codeOfConduct"
  | "termsAndConditions"
  | "volunteerApplication"
  | "themeLandingPage"
  | "venue"
  | "guestOfHonor"
  | "activities"
  | "travelInformation"
  | "bahjetGuide"
  | "foodGuide"
  | "destinations"
  | "artSubmission"
  | "accountCreation"
  | "login"
  | "ticketRegistration"
  | "profileEditing"
  | "badgePickupSelection"
  | "dealerSubmission"
  | "panelSubmission"
  | "dealerLayout"
  | "boothListing"
  | "eventSchedule";

/**
 * Validates that a string is a known SiteState code.
 * Returns the typed code or null.
 */
export function parseSiteState(raw: string | undefined): SiteState | null {
  if (!raw) return null;
  const upper = raw.toUpperCase().trim();
  if (["D", "T", "A", "TR", "RC", "FIR"].includes(upper)) {
    return upper as SiteState;
  }
  return null;
}
