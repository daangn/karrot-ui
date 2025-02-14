import { extendedFab as vars } from "@seed-design/css/vars/component";

import { defineRecipe } from "../utils/define-recipe";
import { active, disabled, focus, pseudo } from "../utils/pseudo";
import { prefixIcon } from "../utils/icon";

const extendedFab = defineRecipe({
  name: "extended-fab",
  slots: ["root"],
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
      fontFamily: "inherit",

      [pseudo(focus)]: {
        outline: "none",
      },
      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },

      borderRadius: vars.base.enabled.root.cornerRadius,
      boxShadow: vars.base.enabled.root.shadow,
    },
  },
  variants: {
    variant: {
      neutralSolid: {
        root: {
          background: vars.variantNeutralSolid.enabled.root.color,
          color: vars.variantNeutralSolid.enabled.label.color,

          [pseudo(active)]: {
            background: vars.variantNeutralSolid.pressed.root.color,
          },

          ...prefixIcon({
            color: vars.variantNeutralSolid.enabled.prefixIcon.color,
          }),
        },
      },
      layerFloating: {
        root: {
          background: vars.variantLayerFloating.enabled.root.color,
          color: vars.variantLayerFloating.enabled.label.color,

          [pseudo(active)]: {
            background: vars.variantLayerFloating.pressed.root.color,
          },

          ...prefixIcon({
            color: vars.variantLayerFloating.enabled.prefixIcon.color,
          }),
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

          fontSize: vars.sizeSmall.enabled.label.fontSize,
          lineHeight: vars.sizeSmall.enabled.label.lineHeight,
          fontWeight: vars.sizeSmall.enabled.label.fontWeight,

          ...prefixIcon({
            size: vars.sizeSmall.enabled.prefixIcon.size,
          }),
        },
      },
      medium: {
        root: {
          paddingInline: vars.sizeMedium.enabled.root.paddingX,
          paddingBlock: vars.sizeMedium.enabled.root.paddingY,
          minHeight: vars.sizeMedium.enabled.root.minHeight,
          gap: vars.sizeMedium.enabled.root.gap,

          fontSize: vars.sizeMedium.enabled.label.fontSize,
          lineHeight: vars.sizeMedium.enabled.label.lineHeight,
          fontWeight: vars.sizeMedium.enabled.label.fontWeight,

          ...prefixIcon({
            size: vars.sizeMedium.enabled.prefixIcon.size,
          }),
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
