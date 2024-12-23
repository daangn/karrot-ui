import type { Meta, StoryObj } from "@storybook/react";

import { ReactionButton } from "seed-design/ui/reaction-button";

import { IconBellFill, IconChevronRightFill } from "@daangn/react-monochrome-icon";
import { reactionButtonVariantMap } from "@seed-design/recipe/reactionButton";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: ReactionButton,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ReactionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const variantMap = {
  ...reactionButtonVariantMap,
  disabled: ["false", "true"],
  loading: ["false", "true"],
  pressed: ["false", "true"],
};

const CommonStoryTemplate: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    count: 1,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={variantMap}
      render={({ pressed }) => (pressed === "true" ? "선택됨" : "미선택")}
      {...args}
    />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
