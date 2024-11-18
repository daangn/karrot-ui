import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const inlineBanner = defineRecipe({
  name: "inlineBanner",
  slots: [
    "root",
    "content",
    "contentIcon",
    "title",
    "spacer",
    "label",
    "link",
    "button",
    "buttonIcon",
  ],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: vars.base.enabled.root.gap,

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInlineStart: vars.base.enabled.root.paddingXStart,
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      gap: vars.base.enabled.content.gap,

      paddingBlock: vars.base.enabled.content.paddingY,

      fontSize: vars.base.enabled.content.fontSize,
      // FIXME
      lineHeight: "1.1875rem",
    },
    contentIcon: {
      flex: "none",

      marginBlock: vars.base.enabled.contentIcon.marginY,

      width: vars.base.enabled.contentIcon.size,
      height: vars.base.enabled.contentIcon.size,
    },
    title: {
      fontWeight: vars.base.enabled.title.fontWeight,
    },
    spacer: {
      letterSpacing: "0.25em",
    },
    label: {
      fontWeight: vars.base.enabled.label.fontWeight,
    },
    link: {
      flex: "none",

      height: vars.base.enabled.link.size,
      paddingInline: vars.base.enabled.link.paddingX,

      fontSize: vars.base.enabled.link.fontSize,
      fontWeight: vars.base.enabled.link.fontWeight,
      // FIXME
      lineHeight: "1rem",

      textDecoration: "underline",
      // XXX
      textUnderlineOffset: "2px",
    },
    button: {
      flex: "none",

      width: vars.base.enabled.button.size,
      height: vars.base.enabled.button.size,
    },
    buttonIcon: {
      width: vars.base.enabled.buttonIcon.size,
      height: vars.base.enabled.buttonIcon.size,

      margin: "auto",
    },
  },
  defaultVariants: {
    tone: "neutral",
    variant: "weak",
  },
  variants: {
    layout: {
      withAction: {
        root: {
          paddingInlineEnd: vars.layoutWithAction.enabled.root.paddingXEnd,
        },
      },
      withoutAction: {
        root: {
          paddingInlineEnd: vars.layoutWithoutAction.enabled.root.paddingXEnd,
        },
      },
    },
    tone: {
      neutral: {
        root: {
          backgroundColor: vars.toneNeutral.enabled.root.color,
        },
        contentIcon: {
          color: vars.toneNeutral.enabled.contentIcon.color,
        },
        title: {
          color: vars.toneNeutral.enabled.title.color,
        },
        label: {
          color: vars.toneNeutral.enabled.label.color,
        },
        link: {
          color: vars.toneNeutral.enabled.link.color,
        },
        buttonIcon: {
          color: vars.toneNeutral.enabled.buttonIcon.color,
        },
      },
      positive: {
        root: {
          backgroundColor: vars.tonePositive.enabled.root.color,
        },
        contentIcon: {
          color: vars.tonePositive.enabled.contentIcon.color,
        },
        title: {
          color: vars.tonePositive.enabled.title.color,
        },
        label: {
          color: vars.tonePositive.enabled.label.color,
        },
        link: {
          color: vars.tonePositive.enabled.link.color,
        },
        buttonIcon: {
          color: vars.tonePositive.enabled.buttonIcon.color,
        },
      },
      informative: {
        root: {
          backgroundColor: vars.toneInformative.enabled.root.color,
        },
        contentIcon: {
          color: vars.toneInformative.enabled.contentIcon.color,
        },
        title: {
          color: vars.toneInformative.enabled.title.color,
        },
        label: {
          color: vars.toneInformative.enabled.label.color,
        },
        link: {
          color: vars.toneInformative.enabled.link.color,
        },
        buttonIcon: {
          color: vars.toneInformative.enabled.buttonIcon.color,
        },
      },
      warning: {
        contentIcon: {
          color: vars.toneWarning.enabled.contentIcon.color,
        },
        title: {
          color: vars.toneWarning.enabled.title.color,
        },
        label: {
          color: vars.toneWarning.enabled.label.color,
        },
        link: {
          color: vars.toneWarning.enabled.link.color,
        },
        buttonIcon: {
          color: vars.toneWarning.enabled.buttonIcon.color,
        },
      },
      danger: {
        root: {
          position: "sticky",
          top: 0,
        },
      },
    },
    variant: {
      weak: {},
      solid: {},
    },
  },
  compoundVariants: [
    {
      tone: "warning",
      variant: "weak",
      css: {
        root: {
          backgroundColor: vars.toneWarningVariantWeak.enabled.root.color,
        },
      },
    },
    {
      tone: "warning",
      variant: "solid",
      css: {
        root: {
          backgroundColor: vars.toneWarningVariantSolid.enabled.root.color,
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
      },
    },
    {
      tone: "danger",
      variant: "solid",
      css: {
        root: {
          backgroundColor: vars.toneDangerVariantSolid.enabled.root.color,
        },
      },
    },
  ],
});

export default inlineBanner;
