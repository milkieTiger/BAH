// =============================================================================
// FEATURE AVAILABILITY MATRIX
// =============================================================================
// Transcribed from docs/codebase/Temporarily/03-feature-matrix.md
//
// Each feature maps to the set of SiteState codes in which it is enabled.
// An empty array means the feature is never available (reserved / not yet
// wired).
//
// 2027 SCOPE: The 2027 website is static-only (no API, no backend).
// Auth, account, ticket, profile, and badge-pickup features are reserved
// for the 2028 full-stack release and are set to [] (never available).
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

  // Reserved — planned for 2028 (static-only in 2027)
  login: [],
  accountCreation: [],
  profileEditing: [],
  badgePickupSelection: [],

  // Ticket Registration — Google Form link in 2027, full integration in 2028
  ticketRegistration: ["TR"],

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

  // Teaser + Announcement only
  artSubmission: ["T", "A"],

  // Registration Closed only
  dealerSubmission: ["RC"],
  panelSubmission: ["RC"],

  // Final Information Release only
  dealerLayout: ["FIR"],
  boothListing: ["FIR"],
  eventSchedule: ["FIR"],
};
