import type { Decorator } from "@storybook/react";
import { useEffect } from "react";

const STORY_NAMES_THEMES = {
  LIGHT: "Light Theme",
  DARK: "Dark Theme",
};

const STORY_PREFIX_FONT_SCALING = "Font Scaling";

export const SeedThemeDecorator: Decorator = (Story, ctx) => {
  useEffect(() => {
    const isDarkTheme = ctx.name === STORY_NAMES_THEMES.DARK;

    document.documentElement.setAttribute("data-seed", isDarkTheme ? "dark-only" : "light-only");
    document.documentElement.setAttribute("data-seed-scale-color", isDarkTheme ? "dark" : "light");

    if (ctx.name.includes(STORY_PREFIX_FONT_SCALING)) {
      const fontScaleMap = {
        "Extra Small": "14px",
        Small: "15px",
        Medium: "16px",
        Large: "17px",
        "Extra Large": "19px",
        "Extra Extra Large": "21px",
        "Extra Extra Extra Large": "23px",
      } as const;

      const fontScale = ctx.name
        .replace(STORY_PREFIX_FONT_SCALING, "")
        .trim() as keyof typeof fontScaleMap;

      document.documentElement.style.fontSize = fontScaleMap[fontScale];

      document.documentElement.style.setProperty("--base-font-size", fontScaleMap[fontScale]);
    }
  }, [ctx.name]);

  return <Story />;
};
