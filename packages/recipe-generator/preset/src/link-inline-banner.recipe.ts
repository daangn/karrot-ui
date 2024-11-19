import { linkInlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const linkInlineBanner = defineRecipe({
  name: "linkInlineBanner",
  slots: ["root", "linkLabel"],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: vars.base.enabled.root.gap,

      paddingInlineEnd: vars.base.enabled.root.paddingXEnd,
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
    },
  },
  defaultVariants: {
    variant: "neutralWeak",
  },
  variants: {
    variant: {
      neutralWeak: {
        linkLabel: {
          color: vars.variantNeutralWeak.enabled.linkLabel.color,
        },
      },
      positiveWeak: {
        linkLabel: {
          color: vars.variantPositiveWeak.enabled.linkLabel.color,
        },
      },
      informativeWeak: {
        linkLabel: {
          color: vars.variantInformativeWeak.enabled.linkLabel.color,
        },
      },
      warningWeak: {
        linkLabel: {
          color: vars.variantWarningWeak.enabled.linkLabel.color,
        },
      },
      warningSolid: {
        linkLabel: {
          color: vars.variantWarningSolid.enabled.linkLabel.color,
        },
      },
      dangerWeak: {
        linkLabel: {
          color: vars.variantDangerWeak.enabled.linkLabel.color,
        },
      },
      dangerSolid: {
        linkLabel: {
          color: vars.variantDangerSolid.enabled.linkLabel.color,
        },
      },
    },
  },
});

export default linkInlineBanner;
