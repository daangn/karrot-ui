import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "mokd6dka",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
