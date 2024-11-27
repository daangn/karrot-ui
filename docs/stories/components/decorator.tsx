import type { Decorator } from "@storybook/react";
import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

const STORY_LIGHT_THEME = "Light Theme";
const STORY_DARK_THEME = "Dark Theme";

const FONT_SCALING = "Font Scaling";

const DEFAULT_PROPERTIES: DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHtmlElement>,
  HTMLHtmlElement
> & {
  [key: string]: unknown;
} = {
  lang: "ko",
  "data-seed-scale-letter-spacing": "ios",
  style: {
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  },
};

export const SeedThemeDecorator: Decorator = (Story, ctx) => {
  if (ctx.name === STORY_LIGHT_THEME) {
    return (
      <html {...DEFAULT_PROPERTIES} data-seed="light-only" data-seed-scale-color="light">
        <body>
          <Story />
        </body>
      </html>
    );
  }

  if (ctx.name === STORY_DARK_THEME) {
    return (
      <html {...DEFAULT_PROPERTIES} data-seed="dark-only" data-seed-scale-color="dark">
        <body>
          <Story />
        </body>
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
        {...DEFAULT_PROPERTIES}
        data-seed="light-only"
        data-seed-scale-color="light"
        style={{ ...DEFAULT_PROPERTIES.style, fontSize: fontScaleMap[fontScale] }}
      >
        <body>
          <Story />
        </body>
      </html>
    );
  }

  return (
    <html {...DEFAULT_PROPERTIES} data-seed="light-only" data-seed-scale-color="light">
      <body>
        <Story />
      </body>
    </html>
  );
};
