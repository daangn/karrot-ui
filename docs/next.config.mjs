import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: [
    "@seed-design/react-checkbox",
    "@seed-design/react-switch",
    "@seed-design/react-tabs",
    "@seed-design/react-popover",
    "@seed-design/react-avatar",
    "@seed-design/react-radio-group",
    "@seed-design/react-segmented-control",
    "@seed-design/react-switch",
    "@seed-design/react-text-field",
    "@seed-design/react-toggle",
    "@seed-design/stackflow",
  ],
};

export default withMDX(config);
