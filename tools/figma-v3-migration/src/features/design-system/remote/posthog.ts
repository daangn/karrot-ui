import { POSTHOG_API_KEY, POSTHOG_HOST, MODE } from "@/shared/env";
import { createFigmaLink } from "../utils/link";

const EVENT_PREFIX = "v3_migration_figma_plugin";

interface CaptureOptions {
  event: string;
  properties?: Record<string, unknown>;
}

async function capture({ event, properties }: CaptureOptions) {
  if (MODE === "dev") return;

  try {
    const url = `${POSTHOG_HOST}/capture`;
    const headers = {
      "Content-Type": "application/json",
    };

    const payload = {
      api_key: POSTHOG_API_KEY,
      event: `${EVENT_PREFIX}.${event}`,
      distinct_id: `figma.${figma.currentUser?.name}`,
      properties: {
        ...properties,
        user: {
          name: figma.currentUser?.name,
          email: figma.currentUser?.id,
        },
        page: {
          name: figma.currentPage?.name,
          id: figma.currentPage?.id,
          link: createFigmaLink({
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            fileKey: figma.fileKey!,
            rootName: encodeURIComponent(figma.root.name),
            nodeId: figma.currentPage?.id ?? "",
          }),
        },
        root: {
          name: figma.root.name,
          id: figma.root.id,
          link: createFigmaLink({
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            fileKey: figma.fileKey!,
            rootName: encodeURIComponent(figma.root.name),
            nodeId: "0-1",
          }),
        },
        $process_person_profile: false,
      },
      timestamp: new Date(),
    };

    await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  }
}

export const posthog = {
  capture,
};
