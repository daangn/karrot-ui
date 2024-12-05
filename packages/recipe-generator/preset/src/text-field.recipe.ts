import { textField as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { pseudo, focus, disabled, not, readOnly, invalid } from "./pseudo";

const textField = defineRecipe({
  name: "textField",
  slots: [
    "root",
    "header",
    "label",
    "indicator",
    "input",
    "inputText",
    "prefixText",
    "prefixIcon",
    "suffixText",
    "suffixIcon",
    "footer",
    "description",
    "errorMessage",
    "errorIcon",
    "characterCount",
    "currentCharacterCount",
    "maxCharacterCount",
  ],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",

      width: "100%",
    },
    header: {
      marginBlockEnd: vars.base.enabled.header.marginYEnd,
    },
    label: {
      color: vars.base.enabled.label.color,
      fontWeight: vars.base.enabled.label.fontWeight,
    },
    indicator: {
      color: vars.base.enabled.indicator.color,
      fontWeight: vars.base.enabled.indicator.fontWeight,
    },
    input: {
      display: "flex",
      alignItems: "center",

      backgroundColor: vars.base.enabled.input.color,
      borderWidth: vars.base.enabled.input.strokeWidth,
      borderColor: vars.base.enabled.input.strokeColor,

      // XXX: CSS reset 들어오면 제거될 수 있음
      borderStyle: "solid",

      [pseudo(not(readOnly), focus)]: {
        borderColor: vars.base.focused.input.strokeColor,
      },

      [pseudo(disabled)]: {
        backgroundColor: vars.base.disabled.input.color,
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
    prefixText: {
      color: vars.base.enabled.prefixText.color,

      [pseudo(disabled)]: {
        color: vars.base.disabled.prefixText.color,
      },
    },
    prefixIcon: {
      color: vars.base.enabled.prefixIcon.color,

      [pseudo(disabled)]: {
        color: vars.base.disabled.prefixIcon.color,
      },
    },
    suffixText: {
      color: vars.base.enabled.suffixText.color,

      [pseudo(disabled)]: {
        color: vars.base.disabled.suffixText.color,
      },
    },
    suffixIcon: {
      color: vars.base.enabled.suffixIcon.color,

      [pseudo(disabled)]: {
        color: vars.base.disabled.suffixIcon.color,
      },
    },
    inputText: {
      // XXX: CSS reset 들어오면 제거될 수 있음
      font: "inherit",
      border: "none",
      paddingInline: 0,
      background: "none",
      [pseudo(focus)]: {
        outline: "none",
      },

      resize: "none",

      flexGrow: 1,

      color: vars.base.enabled.inputText.color,

      [pseudo("::placeholder")]: {
        color: vars.base.enabled.inputPlaceholder.color,
      },

      [pseudo(disabled)]: {
        color: vars.base.disabled.inputText.color,
      },

      [pseudo(disabled, "::placeholder")]: {
        color: vars.base.disabled.inputPlaceholder.color,
      },
    },
    footer: {
      display: "flex",
      gap: vars.base.enabled.footer.gap,
      alignItems: "flex-start",
      justifyContent: "space-between",

      marginBlockStart: vars.base.enabled.footer.marginYStart,
    },
    description: {
      fontWeight: vars.base.enabled.description.fontWeight,
      color: vars.base.enabled.description.color,
    },
    errorMessage: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: vars.base.enabled.errorMessage.gap,

      color: vars.base.enabled.errorMessage.color,
    },
    errorIcon: {
      flex: "none",
    },
    characterCount: {
      flex: "none",

      marginInlineStart: "auto",

      height: vars.base.enabled.characterCount.size,
      lineHeight: vars.base.enabled.characterCount.lineHeight,
    },
    currentCharacterCount: {
      color: vars.base.enabled.currentCharacterCount.color,
      fontWeight: vars.base.enabled.currentCharacterCount.fontWeight,
      fontSize: vars.base.enabled.currentCharacterCount.fontSize,

      [pseudo(`[data-grapheme-count="0"]`)]: {
        color: vars.base.enabled.maxCharacterCount.color,
      },
    },
    maxCharacterCount: {
      color: vars.base.enabled.maxCharacterCount.color,
      fontWeight: vars.base.enabled.maxCharacterCount.fontWeight,
      fontSize: vars.base.enabled.maxCharacterCount.fontSize,
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
        indicator: {
          fontSize: vars.sizeXlarge.enabled.indicator.fontSize,
          marginInlineStart: vars.sizeXlarge.enabled.indicator.marginXStart,
        },
        input: {
          minHeight: vars.sizeXlarge.enabled.input.minHeight,
          borderRadius: vars.sizeXlarge.enabled.input.cornerRadius,
          gap: vars.sizeXlarge.enabled.input.gap,

          paddingInline: vars.sizeXlarge.enabled.input.paddingX,
        },
        inputText: {
          paddingBlock: vars.sizeXlarge.enabled.inputText.paddingY,

          fontSize: vars.sizeXlarge.enabled.inputText.fontSize,
          lineHeight: vars.sizeXlarge.enabled.inputText.lineHeight,
        },
        prefixText: {
          fontSize: vars.sizeXlarge.enabled.prefixText.fontSize,
          lineHeight: vars.sizeXlarge.enabled.prefixText.lineHeight,
        },
        prefixIcon: {
          width: vars.sizeXlarge.enabled.prefixIcon.size,
          height: vars.sizeXlarge.enabled.prefixIcon.size,
        },
        suffixText: {
          fontSize: vars.sizeXlarge.enabled.suffixText.fontSize,
          lineHeight: vars.sizeXlarge.enabled.suffixText.lineHeight,
        },
        suffixIcon: {
          width: vars.sizeXlarge.enabled.suffixIcon.size,
          height: vars.sizeXlarge.enabled.suffixIcon.size,
        },
        footer: {
          minHeight: vars.sizeXlarge.enabled.footer.minHeight,
        },
        description: {
          fontSize: vars.sizeXlarge.enabled.description.fontSize,
          lineHeight: vars.sizeXlarge.enabled.description.lineHeight,
        },
        errorMessage: {
          fontSize: vars.sizeXlarge.enabled.errorMessage.fontSize,
          lineHeight: vars.sizeXlarge.enabled.errorMessage.lineHeight,
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
        indicator: {
          fontSize: vars.sizeLarge.enabled.indicator.fontSize,
          marginInlineStart: vars.sizeLarge.enabled.indicator.marginXStart,
        },
        input: {
          minHeight: vars.sizeLarge.enabled.input.minHeight,
          borderRadius: vars.sizeLarge.enabled.input.cornerRadius,
          gap: vars.sizeLarge.enabled.input.gap,

          paddingInline: vars.sizeLarge.enabled.input.paddingX,
        },
        inputText: {
          paddingBlock: vars.sizeLarge.enabled.inputText.paddingY,

          fontSize: vars.sizeLarge.enabled.inputText.fontSize,
          lineHeight: vars.sizeLarge.enabled.inputText.lineHeight,
        },
        prefixText: {
          fontSize: vars.sizeLarge.enabled.prefixText.fontSize,
          lineHeight: vars.sizeLarge.enabled.prefixText.lineHeight,
        },
        prefixIcon: {
          width: vars.sizeLarge.enabled.prefixIcon.size,
          height: vars.sizeLarge.enabled.prefixIcon.size,
        },
        suffixText: {
          fontSize: vars.sizeLarge.enabled.suffixText.fontSize,
          lineHeight: vars.sizeLarge.enabled.suffixText.lineHeight,
        },
        suffixIcon: {
          width: vars.sizeLarge.enabled.suffixIcon.size,
          height: vars.sizeLarge.enabled.suffixIcon.size,
        },
        footer: {
          minHeight: vars.sizeLarge.enabled.footer.minHeight,
        },
        description: {
          fontSize: vars.sizeLarge.enabled.description.fontSize,
          lineHeight: vars.sizeLarge.enabled.description.lineHeight,
        },
        errorMessage: {
          fontSize: vars.sizeLarge.enabled.errorMessage.fontSize,
          lineHeight: vars.sizeLarge.enabled.errorMessage.lineHeight,
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
        indicator: {
          fontSize: vars.sizeMedium.enabled.indicator.fontSize,
          marginInlineStart: vars.sizeMedium.enabled.indicator.marginXStart,
        },
        input: {
          minHeight: vars.sizeMedium.enabled.input.minHeight,
          borderRadius: vars.sizeMedium.enabled.input.cornerRadius,
          gap: vars.sizeMedium.enabled.input.gap,

          paddingInline: vars.sizeMedium.enabled.input.paddingX,
        },
        inputText: {
          paddingBlock: vars.sizeMedium.enabled.inputText.paddingY,

          fontSize: vars.sizeMedium.enabled.inputText.fontSize,
          lineHeight: vars.sizeMedium.enabled.inputText.lineHeight,
        },
        prefixText: {
          fontSize: vars.sizeMedium.enabled.prefixText.fontSize,
          lineHeight: vars.sizeMedium.enabled.prefixText.lineHeight,
        },
        prefixIcon: {
          width: vars.sizeMedium.enabled.prefixIcon.size,
          height: vars.sizeMedium.enabled.prefixIcon.size,
        },
        suffixText: {
          fontSize: vars.sizeMedium.enabled.suffixText.fontSize,
          lineHeight: vars.sizeMedium.enabled.suffixText.lineHeight,
        },
        suffixIcon: {
          width: vars.sizeMedium.enabled.suffixIcon.size,
          height: vars.sizeMedium.enabled.suffixIcon.size,
        },
        footer: {
          minHeight: vars.sizeMedium.enabled.footer.minHeight,
        },
        description: {
          fontSize: vars.sizeMedium.enabled.description.fontSize,
          lineHeight: vars.sizeMedium.enabled.description.lineHeight,
        },
        errorMessage: {
          fontSize: vars.sizeMedium.enabled.errorMessage.fontSize,
          lineHeight: vars.sizeMedium.enabled.errorMessage.lineHeight,
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
