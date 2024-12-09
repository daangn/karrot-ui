import type { Meta, StoryObj } from "@storybook/react";

import { ControlChip } from "seed-design/ui/control-chip";

import { controlChipVariantMap } from "@seed-design/recipe/controlChip";
import { VariantTable } from "./components/variant-table";
import { IconBellFill, IconChevronDownFill } from "@daangn/react-monochrome-icon";
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
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronDownFill />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={variantMap}
      render={({ layout }) => (layout === "withText" ? "Control Chip" : <IconBellFill />)}
      {...args}
    />
  ),
};

export const DarkTheme: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronDownFill />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={variantMap}
      render={({ layout }) => (layout === "withText" ? "Control Chip" : <IconBellFill />)}
      {...args}
    />
  ),
};

export const FontScalingExtraSmall: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronDownFill />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={variantMap}
      render={({ layout }) => (layout === "withText" ? "Control Chip" : <IconBellFill />)}
      {...args}
    />
  ),
};

export const FontScalingExtraExtraExtraLarge: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronDownFill />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={variantMap}
      render={({ layout }) => (layout === "withText" ? "Control Chip" : <IconBellFill />)}
      {...args}
    />
  ),
};
