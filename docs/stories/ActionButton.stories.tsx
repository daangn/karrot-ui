import type { Meta, StoryObj } from "@storybook/react";

import { ActionButton } from "seed-design/ui/action-button";

import { actionButtonVariantMap } from "@seed-design/recipe/actionButton";
import { VariantTable } from "./components/variant-table";
import { IconBellLine } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: ActionButton,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: "Action Chip",
    prefixIcon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={actionButtonVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
