import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/nas-rocas-club" : "",
  assetPrefix: isGitHubPages ? "/nas-rocas-club/" : undefined,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
