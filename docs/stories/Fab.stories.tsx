import type { Meta, StoryObj } from "@storybook/react";

import { Fab } from "seed-design/ui/fab";

import { IconBellFill } from "@daangn/react-monochrome-icon";
import { fabVariantMap } from "@seed-design/recipe/fab";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: Fab,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof Fab>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={fabVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
