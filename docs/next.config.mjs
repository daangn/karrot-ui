import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: ["@seed-design/react", "@seed-design/stackflow"],
  experimental: {
    serverComponentsExternalPackages: [
      "ts-morph",
      "typescript",
      "oxc-transform",
      "@shikijs/twoslash",
    ],
  },
  images: {
    // FIXME: temporal use for static export; will remove after image optimization setup
    unoptimized: true,
  },
};

export default withMDX(config);
