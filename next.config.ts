import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", 
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "*", // Temporarily allow all hostnames for development
      },
      {
        protocol: "http",
        hostname: "*", // Temporarily allow all hostnames for development
      },
    ],
  },
};

export default nextConfig;
