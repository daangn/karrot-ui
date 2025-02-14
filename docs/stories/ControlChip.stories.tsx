import type { Meta, StoryObj } from "@storybook/react";

import { ControlChip } from "seed-design/ui/control-chip";

import { IconBellFill, IconChevronDownFill } from "@daangn/react-monochrome-icon";
import { controlChipVariantMap } from "@seed-design/css/recipes/control-chip";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";
import { createStoryWithParameters } from "@/stories/utils/parameters";

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

const CommonStoryTemplate: Story = {
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
