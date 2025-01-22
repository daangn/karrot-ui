import type { Meta, StoryObj } from "@storybook/react";

import {
  ChipTabs,
  ChipTabsProps,
  ChipTabTrigger,
  ChipTabTriggerList,
} from "seed-design/ui/chip-tabs";

import { chipTabsVariantMap } from "@seed-design/recipe/chipTabs";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";
import { createStoryWithParameters } from "@/stories/utils/parameters";

const Component = (props: ChipTabsProps) => {
  return (
    <ChipTabs {...props}>
      <ChipTabTriggerList>
        <ChipTabTrigger value="1">Tab 1</ChipTabTrigger>
        <ChipTabTrigger value="2">Tab 2</ChipTabTrigger>
        <ChipTabTrigger value="3">Tab 3</ChipTabTrigger>
      </ChipTabTriggerList>
    </ChipTabs>
  );
};

const meta = {
  component: ChipTabs,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ChipTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  // @ts-ignore
  args: {
    value: "1",
  },
  render: function Render(args) {
    return <VariantTable Component={Component} variantMap={chipTabsVariantMap} {...args} />;
  },
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
