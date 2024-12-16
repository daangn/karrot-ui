import type { Meta, StoryObj } from "@storybook/react";

import { Callout, CalloutDescription, CalloutLink, CalloutTitle } from "seed-design/ui/callout";

import { calloutVariantMap } from "@seed-design/recipe/callout";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: Callout,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: (
      <>
        <CalloutTitle>새로운 기능</CalloutTitle>
        <CalloutDescription>
          Magna id laboris excepteur tempor duis duis voluptate voluptate non.
        </CalloutDescription>
        <CalloutLink onClick={() => {}}>자세히 보기</CalloutLink>
      </>
    ),
    icon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={calloutVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
