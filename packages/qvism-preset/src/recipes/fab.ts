import { fab as vars } from "@seed-design/vars/component";

import { defineRecipe } from "../utils/define-recipe";
import { active, disabled, focus, pseudo } from "../utils/pseudo";

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
      fontFamily: "inherit",
      [pseudo(focus)]: {
        outline: "none",
      },
      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },

      background: vars.base.enabled.root.color,
      borderRadius: vars.base.enabled.root.cornerRadius,
      boxShadow: vars.base.enabled.root.shadow,
      width: vars.base.enabled.root.size,
      height: vars.base.enabled.root.size,

      [pseudo(active)]: {
        background: vars.base.pressed.root.color,
      },
    },
    icon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,

      color: vars.base.enabled.icon.color,
      width: vars.base.enabled.icon.size,
      height: vars.base.enabled.icon.size,
    },
  },
  variants: {},
  defaultVariants: {},
});

export default fab;
