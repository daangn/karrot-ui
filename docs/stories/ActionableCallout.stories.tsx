import type { Meta, StoryObj } from "@storybook/react";

import { ActionableCallout } from "seed-design/ui/callout";

import { calloutVariantMap } from "@seed-design/recipe/callout";
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
    title: "새로운 기능",
    description: "Magna id laboris excepteur tempor duis duis voluptate voluptate non.",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={calloutVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
