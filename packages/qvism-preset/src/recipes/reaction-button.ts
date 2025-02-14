import { reactionButton as vars } from "@seed-design/css/vars/component";

import { defineRecipe } from "../utils/define-recipe";
import { prefixIcon } from "../utils/icon";
import { active, disabled, focus, loading, pressed, pseudo } from "../utils/pseudo";
import { count } from "../utils/count";

const reactionButton = defineRecipe({
  name: "reaction-button",
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

      transition: `background-color ${vars.base.enabled.root.colorDuration} ${vars.base.enabled.root.colorTimingFunction}`,
      background: vars.base.enabled.root.color,
      fontWeight: vars.base.enabled.label.fontWeight,
      color: vars.base.enabled.label.color,

      "--track-color": vars.base.enabled.progressCircle.trackColor,
      "--range-color": vars.base.enabled.progressCircle.rangeColor,

      ...count({
        lineHeight: 1,
        fontWeight: vars.base.enabled.count.fontWeight,
        color: vars.base.enabled.count.color,
      }),

      [pseudo(active)]: {
        background: vars.base.pressed.root.color,
      },
      [pseudo(pressed)]: {
        background: vars.base.selected.root.color,
        color: vars.base.selected.label.color,
        boxShadow: `inset 0 0 0 ${vars.base.selected.root.strokeWidth} ${vars.base.selected.root.strokeColor}`,

        ...prefixIcon({
          color: vars.base.selected.prefixIcon.color,
        }),
        ...count({
          color: vars.base.selected.count.color,
        }),
      },
      [pseudo(pressed, active)]: {
        background: vars.base.selectedPressed.root.color,
      },
      [pseudo(disabled)]: {
        cursor: "not-allowed",
        background: vars.base.disabled.root.color,
        color: vars.base.disabled.label.color,
        boxShadow: `inset 0 0 0 ${vars.base.disabled.root.strokeWidth} ${vars.base.selected.root.strokeColor}`,

        ...prefixIcon({
          color: vars.base.disabled.prefixIcon.color,
        }),
        ...count({
          color: vars.base.disabled.count.color,
        }),
      },
      [pseudo(loading)]: {
        background: vars.base.loading.root.color,
      },
      [pseudo(pressed, loading)]: {
        background: vars.base.selectedLoading.root.color,
        boxShadow: `inset 0 0 0 ${vars.base.selectedLoading.root.strokeWidth} ${vars.base.selected.root.strokeColor}`,

        "--track-color": vars.base.selected.progressCircle.trackColor,
        "--range-color": vars.base.selected.progressCircle.rangeColor,
      },
    },
  },
  variants: {
    size: {
      xsmall: {
        root: {
          height: vars.sizeXsmall.enabled.root.minHeight,
          borderRadius: vars.sizeXsmall.enabled.root.cornerRadius,
          gap: vars.sizeXsmall.enabled.root.gap,
          paddingInline: vars.sizeXsmall.enabled.root.paddingX,
          paddingBlock: vars.sizeXsmall.enabled.root.paddingY,
          fontSize: vars.sizeXsmall.enabled.label.fontSize,
          lineHeight: vars.sizeXsmall.enabled.label.lineHeight,

          "--size": vars.sizeXsmall.enabled.progressCircle.size,
          "--thickness": vars.sizeXsmall.enabled.progressCircle.thickness,

          ...prefixIcon({
            size: vars.sizeXsmall.enabled.prefixIcon.size,
          }),
          ...count({
            fontSize: vars.sizeXsmall.enabled.count.fontSize,
            lineHeight: vars.sizeXsmall.enabled.count.lineHeight,
          }),
        },
      },
      small: {
        root: {
          height: vars.sizeSmall.enabled.root.minHeight,
          borderRadius: vars.sizeSmall.enabled.root.cornerRadius,
          gap: vars.sizeSmall.enabled.root.gap,
          paddingInline: vars.sizeSmall.enabled.root.paddingX,
          paddingBlock: vars.sizeSmall.enabled.root.paddingY,
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          lineHeight: vars.sizeSmall.enabled.label.lineHeight,

          "--size": vars.sizeSmall.enabled.progressCircle.size,
          "--thickness": vars.sizeSmall.enabled.progressCircle.thickness,

          ...prefixIcon({
            size: vars.sizeSmall.enabled.prefixIcon.size,
          }),
          ...count({
            fontSize: vars.sizeSmall.enabled.count.fontSize,
            lineHeight: vars.sizeSmall.enabled.count.lineHeight,
          }),
        },
      },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export default reactionButton;
