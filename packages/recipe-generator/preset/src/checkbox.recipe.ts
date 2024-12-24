import { checkbox as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { active, checked, disabled, pseudo, not } from "./pseudo";

const checkbox = defineRecipe({
  name: "checkbox",
  slots: ["root", "control", "icon", "label"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "flex-start",
      position: "relative",
      maxInlineSize: "100%",
      verticalAlign: "top",
      isolation: "isolate",
      cursor: "pointer",

      gap: vars.base.enabled.root.gap,

      [pseudo(disabled)]: {
        cursor: "not-allowed",
      },
    },
    control: {
      position: "relative",
      boxSizing: "border-box",
      flexShrink: 0,
    },
    icon: {
      display: "none",
      content: '""',
      position: "absolute",
      borderRadius: "100%",
      margin: "auto",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      textAlign: "center",
      overflow: "initial",
    },
    label: {
      color: vars.base.enabled.label.color,
    },
  },
  variants: {
    bold: {
      true: {
        label: {
          fontWeight: vars.base.bold.label.fontWeight,
        },
      },
      false: {},
    },
    indeterminate: {
      true: {},
      false: {},
    },
    variant: {
      square: {
        control: {
          borderWidth: vars.variantSquare.enabled.control.strokeWidth,
          borderStyle: "solid",
          borderColor: vars.variantSquare.enabled.control.strokeColor,

          [pseudo(checked)]: {
            background: vars.variantSquare.enabledSelected.control.color,
            borderWidth: 0,
          },
          [pseudo(active)]: {
            background: vars.variantSquare.pressed.control.color,
          },
          [pseudo(active, checked)]: {
            background: vars.variantSquare.pressedSelected.control.color,
          },
          [pseudo(disabled)]: {
            background: vars.variantSquare.disabled.control.color,
            borderColor: vars.variantSquare.disabled.control.strokeColor,
          },
          [pseudo(disabled, active)]: {
            background: vars.variantSquare.disabled.control.color,
          },
        },
        icon: {
          [pseudo(checked)]: {
            display: "block",
            color: vars.variantSquare.enabledSelected.icon.color,
          },
          [pseudo(disabled, checked)]: {
            display: "block",
            color: vars.variantSquare.disabledSelected.icon.color,
          },
        },
        label: {
          [pseudo(disabled)]: {
            color: vars.variantSquare.disabled.label.color,
          },
        },
      },
      ghost: {
        control: {
          background: "none",

          [pseudo(checked)]: {
            background: "none",
          },
          [pseudo(active)]: {
            background: vars.variantGhost.pressed.control.color,
          },
          [pseudo(active, checked)]: {
            background: vars.variantGhost.pressedSelected.control.color,
          },
          [pseudo(disabled, checked)]: {
            background: "none",
          },
          [pseudo(disabled, active)]: {
            background: "none",
          },
        },
        icon: {
          display: "block",
          color: vars.variantGhost.enabled.icon.color,

          [pseudo(checked)]: {
            color: vars.variantGhost.enabledSelected.icon.color,
          },
          [pseudo(disabled, checked)]: {
            color: vars.variantGhost.disabledSelected.icon.color,
          },
          [pseudo(disabled)]: {
            color: vars.variantGhost.disabled.icon.color,
          },
        },
        label: {
          [pseudo(disabled)]: {
            color: vars.variantGhost.disabled.label.color,
          },
        },
      },
    },
    size: {
      large: {
        root: {
          minHeight: vars.sizeLarge.enabled.root.minHeight,
        },
        control: {
          borderRadius: vars.sizeLarge.enabled.control.cornerRadius,
          width: vars.sizeLarge.enabled.control.size,
          height: vars.sizeLarge.enabled.control.size,
          margin: `calc((${vars.sizeLarge.enabled.root.minHeight} - ${vars.sizeLarge.enabled.control.size}) / 2) 0`, // 수직 위치 보정
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
          lineHeight: vars.sizeLarge.enabled.label.lineHeight,
          marginBlockStart: "calc(18px - 0.65625rem)", // 수직 위치 보정, 18 - label.lineHeight / 2
        },
      },
      medium: {
        root: {
          minHeight: vars.sizeMedium.enabled.root.minHeight,
        },
        control: {
          borderRadius: vars.sizeMedium.enabled.control.cornerRadius,
          width: vars.sizeMedium.enabled.control.size,
          height: vars.sizeMedium.enabled.control.size,
          margin: `calc((${vars.sizeMedium.enabled.root.minHeight} - ${vars.sizeMedium.enabled.control.size}) / 2) 0`, // 수직 위치 보정
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          lineHeight: vars.sizeMedium.enabled.label.lineHeight,
          marginBlockStart: "calc(16px - 0.59375rem)", // 수직 위치 보정, 16 - label.lineHeight / 2
        },
      },
      small: {
        root: {
          minHeight: vars.sizeSmall.enabled.root.minHeight,
        },
        control: {
          borderRadius: vars.sizeSmall.enabled.control.cornerRadius,
          width: vars.sizeSmall.enabled.control.size,
          height: vars.sizeSmall.enabled.control.size,
          margin: `calc((${vars.sizeSmall.enabled.root.minHeight} - ${vars.sizeSmall.enabled.control.size}) / 2) 0`, // 수직 위치 보정
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          lineHeight: vars.sizeSmall.enabled.label.lineHeight,
          marginBlockStart: "calc(14px - 0.5625rem)", // 수직 위치 보정, 14 - label.lineHeight / 2
        },
      },
    },
  },
  compoundVariants: [
    {
      size: "small",
      variant: "ghost",
      css: {
        icon: {
          width: vars.variantGhostSizeSmall.enabled.icon.size,
          height: vars.variantGhostSizeSmall.enabled.icon.size,
        },
      },
    },
    {
      size: "medium",
      variant: "ghost",
      css: {
        icon: {
          width: vars.variantGhostSizeMedium.enabled.icon.size,
          height: vars.variantGhostSizeMedium.enabled.icon.size,
        },
      },
    },
    {
      size: "large",
      variant: "ghost",
      css: {
        icon: {
          width: vars.variantGhostSizeLarge.enabled.icon.size,
          height: vars.variantGhostSizeLarge.enabled.icon.size,
        },
      },
    },
    {
      size: "small",
      variant: "square",
      css: {
        icon: {
          width: vars.variantSquareSizeSmall.enabled.icon.size,
          height: vars.variantSquareSizeSmall.enabled.icon.size,
        },
      },
    },
    {
      size: "medium",
      variant: "square",
      css: {
        icon: {
          width: vars.variantSquareSizeMedium.enabled.icon.size,
          height: vars.variantSquareSizeMedium.enabled.icon.size,
        },
      },
    },
    {
      size: "large",
      variant: "square",
      css: {
        icon: {
          width: vars.variantSquareSizeLarge.enabled.icon.size,
          height: vars.variantSquareSizeLarge.enabled.icon.size,
        },
      },
    },
  ],
  defaultVariants: {
    size: "medium",
    variant: "square",
    bold: false,
    indeterminate: false,
  },
});

export default checkbox;
