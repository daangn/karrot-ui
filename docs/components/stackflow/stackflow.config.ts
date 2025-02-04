import { defineConfig, ActivityDefinition } from "@stackflow/config";

export const getConfig = <T extends string>(activities: ActivityDefinition<T>[]) =>
  defineConfig({
    activities,
    transitionDuration: 270,
    initialActivity: () => activities[0].name,
  });
