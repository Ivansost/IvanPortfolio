import type { NextConfig } from "next";

const TOKEN_ATLAS_PATH = "/projects/token-atlas/demo";
const TOKEN_ATLAS_ORIGIN =
  process.env.TOKEN_ATLAS_ORIGIN ?? "https://token-atlas-project.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: TOKEN_ATLAS_PATH,
        destination: `${TOKEN_ATLAS_ORIGIN}${TOKEN_ATLAS_PATH}`,
      },
      {
        source: `${TOKEN_ATLAS_PATH}/:path+`,
        destination: `${TOKEN_ATLAS_ORIGIN}${TOKEN_ATLAS_PATH}/:path+`,
      },
    ];
  },
};

export default nextConfig;
