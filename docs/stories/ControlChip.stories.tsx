import type { Meta, StoryObj } from "@storybook/react";

import { ControlChip } from "seed-design/ui/control-chip";

import { controlChipVariantMap } from "@seed-design/recipe/controlChip";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: ControlChip.Toggle,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ControlChip.Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

const variantMap = { ...controlChipVariantMap, checked: ["false", "true"] };

export const LightTheme: Story = {
  args: {
    children: "Control Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => <VariantTable Component={meta.component} variantMap={variantMap} {...args} />,
};

export const DarkTheme: Story = {
  args: {
    children: "Control Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => <VariantTable Component={meta.component} variantMap={variantMap} {...args} />,
};

export const FontScalingExtraSmall: Story = {
  args: {
    children: "Control Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => <VariantTable Component={meta.component} variantMap={variantMap} {...args} />,
};

export const FontScalingExtraExtraExtraLarge: Story = {
  args: {
    children: "Control Chip",
    prefixIcon: <IconBellFill />,
  },
  render: (args) => <VariantTable Component={meta.component} variantMap={variantMap} {...args} />,
};
