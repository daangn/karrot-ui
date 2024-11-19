import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "seed-design/ui/checkbox";

import { checkboxVariantMap } from "@seed-design/recipe/checkbox";
import { VariantTable } from "./components/variant-table";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: Checkbox,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    label: "Checkbox",
    checked: true,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={checkboxVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
