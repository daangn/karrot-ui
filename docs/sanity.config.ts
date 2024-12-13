"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structure } from "./sanity/structure";
import { structureTool } from "sanity/structure";
import { presentationTool, defineLocations } from "sanity/presentation";
import * as changeCase from "change-case";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

import { table } from "@sanity/table";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      resolve: {
        locations: {
          contents: defineLocations({
            select: {
              title: "title",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: `/docs/design/components/${changeCase.kebabCase(doc?.title)}`,
                },
              ],
            }),
          }),
          blog: defineLocations({
            select: {
              slug: "slug",
              title: "title",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: `/blog?slug=${doc?.slug.current}`,
                },
              ],
            }),
          }),
        },
      },
    }),
    table(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
