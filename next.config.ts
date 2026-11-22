import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  devIndicators: false,
  images: { unoptimized: true },
  outputFileTracingIncludes: {
    "/[slug]": ["./content/**/*"],
    "/*": ["./content/**/*"],
  },
};

export default nextConfig;