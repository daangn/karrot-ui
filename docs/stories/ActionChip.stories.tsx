import type { Meta, StoryObj } from "@storybook/react";

import { ActionChip } from "seed-design/ui/action-chip";

import { actionChipVariantMap } from "@seed-design/recipe/actionChip";
import { VariantTable } from "./variant-table";
import { IconAUppercaseALowercaseLine } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./decorator";

const meta = {
  component: ActionChip,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconAUppercaseALowercaseLine />,
  },
  render: (args) => (
    <VariantTable Component={ActionChip} variantMap={actionChipVariantMap} {...args} />
  ),
};

export const DarkTheme: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconAUppercaseALowercaseLine />,
  },
  render: (args) => (
    <VariantTable Component={ActionChip} variantMap={actionChipVariantMap} {...args} />
  ),
};
