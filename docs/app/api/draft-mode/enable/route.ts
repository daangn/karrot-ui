import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";
import { viewerToken } from "@/sanity/env.server";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: viewerToken }),
});
