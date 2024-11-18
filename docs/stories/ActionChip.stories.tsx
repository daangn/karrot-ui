import type { Meta, StoryObj } from "@storybook/react";

import { ActionChip } from "seed-design/ui/action-chip";

import { actionChipVariantMap } from "@seed-design/recipe/actionChip";
import { VariantTable } from "./components/variant-table";
import { IconBellLine } from "@daangn/react-monochrome-icon";
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
    prefixIcon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const DarkTheme: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const FontScalingExtraSmall: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const FontScalingExtraExtraLarge: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionChipVariantMap} {...args} />
  ),
};
