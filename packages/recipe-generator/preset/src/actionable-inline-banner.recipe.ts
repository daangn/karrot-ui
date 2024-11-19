import { actionableInlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const actionableInlineBanner = defineRecipe({
  name: "actionableInlineBanner",
  slots: ["root", "chevronRightIcon"],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: vars.base.enabled.root.gap,

      paddingInlineEnd: vars.base.enabled.root.paddingXEnd,
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
    variant: {
      neutralWeak: {
        chevronRightIcon: {
          color: vars.variantNeutralWeak.enabled.chevronRightIcon.color,
        },
      },
      positiveWeak: {
        chevronRightIcon: {
          color: vars.variantPositiveWeak.enabled.chevronRightIcon.color,
        },
      },
      informativeWeak: {
        chevronRightIcon: {
          color: vars.variantInformativeWeak.enabled.chevronRightIcon.color,
        },
      },
      warningWeak: {
        chevronRightIcon: {
          color: vars.variantWarningWeak.enabled.chevronRightIcon.color,
        },
      },
      warningSolid: {
        chevronRightIcon: {
          color: vars.variantWarningSolid.enabled.chevronRightIcon.color,
        },
      },
      dangerWeak: {
        chevronRightIcon: {
          color: vars.variantDangerWeak.enabled.chevronRightIcon.color,
        },
      },
      dangerSolid: {
        chevronRightIcon: {
          color: vars.variantDangerSolid.enabled.chevronRightIcon.color,
        },
      },
    },
  },
});

export default actionableInlineBanner;
