import type { Meta, StoryObj } from "@storybook/react";

import { SelectBoxRadio, SelectBoxRadioGroup } from "seed-design/ui/select-box";
import { selectBoxGroupVariantMap } from "@seed-design/recipe/selectBoxGroup";

import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";
import { useState } from "react";

const Component = () => {
  const values = ["dolor", "magna", "sint"];
  const [value, setValue] = useState(values[0]);

  return (
    <SelectBoxRadioGroup value={value} onValueChange={setValue}>
      {values.map((value) => (
        <SelectBoxRadio key={value} value={value} label={value} description={value} />
      ))}
    </SelectBoxRadioGroup>
  );
};

const meta = {
  component: SelectBoxRadioGroup,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof SelectBoxRadioGroup>;

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
