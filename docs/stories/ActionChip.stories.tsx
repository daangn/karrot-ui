import type { Meta, StoryObj } from "@storybook/react";

import { ActionChip } from "seed-design/ui/action-chip";

import { actionChipVariantMap } from "@seed-design/recipe/actionChip";
import { VariantTable } from "./components/variant-table";
import { IconBellFill, IconChevronDownFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";
import { createStoryWithParameters } from "@/stories/utils/parameters";

const meta = {
  component: ActionChip,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionChip>;

export default meta;

type Story = StoryObj<typeof meta>;

const conditionMap = {
  layout: {
    withText: { layout: "withText", children: "Control Chip" },
    iconOnly: { layout: "iconOnly", children: <IconBellFill /> },
  },
};

const CommonStoryTemplate: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronDownFill />,
    count: 10,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={actionChipVariantMap}
      conditionMap={conditionMap}
      {...args}
    />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = createStoryWithParameters({
  ...CommonStoryTemplate,
  parameters: { theme: "dark" },
});

export const FontScalingExtraSmall = createStoryWithParameters({
  ...CommonStoryTemplate,
  parameters: { fontScale: "Extra Small" },
});

export const FontScalingExtraExtraExtraLarge = createStoryWithParameters({
  ...CommonStoryTemplate,
  parameters: { fontScale: "Extra Extra Extra Large" },
});
