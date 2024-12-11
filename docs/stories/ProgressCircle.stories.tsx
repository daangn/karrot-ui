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

const IndeterminateTemplate: Story = {
  args: {},
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={progressCircleVariantMap} {...args} />
  ),
};

const Determinate0Template: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={progressCircleVariantMap} {...args} />
  ),
};

const Determinate50Template: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={progressCircleVariantMap} {...args} />
  ),
};

const Determinate100Template: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={progressCircleVariantMap} {...args} />
  ),
};

export const IndeterminateLightTheme = IndeterminateTemplate;

export const IndeterminateDarkTheme = IndeterminateTemplate;

export const Determinate0LightTheme = Determinate0Template;

export const Determinate0DarkTheme = Determinate0Template;

export const Determinate50LightTheme = Determinate50Template;

export const Determinate50DarkTheme = Determinate50Template;

export const Determinate100LightTheme = Determinate100Template;

export const Determinate100DarkTheme = Determinate100Template;
