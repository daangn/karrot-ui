import { assertValue } from "@/sanity/env";

export const viewerToken = assertValue(
  process.env.SANITY_API_READ_TOKEN,
  "Missing environment variable: SANITY_API_READ_TOKEN",
);
