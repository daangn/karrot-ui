import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
import { remarkStructure } from "fumadocs-core/mdx-plugins";

export const { docs, meta } = defineDocs();

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall, remarkStructure],
  },
});
