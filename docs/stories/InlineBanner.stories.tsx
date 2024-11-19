import type { Meta, StoryObj } from "@storybook/react";

import { InlineBanner } from "seed-design/ui/inline-banner";

import { inlineBannerVariantMap } from "@seed-design/recipe/inlineBanner";
import { VariantTable } from "./components/variant-table";
import { IconBellLine } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: InlineBanner,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof InlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    children: "This is a title",
    icon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={inlineBannerVariantMap} {...args} />
  ),
};

export const DarkTheme: Story = {
  args: {
    children: "This is a title",
    icon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={inlineBannerVariantMap} {...args} />
  ),
};

export const FontScalingExtraSmall: Story = {
  args: {
    children: "This is a title",
    icon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={inlineBannerVariantMap} {...args} />
  ),
};

export const FontScalingExtraExtraExtraLarge: Story = {
  args: {
    children: "This is a title",
    icon: <IconBellLine />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={inlineBannerVariantMap} {...args} />
  ),
};
