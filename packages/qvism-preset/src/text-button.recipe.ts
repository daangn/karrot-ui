import { textButton as vars } from "@seed-design/vars/component";

import { defineRecipe } from "./helper";
import { disabled, active, pseudo } from "./pseudo";

const textButton = defineRecipe({
  name: "textButton",
  slots: ["root", "prefixIcon", "suffixIcon", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      paddingBlock: vars.base.enabled.root.paddingY,
      paddingInline: 0,

      backgroundColor: "transparent",
      boxSizing: "border-box",

      borderWidth: vars.base.enabled.root.borderWidth,
      borderColor: "transparent",
      borderStyle: "solid",

      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      [pseudo(disabled)]: {
        color: vars.base.disabled.root.color,
        cursor: "not-allowed",
      },

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
        borderColor: vars.base.pressed.root.borderColor,
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
      danger: {
        root: {
          color: vars.toneDanger.enabled.root.color,
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
