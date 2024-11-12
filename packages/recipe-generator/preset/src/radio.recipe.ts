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

      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },
    },
    control: {
      backgroundColor: vars.base.enabled.control.color,

      borderColor: vars.base.enabled.control.strokeColor,

      borderRadius: vars.base.enabled.control.cornerRadius,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",

      [pseudo(active)]: {
        backgroundColor: vars.base.enabledPressed.control.color,
      },
      [pseudo(checked)]: {
        borderWidth: vars.base.enabledSelected.control.strokeWidth,
        backgroundColor: vars.base.enabledSelected.control.color,
      },
      [pseudo(active, checked)]: {
        backgroundColor: vars.base.enabledSelectedPressed.control.color,
      },

      [pseudo(disabled)]: {
        backgroundColor: vars.base.disabled.control.color,
      },
      [pseudo(disabled, checked)]: {
        backgroundColor: "transparent",

        borderColor: vars.base.disabledSelected.control.strokeColor,
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
  defaultVariants: {
    size: "medium",
    fontWeight: "regular",
  },
  variants: {
    fontWeight: {
      regular: {
        label: {
          fontWeight: vars.fontWeightRegular.enabled.label.fontWeight,
        },
      },
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

          borderWidth: vars.sizeLarge.enabled.control.strokeWidth,

          [pseudo(disabled, checked)]: {
            borderWidth: vars.sizeLarge.disabledSelected.control.strokeWidth,
          },
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
          marginBlockStart: vars.sizeLarge.enabled.label.marginYStart,

          // XXX
          lineHeight: "1.3125rem",
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

          borderWidth: vars.sizeMedium.enabled.control.strokeWidth,

          [pseudo(disabled, checked)]: {
            borderWidth: vars.sizeMedium.disabledSelected.control.strokeWidth,
          },
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          marginBlockStart: vars.sizeMedium.enabled.label.marginYStart,

          // XXX
          lineHeight: "1.1875rem",
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

          borderWidth: vars.sizeSmall.enabled.control.strokeWidth,

          [pseudo(disabled, checked)]: {
            borderWidth: vars.sizeSmall.disabledSelected.control.strokeWidth,
          },
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          marginBlockStart: vars.sizeSmall.enabled.label.marginYStart,

          // XXX
          lineHeight: "1.125rem",
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
