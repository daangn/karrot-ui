import type { Meta, StoryObj } from "@storybook/react";

import { InlineBanner } from "seed-design/ui/inline-banner";

import { IconAUppercaseALowercaseLine } from "@daangn/react-monochrome-icon";

const meta = {
  component: InlineBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof InlineBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: "This is a title",
    tone: "danger",
    prefixIcon: <IconAUppercaseALowercaseLine />,
  },
};
