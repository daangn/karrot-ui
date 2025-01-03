import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: [
    "@seed-design/react-tabs",
    "@seed-design/react-popover",
    "@seed-design/react-segmented-control",
    "@seed-design/react-text-field",
    "@seed-design/react",
    "@seed-design/stackflow",
  ],
};

export default withMDX(config);
