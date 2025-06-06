import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    staleTimes: {
      dynamic: 60 * 60,
      static: 60 * 60 * 24,
    },
  },
};

export default nextConfig;
