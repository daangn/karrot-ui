import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const inlineBanner = defineRecipe({
  name: "inlineBanner",
  slots: ["root", "content", "icon", "title", "spacer", "label"],
  base: {
    root: {
      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInlineStart: vars.base.enabled.root.paddingXStart,
      paddingInlineEnd: vars.base.enabled.root.paddingXEnd,
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
      },
    },
  },
});

export default inlineBanner;
