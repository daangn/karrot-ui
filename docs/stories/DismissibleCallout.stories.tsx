import type { Meta, StoryObj } from "@storybook/react";

import { DismissibleCallout } from "seed-design/ui/dismissible-callout";

import { dismissibleCalloutVariantMap } from "@seed-design/recipe/dismissibleCallout";
import { VariantTable } from "./components/variant-table";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: DismissibleCallout,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof DismissibleCallout>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: "Magna id laboris excepteur tempor duis duis voluptate voluptate non.",
    titleText: "새로운 기능",
    linkLabel: "자세히 보기",
    onLinkLabelClick: () => {},
    dismissAriaLabel: "닫기",
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={dismissibleCalloutVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
