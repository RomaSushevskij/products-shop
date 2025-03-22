import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      node_modules: path.resolve(__dirname, "node_modules"),
    };

    return config;
  },
  async redirects() {
    return [{ source: "/", destination: "/products", permanent: true }];
  },
};

export default nextConfig;
