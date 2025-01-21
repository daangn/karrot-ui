import { badge as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";

const badge = defineRecipe({
  name: "badge",
  slots: ["root", "label"],
  base: {
    root: {
      display: "inline-flex",
      boxSizing: "border-box",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      textAlign: "start",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textDecoration: "none",
    },
  },
  variants: {
    size: {
      medium: {
        root: {
          minHeight: vars.sizeMedium.enabled.root.minHeight,
          paddingInline: vars.sizeMedium.enabled.root.paddingX,
          paddingBlock: vars.sizeMedium.enabled.root.paddingY,
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          lineHeight: vars.sizeMedium.enabled.label.lineHeight,
        },
      },
      large: {
        root: {
          minHeight: vars.sizeLarge.enabled.root.minHeight,
          paddingInline: vars.sizeLarge.enabled.root.paddingX,
          paddingBlock: vars.sizeLarge.enabled.root.paddingY,
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
          lineHeight: vars.sizeLarge.enabled.label.lineHeight,
        },
      },
    },
    shape: {
      rectangle: {},
      pill: {
        root: {
          borderRadius: vars.shapePill.enabled.root.borderRadius,
        },
      },
    },
    variant: {
      weak: {
        label: {
          fontWeight: vars.variantWeak.enabled.label.fontWeight,
        },
      },
      solid: {
        label: {
          fontWeight: vars.variantSolid.enabled.label.fontWeight,
        },
      },
      outline: {
        label: {
          fontWeight: vars.variantOutline.enabled.label.fontWeight,
        },
      },
    },
    tone: {
      neutral: {},
      brand: {},
      informative: {},
      positive: {},
      danger: {},
    },
  },
  compoundVariants: [
    {
      shape: "rectangle",
      size: "medium",
      css: {
        root: {
          borderRadius: vars.shapeRectangleSizeMedium.enabled.root.borderRadius,
        },
      },
    },
    {
      shape: "rectangle",
      size: "large",
      css: {
        root: {
          borderRadius: vars.shapeRectangleSizeLarge.enabled.root.borderRadius,
        },
      },
    },
    {
      tone: "neutral",
      variant: "weak",
      css: {
        root: {
          backgroundColor: vars.toneNeutralVariantWeak.enabled.root.color,
        },
        label: {
          color: vars.toneNeutralVariantWeak.enabled.label.color,
        },
      },
    },
    {
      tone: "neutral",
      variant: "solid",
      css: {
        root: {
          backgroundColor: vars.toneNeutralVariantSolid.enabled.root.color,
        },
        label: {
          color: vars.toneNeutralVariantSolid.enabled.label.color,
        },
      },
    },
    {
      tone: "neutral",
      variant: "outline",
      css: {
        root: {
          boxShadow: `inset 0 0 0 ${vars.variantOutline.enabled.root.strokeWidth} ${vars.toneNeutralVariantOutline.enabled.root.strokeColor}`,
        },
        label: {
          color: vars.toneNeutralVariantOutline.enabled.label.color,
        },
      },
    },
    {
      tone: "brand",
      variant: "weak",
      css: {
        root: {
          backgroundColor: vars.toneBrandVariantWeak.enabled.root.color,
        },
        label: {
          color: vars.toneBrandVariantWeak.enabled.label.color,
        },
      },
    },
    {
      tone: "brand",
      variant: "solid",
      css: {
        root: {
          backgroundColor: vars.toneBrandVariantSolid.enabled.root.color,
        },
        label: {
          color: vars.toneBrandVariantSolid.enabled.label.color,
        },
      },
    },
    {
      tone: "brand",
      variant: "outline",
      css: {
        root: {
          boxShadow: `inset 0 0 0 ${vars.variantOutline.enabled.root.strokeWidth} ${vars.toneBrandVariantOutline.enabled.root.strokeColor}`,
        },
        label: {
          color: vars.toneBrandVariantOutline.enabled.label.color,
        },
      },
    },
    {
      tone: "informative",
      variant: "weak",
      css: {
        root: {
          backgroundColor: vars.toneInformativeVariantWeak.enabled.root.color,
        },
        label: {
          color: vars.toneInformativeVariantWeak.enabled.label.color,
        },
      },
    },
    {
      tone: "informative",
      variant: "solid",
      css: {
        root: {
          backgroundColor: vars.toneInformativeVariantSolid.enabled.root.color,
        },
        label: {
          color: vars.toneInformativeVariantSolid.enabled.label.color,
        },
      },
    },
    {
      tone: "informative",
      variant: "outline",
      css: {
        root: {
          boxShadow: `inset 0 0 0 ${vars.variantOutline.enabled.root.strokeWidth} ${vars.toneInformativeVariantOutline.enabled.root.strokeColor}`,
        },
        label: {
          color: vars.toneInformativeVariantOutline.enabled.label.color,
        },
      },
    },
    {
      tone: "positive",
      variant: "weak",
      css: {
        root: {
          backgroundColor: vars.tonePositiveVariantWeak.enabled.root.color,
        },
        label: {
          color: vars.tonePositiveVariantWeak.enabled.label.color,
        },
      },
    },
    {
      tone: "positive",
      variant: "solid",
      css: {
        root: {
          backgroundColor: vars.tonePositiveVariantSolid.enabled.root.color,
        },
        label: {
          color: vars.tonePositiveVariantSolid.enabled.label.color,
        },
      },
    },
    {
      tone: "positive",
      variant: "outline",
      css: {
        root: {
          boxShadow: `inset 0 0 0 ${vars.variantOutline.enabled.root.strokeWidth} ${vars.tonePositiveVariantOutline.enabled.root.strokeColor}`,
        },
        label: {
          color: vars.tonePositiveVariantOutline.enabled.label.color,
        },
      },
    },
    {
      tone: "danger",
      variant: "weak",
      css: {
        root: {
          backgroundColor: vars.toneDangerVariantWeak.enabled.root.color,
        },
        label: {
          color: vars.toneDangerVariantWeak.enabled.label.color,
        },
      },
    },
    {
      tone: "danger",
      variant: "solid",
      css: {
        root: {
          backgroundColor: vars.toneDangerVariantSolid.enabled.root.color,
        },
        label: {
          color: vars.toneDangerVariantSolid.enabled.label.color,
        },
      },
    },
    {
      tone: "danger",
      variant: "outline",
      css: {
        root: {
          boxShadow: `inset 0 0 0 ${vars.variantOutline.enabled.root.strokeWidth} ${vars.toneDangerVariantOutline.enabled.root.strokeColor}`,
        },
        label: {
          color: vars.toneDangerVariantOutline.enabled.label.color,
        },
      },
    },
  ],
  defaultVariants: {
    size: "medium",
    shape: "rectangle",
    variant: "solid",
    tone: "neutral",
  },
});

export default badge;
