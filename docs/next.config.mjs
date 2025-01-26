import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: [
    "@seed-design/react-tabs",
    "@seed-design/react-popover",
    "@seed-design/react",
    "@seed-design/stackflow",
  ],
};

export default withMDX(config);
