import { dismissibleInlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const dismissibleInlineBanner = defineRecipe({
  name: "dismissibleInlineBanner",
  slots: ["root", "dismissButton", "xIcon"],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: vars.base.enabled.root.gap,

      paddingInlineEnd: vars.base.enabled.root.paddingXEnd,
    },
    dismissButton: {
      flex: "none",

      width: vars.base.enabled.dismissButton.size,
      height: vars.base.enabled.dismissButton.size,
    },
    xIcon: {
      width: vars.base.enabled.xIcon.size,
      height: vars.base.enabled.xIcon.size,

      margin: "auto",
    },
  },
  defaultVariants: {
    variant: "neutralWeak",
  },
  variants: {
    variant: {
      neutralWeak: {
        xIcon: {
          color: vars.variantNeutralWeak.enabled.xIcon.color,
        },
      },
      positiveWeak: {
        link: {},
        xIcon: {
          color: vars.variantPositiveWeak.enabled.xIcon.color,
        },
      },
      informativeWeak: {
        xIcon: {
          color: vars.variantInformativeWeak.enabled.xIcon.color,
        },
      },
      warningWeak: {
        xIcon: {
          color: vars.variantWarningWeak.enabled.xIcon.color,
        },
      },
      warningSolid: {
        xIcon: {
          color: vars.variantWarningSolid.enabled.xIcon.color,
        },
      },
    },
  },
});

export default dismissibleInlineBanner;
