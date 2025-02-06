import { defineConfig, ActivityDefinition, RegisteredActivityName } from "@stackflow/config";

export const getConfig = (activities: ActivityDefinition<RegisteredActivityName>[]) =>
  defineConfig({
    activities,
    transitionDuration: 270,
    initialActivity: () => activities[0].name,
  });
