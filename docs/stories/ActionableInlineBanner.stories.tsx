import type { Meta, StoryObj } from "@storybook/react";

import {
  ActionableInlineBanner,
  ActionableInlineBannerLabel,
} from "seed-design/ui/actionable-inline-banner";

import { inlineBannerVariantMap } from "@seed-design/recipe/inlineBanner";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: ActionableInlineBanner,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ActionableInlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children: (
      <ActionableInlineBannerLabel>
        Ex do aliqua est non ea adipisicing nostrud. Exercitation ea mollit sunt magna quis quis
        exercitation.
      </ActionableInlineBannerLabel>
    ),
    icon: <IconBellFill />,
    onClick: () => {},
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={inlineBannerVariantMap} {...args} />
  ),
};

export const LightTheme: Story = CommonStoryTemplate;

export const DarkTheme: Story = CommonStoryTemplate;

export const FontScalingExtraSmall: Story = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge: Story = CommonStoryTemplate;
