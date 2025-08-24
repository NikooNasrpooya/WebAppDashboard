// next.config.ts
import type { NextConfig } from "next";

const isGH = process.env.GH_PAGES === "true";
const repo = "MovieCatalogue"; // e.g. "task-2-dashboard"

const nextConfig: NextConfig = {
  // Required for static hosting
  output: "export",
  images: { unoptimized: true },

  // Subpath so assets/links work at https://<user>.github.io/<repo>
  basePath: isGH ? `/${repo}` : "",
  assetPrefix: isGH ? `/${repo}/` : "",

  // Makes routes like /page/ resolve to /page/index.html on static hosts
  trailingSlash: true,
};

export default nextConfig;

