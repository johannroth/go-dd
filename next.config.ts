import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // required option to deploy to github pages
  distDir: "docs",
};

export default nextConfig;
