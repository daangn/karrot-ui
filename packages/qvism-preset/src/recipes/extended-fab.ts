import { extendedFab as vars } from "@seed-design/vars/component";

import { defineRecipe } from "../utils/define-recipe";
import { active, disabled, focus, pseudo } from "../utils/pseudo";

const extendedFab = defineRecipe({
  name: "extendedFab",
  slots: ["root", "label", "prefixIcon"],
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
      flexShrink: 0,

      [pseudo(focus)]: {
        outline: "none",
      },
      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },

      borderRadius: vars.base.enabled.root.cornerRadius,
      boxShadow: vars.base.enabled.root.shadow,
    },
    prefixIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
  },
  variants: {
    variant: {
      neutralSolid: {
        root: {
          background: vars.variantNeutralSolid.enabled.root.color,

          [pseudo(active)]: {
            background: vars.variantNeutralSolid.pressed.root.color,
          },
        },
        label: {
          color: vars.variantNeutralSolid.enabled.label.color,
        },
        prefixIcon: {
          color: vars.variantNeutralSolid.enabled.prefixIcon.color,
        },
      },
      layerFloating: {
        root: {
          background: vars.variantLayerFloating.enabled.root.color,

          [pseudo(active)]: {
            background: vars.variantLayerFloating.pressed.root.color,
          },
        },
        label: {
          color: vars.variantLayerFloating.enabled.label.color,
        },
        prefixIcon: {
          color: vars.variantLayerFloating.enabled.prefixIcon.color,
        },
      },
    },
    size: {
      small: {
        root: {
          paddingInline: vars.sizeSmall.enabled.root.paddingX,
          paddingBlock: vars.sizeSmall.enabled.root.paddingY,
          minHeight: vars.sizeSmall.enabled.root.minHeight,
          gap: vars.sizeSmall.enabled.root.gap,
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          lineHeight: vars.sizeSmall.enabled.label.lineHeight,
          fontWeight: vars.sizeSmall.enabled.label.fontWeight,
        },
        prefixIcon: {
          width: vars.sizeSmall.enabled.prefixIcon.size,
          height: vars.sizeSmall.enabled.prefixIcon.size,
        },
      },
      medium: {
        root: {
          paddingInline: vars.sizeMedium.enabled.root.paddingX,
          paddingBlock: vars.sizeMedium.enabled.root.paddingY,
          minHeight: vars.sizeMedium.enabled.root.minHeight,
          gap: vars.sizeMedium.enabled.root.gap,
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          lineHeight: vars.sizeMedium.enabled.label.lineHeight,
          fontWeight: vars.sizeMedium.enabled.label.fontWeight,
        },
        prefixIcon: {
          width: vars.sizeMedium.enabled.prefixIcon.size,
          height: vars.sizeMedium.enabled.prefixIcon.size,
        },
      },
    },
  },
  defaultVariants: {
    variant: "neutralSolid",
    size: "medium",
  },
});

export default extendedFab;
