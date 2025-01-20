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

const conditionMap = {
  checked: {
    true: { checked: true },
    false: { checked: false },
  },
  size: {
    small: { size: "small", label: "라벨" },
    medium: { size: "medium" },
  },
};

const CommonStoryTemplate: Story = {
  args: {},
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={switchVariantMap}
      conditionMap={conditionMap}
      {...args}
    />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
