import "server-only";
import { cookies } from "next/headers";
import { ACTIVE_THEME } from "./site-config";
import { themes, type Theme, type ThemeKey } from "./themes";

const DEV_COOKIE = "dev-theme";

function isValidThemeKey(key: unknown): key is ThemeKey {
  return typeof key === "string" && key in themes;
}

/**
 * Returns the effective `ThemeKey` for this request.
 *
 * In development the caller can override the theme via the `dev-theme`
 * cookie (set by the dev-only `DevThemeSwitcher`).  In production the
 * cookie is ignored — `ACTIVE_THEME` in `site-config.ts` is the sole source
 * of truth.
 */
export async function getActiveThemeKey(): Promise<ThemeKey> {
  if (process.env.NODE_ENV === "development") {
    const jar = await cookies();
    const override = jar.get(DEV_COOKIE)?.value;
    if (isValidThemeKey(override)) return override;
  }
  return ACTIVE_THEME;
}

/**
 * Returns the full theme object for the currently active theme. Server-only:
 * resolves the effective theme key (cookie override or `ACTIVE_THEME`), then
 * looks up the full `Theme`.  Must never be imported by a Client Component —
 * see `app/layout.tsx`, the only caller.  Client Components receive the
 * resolved theme via props/context instead (see
 * `components/client/ThemeProvider.tsx`).
 */
export async function getActiveTheme(): Promise<Theme> {
  const key = await getActiveThemeKey();
  return themes[key];
}
