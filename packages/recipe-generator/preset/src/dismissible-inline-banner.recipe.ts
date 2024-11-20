import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const dismissibleInlineBanner = defineRecipe({
  name: "dismissibleInlineBanner",
  slots: ["root", "content", "icon", "title", "spacer", "label", "dismissButton", "xIcon"],
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
      paddingInlineEnd: vars.typeDismissible.enabled.root.paddingXEnd,
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
    xIcon: {
      width: vars.base.enabled.xIcon.size,
      height: vars.base.enabled.xIcon.size,
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
        xIcon: {
          color: vars.variantNeutralWeak.enabled.xIcon.color,
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
        xIcon: {
          color: vars.variantPositiveWeak.enabled.xIcon.color,
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
        xIcon: {
          color: vars.variantInformativeWeak.enabled.xIcon.color,
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
        xIcon: {
          color: vars.variantWarningWeak.enabled.xIcon.color,
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
        xIcon: {
          color: vars.variantWarningSolid.enabled.xIcon.color,
        },
      },
    },
  },
});

export default dismissibleInlineBanner;
