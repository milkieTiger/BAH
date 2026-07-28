import { expect, test } from "./fixtures";

/**
 * Covers components/DevThemeSwitcher.tsx + components/ThemeProvider.tsx via
 * the `homePage` fixture (e2e/fixtures.ts), which composes the
 * `DevThemeSwitcher` Page Object (e2e/pages/dev-theme-switcher.ts). The
 * switcher is dev-only (rendered when NODE_ENV === "development" in
 * app/layout.tsx), which is why these tests run against `pnpm dev` via the
 * `webServer` config in playwright.config.ts rather than a production build.
 *
 * The switcher is a custom button + dropdown, not a native `<select>`, so
 * assertions target `themeSwitcher.button` (visible) and
 * `themeSwitcher.html` (data-theme attribute) rather than a select value.
 */
test.describe("Dev theme switcher", () => {
  test("is visible and defaults to the active theme", async ({ homePage }) => {
    const { themeSwitcher } = homePage;

    await expect(themeSwitcher.button).toBeVisible();
    // ACTIVE_THEME in lib/theme/site-config.ts
    await expect(themeSwitcher.html).toHaveAttribute("data-theme", "greyscale");
  });

  test("switching themes updates the document theme and CSS variables", async ({
    homePage,
  }) => {
    const { themeSwitcher } = homePage;
    const backgroundBefore = await themeSwitcher.cssVariable("--background");

    await themeSwitcher.selectTheme("2027");

    await expect(themeSwitcher.html).toHaveAttribute("data-theme", "2027");

    const backgroundAfter = await themeSwitcher.cssVariable("--background");
    expect(backgroundAfter).not.toBe(backgroundBefore);
    expect(backgroundAfter.toLowerCase()).toBe("#0a0a1a");
  });

  test("lists every configured theme as an option", async ({ homePage }) => {
    const optionValues = await homePage.themeSwitcher.optionValues();

    expect(optionValues.sort()).toEqual(["2026", "2027", "greyscale"].sort());
  });
});
