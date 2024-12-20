import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "seed-design/ui/toggle-button";

import { IconBellFill, IconChevronRightFill } from "@daangn/react-monochrome-icon";
import { toggleButtonVariantMap } from "@seed-design/recipe/toggleButton";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: ToggleButton,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const variantMap = {
  ...toggleButtonVariantMap,
  disabled: ["false", "true"],
  loading: ["false", "true"],
};

const CommonStoryTemplate: Story = {
  args: {
    prefixIcon: <IconBellFill />,
    suffixIcon: <IconChevronRightFill />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={variantMap}
      render={({ disabled }) => (disabled === "true" ? "Disabled" : "Toggle Button")}
      {...args}
    />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
