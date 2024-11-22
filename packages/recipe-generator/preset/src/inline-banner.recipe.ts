import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { pseudo } from "./pseudo";

const inlineBanner = defineRecipe({
  name: "inlineBanner",
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
      gap: vars.base.enabled.root.gap,

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInlineStart: vars.base.enabled.root.paddingXStart,
      paddingInlineEnd: vars.base.enabled.root.paddingXEnd,

      // XXX: 추후 reset.css 추가되면 쳐내질 가능성
      [pseudo(":is(button)")]: {
        border: "none",
        paddingBlock: 0,
        font: "inherit",
        cursor: "pointer",
      },
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      gap: vars.base.enabled.content.gap,

      paddingBlock: vars.base.enabled.content.paddingY,

      fontSize: vars.base.enabled.content.fontSize,
      // FIXME
      lineHeight: "1.1875rem",
      textAlign: "start",

      [pseudo(":only-child")]: {
        paddingInlineEnd: vars.typeContentOnly.enabled.content.paddingXEnd,
      },
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
    label: {
      fontWeight: vars.base.enabled.label.fontWeight,
    },
    linkLabel: {
      flex: "none",

      height: vars.base.enabled.linkLabel.size,
      paddingInline: vars.base.enabled.linkLabel.paddingX,

      fontSize: vars.base.enabled.linkLabel.fontSize,
      fontWeight: vars.base.enabled.linkLabel.fontWeight,
      // FIXME
      lineHeight: "1rem",

      textDecoration: "underline",
      // XXX
      textUnderlineOffset: "2px",

      // XXX: 추후 reset.css 추가되면 쳐내질 가능성
      border: "none",
      backgroundColor: "transparent",
      paddingBlock: 0,
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

      // XXX: 추후 reset.css 추가되면 쳐내질 가능성
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
        label: {
          color: vars.variantNeutralWeak.enabled.label.color,
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
        label: {
          color: vars.variantPositiveWeak.enabled.label.color,
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
        label: {
          color: vars.variantInformativeWeak.enabled.label.color,
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
        label: {
          color: vars.variantWarningWeak.enabled.label.color,
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
        label: {
          color: vars.variantWarningSolid.enabled.label.color,
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
        label: {
          color: vars.variantDangerWeak.enabled.label.color,
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
        label: {
          color: vars.variantDangerSolid.enabled.label.color,
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
