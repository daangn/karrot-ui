import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "seed-design/ui/text-button";

import { textButtonVariantMap } from "@seed-design/recipe/textButton";
import { VariantTable } from "./components/variant-table";
import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { SeedThemeDecorator } from "./components/decorator";

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
    prefixIcon: <IconPlusCircleLine />,
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

export const LightTheme: Story = CommonStoryTemplate;

export const DarkTheme: Story = CommonStoryTemplate;

export const FontScalingExtraSmall: Story = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge: Story = CommonStoryTemplate;
