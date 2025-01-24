import { defineLive } from "next-sanity";
import { client } from "./client";
import { viewerToken } from "@/sanity/env.server";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "vX",
  }),
  browserToken: viewerToken,
  serverToken: viewerToken,
});
