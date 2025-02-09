import { chipTablist as vars, chipTab as triggerVars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { active, disabled, not, pseudo, selected } from "../utils/pseudo";

const chipTabs = defineRecipe({
  name: "chipTabs",
  slots: ["root", "list", "carousel", "carouselCamera", "content", "trigger", "triggerLabel"],
  base: {
    root: {
      position: "relative",
    },
    list: {
      display: "flex",
      position: "relative",
      isolation: "isolate",
      flexWrap: "nowrap",
      alignItems: "stretch",
      alignContent: "stretch",

      overflowX: "auto",
      msOverflowStyle: "none",
      scrollbarWidth: "none",

      padding: `0px ${vars.base.enabled.root.paddingX}`,

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    carousel: {
      display: "block",
      overflow: "hidden",
    },
    carouselCamera: {
      display: "flex",

      [pseudo("[data-auto-height]")]: {
        alignItems: "flex-start",
      },
    },
    content: {
      flex: "0 0 100%",
      minWidth: 0,
      transform: "translate3d(0, 0, 0)",
      overflowY: "auto",
      overflowX: "hidden",

      [pseudo(not("[data-carousel]"), not(selected))]: {
        display: "none",
      },
    },

    trigger: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      border: "none",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      fontFamily: "inherit",

      borderRadius: triggerVars.base.enabled.root.cornerRadius,
      padding: `${triggerVars.base.enabled.root.paddingY} ${triggerVars.base.enabled.root.paddingX}`,
      minHeight: triggerVars.base.enabled.root.minHeight,
    },
    triggerLabel: {
      fontSize: triggerVars.base.enabled.label.fontSize,
      fontWeight: triggerVars.base.enabled.label.fontWeight,
    },
  },
  variants: {
    variant: {
      neutralSolid: {
        list: {
          gap: vars.variantNeutralSolid.enabled.root.gap,
        },
        trigger: {
          [pseudo(selected)]: {
            backgroundColor: triggerVars.variantNeutralSolid.selected.root.color,
          },

          [pseudo(active)]: {
            backgroundColor: triggerVars.variantNeutralSolid.enabledPressed.root.color,
          },

          [pseudo(selected, active)]: {
            backgroundColor: triggerVars.variantNeutralSolid.selectedPressed.root.color,
          },

          [pseudo(disabled)]: {
            cursor: "not-allowed",
            backgroundColor: undefined,
          },

          [pseudo(disabled, selected)]: {
            backgroundColor: triggerVars.variantNeutralSolid.selectedDisabled.root.color,
          },
        },

        triggerLabel: {
          color: triggerVars.variantNeutralSolid.enabled.label.color,
          fontWeight: triggerVars.base.enabled.label.fontWeight,

          [pseudo(selected)]: {
            color: triggerVars.variantNeutralSolid.selected.label.color,
          },

          [pseudo(disabled)]: {
            color: triggerVars.variantNeutralSolid.disabled.label.color,
          },

          [pseudo(disabled, selected)]: {
            color: triggerVars.variantNeutralSolid.selectedDisabled.label.color,
          },
        },
      },
      brandSolid: {
        list: {
          gap: vars.variantBrandSolid.enabled.root.gap,
        },
        trigger: {
          fontWeight: triggerVars.variantBrandSolid.enabled.label.fontWeight,
          backgroundColor: triggerVars.variantBrandSolid.enabled.root.color,

          [pseudo(selected)]: {
            backgroundColor: triggerVars.variantBrandSolid.selected.root.color,
          },

          [pseudo(active)]: {
            backgroundColor: triggerVars.variantBrandSolid.enabledPressed.root.color,
          },

          [pseudo(selected, active)]: {
            backgroundColor: triggerVars.variantBrandSolid.selectedPressed.root.color,
          },

          [pseudo(disabled)]: {
            cursor: "not-allowed",
            backgroundColor: triggerVars.variantBrandSolid.disabled.root.color,
          },

          [pseudo(disabled, selected)]: {
            backgroundColor: triggerVars.variantBrandSolid.selectedDisabled.root.color,
          },
        },

        triggerLabel: {
          color: triggerVars.variantBrandSolid.enabled.label.color,
          fontWeight: triggerVars.variantBrandSolid.enabled.label.fontWeight,

          [pseudo(selected)]: {
            color: triggerVars.variantBrandSolid.selected.label.color,
            fontWeight: triggerVars.variantBrandSolid.selected.label.fontWeight,
          },

          [pseudo(disabled)]: {
            color: triggerVars.variantBrandSolid.disabled.label.color,
          },
        },
      },
    },
    contentLayout: {
      fill: {
        root: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
        carousel: {
          flex: 1,
        },
        carouselCamera: {
          height: "100%",
          alignItems: "stretch",
        },
      },
      hug: {
        root: {
          display: "block",
        },
      },
    },
    stickyList: {
      true: {
        root: {
          position: "relative",
        },
        list: {
          position: "sticky",
          top: 0,
          zIndex: 1,
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "neutralSolid",
    contentLayout: "hug",
    stickyList: false,
  },
});

export default chipTabs;
