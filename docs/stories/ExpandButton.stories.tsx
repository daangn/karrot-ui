import type { Meta, StoryObj } from "@storybook/react";

import { ExpandButton } from "seed-design/ui/expand-button";

import { expandButtonVariantMap } from "@seed-design/recipe/expandButton";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: ExpandButton,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ExpandButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: "Expand Button",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={expandButtonVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
