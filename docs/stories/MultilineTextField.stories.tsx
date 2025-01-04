import type { Meta, StoryObj } from "@storybook/react";

import { TextField, TextFieldTextarea } from "seed-design/ui/text-field";

import { textFieldVariantMap } from "@seed-design/recipe/textField";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: TextField,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {
    label: "Label",
    description:
      "Sint pariatur labore et elit dolore sunt velit incididunt nisi laboris cillum et dolore ad ullamco.",
    errorMessage: "Error message",
    maxGraphemeCount: 10,
    children: <TextFieldTextarea placeholder="Placeholder" />,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={textFieldVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
