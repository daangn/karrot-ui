import type { Meta, StoryObj } from "@storybook/react";

import { InlineBanner, InlineBannerLabel } from "seed-design/ui/inline-banner";

import { inlineBannerVariantMap } from "@seed-design/recipe/inlineBanner";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: InlineBanner,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof InlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: (
      <InlineBannerLabel>
        Ex do aliqua est non ea adipisicing nostrud. Exercitation ea mollit sunt magna quis quis
        exercitation.
      </InlineBannerLabel>
    ),
    icon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={inlineBannerVariantMap} {...args} />
  ),
};

export const LightTheme: Story = CommonStoryTemplate;

export const DarkTheme: Story = CommonStoryTemplate;

export const FontScalingExtraSmall: Story = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge: Story = CommonStoryTemplate;
