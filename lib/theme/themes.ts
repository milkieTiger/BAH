// =============================================================================
// THEME DEFINITIONS
// =============================================================================
// Single source of truth for every color/font token the site uses. Components
// never hardcode colors - they use `brand-*` / semantic Tailwind token classes
// (e.g. `bg-brand-accent`, `bg-primary`) whose values are resolved at render
// time from the theme selected in `site-config.ts` (`ACTIVE_THEME`).
//
// To add a new yearly theme (e.g. "winter2027"), add an entry to `themes`
// below and point `ACTIVE_THEME` in `site-config.ts` at it. Nothing else
// needs to change.
//
// This module is imported by both Server Components (app/layout.tsx) and
// Client Components (ThemeProvider, DevThemeSwitcher), so it must stay free
// of the `server-only` guard - see `./active-theme.ts` for the server-only
// `getActiveTheme()` helper that resolves `ACTIVE_THEME` from `site-config.ts`.
// =============================================================================

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface BrandTokens {
  bg: string; // page background
  accent: string; // primary action / CTA
  text: string; // primary text / light surface
  hover: string; // hover state
  surface: string; // dark surface (footer, overlays)
  subtle: string; // dropdown / soft surface
  secondary: string; // secondary accent
}

export interface SemanticTokens {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

export interface Theme {
  label: string;
  font: string;
  fontUrl?: string;
  brand: BrandTokens;
  semantic: SemanticTokens;
}

// -----------------------------------------------------------------------------
// Theme definitions
// -----------------------------------------------------------------------------

export const themes = {
  bah: {
    label: "Borneo Anthro Hub",
    font: "'General Sans', system-ui, sans-serif",
    brand: {
      bg: "#175b68",
      accent: "#e8804d",
      text: "#fffbe8",
      hover: "#ffcb65",
      surface: "#1f3359",
      subtle: "#ffeec3",
      secondary: "#54ccc9",
    },
    semantic: {
      background: "#175b68",
      foreground: "#fffbe8",
      card: "#ffffff",
      cardForeground: "#334155",
      popover: "#ffeec3",
      popoverForeground: "#e8804d",
      primary: "#e8804d",
      primaryForeground: "#fffbe8",
      secondary: "#54ccc9",
      secondaryForeground: "#ffffff",
      muted: "#1e6f7e",
      mutedForeground: "#8fb5bb", // darkened from #a7c4ca to meet WCAG AA (4.5:1) contrast against #175b68 bg
      accent: "#ffcb65",
      accentForeground: "#1f3359",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "rgba(255, 255, 255, 0.15)",
      input: "rgba(255, 255, 255, 0.15)",
      ring: "#e8804d",
      sidebar: "#ffffff",
      sidebarForeground: "#334155",
      sidebarPrimary: "#e8804d",
      sidebarPrimaryForeground: "#ffffff",
      sidebarAccent: "#ffeec3",
      sidebarAccentForeground: "#1f3359",
      sidebarBorder: "#e2e8f0",
      sidebarRing: "#e8804d",
    },
  },

  cyberpunk: {
    label: "Cyberpunk",
    font: "'Orbitron', system-ui, sans-serif",
    fontUrl:
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap",
    brand: {
      bg: "#0a0a1a",
      accent: "#ff2d6f",
      text: "#e0e0ff",
      hover: "#00fff0",
      surface: "#0d0520",
      subtle: "#1a1a3e",
      secondary: "#b400ff",
    },
    semantic: {
      background: "#0a0a1a",
      foreground: "#e0e0ff",
      card: "#12122a",
      cardForeground: "#e0e0ff",
      popover: "#1a1a3e",
      popoverForeground: "#ff2d6f",
      primary: "#ff2d6f",
      primaryForeground: "#e0e0ff",
      secondary: "#b400ff",
      secondaryForeground: "#e0e0ff",
      muted: "#1a1a3e",
      mutedForeground: "#8888bb",
      accent: "#00fff0",
      accentForeground: "#0a0a1a",
      destructive: "#ff0044",
      border: "rgba(180, 0, 255, 0.25)",
      input: "rgba(180, 0, 255, 0.2)",
      ring: "#ff2d6f",
      sidebar: "#0d0d24",
      sidebarForeground: "#e0e0ff",
      sidebarPrimary: "#ff2d6f",
      sidebarPrimaryForeground: "#e0e0ff",
      sidebarAccent: "#1a1a3e",
      sidebarAccentForeground: "#00fff0",
      sidebarBorder: "rgba(180, 0, 255, 0.2)",
      sidebarRing: "#ff2d6f",
    },
  },

  greyscale: {
    label: "Greyscale",
    font: "'General Sans', system-ui, sans-serif",
    brand: {
      bg: "#1a1a1a",
      accent: "#666666",
      text: "#f0f0f0",
      hover: "#999999",
      surface: "#111111",
      subtle: "#e0e0e0",
      secondary: "#888888",
    },
    semantic: {
      background: "#1a1a1a",
      foreground: "#f0f0f0",
      card: "#ffffff",
      cardForeground: "#333333",
      popover: "#e0e0e0",
      popoverForeground: "#333333",
      primary: "#666666",
      primaryForeground: "#f0f0f0",
      secondary: "#888888",
      secondaryForeground: "#ffffff",
      muted: "#2a2a2a",
      mutedForeground: "#aaaaaa",
      accent: "#999999",
      accentForeground: "#0a0a0a",
      destructive: "#ff4444",
      border: "rgba(255, 255, 255, 0.15)",
      input: "rgba(255, 255, 255, 0.15)",
      ring: "#666666",
      sidebar: "#ffffff",
      sidebarForeground: "#333333",
      sidebarPrimary: "#666666",
      sidebarPrimaryForeground: "#ffffff",
      sidebarAccent: "#e0e0e0",
      sidebarAccentForeground: "#0a0a0a",
      sidebarBorder: "#cccccc",
      sidebarRing: "#666666",
    },
  },
} as const satisfies Record<string, Theme>;

export type ThemeKey = keyof typeof themes;

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

/**
 * Maps a Theme object to raw CSS custom property entries for injection on
 * `<html style={...}>`. These raw vars (e.g. `--brand-bg`, `--background`)
 * are aliased to Tailwind design tokens (e.g. `--color-brand-bg`,
 * `--color-background`) via the `@theme inline` block in `globals.css`, so
 * changing the active theme here changes every `bg-brand-*` / semantic
 * utility class across the site with no per-component changes needed.
 */
export function themeToCssVars(theme: Theme): Record<string, string> {
  return {
    "--brand-bg": theme.brand.bg,
    "--brand-accent": theme.brand.accent,
    "--brand-text": theme.brand.text,
    "--brand-hover": theme.brand.hover,
    "--brand-surface": theme.brand.surface,
    "--brand-subtle": theme.brand.subtle,
    "--brand-secondary": theme.brand.secondary,
    "--background": theme.semantic.background,
    "--foreground": theme.semantic.foreground,
    "--card": theme.semantic.card,
    "--card-foreground": theme.semantic.cardForeground,
    "--popover": theme.semantic.popover,
    "--popover-foreground": theme.semantic.popoverForeground,
    "--primary": theme.semantic.primary,
    "--primary-foreground": theme.semantic.primaryForeground,
    "--secondary": theme.semantic.secondary,
    "--secondary-foreground": theme.semantic.secondaryForeground,
    "--muted": theme.semantic.muted,
    "--muted-foreground": theme.semantic.mutedForeground,
    "--accent": theme.semantic.accent,
    "--accent-foreground": theme.semantic.accentForeground,
    "--destructive": theme.semantic.destructive,
    "--border": theme.semantic.border,
    "--input": theme.semantic.input,
    "--ring": theme.semantic.ring,
    "--sidebar": theme.semantic.sidebar,
    "--sidebar-foreground": theme.semantic.sidebarForeground,
    "--sidebar-primary": theme.semantic.sidebarPrimary,
    "--sidebar-primary-foreground": theme.semantic.sidebarPrimaryForeground,
    "--sidebar-accent": theme.semantic.sidebarAccent,
    "--sidebar-accent-foreground": theme.semantic.sidebarAccentForeground,
    "--sidebar-border": theme.semantic.sidebarBorder,
    "--sidebar-ring": theme.semantic.sidebarRing,
    "--font-theme": theme.font,
  };
}
