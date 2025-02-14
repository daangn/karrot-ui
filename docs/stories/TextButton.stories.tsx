import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "seed-design/ui/text-button";

import { textButtonVariantMap } from "@seed-design/recipe/text-button";
import { VariantTable } from "./components/variant-table";
import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";
import { createStoryWithParameters } from "@/stories/utils/parameters";

const meta = {
  component: TextButton,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const conditionMap = {
  disabled: {
    false: { disabled: false },
    true: { disabled: true },
  },
};

const CommonStoryTemplate: Story = {
  args: {
    children: "새 글",
    icon: <IconPlusCircleLine />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={textButtonVariantMap}
      conditionMap={conditionMap}
      {...args}
    />
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
