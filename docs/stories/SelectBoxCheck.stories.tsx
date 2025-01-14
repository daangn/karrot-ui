import type { Meta, StoryObj } from "@storybook/react";

import { CheckSelectBox, CheckSelectBoxGroup } from "seed-design/ui/select-box";
import { selectBoxGroupVariantMap } from "@seed-design/recipe/selectBoxGroup";

import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const Component = () => {
  return (
    <CheckSelectBoxGroup>
      <CheckSelectBox key="dolor" label="dolor" description="dolor" defaultChecked />
      <CheckSelectBox key="magna" label="magna" description="magna" defaultChecked />
      <CheckSelectBox key="sint" label="sint" description="sint" />
    </CheckSelectBoxGroup>
  );
};

const meta = {
  component: CheckSelectBoxGroup,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof CheckSelectBoxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    defaultValue: "dolor",
  },
  render: function Render(args) {
    return <VariantTable Component={Component} variantMap={selectBoxGroupVariantMap} {...args} />;
  },
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
