import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

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
    "dismissButton",
    "xIcon",
    "chevronRightIcon",
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
    variant: "neutralWeak",
  },
  variants: {
    type: {
      default: {
        root: {
          paddingInlineEnd: vars.typeDefault.enabled.root.paddingXEnd,
        },
      },
      link: {
        root: {
          paddingInlineEnd: vars.typeLink.enabled.root.paddingXEnd,
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

          // XXX: 추후 reset.css 추가되면 쳐내질 가능성
          // https://daangn.slack.com/archives/C07FGUB49B5/p1729739060343499
          border: "none",
          paddingBlock: 0,
          font: "inherit",
        },
      },
    },
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
        xIcon: {
          color: vars.variantNeutralWeak.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantNeutralWeak.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantPositiveWeak.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantPositiveWeak.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantInformativeWeak.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantInformativeWeak.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantWarningWeak.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantWarningWeak.enabled.chevronRightIcon.color,
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
        xIcon: {
          color: vars.variantWarningSolid.enabled.xIcon.color,
        },
        chevronRightIcon: {
          color: vars.variantWarningSolid.enabled.chevronRightIcon.color,
        },
      },
      dangerWeak: {
        root: {
          position: "sticky",
          top: 0,

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
        chevronRightIcon: {
          color: vars.variantDangerWeak.enabled.chevronRightIcon.color,
        },
      },
      dangerSolid: {
        root: {
          position: "sticky",
          top: 0,

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
        chevronRightIcon: {
          color: vars.variantDangerSolid.enabled.chevronRightIcon.color,
        },
      },
    },
  },
});

export default inlineBanner;
