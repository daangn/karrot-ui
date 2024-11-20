import { callout as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

export const callout = defineRecipe({
  name: "callout",
  slots: ["root", "content", "icon", "title", "spacer", "label", "linkLabel"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInlineStart: vars.base.enabled.root.paddingXStart,
      paddingInlineEnd: vars.typeDefault.enabled.root.paddingXEnd,
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
    icon: {
      flex: "none",

      width: vars.base.enabled.icon.size,
      height: vars.base.enabled.icon.size,
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
        icon: {
          color: vars.variantNeutral.enabled.icon.color,
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
      },
      informative: {
        root: {
          backgroundColor: vars.variantInformative.enabled.root.color,
        },
        icon: {
          color: vars.variantInformative.enabled.icon.color,
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
      },
      warning: {
        root: {
          backgroundColor: vars.variantWarning.enabled.root.color,
        },
        icon: {
          color: vars.variantWarning.enabled.icon.color,
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
      },
      danger: {
        root: {
          backgroundColor: vars.variantDanger.enabled.root.color,
        },
        icon: {
          color: vars.variantDanger.enabled.icon.color,
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
      },
      magic: {
        root: {
          backgroundColor: vars.variantMagic.enabled.root.color,
        },
        icon: {
          color: vars.variantMagic.enabled.icon.color,
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
      },
    },
  },
});

export default callout;
