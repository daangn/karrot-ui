import { fab as vars } from "@seed-design/vars/component";

import { defineRecipe } from "./helper";
import { disabled, focus, pseudo } from "./pseudo";

const fab = defineRecipe({
  name: "fab",
  slots: ["root", "icon"],
  base: {
    root: {
      display: "inline-flex",
      boxSizing: "border-box",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      border: "none",
      textTransform: "none",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textDecoration: "none",
      [pseudo(focus)]: {
        outline: "none",
      },
      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },

      background: vars.base.enabled.root.color,
      borderRadius: vars.base.enabled.root.cornerRadius,
    },
    icon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  variants: {
    size: {
      small: {
        root: {
          width: vars.sizeSmall.enabled.root.size,
          height: vars.sizeSmall.enabled.root.size,
        },
      },
      medium: {
        root: {
          width: vars.sizeMedium.enabled.root.size,
          height: vars.sizeMedium.enabled.root.size,
        },
      },
    },
  },

  defaultVariants: {
    size: "medium",
  },
});

export default fab;
