import type { Meta, StoryObj } from "@storybook/react";

import { LinkInlineBanner } from "seed-design/ui/link-inline-banner";

import { linkInlineBannerVariantMap } from "@seed-design/recipe/linkInlineBanner";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: LinkInlineBanner,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof LinkInlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children:
      "Ex do aliqua est non ea adipisicing nostrud. Exercitation ea mollit sunt magna quis quis exercitation.",
    icon: <IconBellFill />,
    linkLabel: "자세히 보기",
    onLinkLabelClick: () => {},
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={linkInlineBannerVariantMap} {...args} />
  ),
};

export const LightTheme: Story = CommonStoryTemplate;

export const DarkTheme: Story = CommonStoryTemplate;

export const FontScalingExtraSmall: Story = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge: Story = CommonStoryTemplate;
