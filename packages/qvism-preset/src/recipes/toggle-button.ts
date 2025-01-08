import { toggleButton as vars } from "@seed-design/vars/component";

import { defineRecipe } from "../utils/define-recipe";
import { active, pressed, disabled, focus, loading, pseudo } from "../utils/pseudo";

const toggleButton = defineRecipe({
  name: "toggleButton",
  slots: ["root", "label", "prefixIcon", "suffixIcon", "progressCircle"],
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

      transition: `background-color ${vars.base.enabled.root.colorDuration} ${vars.base.enabled.root.colorTimingFunction}`,
    },
    label: {
      fontWeight: vars.base.enabled.label.fontWeight,

      [pseudo(loading)]: {
        opacity: 0,
      },
    },
    prefixIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,

      [pseudo(loading)]: {
        opacity: 0,
      },
    },
    suffixIcon: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,

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
    variant: {
      brandSolid: {
        root: {
          background: vars.variantBrandSolid.enabled.root.color,
          [pseudo(active)]: {
            background: vars.variantBrandSolid.pressed.root.color,
          },
          [pseudo(pressed)]: {
            background: vars.variantBrandSolid.selected.root.color,
          },
          [pseudo(pressed, active)]: {
            background: vars.variantBrandSolid.selectedPressed.root.color,
          },
          [pseudo(disabled)]: {
            background: vars.variantBrandSolid.disabled.root.color,
          },
          [pseudo(loading)]: {
            background: vars.variantBrandSolid.loading.root.color,
          },
          [pseudo(pressed, loading)]: {
            background: vars.variantBrandSolid.selectedLoading.root.color,
          },
        },
        label: {
          color: vars.variantBrandSolid.enabled.label.color,
          [pseudo(pressed)]: {
            color: vars.variantBrandSolid.selected.label.color,
          },
          [pseudo(disabled)]: {
            color: vars.variantBrandSolid.disabled.label.color,
          },
        },
        prefixIcon: {
          color: vars.variantBrandSolid.enabled.prefixIcon.color,
          [pseudo(pressed)]: {
            color: vars.variantBrandSolid.selected.prefixIcon.color,
          },
          [pseudo(disabled)]: {
            color: vars.variantBrandSolid.disabled.prefixIcon.color,
          },
        },
        suffixIcon: {
          color: vars.variantBrandSolid.enabled.suffixIcon.color,
          [pseudo(pressed)]: {
            color: vars.variantBrandSolid.selected.suffixIcon.color,
          },
          [pseudo(disabled)]: {
            color: vars.variantBrandSolid.disabled.suffixIcon.color,
          },
        },
        progressCircle: {
          "--track-color": vars.variantBrandSolid.enabled.progressCircle.trackColor,
          "--range-color": vars.variantBrandSolid.enabled.progressCircle.rangeColor,
          [pseudo(pressed)]: {
            "--track-color": vars.variantBrandSolid.selected.progressCircle.trackColor,
            "--range-color": vars.variantBrandSolid.selected.progressCircle.rangeColor,
          },
        },
      },
      neutralWeak: {
        root: {
          background: vars.variantNeutralWeak.enabled.root.color,
          [pseudo(active)]: {
            background: vars.variantNeutralWeak.pressed.root.color,
          },
          [pseudo(pressed)]: {
            background: vars.variantNeutralWeak.selected.root.color,
          },
          [pseudo(pressed, active)]: {
            background: vars.variantNeutralWeak.selectedPressed.root.color,
          },
          [pseudo(disabled)]: {
            background: vars.variantNeutralWeak.disabled.root.color,
          },
          [pseudo(loading)]: {
            background: vars.variantNeutralWeak.loading.root.color,
          },
          [pseudo(pressed, loading)]: {
            background: vars.variantNeutralWeak.selectedLoading.root.color,
          },
        },
        label: {
          color: vars.variantNeutralWeak.enabled.label.color,
          [pseudo(pressed)]: {
            color: vars.variantNeutralWeak.selected.label.color,
          },
          [pseudo(disabled)]: {
            color: vars.variantNeutralWeak.disabled.label.color,
          },
        },
        prefixIcon: {
          color: vars.variantNeutralWeak.enabled.prefixIcon.color,
          [pseudo(pressed)]: {
            color: vars.variantNeutralWeak.selected.prefixIcon.color,
          },
          [pseudo(disabled)]: {
            color: vars.variantNeutralWeak.disabled.prefixIcon.color,
          },
        },
        suffixIcon: {
          color: vars.variantNeutralWeak.enabled.suffixIcon.color,
          [pseudo(pressed)]: {
            color: vars.variantNeutralWeak.selected.suffixIcon.color,
          },
          [pseudo(disabled)]: {
            color: vars.variantNeutralWeak.disabled.suffixIcon.color,
          },
        },
        progressCircle: {
          "--track-color": vars.variantNeutralWeak.enabled.progressCircle.trackColor,
          "--range-color": vars.variantNeutralWeak.enabled.progressCircle.rangeColor,
          [pseudo(pressed)]: {
            "--track-color": vars.variantNeutralWeak.selected.progressCircle.trackColor,
            "--range-color": vars.variantNeutralWeak.selected.progressCircle.rangeColor,
          },
        },
      },
    },
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
        },
        prefixIcon: {
          width: vars.sizeXsmall.enabled.prefixIcon.size,
          height: vars.sizeXsmall.enabled.prefixIcon.size,
        },
        suffixIcon: {
          width: vars.sizeXsmall.enabled.suffixIcon.size,
          height: vars.sizeXsmall.enabled.suffixIcon.size,
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
        },
        prefixIcon: {
          width: vars.sizeSmall.enabled.prefixIcon.size,
          height: vars.sizeSmall.enabled.prefixIcon.size,
        },
        suffixIcon: {
          width: vars.sizeSmall.enabled.suffixIcon.size,
          height: vars.sizeSmall.enabled.suffixIcon.size,
        },
        progressCircle: {
          "--size": vars.sizeSmall.enabled.progressCircle.size,
          "--thickness": vars.sizeSmall.enabled.progressCircle.thickness,
        },
      },
    },
  },
  defaultVariants: {
    variant: "brandSolid",
    size: "small",
  },
});

export default toggleButton;
