import type { Meta, StoryObj } from "@storybook/react";

import { selectBoxGroupVariantMap } from "@seed-design/recipe/selectBoxGroup";
import { CheckSelectBox } from "seed-design/ui/select-box";

import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: CheckSelectBox,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof CheckSelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

const conditionMap = {
  checked: {
    false: {
      defaultChecked: false,
    },
    true: {
      defaultChecked: true,
    },
  },
};

const CommonStoryTemplate: Story = {
  args: {
    defaultValue: "dolor",
    label: "sint",
    description: "sint",
  },
  render: (args) => {
    return (
      <VariantTable
        Component={CheckSelectBox}
        variantMap={selectBoxGroupVariantMap}
        conditionMap={conditionMap}
        {...args}
      />
    );
  },
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
