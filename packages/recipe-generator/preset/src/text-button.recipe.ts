import { textButton as vars } from "@seed-design/vars/component";

import { defineRecipe } from "./helper";
import { disabled, active, pseudo } from "./pseudo";

const textButton = defineRecipe({
  name: "textButton",
  slots: ["root", "icon", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      paddingBlock: vars.base.enabled.root.paddingY,
      gap: vars.base.enabled.root.gap,

      borderWidth: vars.base.enabled.root.borderWidth,
      borderColor: "transparent",

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
  },
  defaultVariants: {
    variant: "brand",
    size: "medium",
  },
  variants: {
    variant: {
      brand: {
        root: {
          color: vars.variantBrand.enabled.root.color,
        },
      },
      neutral: {
        root: {
          color: vars.variantNeutral.enabled.root.color,
        },
      },
      neutralSubtle: {
        root: {
          color: vars.variantNeutralSubtle.enabled.root.color,
        },
      },
      danger: {
        root: {
          color: vars.variantDanger.enabled.root.color,
        },
      },
    },
    size: {
      large: {
        root: {
          minHeight: "2rem",
          borderRadius: vars.sizeLarge.enabled.root.cornerRadius,
        },
        icon: {
          width: vars.sizeLarge.enabled.icon.size,
          height: vars.sizeLarge.enabled.icon.size,
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
        icon: {
          width: vars.sizeMedium.enabled.icon.size,
          height: vars.sizeMedium.enabled.icon.size,
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
        icon: {
          width: vars.sizeSmall.enabled.icon.size,
          height: vars.sizeSmall.enabled.icon.size,
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
