import { radio as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { checked, disabled, active, pseudo } from "./pseudo";

const radio = defineRecipe({
  name: "radio",
  slots: ["root", "control", "icon", "label"],
  base: {
    root: {
      display: "flex",

      cursor: "pointer",

      gap: vars.base.enabled.root.gap,
    },
    control: {
      backgroundColor: vars.base.enabled.control.color,

      borderWidth: vars.base.enabled.control.strokeWidth,
      borderColor: vars.base.enabled.control.strokeColor,

      borderRadius: vars.base.enabled.control.cornerRadius,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",

      [pseudo(checked)]: {
        backgroundColor: vars.base.enabledSelected.control.color,
        borderWidth: 0,
      },
      [pseudo(active)]: {
        // backgroundColor: vars.base.pressed.control.color,
      },
      [pseudo(active, checked)]: {
        // backgroundColor: vars.base.pressedSelected.control.color,
      },
      [pseudo(disabled)]: {
        backgroundColor: vars.base.disabled.control.color,
      },
      [pseudo(disabled, checked)]: {
        backgroundColor: "none",
      },
    },
    icon: {
      display: "none",
      borderRadius: "100%",

      [pseudo(checked)]: {
        display: "block",
        backgroundColor: vars.base.enabledSelected.icon.color,
      },
      [pseudo(disabled, checked)]: {
        display: "block",
        backgroundColor: vars.base.disabledSelected.icon.color,
      },
    },
    label: {
      color: vars.base.enabled.label.color,

      [pseudo(disabled)]: {
        color: vars.base.disabled.label.color,
      },
    },
  },
  variants: {
    fontWeight: {
      bold: {
        label: {
          fontWeight: vars.fontWeightBold.enabled.label.fontWeight,
        },
      },
    },
    size: {
      large: {
        root: {
          minHeight: vars.sizeLarge.enabled.root.minHeight,
        },
        control: {
          width: vars.sizeLarge.enabled.control.size,
          height: vars.sizeLarge.enabled.control.size,
          marginBlockStart: vars.sizeLarge.enabled.control.marginYStart,
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
          marginBlockStart: vars.sizeLarge.enabled.label.marginYStart,
        },
        icon: {
          width: vars.sizeLarge.enabled.icon.size,
          height: vars.sizeLarge.enabled.icon.size,
        },
      },
      medium: {
        root: {
          minHeight: vars.sizeMedium.enabled.root.minHeight,
        },
        control: {
          width: vars.sizeMedium.enabled.control.size,
          height: vars.sizeMedium.enabled.control.size,
          marginBlockStart: vars.sizeMedium.enabled.control.marginYStart,
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          marginBlockStart: vars.sizeMedium.enabled.label.marginYStart,
        },
        icon: {
          width: vars.sizeMedium.enabled.icon.size,
          height: vars.sizeMedium.enabled.icon.size,
        },
      },
      small: {
        root: {
          minHeight: vars.sizeSmall.enabled.root.minHeight,
        },
        control: {
          width: vars.sizeSmall.enabled.control.size,
          height: vars.sizeSmall.enabled.control.size,
          marginBlockStart: vars.sizeSmall.enabled.control.marginYStart,
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          marginBlockStart: vars.sizeSmall.enabled.label.marginYStart,
        },
        icon: {
          width: vars.sizeSmall.enabled.icon.size,
          height: vars.sizeSmall.enabled.icon.size,
        },
      },
    },
  },
});

export default radio;
