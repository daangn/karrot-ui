import { inlineBanner as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

export const inlineBanner = defineRecipe({
  name: "inlineBanner",
  slots: [
    "root",
    "content",
    "prefixIcon",
    "title",
    "spacer",
    "label",
    "actionLabel",
    "dismissButton",
    "xIcon",
  ],
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: vars.base.enabled.root.gap,

      width: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",

      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      gap: vars.base.enabled.content.gap,

      fontSize: vars.base.enabled.content.fontSize,

      // FIXME
      lineHeight: "19px",
    },
    prefixIcon: {
      flex: "none",

      marginBlock: vars.base.enabled.prefixIcon.marginY,

      width: vars.base.enabled.prefixIcon.size,
      height: vars.base.enabled.prefixIcon.size,
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
    actionLabel: {
      flex: "none",

      fontSize: vars.base.enabled.actionLabel.fontSize,
      fontWeight: vars.base.enabled.actionLabel.fontWeight,
      // FIXME
      lineHeight: "16px",

      textDecoration: "underline",
      // XXX
      textUnderlineOffset: "2px",
    },
    dismissButton: {
      flex: "none",
    },
    xIcon: {
      width: vars.base.enabled.xIcon.size,
      height: vars.base.enabled.xIcon.size,
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
        },
        prefixIcon: {
          color: vars.toneNeutral.enabled.prefixIcon.color,
        },
        title: {
          color: vars.toneNeutral.enabled.title.color,
        },
        label: {
          color: vars.toneNeutral.enabled.label.color,
        },
        actionLabel: {
          color: vars.toneNeutral.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.toneNeutral.enabled.xIcon.color,
        },
      },
      positive: {
        root: {
          backgroundColor: vars.tonePositive.enabled.root.color,
        },
        prefixIcon: {
          color: vars.tonePositive.enabled.prefixIcon.color,
        },
        title: {
          color: vars.tonePositive.enabled.title.color,
        },
        label: {
          color: vars.tonePositive.enabled.label.color,
        },
        actionLabel: {
          color: vars.tonePositive.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.tonePositive.enabled.xIcon.color,
        },
      },
      informative: {
        root: {
          backgroundColor: vars.toneInformative.enabled.root.color,
        },
        prefixIcon: {
          color: vars.toneInformative.enabled.prefixIcon.color,
        },
        title: {
          color: vars.toneInformative.enabled.title.color,
        },
        label: {
          color: vars.toneInformative.enabled.label.color,
        },
        actionLabel: {
          color: vars.toneInformative.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.toneInformative.enabled.xIcon.color,
        },
      },
      warning: {
        root: {
          backgroundColor: vars.toneWarning.enabled.root.color,
        },
        prefixIcon: {
          color: vars.toneWarning.enabled.prefixIcon.color,
        },
        title: {
          color: vars.toneWarning.enabled.title.color,
        },
        label: {
          color: vars.toneWarning.enabled.label.color,
        },
        actionLabel: {
          color: vars.toneWarning.enabled.actionLabel.color,
        },
        xIcon: {
          color: vars.toneWarning.enabled.xIcon.color,
        },
      },
      danger: {
        root: {
          position: "sticky",
          top: 0,
          backgroundColor: vars.toneDanger.enabled.root.color,
        },
        prefixIcon: {
          color: vars.toneDanger.enabled.prefixIcon.color,
        },
        title: {
          color: vars.toneDanger.enabled.title.color,
        },
        label: {
          color: vars.toneDanger.enabled.label.color,
        },
        actionLabel: {
          color: vars.toneDanger.enabled.actionLabel.color,
        },
      },
    },
  },
});
