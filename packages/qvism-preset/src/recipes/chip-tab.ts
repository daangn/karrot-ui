import { chipTab as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { pseudo, selected, active, disabled } from "../utils/pseudo";

const chipTab = defineRecipe({
  name: "chipTab",
  slots: ["root", "label"],
  base: {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${vars.base.enabled.root.paddingY} ${vars.base.enabled.root.paddingX}`,
      cursor: "pointer",
      border: "none",
      borderRadius: vars.base.enabled.root.cornerRadius,
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      minHeight: vars.base.enabled.root.minHeight,
      fontFamily: "inherit",
    },
    label: {
      fontSize: vars.base.enabled.label.fontSize,
      fontWeight: vars.base.enabled.label.fontWeight,
    },
  },
  variants: {
    variant: {
      neutralSolid: {
        root: {
          [pseudo(selected)]: {
            backgroundColor: vars.variantNeutralSolid.selected.root.color,
          },

          [pseudo(active)]: {
            backgroundColor: vars.variantNeutralSolid.enabledPressed.root.color,
          },

          [pseudo(selected, active)]: {
            backgroundColor: vars.variantNeutralSolid.selectedPressed.root.color,
          },

          [pseudo(disabled)]: {
            cursor: "not-allowed",
            backgroundColor: undefined,
          },

          [pseudo(disabled, selected)]: {
            backgroundColor: vars.variantNeutralSolid.selectedDisabled.root.color,
          },
        },

        label: {
          color: vars.variantNeutralSolid.enabled.label.color,
          fontWeight: vars.base.enabled.label.fontWeight,

          [pseudo(selected)]: {
            color: vars.variantNeutralSolid.selected.label.color,
          },

          [pseudo(disabled)]: {
            color: vars.variantNeutralSolid.disabled.label.color,
          },

          [pseudo(disabled, selected)]: {
            color: vars.variantNeutralSolid.selectedDisabled.label.color,
          },
        },
      },
      brandSolid: {
        root: {
          fontWeight: vars.variantBrandSolid.enabled.label.fontWeight,
          backgroundColor: vars.variantBrandSolid.enabled.root.color,

          [pseudo(selected)]: {
            backgroundColor: vars.variantBrandSolid.selected.root.color,
          },

          [pseudo(active)]: {
            backgroundColor: vars.variantBrandSolid.enabledPressed.root.color,
          },

          [pseudo(selected, active)]: {
            backgroundColor: vars.variantBrandSolid.selectedPressed.root.color,
          },

          [pseudo(disabled)]: {
            cursor: "not-allowed",
            backgroundColor: vars.variantBrandSolid.disabled.root.color,
          },

          [pseudo(disabled, selected)]: {
            backgroundColor: vars.variantBrandSolid.selectedDisabled.root.color,
          },
        },

        label: {
          color: vars.variantBrandSolid.enabled.label.color,
          fontWeight: vars.variantBrandSolid.enabled.label.fontWeight,

          [pseudo(selected)]: {
            color: vars.variantBrandSolid.selected.label.color,
            fontWeight: vars.variantBrandSolid.selected.label.fontWeight,
          },

          [pseudo(disabled)]: {
            color: vars.variantBrandSolid.disabled.label.color,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "neutralSolid",
  },
});

export default chipTab;
