import type { Meta, StoryObj } from "@storybook/react";

import { ActionButton } from "seed-design/ui/action-button";

import { IconBellFill, IconChevronRightFill } from "@daangn/react-monochrome-icon";
import { actionButtonVariantMap } from "@seed-design/recipe/actionButton";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: ActionButton,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionButton>;

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
  layout: {
    withText: { layout: "withText", children: "Action Button" },
    iconOnly: { layout: "iconOnly", children: <IconBellFill /> },
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
      variantMap={actionButtonVariantMap}
      conditionMap={conditionMap}
      {...args}
    />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
