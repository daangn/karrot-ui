import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { type ActivityComponentType, stackflow } from "@stackflow/react/future";
import { defineConfig, type Register, type RegisteredActivityName } from "@stackflow/config";
import { seedPlugin } from "@seed-design/stackflow";

interface MakeStackProps<T extends RegisteredActivityName> {
  activities: {
    name: T;
    component: ActivityComponentType<T>;
  }[];
}

export const makeStack = <T extends RegisteredActivityName>({ activities }: MakeStackProps<T>) => {
  const components = activities.reduce(
    (acc, { name, component }) => {
      acc[name] = component;
      return acc;
    },
    {} as Record<T, ActivityComponentType<T>>,
  );

  console.log({ components, activities });

  const { Stack, actions, stepActions } = stackflow({
    config: defineConfig({
      activities: activities.map(({ name }) => ({ name })),
      transitionDuration: 270,
      initialActivity: () => activities[0].name,
    }),
    components,
    plugins: [
      basicRendererPlugin(),
      basicUIPlugin({
        theme: "cupertino",
        appBar: {
          backButton: {
            ariaLabel: "뒤로 가기",
          },
          closeButton: {
            ariaLabel: "닫기",
          },
        },
      }),
      seedPlugin({
        theme: "cupertino",
      }),
    ],
  });

  return { Stack, actions, stepActions };
};
