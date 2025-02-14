import type { Meta, StoryObj } from "@storybook/react";

import { InlineBanner } from "seed-design/ui/inline-banner";

import { inlineBannerVariantMap } from "@seed-design/recipe/inline-banner";
import { VariantTable } from "./components/variant-table";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";
import { createStoryWithParameters } from "@/stories/utils/parameters";

const meta = {
  component: InlineBanner,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof InlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    description:
      "Ex do aliqua est non ea adipisicing nostrud. Exercitation ea mollit sunt magna quis quis exercitation.",
    icon: <IconBellFill />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={inlineBannerVariantMap} {...args} />
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
