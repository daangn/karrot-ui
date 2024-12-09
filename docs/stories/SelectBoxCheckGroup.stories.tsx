import type { Meta, StoryObj } from "@storybook/react";

import { SelectBoxCheck, SelectBoxCheckGroup } from "seed-design/ui/select-box-group";
import { selectBoxVariantMap } from "@seed-design/recipe/selectBox";

import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const Component = () => {
  return (
    <SelectBoxCheckGroup>
      <SelectBoxCheck key="dolor" value="dolor" label="dolor" description="dolor" defaultChecked />
      <SelectBoxCheck
        key="magna"
        value="magna"
        label="magna"
        description="magna"
        defaultChecked
        indeterminate
      />
      <SelectBoxCheck key="sint" value="sint" label="sint" description="sint" />
    </SelectBoxCheckGroup>
  );
};

const meta = {
  component: SelectBoxCheckGroup,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof SelectBoxCheckGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    defaultValue: "dolor",
  },
  render: function Render(args) {
    return <VariantTable Component={Component} variantMap={selectBoxVariantMap} {...args} />;
  },
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
