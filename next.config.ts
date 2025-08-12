import type { NextConfig } from "next";
const REPO = 'WebAppDashboard'
const nextConfig: NextConfig = {
  output: 'export',                 // needed for GitHub Pages
  basePath: `/${REPO}`,             // assets & routes served under /REPO
  assetPrefix: `/${REPO}/`,
  images: { unoptimized: true },    // for <Image/> on static export
  trailingSlash: true,              // helps with relative asset paths
   env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === 'production' ? `/${REPO}` : '',
  },
};

export default nextConfig;
