import type { NextConfig } from "next";
const REPO = 'WebAppDashboard'
const nextConfig: NextConfig = {
  output: 'export',                 // needed for GitHub Pages
  basePath: `/${REPO}`,             // assets & routes served under /REPO
  assetPrefix: `/${REPO}/`,
  images: { unoptimized: true },    // for <Image/> on static export
  trailingSlash: true,              // helps with relative asset paths
};

export default nextConfig;
