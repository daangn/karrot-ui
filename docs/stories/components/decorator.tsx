import type { Decorator } from "@storybook/react";

const STORY_LIGHT_THEME = "Light Theme";
const STORY_DARK_THEME = "Dark Theme";

const FONT_SCALING = "Font Scaling";

export const SeedThemeDecorator: Decorator = (Story, ctx) => {
  if (ctx.name === STORY_LIGHT_THEME) {
    return (
      <html
        lang="ko"
        data-seed="light-only"
        data-seed-scale-color="light"
        data-seed-scale-letter-spacing="ios"
        style={{ display: "flex", flexDirection: "column", padding: "0 20px" }}
      >
        <Story />
      </html>
    );
  }

  if (ctx.name === STORY_DARK_THEME) {
    return (
      <html
        lang="ko"
        data-seed="dark-only"
        data-seed-scale-color="dark"
        data-seed-scale-letter-spacing="ios"
        style={{ display: "flex", flexDirection: "column", padding: "0 20px" }}
      >
        <Story />
      </html>
    );
  }

  if (ctx.name.includes(FONT_SCALING)) {
    const fontScaleMap = {
      "Extra Small": "0.875rem",
      Small: "0.9375rem",
      Medium: "1rem",
      Large: "1.0625rem",
      "Extra Large": "1.1875rem",
      "Extra Extra Large": "1.3125rem",
      "Extra Extra Extra Large": "1.4375rem",
    } as const;

    const fontScale = ctx.name.replace(FONT_SCALING, "").trim() as keyof typeof fontScaleMap;

    return (
      <html
        lang="ko"
        data-seed="light-only"
        data-seed-scale-color="light"
        data-seed-scale-letter-spacing="ios"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 20px",
          fontSize: fontScaleMap[fontScale],
        }}
      >
        <Story />
      </html>
    );
  }

  return (
    <html
      lang="ko"
      data-seed="light-only"
      data-seed-scale-color="light"
      data-seed-scale-letter-spacing="ios"
    >
      <Story />
    </html>
  );
};
