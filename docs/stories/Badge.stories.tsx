import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "seed-design/ui/badge";

import { badgeVariantMap } from "@seed-design/recipe/badge";
import { VariantTable } from "./components/variant-table";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: Badge,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    children: "Badge",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={badgeVariantMap} {...args} />
  ),
};

export const DarkTheme: Story = {
  args: {
    children: "Badge",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={badgeVariantMap} {...args} />
  ),
};

export const FontScalingExtraSmall: Story = {
  args: {
    children: "Badge",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={badgeVariantMap} {...args} />
  ),
};

export const FontScalingExtraExtraLarge: Story = {
  args: {
    children: "Badge",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={badgeVariantMap} {...args} />
  ),
};
