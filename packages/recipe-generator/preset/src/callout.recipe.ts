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
    "actionableIcon",
    "dismissButton",
    "dismissIcon",
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
      paddingInlineEnd: vars.base.enabled.root.paddingXEnd,
      paddingBlock: vars.base.enabled.root.paddingY,

      borderRadius: vars.base.enabled.root.cornerRadius,

      [pseudo(":is(button)")]: {
        // XXX: css reset 생기면 불필요할 가능성
        cursor: "pointer",
        border: "none",
        font: "inherit",
      },
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

      [pseudo(":only-child")]: {
        paddingInlineEnd: vars.typeContentOnly.enabled.content.paddingXEnd,
      },
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
      font: "inherit",
      cursor: "pointer",
    },
    actionableIcon: {
      flex: "none",

      width: vars.base.enabled.actionableIcon.size,
      height: vars.base.enabled.actionableIcon.size,

      margin: vars.base.enabled.actionableIcon.margin,
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
    dismissIcon: {
      width: vars.base.enabled.dismissIcon.size,
      height: vars.base.enabled.dismissIcon.size,
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

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.variantNeutral.pressed.root.color,
          },
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
        actionableIcon: {
          color: vars.variantNeutral.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantNeutral.enabled.dismissIcon.color,
        },
      },
      informative: {
        root: {
          backgroundColor: vars.variantInformative.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.variantInformative.pressed.root.color,
          },
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
        actionableIcon: {
          color: vars.variantInformative.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantInformative.enabled.dismissIcon.color,
        },
      },
      warning: {
        root: {
          backgroundColor: vars.variantWarning.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.variantWarning.pressed.root.color,
          },
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
        actionableIcon: {
          color: vars.variantWarning.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantWarning.enabled.dismissIcon.color,
        },
      },
      danger: {
        root: {
          backgroundColor: vars.variantDanger.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.variantDanger.pressed.root.color,
          },
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
        actionableIcon: {
          color: vars.variantDanger.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantDanger.enabled.dismissIcon.color,
        },
      },
      magic: {
        root: {
          backgroundColor: vars.variantMagic.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.variantMagic.pressed.root.color,
          },
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
        actionableIcon: {
          color: vars.variantMagic.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantMagic.enabled.dismissIcon.color,
        },
      },
    },
  },
});

export default callout;
