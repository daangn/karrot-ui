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

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
        borderColor: vars.base.pressed.root.borderColor,
      },
      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },
    },
    icon: {
      [pseudo(disabled)]: {
        color: vars.base.disabled.icon.color,
      },
    },
    label: {
      textAlign: "center",

      fontWeight: vars.base.enabled.label.fontWeight,
      [pseudo(disabled)]: {
        color: vars.base.disabled.label.color,
      },
    },
  },
  variants: {
    variant: {
      brand: {
        icon: {
          color: vars.variantBrand.enabled.icon.color,
        },
        label: {
          color: vars.variantBrand.enabled.label.color,
        },
      },
      neutral: {
        icon: {
          color: vars.variantNeutral.enabled.icon.color,
        },
        label: {
          color: vars.variantNeutral.enabled.label.color,
        },
      },
      neutralSubtle: {
        icon: {
          color: vars.variantNeutralSubtle.enabled.icon.color,
        },
        label: {
          color: vars.variantNeutralSubtle.enabled.label.color,
        },
        danger: {
          icon: {
            color: vars.variantDanger.enabled.icon.color,
          },
          label: {
            color: vars.variantDanger.enabled.label.color,
          },
        },
      },
      danger: {
        icon: {
          color: vars.variantDanger.enabled.icon.color,
        },
        label: {
          color: vars.variantDanger.enabled.label.color,
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
          // XXX
          lineHeight: "1.5rem",
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
          // XXX
          lineHeight: "1.3125rem",
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
          // XXX
          lineHeight: "1.1875rem",
        },
      },
    },
  },
  defaultVariants: {
    variant: "brand",
    size: "medium",
  },
});

export default textButton;
