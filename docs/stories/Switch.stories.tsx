import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "seed-design/ui/switch";

import { switchVariantMap } from "@seed-design/recipe/switch";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: Switch,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={switchVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
