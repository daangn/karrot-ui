import { radio as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { disabled, pseudo } from "./pseudo";
import { radioControl as controlVars } from "@seed-design/vars/component";

const radio = defineRecipe({
  name: "radio",
  slots: ["root", "control", "label"],
  base: {
    root: {
      display: "flex",

      cursor: "pointer",

      gap: vars.base.enabled.root.gap,

      [pseudo(disabled)]: {
        cursor: "not-allowed",
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
          marginBlockStart: `calc((${vars.sizeLarge.enabled.root.minHeight} - ${controlVars.sizeLarge.enabled.root.size}) / 2)`,
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
          marginBlockStart: vars.sizeLarge.enabled.label.marginYStart,

          // XXX
          lineHeight: "1.3125rem",
        },
      },
      medium: {
        root: {
          minHeight: vars.sizeMedium.enabled.root.minHeight,
        },
        control: {
          marginBlockStart: `calc((${vars.sizeMedium.enabled.root.minHeight} - ${controlVars.sizeMedium.enabled.root.size}) / 2)`,
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
          marginBlockStart: vars.sizeMedium.enabled.label.marginYStart,

          // XXX
          lineHeight: "1.1875rem",
        },
      },
      small: {
        root: {
          minHeight: vars.sizeSmall.enabled.root.minHeight,
        },
        control: {
          marginBlockStart: `calc((${vars.sizeSmall.enabled.root.minHeight} - ${controlVars.sizeSmall.enabled.root.size}) / 2)`,
        },
        label: {
          fontSize: vars.sizeSmall.enabled.label.fontSize,
          marginBlockStart: vars.sizeSmall.enabled.label.marginYStart,

          // XXX
          lineHeight: "1.125rem",
        },
      },
    },
  },
});

export default radio;
