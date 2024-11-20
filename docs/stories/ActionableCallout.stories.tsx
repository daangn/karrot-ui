import type { Meta, StoryObj } from "@storybook/react";

import { ActionableCallout } from "seed-design/ui/actionable-callout";

import { actionableCalloutVariantMap } from "@seed-design/recipe/actionableCallout";
import { VariantTable } from "./components/variant-table";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: ActionableCallout,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionableCallout>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: "Magna id laboris excepteur tempor duis duis voluptate voluptate non.",
    titleText: "새로운 기능",
    onClick: () => {},
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionableCalloutVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
