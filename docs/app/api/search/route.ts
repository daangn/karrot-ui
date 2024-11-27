import { source } from "@/app/source";
import { createFromSource } from "fumadocs-core/search/server";

// it should be cached forever
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, (page) => {
  return {
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
    tag: page.slugs[0],
  };
});
