import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/landing-page-influenciadores-resid-nas-rocas" : "",
  assetPrefix: isGitHubPages ? "/landing-page-influenciadores-resid-nas-rocas/" : undefined,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
