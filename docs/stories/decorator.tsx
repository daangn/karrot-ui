import type { Decorator } from "@storybook/react";

const STORY_LIGHT_THEME = "Light Theme";
// const STORY_DARK_THEME = "Dark Theme";

export const SeedThemeDecorator: Decorator = (Story, ctx) => {
  if (ctx.name === STORY_LIGHT_THEME) {
    return (
      <html
        lang="ko"
        data-seed="light-only"
        data-seed-scale-color="light"
        data-seed-scale-letter-spacing="ios"
        style={{ display: "flex", flexDirection: "column", gap: 16, flexWrap: "wrap" }}
      >
        <Story />
      </html>
    );
  }

  return (
    <html
      lang="ko"
      data-seed="dark-only"
      data-seed-scale-color="dark"
      data-seed-scale-letter-spacing="ios"
      style={{ display: "flex", flexDirection: "column", gap: 16, flexWrap: "wrap" }}
    >
      <Story />
    </html>
  );
};
