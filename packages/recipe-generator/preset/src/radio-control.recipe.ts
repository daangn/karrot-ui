import { radioControl as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { checked, disabled, active, pseudo } from "./pseudo";

const radioControl = defineRecipe({
  name: "radioControl",
  slots: ["root", "icon"],
  base: {
    root: {
      backgroundColor: vars.base.enabled.root.color,

      borderWidth: vars.base.enabled.root.strokeWidth,
      borderColor: vars.base.enabled.root.strokeColor,

      borderRadius: vars.base.enabled.root.cornerRadius,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",

      [pseudo(active)]: {
        backgroundColor: vars.base.enabledPressed.root.color,
      },
      [pseudo(checked)]: {
        borderWidth: vars.base.enabledSelected.root.strokeWidth,
        backgroundColor: vars.base.enabledSelected.root.color,
      },
      [pseudo(active, checked)]: {
        backgroundColor: vars.base.enabledSelectedPressed.root.color,
      },

      [pseudo(disabled)]: {
        backgroundColor: vars.base.disabled.root.color,
      },
      [pseudo(disabled, checked)]: {
        backgroundColor: "transparent",

        borderWidth: vars.base.disabledSelected.root.strokeWidth,
        borderColor: vars.base.disabledSelected.root.strokeColor,
      },
    },
    icon: {
      display: "none",
      borderRadius: vars.base.enabled.icon.cornerRadius,

      [pseudo(checked)]: {
        display: "block",
        backgroundColor: vars.base.enabledSelected.icon.color,
      },
      [pseudo(disabled, checked)]: {
        backgroundColor: vars.base.disabledSelected.icon.color,
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      large: {
        root: {
          width: vars.sizeLarge.enabled.root.size,
          height: vars.sizeLarge.enabled.root.size,
        },
        icon: {
          width: vars.sizeLarge.enabled.icon.size,
          height: vars.sizeLarge.enabled.icon.size,
        },
      },
      medium: {
        root: {
          width: vars.sizeMedium.enabled.root.size,
          height: vars.sizeMedium.enabled.root.size,
        },
        icon: {
          width: vars.sizeMedium.enabled.icon.size,
          height: vars.sizeMedium.enabled.icon.size,
        },
      },
      small: {
        root: {
          width: vars.sizeSmall.enabled.root.size,
          height: vars.sizeSmall.enabled.root.size,
        },
        icon: {
          width: vars.sizeSmall.enabled.icon.size,
          height: vars.sizeSmall.enabled.icon.size,
        },
      },
    },
  },
});

export default radioControl;
