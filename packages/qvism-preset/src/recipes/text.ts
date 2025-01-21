import { typography as vars } from "@seed-design/vars/component";

import { defineRecipe } from "../utils/define-recipe";

const uncapitalize = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

type OmitTypePrefix<T> = T extends `type${infer U}` ? U : never;

const text = defineRecipe({
  name: "text",
  slots: ["root"],
  base: {
    root: {
      margin: 0,
      textAlign: "var(--seed-text-align)",
      color: "var(--seed-text-color)",
      fontSize: "var(--seed-font-size)",
      lineHeight: "var(--seed-line-height)",
      fontWeight: "var(--seed-font-weight)",
      "--seed-text-color": "inherit",
      "--seed-font-size": "inherit",
      "--seed-line-height": "inherit",
      "--seed-font-weight": "inherit",
      "--seed-text-align": "inherit",
      "--seed-max-lines": "initial",
    },
  },
  variants: {
    variant: Object.fromEntries(
      Object.entries(vars).map(([key, value]) => [
        uncapitalize(key.split("type")[1]),
        {
          root: {
            "--seed-font-size": value.enabled.root.fontSize,
            "--seed-line-height": value.enabled.root.lineHeight,
            "--seed-font-weight": value.enabled.root.fontWeight,
          },
        },
      ]),
    ) as Record<Uncapitalize<OmitTypePrefix<keyof typeof vars>>, unknown>,
    maxLines: {
      none: {
        root: {
          display: "unset",
          overflow: "unset",
          minWidth: "unset",
          textOverflow: "unset",
          whiteSpace: "unset",
          WebkitLineClamp: "unset",
        },
      },
      single: {
        root: {
          display: "block",
          overflow: "hidden",
          minWidth: 0,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          WebkitLineClamp: "var(--seed-max-lines)",
        },
      },
      multi: {
        root: {
          display: "-webkit-box",
          overflow: "hidden",
          minWidth: 0,
          textOverflow: "ellipsis",
          whiteSpace: "initial",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "var(--seed-max-lines)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "bodyMediumDefault",
    maxLines: "none",
  },
});

export default text;
