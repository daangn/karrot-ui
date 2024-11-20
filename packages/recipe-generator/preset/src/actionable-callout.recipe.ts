import { callout as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { active, pseudo } from "./pseudo";

export const actionableCallout = defineRecipe({
  name: "actionableCallout",
  slots: ["root", "content", "title", "spacer", "label", "chevronRightIcon"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInlineStart: vars.base.enabled.root.paddingXStart,
      paddingInlineEnd: vars.typeActionable.enabled.root.paddingXEnd,
      paddingBlock: vars.base.enabled.root.paddingY,

      borderRadius: vars.base.enabled.root.cornerRadius,

      // XXX: css reset 생기면 불필요할 가능성
      cursor: "pointer",
      border: "none",
      font: "inherit",
    },
    content: {
      display: "flex",
      alignItems: "center",

      gap: vars.base.enabled.content.gap,

      paddingBlock: vars.base.enabled.content.paddingY,

      fontSize: vars.base.enabled.content.fontSize,
      // XXX
      lineHeight: "1.3125rem",
      textAlign: "start",
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
    chevronRightIcon: {
      flex: "none",

      width: vars.base.enabled.chevronRightIcon.size,
      height: vars.base.enabled.chevronRightIcon.size,

      margin: vars.base.enabled.chevronRightIcon.margin,
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

          [pseudo(active)]: {
            backgroundColor: vars.variantNeutral.pressed.root.color,
          },
        },
        title: {
          color: vars.variantNeutral.enabled.title.color,
        },
        label: {
          color: vars.variantNeutral.enabled.label.color,
        },
        chevronRightIcon: {
          color: vars.variantNeutral.enabled.chevronRightIcon.color,
        },
      },
      informative: {
        root: {
          backgroundColor: vars.variantInformative.enabled.root.color,

          [pseudo(active)]: {
            backgroundColor: vars.variantInformative.pressed.root.color,
          },
        },
        title: {
          color: vars.variantInformative.enabled.title.color,
        },
        label: {
          color: vars.variantInformative.enabled.label.color,
        },
        chevronRightIcon: {
          color: vars.variantInformative.enabled.chevronRightIcon.color,
        },
      },
      warning: {
        root: {
          backgroundColor: vars.variantWarning.enabled.root.color,

          [pseudo(active)]: {
            backgroundColor: vars.variantWarning.pressed.root.color,
          },
        },
        title: {
          color: vars.variantWarning.enabled.title.color,
        },
        label: {
          color: vars.variantWarning.enabled.label.color,
        },
        chevronRightIcon: {
          color: vars.variantWarning.enabled.chevronRightIcon.color,
        },
      },
      danger: {
        root: {
          backgroundColor: vars.variantDanger.enabled.root.color,

          [pseudo(active)]: {
            backgroundColor: vars.variantDanger.pressed.root.color,
          },
        },
        title: {
          color: vars.variantDanger.enabled.title.color,
        },
        label: {
          color: vars.variantDanger.enabled.label.color,
        },
        chevronRightIcon: {
          color: vars.variantDanger.enabled.chevronRightIcon.color,
        },
      },
      magic: {
        root: {
          backgroundColor: vars.variantMagic.enabled.root.color,

          [pseudo(active)]: {
            backgroundColor: vars.variantMagic.pressed.root.color,
          },
        },
        title: {
          color: vars.variantMagic.enabled.title.color,
        },
        label: {
          color: vars.variantMagic.enabled.label.color,
        },
        chevronRightIcon: {
          color: vars.variantMagic.enabled.chevronRightIcon.color,
        },
      },
    },
  },
});

export default actionableCallout;
