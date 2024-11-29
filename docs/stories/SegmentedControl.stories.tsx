import type { Meta, StoryObj } from "@storybook/react";

import {
  SegmentedControl,
  SegmentedControlTrigger,
  type SegmentedControlProps,
} from "seed-design/ui/segmented-control";

import { segmentedControlVariantMap } from "@seed-design/recipe/segmentedControl";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";
import { useState } from "react";

const Component = () => {
  const values = ["dolor", "magna", "sint"];
  const [value, setValue] = useState(values[0]);

  return (
    <SegmentedControl value={value} onValueChange={setValue}>
      {values.map((value) => (
        <SegmentedControlTrigger key={value} value={value}>
          {value}
        </SegmentedControlTrigger>
      ))}
    </SegmentedControl>
  );
};

const meta = {
  component: SegmentedControl,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    defaultValue: "1",
  },
  render: function Render(args) {
    return <VariantTable Component={Component} variantMap={segmentedControlVariantMap} {...args} />;
  },
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
