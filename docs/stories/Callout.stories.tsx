import type { Meta, StoryObj } from "@storybook/react";

import { Callout } from "seed-design/ui/callout";

import { calloutVariantMap } from "@seed-design/recipe/callout";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";
import { createStoryWithParameters } from "@/stories/utils/parameters";

const meta = {
  component: Callout,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    title: "새로운 기능",
    description: "Magna id laboris excepteur tempor duis duis voluptate voluptate non.",
    linkLabel: "자세히 보기",
    icon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={calloutVariantMap} {...args} />
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
