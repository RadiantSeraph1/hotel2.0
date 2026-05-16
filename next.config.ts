import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giftbgolden.com",
      },
      {
        protocol: "https",
        hostname: "www.giftbgolden.com",
      },
    ],
  },
};

export default nextConfig;
