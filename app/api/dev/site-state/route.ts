// =============================================================================
// DEV-ONLY: site-state cookie setter
// =============================================================================
// POST /api/dev/site-state  { state: "D"|"T"|"A"|"TR"|"RC"|"FIR" }
//
// Sets the `dev-site-state` cookie so `getSiteState()` reads the override
// on subsequent requests (server-side route guards included).
//
// Rejects with 404 in production — do not rely on client-side NODE_ENV
// checks alone to prevent misuse.
// =============================================================================

import { NextResponse } from "next/server";
import { parseSiteState } from "@/lib/site-state/types";

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
    !("state" in body) ||
    typeof (body as Record<string, unknown>).state !== "string"
  ) {
    return new NextResponse('Missing "state" field', { status: 400 });
  }

  const parsed = parseSiteState((body as { state: string }).state);
  if (!parsed) {
    return new NextResponse(
      `Invalid state "${(body as { state: string }).state}". Valid: D, T, A, TR, RC, FIR.`,
      { status: 400 },
    );
  }

  const response = NextResponse.json({ ok: true, state: parsed });
  response.cookies.set("dev-site-state", parsed, {
    path: "/",
    httpOnly: false, // client does not need to read it; server reads it
    sameSite: "lax",
    secure: false,
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
