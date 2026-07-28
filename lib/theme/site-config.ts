// =============================================================================
// SITE THEME CONFIGURATION
// =============================================================================
// This is the single top-level place to switch the entire site's color
// scheme / font. To ship a new theme for next year (e.g. a "winter" or
// "summer" edition), add a new entry to `themes` in `./themes.ts` and point
// `ACTIVE_THEME` below at its key.
//
// `ACTIVE_THEME` is read by both Server and Client Components — see
// `./active-theme.ts` and `components/client/ThemeProvider.tsx`.
// =============================================================================

import type { ThemeKey } from "./themes";

/** Change this to switch the entire site's theme (colors + font). */
export const ACTIVE_THEME: ThemeKey = "greyscale";
