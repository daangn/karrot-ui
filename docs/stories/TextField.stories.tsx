import type { Meta, StoryObj } from "@storybook/react";

import { TextField, TextFieldInput } from "seed-design/ui/text-field";

import { IconPaperplaneLine } from "@daangn/react-monochrome-icon";
import { textFieldVariantMap } from "@seed-design/recipe/textField";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";

const meta = {
  component: TextField,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

const conditionMap = {
  disabled: {
    false: {
      disabled: false,
    },
    true: {
      disabled: true,
    },
  },
  readOnly: {
    false: {
      readOnly: false,
    },
    true: {
      readOnly: true,
    },
  },
  invalid: {
    false: {
      invalid: false,
    },
    true: {
      invalid: true,
    },
  },
};

const CommonStoryTemplate: Story = {
  args: {
    label: "Label",
    description:
      "Sint pariatur labore et elit dolore sunt velit incididunt nisi laboris cillum et dolore ad ullamco.",
    errorMessage: "Error message",
    prefixIcon: <IconPaperplaneLine />,
    suffix: "Suffix",
    maxGraphemeCount: 10,
    children: <TextFieldInput placeholder="Placeholder" />,
  },
  render: (args) => (
    <VariantTable
      Component={meta.component}
      variantMap={textFieldVariantMap}
      conditionMap={conditionMap}
      {...args}
    />
  ),
};

export const LightTheme = CommonStoryTemplate;

export const DarkTheme = CommonStoryTemplate;

export const FontScalingExtraSmall = CommonStoryTemplate;

export const FontScalingExtraExtraExtraLarge = CommonStoryTemplate;
