# Technology Stack — Frontend (bah-nextjs)

## Core Sections (Required)

### 1) Runtime Summary

| Area                | Value                                                                                      | Evidence                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Primary language    | TypeScript 5.x (strict mode)                                                               | `web_client/bah-nextjs/tsconfig.json`                                                            |
| Runtime + version   | Node.js 22 (Alpine) / Next.js 16.2.10                                                      | `web_client/bah-nextjs/Dockerfile` (`FROM node:22-alpine`), `web_client/bah-nextjs/package.json` |
| Package manager     | pnpm 11.15.1 (with `pnpm-lock.yaml` lockfile)                                              | `web_client/bah-nextjs/package.json` (`packageManager`), `web_client/bah-nextjs/pnpm-lock.yaml`  |
| Module/build system | Next.js built-in bundler (Webpack via Turbopack in dev); standalone output mode for Docker | `web_client/bah-nextjs/next.config.ts` (`output: "standalone"`)                                  |

### 2) Production Frameworks and Dependencies

| Dependency              | Version | Role in system                                                                            | Evidence                                                                                                                         |
| ----------------------- | ------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `next`                  | 16.2.10 | React meta-framework (SSR/SSG, file-system routing, App Router)                           | `web_client/bah-nextjs/package.json`                                                                                             |
| `react` / `react-dom`   | 19.2.4  | UI library — client & server components                                                   | `web_client/bah-nextjs/package.json`                                                                                             |
| `@base-ui/react`        | 1.6.0   | Headless, unstyled UI primitives (Accordion, Button, Field, Input, Toast, NavigationMenu) | `web_client/bah-nextjs/package.json`, `web_client/bah-nextjs/app/page.tsx`, `web_client/bah-nextjs/components/layout/Header.tsx` |
| `motion`                | 12.42.2 | Animation library (Framer Motion rebrand) — planned for component animations              | `web_client/bah-nextjs/package.json`                                                                                             |
| `zustand`               | 5.0.14  | Lightweight client-state management — declared but not yet connected                      | `web_client/bah-nextjs/package.json`                                                                                             |
| `react-hook-form`       | 7.82.0  | Form state management + validation — declared, awaiting usage                             | `web_client/bah-nextjs/package.json`                                                                                             |
| `@hookform/resolvers`   | 5.4.0   | Validation resolver bridge for react-hook-form — declared, awaiting usage                 | `web_client/bah-nextjs/package.json`                                                                                             |
| `zod`                   | 4.4.3   | Schema-based validation (used with react-hook-form resolvers) — declared, awaiting usage  | `web_client/bah-nextjs/package.json`                                                                                             |
| `@tanstack/react-query` | 5.101.2 | Server-state fetching, caching, and sync — declared but not yet connected                 | `web_client/bah-nextjs/package.json`                                                                                             |
| `tailwindcss` (v4)      | ^4      | Utility-first CSS framework via `@tailwindcss/postcss`                                    | `web_client/bah-nextjs/package.json` (devDeps), `web_client/bah-nextjs/postcss.config.mjs`                                       |

### 3) Development Toolchain

| Tool                      | Purpose                                                                                                                                                                                | Evidence                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| TypeScript 5.x            | Type-checking with strict mode, `target: ES2017`, path alias `@/*` → `./*`                                                                                                             | `web_client/bah-nextjs/tsconfig.json`                                        |
| ESLint 9.x (flat config)  | Linting — extends `eslint-config-next` core-web-vitals + TypeScript rules, `eslint-plugin-react-hooks` v7 recommended (compiler-powered Rules of React), plus `eslint-config-prettier` | `web_client/bah-nextjs/eslint.config.mjs`                                    |
| React Compiler            | Build-time automatic memoization via `babel-plugin-react-compiler` (exact version 1.0.0); enabled in `next.config.ts` (`reactCompiler: true`)                                          | `web_client/bah-nextjs/next.config.ts`, `web_client/bah-nextjs/package.json` |
| Prettier 3.x              | Code formatting — `semi: true`, `singleQuote: false`, `trailingComma: "all"`, `printWidth: 80`, with `prettier-plugin-tailwindcss`                                                     | `web_client/bah-nextjs/.prettierrc.json`                                     |
| Husky 9.x + lint-staged   | Pre-commit hook — runs ESLint fix + Prettier write on staged `*.{js,jsx,ts,tsx}` files                                                                                                 | `web_client/bah-nextjs/package.json` (`lint-staged`), `.husky/pre-commit`    |
| Tailwind CSS v4 + PostCSS | CSS processing pipeline via `@tailwindcss/postcss` plugin                                                                                                                              | `web_client/bah-nextjs/postcss.config.mjs`                                   |

### 4) Key Commands

```bash
pnpm install            # Install dependencies (frozen lockfile in CI)
pnpm dev                # Start Next.js dev server (port 3000)
pnpm build              # Production build (standalone output)
pnpm start              # Start production server
pnpm lint               # Run ESLint on all files
pnpm format             # Format all files with Prettier
pnpm format:check       # Check formatting without writing
```

### 5) Environment and Config

- **Config sources:**
  - `web_client/bah-nextjs/next.config.ts` — Next.js runtime config
  - `web_client/bah-nextjs/tsconfig.json` — TypeScript compiler options
  - `web_client/bah-nextjs/.prettierrc.json` — Formatter settings
  - `web_client/bah-nextjs/eslint.config.mjs` — Linter rules (flat config)
  - `web_client/bah-nextjs/postcss.config.mjs` — PostCSS/Tailwind pipeline
  - `web_client/bah-nextjs/lib/theme/site-config.ts` — Production theme (`ACTIVE_THEME`) + dev fallback
  - `web_client/bah-nextjs/lib/theme/active-theme.ts` — Request-time theme resolution (dev-cookie aware)
  - `web_client/bah-nextjs/lib/theme/themes.ts` — Theme color/font token definitions
- **Required env vars:** None explicitly listed in a `.env.example` — the standalone server respects `PORT` (default 3000) and `HOSTNAME` (default `"0.0.0.0"`) set in Dockerfile.
- **Docker runtime constraints:** Built in multi-stage Docker (`FROM node:22-alpine`), outputs standalone server to `.next/standalone`, runs as non-root `nextjs` user (UID 1001).

### 6) Evidence

- `web_client/bah-nextjs/package.json`
- `web_client/bah-nextjs/tsconfig.json`
- `web_client/bah-nextjs/next.config.ts`
- `web_client/bah-nextjs/Dockerfile`
- `web_client/bah-nextjs/.prettierrc.json`
- `web_client/bah-nextjs/eslint.config.mjs`
- `web_client/bah-nextjs/postcss.config.mjs`
- `web_client/bah-nextjs/pnpm-lock.yaml`
