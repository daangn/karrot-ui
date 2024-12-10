import type { Meta, StoryObj } from "@storybook/react";

import { ActionChip } from "seed-design/ui/action-chip";

import { actionChipVariantMap } from "@seed-design/recipe/actionChip";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: ActionChip,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionChip>;

export default meta;

type Story = StoryObj<typeof meta>;

const StoryTemplate: Story = {
  args: {
    children: "Action Chip",
    count: 10,
    prefixIcon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const LightTheme = StoryTemplate;

export const DarkTheme = StoryTemplate;

export const FontScalingExtraSmall = StoryTemplate;

export const FontScalingExtraExtraExtraLarge = StoryTemplate;
