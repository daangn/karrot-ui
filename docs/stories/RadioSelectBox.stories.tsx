import type { Meta, StoryObj } from "@storybook/react";

import { selectBoxGroupVariantMap } from "@seed-design/recipe/selectBoxGroup";
import { RadioSelectBoxItem, RadioSelectBoxRoot } from "seed-design/ui/select-box";

import { useState } from "react";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const Component = () => {
  const values = ["dolor", "magna", "sint"];
  const [value, setValue] = useState(values[0]);

  return (
    <RadioSelectBoxRoot value={value} onValueChange={setValue}>
      {values.map((value) => (
        <RadioSelectBoxItem key={value} value={value} label={value} description={value} />
      ))}
    </RadioSelectBoxRoot>
  );
};

const meta = {
  component: RadioSelectBoxRoot,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof RadioSelectBoxRoot>;

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
