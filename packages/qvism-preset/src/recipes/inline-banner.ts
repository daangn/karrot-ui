import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { pseudo } from "../utils/pseudo";

const inlineBanner = defineRecipe({
  name: "inlineBanner",
  slots: [
    "root",
    "content",
    "icon",
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
      justifyContent: "space-between",
      gap: vars.base.enabled.root.gap,

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInline: vars.base.enabled.root.paddingX,

      border: "none",
      paddingBlock: 0,
      fontFamily: "inherit",

      [pseudo(":is(button)")]: {
        cursor: "pointer",
      },
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      gap: vars.base.enabled.content.gap,
      boxSizing: "border-box",

      paddingBlock: vars.base.enabled.content.paddingY,

      fontSize: vars.base.enabled.content.fontSize,
      lineHeight: vars.base.enabled.content.lineHeight,

      minHeight: vars.base.enabled.content.minHeight,

      textAlign: "start",
    },
    icon: {
      flex: "none",

      marginBlock: vars.base.enabled.icon.marginY,

      width: vars.base.enabled.icon.size,
      height: vars.base.enabled.icon.size,
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
      flex: "none",

      display: "flex",
      alignItems: "center",

      height: vars.base.enabled.linkLabel.height,

      fontWeight: vars.base.enabled.linkLabel.fontWeight,
      fontSize: vars.base.enabled.linkLabel.fontSize,
      lineHeight: vars.base.enabled.linkLabel.lineHeight,
      fontFamily: "inherit",

      textDecoration: "underline",
      textUnderlineOffset: "2px",

      border: "none",
      backgroundColor: "transparent",
      padding: 0,
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
    variant: "neutralWeak",
  },
  variants: {
    variant: {
      neutralWeak: {
        root: {
          backgroundColor: vars.variantNeutralWeak.enabled.root.color,
        },
        icon: {
          color: vars.variantNeutralWeak.enabled.icon.color,
        },
        title: {
          color: vars.variantNeutralWeak.enabled.title.color,
        },
        description: {
          color: vars.variantNeutralWeak.enabled.description.color,
        },
        linkLabel: {
          color: vars.variantNeutralWeak.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.variantNeutralWeak.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantNeutralWeak.enabled.dismissIcon.color,
        },
      },
      positiveWeak: {
        root: {
          backgroundColor: vars.variantPositiveWeak.enabled.root.color,
        },
        icon: {
          color: vars.variantPositiveWeak.enabled.icon.color,
        },
        title: {
          color: vars.variantPositiveWeak.enabled.title.color,
        },
        description: {
          color: vars.variantPositiveWeak.enabled.description.color,
        },
        linkLabel: {
          color: vars.variantPositiveWeak.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.variantPositiveWeak.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantPositiveWeak.enabled.dismissIcon.color,
        },
      },
      informativeWeak: {
        root: {
          backgroundColor: vars.variantInformativeWeak.enabled.root.color,
        },
        icon: {
          color: vars.variantInformativeWeak.enabled.icon.color,
        },
        title: {
          color: vars.variantInformativeWeak.enabled.title.color,
        },
        description: {
          color: vars.variantInformativeWeak.enabled.description.color,
        },
        linkLabel: {
          color: vars.variantInformativeWeak.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.variantInformativeWeak.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantInformativeWeak.enabled.dismissIcon.color,
        },
      },
      warningWeak: {
        root: {
          backgroundColor: vars.variantWarningWeak.enabled.root.color,
        },
        icon: {
          color: vars.variantWarningWeak.enabled.icon.color,
        },
        title: {
          color: vars.variantWarningWeak.enabled.title.color,
        },
        description: {
          color: vars.variantWarningWeak.enabled.description.color,
        },
        linkLabel: {
          color: vars.variantWarningWeak.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.variantWarningWeak.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantWarningWeak.enabled.dismissIcon.color,
        },
      },
      warningSolid: {
        root: {
          backgroundColor: vars.variantWarningSolid.enabled.root.color,
        },
        icon: {
          color: vars.variantWarningSolid.enabled.icon.color,
        },
        title: {
          color: vars.variantWarningSolid.enabled.title.color,
        },
        description: {
          color: vars.variantWarningSolid.enabled.description.color,
        },
        linkLabel: {
          color: vars.variantWarningSolid.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.variantWarningSolid.enabled.actionableIcon.color,
        },
        dismissIcon: {
          color: vars.variantWarningSolid.enabled.dismissIcon.color,
        },
      },
      dangerWeak: {
        root: {
          backgroundColor: vars.variantDangerWeak.enabled.root.color,
        },
        icon: {
          color: vars.variantDangerWeak.enabled.icon.color,
        },
        title: {
          color: vars.variantDangerWeak.enabled.title.color,
        },
        description: {
          color: vars.variantDangerWeak.enabled.description.color,
        },
        linkLabel: {
          color: vars.variantDangerWeak.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.variantDangerWeak.enabled.actionableIcon.color,
        },
      },
      dangerSolid: {
        root: {
          backgroundColor: vars.variantDangerSolid.enabled.root.color,
        },
        icon: {
          color: vars.variantDangerSolid.enabled.icon.color,
        },
        title: {
          color: vars.variantDangerSolid.enabled.title.color,
        },
        description: {
          color: vars.variantDangerSolid.enabled.description.color,
        },
        linkLabel: {
          color: vars.variantDangerSolid.enabled.linkLabel.color,
        },
        actionableIcon: {
          color: vars.variantDangerSolid.enabled.actionableIcon.color,
        },
      },
    },
  },
});

export default inlineBanner;
