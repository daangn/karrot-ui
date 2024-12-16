import type { Meta, StoryObj } from "@storybook/react";

import { ActionChip } from "seed-design/ui/action-chip";

import { actionChipVariantMap } from "@seed-design/recipe/actionChip";
import { VariantTable } from "./components/variant-table";
import { IconBellFill, IconChevronDownFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: ActionChip,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionChip>;

export default meta;

type Story = StoryObj<typeof meta>;

const StoryTemplate: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronDownFill />,
    count: 10,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={actionChipVariantMap}
      render={({ layout }) => (layout === "withText" ? "Control Chip" : <IconBellFill />)}
      {...args}
    />
  ),
};

export const LightTheme = StoryTemplate;

export const DarkTheme = StoryTemplate;

export const FontScalingExtraSmall = StoryTemplate;

export const FontScalingExtraExtraExtraLarge = StoryTemplate;
