import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

export const inlineBanner = defineRecipe({
  name: "inlineBanner",
  slots: ["root", "content", "prefixIcon", "label", "actionLabel", "dismissButton", "xIcon"],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: vars.base.enabled.root.gap,

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,
    },
    content: {
      display: "flex",
      alignItems: "start",
      gap: vars.base.enabled.content.gap,
    },
    prefixIcon: {
      flex: "none",

      marginBlock: vars.base.enabled.prefixIcon.marginY,

      width: vars.base.enabled.prefixIcon.size,
      height: vars.base.enabled.prefixIcon.size,
    },
    label: {
      fontSize: vars.base.enabled.label.fontSize,
      fontWeight: vars.base.enabled.label.fontWeight,
      // FIXME
      lineHeight: "19px",
    },
    actionLabel: {
      flex: "none",

      fontSize: vars.base.enabled.actionLabel.fontSize,
      fontWeight: vars.base.enabled.actionLabel.fontWeight,
      lineHeight: "16px",

      textDecoration: "underline",
      // XXX
      textUnderlineOffset: "2px",
    },
    dismissButton: {
      flex: "none",
    },
    xIcon: {
      width: vars.base.enabled.xIcon.size,
      height: vars.base.enabled.xIcon.size,
    },
  },
  variants: {
    variant: {
      solid: {
        prefixIcon: {
          color: vars.variantSolid.enabled.prefixIcon.color,
        },
        label: {
          color: vars.variantSolid.enabled.label.color,
        },
        actionLabel: {
          color: vars.variantSolid.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.variantSolid.enabled.xIcon.color,
        },
      },
      weak: {},
    },
    tone: {
      neutral: {},
      positive: {},
      informative: {},
      warning: {},
      danger: {
        root: {
          position: "sticky",
          top: 0,
        },
      },
    },
  },
  defaultVariants: {
    tone: "neutral",
    variant: "weak",
  },
  compoundVariants: [
    {
      variant: "solid",
      tone: "neutral",
      css: {
        root: {
          backgroundColor: vars.variantSolidToneNeutral.enabled.root.color,
        },
      },
    },
    {
      variant: "solid",
      tone: "positive",
      css: {
        root: {
          backgroundColor: vars.variantSolidTonePositive.enabled.root.color,
        },
      },
    },
    {
      variant: "solid",
      tone: "informative",
      css: {
        root: {
          backgroundColor: vars.variantSolidToneInformative.enabled.root.color,
        },
      },
    },
    {
      variant: "solid",
      tone: "warning",
      css: {
        root: {
          backgroundColor: vars.variantSolidToneWarning.enabled.root.color,
        },
      },
    },
    {
      variant: "solid",
      tone: "danger",
      css: {
        root: {
          backgroundColor: vars.variantSolidToneDanger.enabled.root.color,
        },
      },
    },
    {
      variant: "weak",
      tone: "neutral",
      css: {
        root: {
          backgroundColor: vars.variantWeakToneNeutral.enabled.root.color,
        },
        prefixIcon: {
          color: vars.variantWeakToneNeutral.enabled.prefixIcon.color,
        },
        label: {
          color: vars.variantWeakToneNeutral.enabled.label.color,
        },
        actionLabel: {
          color: vars.variantWeakToneNeutral.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.variantWeakToneNeutral.enabled.xIcon.color,
        },
      },
    },
    {
      variant: "weak",
      tone: "positive",
      css: {
        root: {
          backgroundColor: vars.variantWeakTonePositive.enabled.root.color,
        },
        prefixIcon: {
          color: vars.variantWeakTonePositive.enabled.prefixIcon.color,
        },
        label: {
          color: vars.variantWeakTonePositive.enabled.label.color,
        },
        actionLabel: {
          color: vars.variantWeakTonePositive.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.variantWeakTonePositive.enabled.xIcon.color,
        },
      },
    },
    {
      variant: "weak",
      tone: "informative",
      css: {
        root: {
          backgroundColor: vars.variantWeakToneInformative.enabled.root.color,
        },
        prefixIcon: {
          color: vars.variantWeakToneInformative.enabled.prefixIcon.color,
        },
        label: {
          color: vars.variantWeakToneInformative.enabled.label.color,
        },
        actionLabel: {
          color: vars.variantWeakToneInformative.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.variantWeakToneInformative.enabled.xIcon.color,
        },
      },
    },
    {
      variant: "weak",
      tone: "warning",
      css: {
        root: {
          backgroundColor: vars.variantWeakToneWarning.enabled.root.color,
        },
        prefixIcon: {
          color: vars.variantWeakToneWarning.enabled.prefixIcon.color,
        },
        label: {
          color: vars.variantWeakToneWarning.enabled.label.color,
        },
        actionLabel: {
          color: vars.variantWeakToneWarning.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.variantWeakToneWarning.enabled.xIcon.color,
        },
      },
    },
    {
      variant: "weak",
      tone: "danger",
      css: {
        root: {
          backgroundColor: vars.variantWeakToneDanger.enabled.root.color,
        },
        prefixIcon: {
          color: vars.variantWeakToneDanger.enabled.prefixIcon.color,
        },
        label: {
          color: vars.variantWeakToneDanger.enabled.label.color,
        },
        actionLabel: {
          color: vars.variantWeakToneDanger.enabled.actionLabel.color,
        },
      },
    },
  ],
});
