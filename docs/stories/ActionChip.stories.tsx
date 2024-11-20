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

export const LightTheme: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const DarkTheme: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const FontScalingExtraSmall: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const FontScalingExtraExtraExtraLarge: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};
