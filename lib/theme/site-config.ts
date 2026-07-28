// =============================================================================
// SITE THEME CONFIGURATION
// =============================================================================
// This is the single top-level place to switch the entire site's color
// scheme / font. To ship a new theme for next year (e.g. a "winter" or
// "summer" edition), add a new entry to `themes` in `./themes.ts` and point
// `ACTIVE_THEME` below at its key.
//
// `ACTIVE_THEME` is only ever read on the server (see `./active-theme.ts`,
// imported by `app/layout.tsx`) - Client Components receive the resolved
// `themeKey` as a prop instead. The `server-only` import below turns an
// accidental client-side import of this module into a build-time error.
// =============================================================================

import "server-only";
import type { ThemeKey } from "./themes";

/** Change this to switch the entire site's theme (colors + font). */
export const ACTIVE_THEME: ThemeKey = "greyscale";
