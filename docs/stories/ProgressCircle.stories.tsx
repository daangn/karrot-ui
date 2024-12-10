import type { Meta, StoryObj } from "@storybook/react";

import { ProgressCircle } from "seed-design/ui/progress-circle";

import { progressCircleVariantMap } from "@seed-design/recipe/progressCircle";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: ProgressCircle,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof ProgressCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

const StoryTemplate: Story = {
  args: {},
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={progressCircleVariantMap} {...args} />
  ),
};

export const LightTheme = StoryTemplate;

export const DarkTheme = StoryTemplate;
