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
          borderRadius: vars.sizeLarge.enabled.root.cornerRadius,
        },
        icon: {
          width: vars.sizeLarge.enabled.icon.size,
          height: vars.sizeLarge.enabled.icon.size,
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
          // XXX
          lineHeight: "24px",
        },
      },
      medium: {
        root: {
          borderRadius: vars.sizeMedium.enabled.root.cornerRadius,
        },
        icon: {
          width: vars.sizeMedium.enabled.icon.size,
          height: vars.sizeMedium.enabled.icon.size,
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          // XXX
          lineHeight: "21px",
        },
      },
      small: {
        root: {
          borderRadius: vars.sizeSmall.enabled.root.cornerRadius,
        },
        icon: {
          width: vars.sizeSmall.enabled.icon.size,
          height: vars.sizeSmall.enabled.icon.size,
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          // XXX
          lineHeight: "19px",
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
