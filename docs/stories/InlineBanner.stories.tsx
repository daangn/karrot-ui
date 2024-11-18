import type { Meta, StoryObj } from "@storybook/react";

import { InlineBanner } from "seed-design/ui/inline-banner";

import { inlineBannerVariantMap } from "@seed-design/recipe/inlineBanner";
import { VariantTable } from "./variant-table";
import { IconAUppercaseALowercaseLine } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./decorator";

const meta = {
  component: InlineBanner,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof InlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    children: "This is a title",
    prefixIcon: <IconAUppercaseALowercaseLine />,
  },
  render: (args) => (
    <VariantTable Component={InlineBanner} variantMap={inlineBannerVariantMap} {...args} />
  ),
};

export const DarkTheme: Story = {
  args: {
    children: "This is a title",
    prefixIcon: <IconAUppercaseALowercaseLine />,
  },
  render: (args) => (
    <VariantTable Component={InlineBanner} variantMap={inlineBannerVariantMap} {...args} />
  ),
};
