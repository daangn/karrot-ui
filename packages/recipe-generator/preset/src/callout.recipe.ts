import { callout as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { active, pseudo } from "./pseudo";

export const callout = defineRecipe({
  name: "callout",
  slots: [
    "root",
    "content",
    "icon",
    "title",
    "spacer",
    "label",
    "linkLabel",
    "dismissButton",
    "xIcon",
    "chevronRightIcon",
  ],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInlineStart: vars.base.enabled.root.paddingXStart,
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
    },
    dismissButton: {
      flex: "none",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: vars.base.enabled.dismissButton.size,
      height: vars.base.enabled.dismissButton.size,
    },
    xIcon: {
      width: vars.base.enabled.xIcon.size,
      height: vars.base.enabled.xIcon.size,
    },
    chevronRightIcon: {
      flex: "none",

      width: vars.base.enabled.chevronRightIcon.size,
      height: vars.base.enabled.chevronRightIcon.size,

      margin: vars.base.enabled.chevronRightIcon.margin,
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
  variants: {
    type: {
      default: {
        root: {
          paddingInlineEnd: vars.typeDefault.enabled.root.paddingXEnd,
        },
      },
      dismissible: {
        root: {
          paddingInlineEnd: vars.typeDismissible.enabled.root.paddingXEnd,
        },
      },
      actionable: {
        root: {
          paddingInlineEnd: vars.typeActionable.enabled.root.paddingXEnd,
        },
      },
    },
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
        xIcon: {
          color: vars.variantNeutral.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantNeutral.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantInformative.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantInformative.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantWarning.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantWarning.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantDanger.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantDanger.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantMagic.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantMagic.enabled.chevronRightIcon.color,
        },
      },
    },
  },
  compoundVariants: [
    {
      type: "actionable",
      variant: "neutral",
      css: {
        root: {
          [pseudo(active)]: {
            backgroundColor: vars.variantNeutral.pressed.root.color,
          },
        },
      },
    },
    {
      type: "actionable",
      variant: "informative",
      css: {
        root: {
          [pseudo(active)]: {
            backgroundColor: vars.variantInformative.pressed.root.color,
          },
        },
      },
    },
    {
      type: "actionable",
      variant: "warning",
      css: {
        root: {
          [pseudo(active)]: {
            backgroundColor: vars.variantWarning.pressed.root.color,
          },
        },
      },
    },
    {
      type: "actionable",
      variant: "danger",
      css: {
        root: {
          [pseudo(active)]: {
            backgroundColor: vars.variantDanger.pressed.root.color,
          },
        },
      },
    },
    {
      type: "actionable",
      variant: "magic",
      css: {
        root: {
          [pseudo(active)]: {
            backgroundColor: vars.variantMagic.pressed.root.color,
          },
        },
      },
    },
  ],
});

export default callout;
