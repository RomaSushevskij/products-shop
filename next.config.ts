import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      node_modules: path.resolve(__dirname, "node_modules"),
    };

    return config;
  },
};

export default nextConfig;
