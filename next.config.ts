import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for the Docker multi-stage build: emits a minimal
  // standalone server (.next/standalone) instead of relying on
  // node_modules being present in the runtime image.
  output: "standalone",

  // Enable React Compiler for automatic memoization.
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler
  reactCompiler: true,
};

export default nextConfig;
