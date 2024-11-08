import { Analytics, type TrackParams as JuneTrackParams } from "@june-so/analytics-node";
import colors from "picocolors";

export const LOG_PREFIX = colors.bold("@seed-design/codemod");

interface TrackParams {
  event: string;
  properties: JuneTrackParams["properties"];
}

export const createTrack = (metadata?: Record<string, unknown>) => {
  const analytics = new Analytics(process.env.PUBLIC_JUNE_SO_WRITE_KEY ?? "");
  const userId = process.env.USER ?? "unknown";

  return ({ event, properties }: TrackParams) =>
    analytics.track({
      event: `@seed-design/codemod: ${event}`,
      userId,
      anonymousId: "anonymous",
      properties: {
        ...metadata,
        ...properties,
      },
    });
};
