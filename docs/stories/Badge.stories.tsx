import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "seed-design/ui/badge";

import { badgeVariantMap } from "@seed-design/recipe/badge";
import { VariantTable } from "./variant-table";
import { SeedThemeDecorator } from "./decorator";

const meta = {
  component: Badge,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    children: "Badege",
  },
  render: (args) => <VariantTable Component={Badge} variantMap={badgeVariantMap} {...args} />,
};

export const DarkTheme: Story = {
  args: {
    children: "Badege",
  },
  render: (args) => <VariantTable Component={Badge} variantMap={badgeVariantMap} {...args} />,
};
