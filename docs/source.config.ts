import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
import { remarkStructure } from "fumadocs-core/mdx-plugins";

export const { docs, meta } = defineDocs();

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    remarkPlugins: [remarkInstall, remarkStructure],
  },
});
