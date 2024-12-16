import { callout as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { active, pseudo } from "./pseudo";

export const callout = defineRecipe({
  name: "callout",
  slots: [
    "root",
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
      [pseudo(":is(button)")]: {
        // XXX: css reset 생기면 불필요할 가능성
        cursor: "pointer",
        border: "none",
      },

      display: "flex",
      alignItems: "center",

      width: "100%",

      padding: vars.base.enabled.root.padding,
      gap: vars.base.enabled.root.gap,

      borderRadius: vars.base.enabled.root.cornerRadius,

      textAlign: "start",
      fontSize: vars.base.enabled.root.fontSize,
      lineHeight: vars.base.enabled.root.lineHeight,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
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

      marginInlineStart: "auto",
    },
    dismissButton: {
      flex: "none",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: vars.base.enabled.dismissButton.size,
      height: vars.base.enabled.dismissButton.size,

      margin: `calc((${vars.base.enabled.dismissButton.size} - ${vars.base.enabled.root.padding} * 2) * -1)`,
      marginInlineStart: "auto",

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
