import type { Meta, StoryObj } from "@storybook/react";

import { SelectBoxCheck } from "seed-design/ui/select-box-check";
import { selectBoxVariantMap } from "@seed-design/recipe/selectBox";

import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: SelectBoxCheck,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof SelectBoxCheck>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    defaultChecked: true,
    label: "nostrud",
  },
  render: function Render(args) {
    return <VariantTable Component={SelectBoxCheck} variantMap={selectBoxVariantMap} {...args} />;
  },
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
