import { callout as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

export const dismissibleCallout = defineRecipe({
  name: "dismissibleCallout",
  slots: ["root", "content", "title", "spacer", "label", "linkLabel", "dismissButton", "xIcon"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInlineStart: vars.base.enabled.root.paddingXStart,
      paddingInlineEnd: vars.typeDismissible.enabled.root.paddingXEnd,
      paddingBlock: vars.base.enabled.root.paddingY,

      borderRadius: vars.base.enabled.root.cornerRadius,
    },
    content: {
      display: "flex",
      alignItems: "center",

      gap: vars.base.enabled.content.gap,

      paddingBlock: vars.base.enabled.content.paddingY,

      fontSize: vars.base.enabled.content.fontSize,
      // XXX
      lineHeight: "1.3125rem",
      textAlign: "start",
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
    linkLabel: {
      textDecoration: "underline",
      // XXX
      textUnderlineOffset: "2px",

      // XXX: css reset 생기면 불필요할 가능성
      display: "inline",
      backgroundColor: "transparent",
      padding: 0,
      border: "none",
      lineHeight: "inherit",
      font: "inherit",
      cursor: "pointer",
    },
    dismissButton: {
      flex: "none",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: vars.base.enabled.dismissButton.size,
      height: vars.base.enabled.dismissButton.size,

      // XXX: css reset 생기면 불필요할 가능성
      border: "none",
      backgroundColor: "transparent",
      padding: 0,
      cursor: "pointer",
    },
    xIcon: {
      width: vars.base.enabled.xIcon.size,
      height: vars.base.enabled.xIcon.size,
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
  variants: {
    variant: {
      neutral: {
        root: {
          backgroundColor: vars.variantNeutral.enabled.root.color,
        },
        title: {
          color: vars.variantNeutral.enabled.title.color,
        },
        label: {
          color: vars.variantNeutral.enabled.label.color,
        },
        linkLabel: {
          color: vars.variantNeutral.enabled.linkLabel.color,
        },
        xIcon: {
          color: vars.variantNeutral.enabled.xIcon.color,
        },
      },
      informative: {
        root: {
          backgroundColor: vars.variantInformative.enabled.root.color,
        },
        title: {
          color: vars.variantInformative.enabled.title.color,
        },
        label: {
          color: vars.variantInformative.enabled.label.color,
        },
        linkLabel: {
          color: vars.variantInformative.enabled.linkLabel.color,
        },
        xIcon: {
          color: vars.variantInformative.enabled.xIcon.color,
        },
      },
      warning: {
        root: {
          backgroundColor: vars.variantWarning.enabled.root.color,
        },
        title: {
          color: vars.variantWarning.enabled.title.color,
        },
        label: {
          color: vars.variantWarning.enabled.label.color,
        },
        linkLabel: {
          color: vars.variantWarning.enabled.linkLabel.color,
        },
        xIcon: {
          color: vars.variantWarning.enabled.xIcon.color,
        },
      },
      danger: {
        root: {
          backgroundColor: vars.variantDanger.enabled.root.color,
        },
        title: {
          color: vars.variantDanger.enabled.title.color,
        },
        label: {
          color: vars.variantDanger.enabled.label.color,
        },
        linkLabel: {
          color: vars.variantDanger.enabled.linkLabel.color,
        },
        xIcon: {
          color: vars.variantDanger.enabled.xIcon.color,
        },
      },
      magic: {
        root: {
          backgroundColor: vars.variantMagic.enabled.root.color,
        },
        title: {
          color: vars.variantMagic.enabled.title.color,
        },
        label: {
          color: vars.variantMagic.enabled.label.color,
        },
        linkLabel: {
          color: vars.variantMagic.enabled.linkLabel.color,
        },
        xIcon: {
          color: vars.variantMagic.enabled.xIcon.color,
        },
      },
    },
  },
});

export default dismissibleCallout;
