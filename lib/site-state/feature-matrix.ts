// =============================================================================
// FEATURE AVAILABILITY MATRIX
// =============================================================================
// Transcribed from docs/codebase/Temporarily/03-feature-matrix.md
//
// Each feature maps to the set of SiteState codes in which it is enabled.
// An empty array means the feature is never available (reserved / not yet
// wired).
// =============================================================================

import type { Feature, SiteState } from "./types";

/**
 * Lookup table: which states enable a given feature.
 *
 * The matrix is the single source of truth for gating.  Both server‑side
 * route guards (`requireFeature`) and client‑side nav filtering read from
 * here.
 */
export const FEATURE_MATRIX: Record<Feature, readonly SiteState[]> = {
  // Evergreen — available in all states
  aboutUs: ["D", "T", "A", "TR", "RC", "FIR"],
  codeOfConduct: ["D", "T", "A", "TR", "RC", "FIR"],
  termsAndConditions: ["D", "T", "A", "TR", "RC", "FIR"],
  volunteerApplication: ["D", "T", "A", "TR", "RC", "FIR"],
  login: ["D", "T", "A", "TR", "RC", "FIR"],

  // Teaser onward
  themeLandingPage: ["T", "A", "TR", "RC", "FIR"],
  venue: ["T", "A", "TR", "RC", "FIR"],
  guestOfHonor: ["T", "A", "TR", "RC", "FIR"],
  travelInformation: ["T", "A", "TR", "RC", "FIR"],
  bahjetGuide: ["T", "A", "TR", "RC", "FIR"],
  foodGuide: ["T", "A", "TR", "RC", "FIR"],
  destinations: ["T", "A", "TR", "RC", "FIR"],

  // Announcement onward
  activities: ["A", "TR", "RC", "FIR"],
  accountCreation: ["A"],
  profileEditing: ["A", "TR"],

  // Teaser + Announcement only
  artSubmission: ["T", "A"],

  // Ticket Registration only
  ticketRegistration: ["TR"],

  // Registration Closed only
  dealerSubmission: ["RC"],
  panelSubmission: ["RC"],

  // Final Information Release only
  badgePickupSelection: ["FIR"],
  dealerLayout: ["FIR"],
  boothListing: ["FIR"],
  eventSchedule: ["FIR"],
};
