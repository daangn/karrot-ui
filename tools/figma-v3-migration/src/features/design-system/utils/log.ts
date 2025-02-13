import { posthog } from "../remote/posthog";
import { createFigmaLink } from "./link";

interface LogEventParams {
  event: string;
  properties: Record<string, unknown>;
  currentTarget: SceneNode;
}

interface LogErrorParams {
  event: string;
  error: Error;
  properties: Record<string, unknown>;
  currentTarget: SceneNode;
}

export function logEvent({ event, properties, currentTarget }: LogEventParams) {
  posthog.capture({
    event,
    properties: {
      ...properties,
      frame: getFrameInfo(currentTarget),
    },
  });
}

export function logError({ event, error, properties, currentTarget }: LogErrorParams) {
  figma.notify(error.message, { timeout: 2000, error: true });
  console.error(error);

  posthog.capture({
    event: `${event}_error`,
    properties: {
      ...properties,
      error: error.message,
      frame: getFrameInfo(currentTarget),
    },
  });
}

function getFrameInfo(node: SceneNode) {
  return {
    name: node.name,
    id: node.id,
    link: createFigmaLink({
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      fileKey: figma.fileKey!,
      rootName: encodeURIComponent(figma.root.name),
      nodeId: node.id,
    }),
  };
}
