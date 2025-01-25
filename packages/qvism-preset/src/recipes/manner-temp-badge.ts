import { mannerTempBadge as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";

const mannerTempBadge = defineRecipe({
  name: "mannerTempBadge",
  slots: ["root", "label"],
  base: {
    root: {
      display: "inline-flex",
      boxSizing: "border-box",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      textAlign: "start",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textDecoration: "none",

      borderRadius: vars.base.enabled.root.cornerRadius,
      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,
    },
    label: {
      fontSize: vars.base.enabled.label.fontSize,
      lineHeight: vars.base.enabled.label.lineHeight,
      fontWeight: vars.base.enabled.label.fontWeight,
    },
  },
  variants: {
    level: {
      l1: {
        root: {
          backgroundColor: vars.levelL1.enabled.root.color,
        },
        label: {
          color: vars.levelL1.enabled.label.color,
        },
      },
      l2: {
        root: {
          backgroundColor: vars.levelL2.enabled.root.color,
        },
        label: {
          color: vars.levelL2.enabled.label.color,
        },
      },
      l3: {
        root: {
          backgroundColor: vars.levelL3.enabled.root.color,
        },
        label: {
          color: vars.levelL3.enabled.label.color,
        },
      },
      l4: {
        root: {
          backgroundColor: vars.levelL4.enabled.root.color,
        },
        label: {
          color: vars.levelL4.enabled.label.color,
        },
      },
      l5: {
        root: {
          backgroundColor: vars.levelL5.enabled.root.color,
        },
        label: {
          color: vars.levelL5.enabled.label.color,
        },
      },
      l6: {
        root: {
          backgroundColor: vars.levelL6.enabled.root.color,
        },
        label: {
          color: vars.levelL6.enabled.label.color,
        },
      },
    },
  },
  defaultVariants: {
    level: "l1",
  },
});

export default mannerTempBadge;
