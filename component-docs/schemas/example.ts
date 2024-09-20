import { z } from "zod";

export const exampleMetadataSchema = z.object({
  name: z.string(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  innerDependencies: z.array(z.string()).optional(),
  snippets: z.array(z.string()),
  type: z.enum(["stackflow", "react"]),
});

export const exampleRegistrySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  innerDependencies: z.array(z.string()).optional(),
  registries: z.array(
    z.object({
      name: z.string(),
      content: z.string(),
    }),
  ),
  type: z.enum(["stackflow", "react"]),
});

export type ExampleMetadataSchema = z.infer<typeof exampleMetadataSchema>;
export type ExampleRegistrySchema = z.infer<typeof exampleRegistrySchema>;
