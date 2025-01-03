import type { Meta, StoryObj } from "@storybook/react";

import { ControlChip } from "seed-design/ui/control-chip";

import { IconBellFill, IconChevronDownFill } from "@daangn/react-monochrome-icon";
import { controlChipVariantMap } from "@seed-design/recipe/controlChip";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: ControlChip.Toggle,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ControlChip.Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

const conditionMap = {
  checked: {
    false: { checked: false },
    true: { checked: true },
  },
  layout: {
    withText: { layout: "withText", children: "Control Chip" },
    iconOnly: { layout: "iconOnly", children: <IconBellFill /> },
  },
};

const StoryTemplate: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronDownFill />,
    count: 10,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={controlChipVariantMap}
      conditionMap={conditionMap}
      {...args}
    />
  ),
};

export const LightTheme = StoryTemplate;

export const DarkTheme = StoryTemplate;

export const FontScalingExtraSmall = StoryTemplate;

export const FontScalingExtraExtraExtraLarge = StoryTemplate;
