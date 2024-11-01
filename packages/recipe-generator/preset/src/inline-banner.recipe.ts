import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

export const inlineBanner = defineRecipe({
  name: "inlineBanner",
  slots: ["root", "content", "prefixIconContainer", "prefixIcon", "xIcon", "label", "link"],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: vars.base.enabled.root.gap,

      width: "100%",

      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,
    },
    content: {
      display: "flex",
      alignItems: "start",
      gap: vars.base.enabled.content.gap,
    },
    prefixIconContainer: {
      display: "flex",
      alignItems: "center",
      flex: "none",

      height: vars.base.enabled.prefixIconContainer.size,
    },
    prefixIcon: {
      width: vars.base.enabled.prefixIcon.size,
      height: vars.base.enabled.prefixIcon.size,
    },
    xIcon: {
      width: vars.base.enabled.xIcon.size,
      height: vars.base.enabled.xIcon.size,
      flex: "none",
    },
    label: {
      fontSize: vars.base.enabled.label.fontSize,
      fontWeight: vars.base.enabled.label.fontWeight,

      // FIXME
      lineHeight: "19px",
    },
    link: {
      fontSize: vars.base.enabled.link.fontSize,
      fontWeight: vars.base.enabled.link.fontWeight,
      textDecoration: "underline",
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
      danger: {},
    },
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
        xIcon: {
          color: vars.variantWeakToneDanger.enabled.xIcon.color,
        },
      },
    },
  ],
});
