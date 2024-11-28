import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "seed-design/ui/text-field";

import { textFieldVariantMap } from "@seed-design/recipe/textField";
import { VariantTable } from "./components/variant-table";
import { SeedThemeDecorator } from "./components/decorator";
import { IconPaperplaneLine } from "@daangn/react-monochrome-icon";

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
    placeholder: "Placeholder",
    prefix: <IconPaperplaneLine />,
    suffix: "Suffix",
    maxGraphemeCount: 10,
  },
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={textFieldVariantMap} {...args} />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
