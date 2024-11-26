import { textField as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { pseudo, focus, disabled, not, readOnly, invalid } from "./pseudo";

const textField = defineRecipe({
  name: "textField",
  slots: [
    "root",
    "header",
    "label",
    "spacer",
    "indicator",
    "content",
    "input",
    "description",
    "errorIcon",
  ],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: vars.base.enabled.root.gap,
    },
    label: {
      color: vars.base.enabled.label.color,
      fontWeight: vars.base.enabled.label.fontWeight,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: vars.base.enabled.content.gap,
    },
    input: {
      backgroundColor: vars.base.enabled.input.color,
      borderWidth: vars.base.enabled.input.strokeWidth,
      borderColor: vars.base.enabled.input.strokeColor,

      color: vars.base.enabled.inputText.color,

      // XXX: CSS reset 들어오면 제거될 수 있음
      [pseudo(focus)]: {
        outline: "none",
      },

      [pseudo("::placeholder")]: {
        color: vars.base.enabled.placeholder.color,
      },

      [pseudo(not(readOnly), focus)]: {
        borderColor: vars.base.focused.input.strokeColor,
      },

      [pseudo(disabled)]: {
        backgroundColor: vars.base.disabled.input.color,
        color: vars.base.disabled.inputText.color,
      },

      [pseudo(disabled, "::placeholder")]: {
        color: vars.base.disabled.placeholder.color,
      },

      [pseudo(readOnly)]: {
        backgroundColor: vars.base.readOnly.input.color,
      },

      [pseudo(invalid)]: {
        backgroundColor: vars.base.invalid.input.color,
        borderColor: vars.base.invalid.input.strokeColor,
      },

      [pseudo(invalid, focus)]: {
        backgroundColor: vars.base.enabled.input.color,
      },
    },
    description: {
      display: "flex",
      flexDirection: "row",
      gap: vars.base.enabled.description.gap,
      alignItems: "center",

      color: vars.base.enabled.description.color,
      fontWeight: vars.base.enabled.description.fontWeight,

      [pseudo(invalid)]: {
        color: vars.base.invalid.description.color,
      },
    },
    errorIcon: {
      flex: "none",
    },
  },
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      xlarge: {
        header: {
          lineHeight: vars.sizeXlarge.enabled.header.lineHeight,
        },
        label: {
          fontSize: vars.sizeXlarge.enabled.label.fontSize,
        },
        spacer: {
          fontSize: vars.sizeXlarge.enabled.spacer.fontSize,
          width: vars.sizeXlarge.enabled.spacer.size,
        },
        indicator: {
          fontSize: vars.sizeXlarge.enabled.indicator.fontSize,
        },
        input: {
          height: vars.sizeXlarge.enabled.input.size,
          borderRadius: vars.sizeXlarge.enabled.input.cornerRadius,
          gap: vars.sizeXlarge.enabled.input.gap,
          paddingInline: vars.sizeXlarge.enabled.input.paddingX,
          paddingBlock: vars.sizeXlarge.enabled.input.paddingY,

          fontSize: vars.sizeXlarge.enabled.inputText.fontSize,
          lineHeight: vars.sizeXlarge.enabled.inputText.lineHeight,
        },
        description: {
          fontSize: vars.sizeXlarge.enabled.description.fontSize,
          lineHeight: vars.sizeXlarge.enabled.description.lineHeight,
        },
        errorIcon: {
          width: vars.sizeXlarge.enabled.errorIcon.size,
          height: vars.sizeXlarge.enabled.errorIcon.size,
        },
      },
      large: {
        header: {
          lineHeight: vars.sizeLarge.enabled.header.lineHeight,
        },
        label: {
          fontSize: vars.sizeLarge.enabled.label.fontSize,
        },
        spacer: {
          fontSize: vars.sizeLarge.enabled.spacer.fontSize,
          width: vars.sizeLarge.enabled.spacer.size,
        },
        indicator: {
          fontSize: vars.sizeLarge.enabled.indicator.fontSize,
        },
        input: {
          height: vars.sizeLarge.enabled.input.size,
          borderRadius: vars.sizeLarge.enabled.input.cornerRadius,
          gap: vars.sizeLarge.enabled.input.gap,
          paddingInline: vars.sizeLarge.enabled.input.paddingX,
          paddingBlock: vars.sizeLarge.enabled.input.paddingY,

          fontSize: vars.sizeLarge.enabled.inputText.fontSize,
          lineHeight: vars.sizeLarge.enabled.inputText.lineHeight,
        },
        description: {
          fontSize: vars.sizeLarge.enabled.description.fontSize,
          lineHeight: vars.sizeLarge.enabled.description.lineHeight,
        },
        errorIcon: {
          width: vars.sizeLarge.enabled.errorIcon.size,
          height: vars.sizeLarge.enabled.errorIcon.size,
        },
      },
      medium: {
        header: {
          lineHeight: vars.sizeMedium.enabled.header.lineHeight,
        },
        label: {
          fontSize: vars.sizeMedium.enabled.label.fontSize,
        },
        spacer: {
          fontSize: vars.sizeMedium.enabled.spacer.fontSize,
          width: vars.sizeMedium.enabled.spacer.size,
        },
        indicator: {
          fontSize: vars.sizeMedium.enabled.indicator.fontSize,
        },
        input: {
          height: vars.sizeMedium.enabled.input.size,
          borderRadius: vars.sizeMedium.enabled.input.cornerRadius,
          gap: vars.sizeMedium.enabled.input.gap,
          paddingInline: vars.sizeMedium.enabled.input.paddingX,
          paddingBlock: vars.sizeMedium.enabled.input.paddingY,

          fontSize: vars.sizeMedium.enabled.inputText.fontSize,
          lineHeight: vars.sizeMedium.enabled.inputText.lineHeight,
        },
        description: {
          fontSize: vars.sizeMedium.enabled.description.fontSize,
          lineHeight: vars.sizeMedium.enabled.description.lineHeight,
        },
        errorIcon: {
          width: vars.sizeMedium.enabled.errorIcon.size,
          height: vars.sizeMedium.enabled.errorIcon.size,
        },
      },
    },
  },
});

export default textField;
