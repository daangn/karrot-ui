import { callout as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { active, pseudo } from "../utils/pseudo";

const callout = defineRecipe({
  name: "callout",
  slots: [
    "root",
    "icon",
    "textContent",
    "title",
    "spacer",
    "description",
    "linkLabel",
    "actionableIcon",
    "dismissButton",
    "dismissIcon",
  ],
  base: {
    root: {
      display: "flex",
      alignItems: "center",

      width: "100%",
      minHeight: vars.base.enabled.root.minHeight,
      boxSizing: "border-box",

      padding: vars.base.enabled.root.padding,
      gap: vars.base.enabled.root.gap,

      borderRadius: vars.base.enabled.root.cornerRadius,
      border: "none",

      textAlign: "start",
      fontSize: vars.base.enabled.root.fontSize,
      lineHeight: vars.base.enabled.root.lineHeight,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      fontFamily: "inherit",

      [pseudo(":is(button)")]: {
        cursor: "pointer",
      },
    },
    icon: {
      flex: "none",

      width: vars.base.enabled.icon.size,
      height: vars.base.enabled.icon.size,
    },
    textContent: {
      marginInlineEnd: "auto",
    },
    title: {
      fontWeight: vars.base.enabled.title.fontWeight,
    },
    spacer: {
      letterSpacing: "0.25em",
    },
    description: {
      fontWeight: vars.base.enabled.description.fontWeight,
    },
    linkLabel: {
      textDecoration: "underline",
      textUnderlineOffset: "2px",

      display: "inline-block",
      backgroundColor: "transparent",
      padding: 0,
      border: "none",
      fontFamily: "inherit",
      cursor: "pointer",
    },
    actionableIcon: {
      flex: "none",

      width: vars.base.enabled.actionableIcon.size,
      height: vars.base.enabled.actionableIcon.size,
    },
    dismissButton: {
      flex: "none",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: vars.base.enabled.dismissButton.size,
      height: vars.base.enabled.dismissButton.size,

      margin: `calc((${vars.base.enabled.dismissButton.size} - ${vars.base.enabled.dismissIcon.size}) * -0.5)`,

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
    tone: "neutral",
  },
  variants: {
    tone: {
      neutral: {
        root: {
          backgroundColor: vars.toneNeutral.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.toneNeutral.pressed.root.color,
          },
        },
        icon: {
          color: vars.toneNeutral.enabled.icon.color,
        },
        title: {
          color: vars.toneNeutral.enabled.title.color,
        },
        description: {
          color: vars.toneNeutral.enabled.description.color,
        },
        linkLabel: {
          color: vars.toneNeutral.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.toneNeutral.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.toneNeutral.enabled.dismissIcon.color,
        },
      },
      informative: {
        root: {
          backgroundColor: vars.toneInformative.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.toneInformative.pressed.root.color,
          },
        },
        icon: {
          color: vars.toneInformative.enabled.icon.color,
        },
        title: {
          color: vars.toneInformative.enabled.title.color,
        },
        description: {
          color: vars.toneInformative.enabled.description.color,
        },
        linkLabel: {
          color: vars.toneInformative.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.toneInformative.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.toneInformative.enabled.dismissIcon.color,
        },
      },
      warning: {
        root: {
          backgroundColor: vars.toneWarning.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.toneWarning.pressed.root.color,
          },
        },
        icon: {
          color: vars.toneWarning.enabled.icon.color,
        },
        title: {
          color: vars.toneWarning.enabled.title.color,
        },
        description: {
          color: vars.toneWarning.enabled.description.color,
        },
        linkLabel: {
          color: vars.toneWarning.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.toneWarning.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.toneWarning.enabled.dismissIcon.color,
        },
      },
      critical: {
        root: {
          backgroundColor: vars.toneCritical.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.toneCritical.pressed.root.color,
          },
        },
        icon: {
          color: vars.toneCritical.enabled.icon.color,
        },
        title: {
          color: vars.toneCritical.enabled.title.color,
        },
        description: {
          color: vars.toneCritical.enabled.description.color,
        },
        linkLabel: {
          color: vars.toneCritical.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.toneCritical.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.toneCritical.enabled.dismissIcon.color,
        },
      },
      magic: {
        root: {
          backgroundColor: vars.toneMagic.enabled.root.color,

          [pseudo(":is(button)", active)]: {
            backgroundColor: vars.toneMagic.pressed.root.color,
          },
        },
        icon: {
          color: vars.toneMagic.enabled.icon.color,
        },
        title: {
          color: vars.toneMagic.enabled.title.color,
        },
        description: {
          color: vars.toneMagic.enabled.description.color,
        },
        linkLabel: {
          color: vars.toneMagic.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.toneMagic.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.toneMagic.enabled.dismissIcon.color,
        },
      },
    },
  },
});

export default callout;
