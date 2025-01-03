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

const conditionMap = {
  indeterminate: {
    false: {
      indeterminate: false,
    },
    true: {
      indeterminate: true,
    },
  },
  checked: {
    false: {
      checked: false,
    },
    true: {
      checked: true,
    },
  },
};

const CommonStoryTemplate: Story = {
  args: {
    label: "Checkbox",
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={checkboxVariantMap}
      conditionMap={conditionMap}
      {...args}
    />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
