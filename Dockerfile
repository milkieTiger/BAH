FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---- deps: install dependencies with pnpm ----
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack enable && corepack prepare pnpm@11.15.1 --activate \
 && pnpm install --frozen-lockfile

# ---- dev: used by docker-compose.dev.yml for hot reload ----
FROM deps AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]

# ---- builder: production build ----
FROM deps AS builder
ENV NODE_ENV=production
COPY . .
RUN corepack enable && corepack prepare pnpm@11.15.1 --activate \
 && pnpm build

# ---- runner: minimal production runtime ----
FROM base AS runner
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
