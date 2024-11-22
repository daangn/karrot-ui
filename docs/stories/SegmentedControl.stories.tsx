import type { Meta, StoryObj } from "@storybook/react";

import {
  SegmentedControl,
  SegmentedControlOption,
  type SegmentedControlProps,
} from "seed-design/ui/segmented-control";

import { segmentedControlVariantMap } from "@seed-design/recipe/segmentedControl";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const Component = (props: SegmentedControlProps) => {
  return (
    <SegmentedControl {...props}>
      <SegmentedControlOption value="1">Tab 1</SegmentedControlOption>
      <SegmentedControlOption value="2">Tab 2</SegmentedControlOption>
      <SegmentedControlOption value="3">Tab 3</SegmentedControlOption>
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
    value: "1",
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
