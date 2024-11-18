import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "seed-design/ui/badge";

import { badgeVariantMap } from "@seed-design/recipe/badge";
import { VariantTable } from "./variant-table";
import { IconAUppercaseALowercaseLine } from "@daangn/react-monochrome-icon";

const meta = {
  component: Badge,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Action Chip",
  },
  render: (args) => <VariantTable Component={Badge} variantMap={badgeVariantMap} {...args} />,
};
