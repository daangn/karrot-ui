import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarStack } from "seed-design/ui/avatar";

import { avatarStackVariantMap } from "@seed-design/recipe/avatarStack";
import { SeedThemeDecorator } from "./components/decorator";
import { VariantTable } from "./components/variant-table";
import { createStoryWithParameters } from "@/stories/utils/parameters";

const meta = {
  component: AvatarStack,
  decorators: [SeedThemeDecorator],
} satisfies Meta<typeof AvatarStack>;

export default meta;

const ENCODED_IMAGE =
  "data:image/jpeg;base64,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";

type Story = StoryObj<typeof meta>;

const CommonStoryTemplate: Story = {
  args: {},
  render: (args) => (
    <VariantTable Component={meta.component} variantMap={avatarStackVariantMap} {...args}>
      <Avatar src={ENCODED_IMAGE} />
      <Avatar src={ENCODED_IMAGE} />
      <Avatar src={ENCODED_IMAGE} />
      <Avatar src={ENCODED_IMAGE} />
    </VariantTable>
  ),
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
