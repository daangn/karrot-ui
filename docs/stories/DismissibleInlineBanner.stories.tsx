import type { Meta, StoryObj } from "@storybook/react";

import { DismissibleInlineBanner } from "seed-design/ui/dismissible-inline-banner";

import { dismissibleInlineBannerVariantMap } from "@seed-design/recipe/dismissibleInlineBanner";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

const meta = {
  component: DismissibleInlineBanner,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof DismissibleInlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    children:
      "Ex do aliqua est non ea adipisicing nostrud. Exercitation ea mollit sunt magna quis quis exercitation.",
    icon: <IconBellFill />,
    dismissAriaLabel: "닫기",
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={dismissibleInlineBannerVariantMap}
      {...args}
    />
  ),
};

export const LightTheme: Story = CommonStoryTemplate;

export const DarkTheme: Story = CommonStoryTemplate;

export const FontScalingExtraSmall: Story = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge: Story = CommonStoryTemplate;
