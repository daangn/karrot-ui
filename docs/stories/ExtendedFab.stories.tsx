import type { Meta, StoryObj } from "@storybook/react";

import { ExtendedFab } from "seed-design/ui/extended-fab";

import { IconBellFill } from "@daangn/react-monochrome-icon";
import { extendedFabVariantMap } from "@seed-design/recipe/extendedFab";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: ExtendedFab,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ExtendedFab>;

export default meta;

type Story = StoryObj<typeof meta>;

const variantMap = {
  ...extendedFabVariantMap,
};

const CommonStoryTemplate: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    children: "라벨",
  },
  render: (args) => <VariantTable Component={meta.component} variantMap={variantMap} {...args} />,
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
