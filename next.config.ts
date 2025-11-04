import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // allow all paths
        search: undefined, // allow any query params
      },
    ],
  },
};

export default nextConfig;
