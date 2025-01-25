import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "seed-design/ui/toggle-button";

import { IconBellFill, IconChevronRightFill } from "@daangn/react-monochrome-icon";
import { toggleButtonVariantMap } from "@seed-design/recipe/toggleButton";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";
import { createStoryWithParameters } from "@/stories/utils/parameters";

const meta = {
  component: ToggleButton,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const conditionMap = {
  disabled: {
    false: { disabled: false },
    true: { disabled: true },
  },
  loading: {
    false: { loading: false },
    true: { loading: true },
  },
  pressed: {
    false: { pressed: false, children: "미선택" },
    true: { pressed: true, children: "선택됨" },
  },
};

const CommonStoryTemplate: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronRightFill />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={toggleButtonVariantMap}
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
