import { reactionButton as vars } from "@seed-design/vars/component";

import { defineRecipe } from "./helper";
import { active, pressed, disabled, focus, loading, pseudo } from "./pseudo";

const reactionButton = defineRecipe({
  name: "reactionButton",
  slots: ["root", "label", "count", "prefixIcon", "progressCircle"],
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
      [pseudo(focus)]: {
        outline: "none",
      },

      transition: `background-color ${vars.base.enabled.root.colorDuration} ${vars.base.enabled.root.colorTimingFunction}`,
      background: vars.base.enabled.root.color,
      [pseudo(active)]: {
        background: vars.base.pressed.root.color,
      },
      [pseudo(pressed)]: {
        background: vars.base.selected.root.color,
        borderStyle: "solid",
        borderWidth: vars.base.selected.root.strokeWidth,
        borderColor: vars.base.selected.root.strokeColor,
      },
      [pseudo(pressed, active)]: {
        background: vars.base.selectedPressed.root.color,
      },
      [pseudo(disabled)]: {
        cursor: "not-allowed",
        background: vars.base.disabled.root.color,
      },
      [pseudo(loading)]: {
        background: vars.base.loading.root.color,
      },
      [pseudo(pressed, loading)]: {
        background: vars.base.selectedLoading.root.color,
      },
    },
    label: {
      fontWeight: vars.base.enabled.label.fontWeight,
      [pseudo(loading)]: {
        opacity: 0,
      },
    },
    count: {
      fontWeight: vars.base.enabled.count.fontWeight,
      [pseudo(loading)]: {
        opacity: 0,
      },
    },
    prefixIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",

      [pseudo(loading)]: {
        opacity: 0,
      },
    },
    progressCircle: {
      position: "absolute",
      display: "none",

      [pseudo(loading)]: {
        display: "flex",
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
        },
        label: {
          fontSize: vars.sizeXsmall.enabled.label.fontSize,
          lineHeight: vars.sizeXsmall.enabled.label.lineHeight,
        },
        count: {
          fontSize: vars.sizeXsmall.enabled.count.fontSize,
          lineHeight: vars.sizeXsmall.enabled.count.lineHeight,
        },
        prefixIcon: {
          width: vars.sizeXsmall.enabled.prefixIcon.size,
          height: vars.sizeXsmall.enabled.prefixIcon.size,
        },
        progressCircle: {
          "--size": vars.sizeXsmall.enabled.progressCircle.size,
          "--thickness": vars.sizeXsmall.enabled.progressCircle.thickness,
        },
      },
      small: {
        root: {
          height: vars.sizeSmall.enabled.root.minHeight,
          borderRadius: vars.sizeSmall.enabled.root.cornerRadius,
          gap: vars.sizeSmall.enabled.root.gap,
          paddingInline: vars.sizeSmall.enabled.root.paddingX,
          paddingBlock: vars.sizeSmall.enabled.root.paddingY,
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          lineHeight: vars.sizeSmall.enabled.label.lineHeight,
        },
        count: {
          fontSize: vars.sizeSmall.enabled.count.fontSize,
          lineHeight: vars.sizeSmall.enabled.count.lineHeight,
        },
        prefixIcon: {
          width: vars.sizeSmall.enabled.prefixIcon.size,
          height: vars.sizeSmall.enabled.prefixIcon.size,
        },
        progressCircle: {
          "--size": vars.sizeSmall.enabled.progressCircle.size,
          "--thickness": vars.sizeSmall.enabled.progressCircle.thickness,
        },
      },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export default reactionButton;
