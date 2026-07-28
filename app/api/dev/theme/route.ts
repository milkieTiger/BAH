// =============================================================================
// DEV-ONLY: theme cookie setter
// =============================================================================
// POST /api/dev/theme  { theme: "bah"|"cyberpunk"|"greyscale" }
//
// Sets the `dev-theme` cookie so `getActiveThemeKey()` reads the override
// on subsequent server-side renders (SSR, hard navigation, refresh).
//
// Rejects with 404 in production — do not rely on client-side NODE_ENV
// checks alone to prevent misuse.
// =============================================================================

import { NextResponse } from "next/server";
import { themes, type ThemeKey } from "@/lib/theme/themes";

function isValidThemeKey(key: unknown): key is ThemeKey {
  return typeof key === "string" && key in themes;
}

const VALID_KEYS = Object.keys(themes).join(", ");

export async function POST(request: Request) {
  // ---- production guard: never expose in deployed builds ----
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not Found", { status: 404 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("theme" in body) ||
    typeof (body as Record<string, unknown>).theme !== "string"
  ) {
    return new NextResponse('Missing "theme" field', { status: 400 });
  }

  const themeKey = (body as { theme: string }).theme;

  if (!isValidThemeKey(themeKey)) {
    return new NextResponse(
      `Invalid theme "${themeKey}". Valid: ${VALID_KEYS}.`,
      { status: 400 },
    );
  }

  const response = NextResponse.json({ ok: true, theme: themeKey });
  response.cookies.set("dev-theme", themeKey, {
    path: "/",
    httpOnly: false, // client does not need to read it; server reads it
    sameSite: "lax",
    secure: false,
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
