import { textButton as vars } from "@seed-design/vars/component";

import { defineRecipe } from "../utils/define-recipe";
import { disabled, active, pseudo } from "../utils/pseudo";

const textButton = defineRecipe({
  name: "text-button",
  slots: ["root", "prefixIcon", "suffixIcon", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      backgroundColor: "transparent",
      boxSizing: "border-box",
      border: "none",
      outline: "none",

      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      fontFamily: "inherit",

      paddingInline: 0,
      paddingBlock: vars.base.enabled.root.paddingY,

      [pseudo(disabled)]: {
        color: vars.base.disabled.root.color,
        cursor: "not-allowed",
      },

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
        // we use boxShadow instead of border to avoid layout shift
        boxShadow: `0 0 0 2px ${vars.base.pressed.root.color}`, // TODO: move 2px to rootage
      },

      [pseudo(disabled, active)]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
    },
    label: {
      textAlign: "center",

      fontWeight: vars.base.enabled.label.fontWeight,
    },
    prefixIcon: {
      marginInlineEnd: vars.base.enabled.prefixIcon.marginXEnd,
    },
    suffixIcon: {
      marginInlineStart: vars.base.enabled.suffixIcon.marginXStart,
    },
  },
  defaultVariants: {
    tone: "brand",
    size: "medium",
  },
  variants: {
    tone: {
      brand: {
        root: {
          color: vars.toneBrand.enabled.root.color,
        },
      },
      neutral: {
        root: {
          color: vars.toneNeutral.enabled.root.color,
        },
      },
      neutralSubtle: {
        root: {
          color: vars.toneNeutralSubtle.enabled.root.color,
        },
      },
      critical: {
        root: {
          color: vars.toneCritical.enabled.root.color,
        },
      },
    },
    size: {
      large: {
        root: {
          minHeight: "2rem",
          borderRadius: vars.sizeLarge.enabled.root.cornerRadius,
        },
        prefixIcon: {
          width: vars.sizeLarge.enabled.prefixIcon.size,
          height: vars.sizeLarge.enabled.prefixIcon.size,
        },
        suffixIcon: {
          width: vars.sizeLarge.enabled.suffixIcon.size,
          height: vars.sizeLarge.enabled.suffixIcon.size,
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
          lineHeight: vars.sizeLarge.enabled.label.lineHeight,
        },
      },
      medium: {
        root: {
          minHeight: "1.875rem",
          borderRadius: vars.sizeMedium.enabled.root.cornerRadius,
        },
        prefixIcon: {
          width: vars.sizeMedium.enabled.prefixIcon.size,
          height: vars.sizeMedium.enabled.prefixIcon.size,
        },
        suffixIcon: {
          width: vars.sizeMedium.enabled.suffixIcon.size,
          height: vars.sizeMedium.enabled.suffixIcon.size,
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          lineHeight: vars.sizeMedium.enabled.label.lineHeight,
        },
      },
      small: {
        root: {
          minHeight: "1.75rem",
          borderRadius: vars.sizeSmall.enabled.root.cornerRadius,
        },
        prefixIcon: {
          width: vars.sizeSmall.enabled.prefixIcon.size,
          height: vars.sizeSmall.enabled.prefixIcon.size,
        },
        suffixIcon: {
          width: vars.sizeSmall.enabled.suffixIcon.size,
          height: vars.sizeSmall.enabled.suffixIcon.size,
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          lineHeight: vars.sizeSmall.enabled.label.lineHeight,
        },
      },
    },
  },
});

export default textButton;
