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

const StoryTemplate: Story = {
  args: {
    children: "뱃지",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={badgeVariantMap} {...args} />
  ),
};

export const LightTheme = StoryTemplate;

export const DarkTheme = StoryTemplate;

export const FontScalingExtraSmall = StoryTemplate;

export const FontScalingExtraExtraExtraLarge = StoryTemplate;
