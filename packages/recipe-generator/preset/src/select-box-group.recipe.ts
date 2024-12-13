import { selectBoxGroup as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { pseudo, active, checked } from "./pseudo";

const selectBoxGroup = defineRecipe({
  name: "selectBoxGroup",
  slots: [
    "root",
    "box",
    "content",
    "label",
    "description",
    "checkboxControl",
    "checkboxIcon",
    "radioControl",
    "radioIcon",
  ],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: vars.base.enabled.root.gap,

      width: "100%",
    },
    box: {
      cursor: "pointer",
      borderStyle: "solid",
      boxSizing: "border-box",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: vars.base.enabled.box.gap,

      paddingInline: vars.base.enabled.box.paddingX,
      paddingBlock: vars.base.enabled.box.paddingY,

      borderWidth: vars.base.enabled.box.strokeWidth,
      borderColor: vars.base.enabled.box.strokeColor,

      borderRadius: vars.base.enabled.box.cornerRadius,

      [pseudo(active)]: {
        backgroundColor: vars.base.enabledPressed.box.color,
      },

      [pseudo(checked)]: {
        backgroundColor: vars.base.enabledSelected.box.color,
      },

      [pseudo(checked, active)]: {
        backgroundColor: vars.base.enabledSelectedPressed.box.color,
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",

      gap: vars.base.enabled.content.gap,
    },
    checkboxControl: {
      flex: "none",

      boxSizing: "border-box",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: vars.base.enabled.checkboxControl.size,
      height: vars.base.enabled.checkboxControl.size,

      margin: vars.base.enabled.checkboxControl.margin,

      backgroundColor: vars.base.enabled.checkboxControl.color,

      borderStyle: "solid",
      borderWidth: vars.base.enabled.checkboxControl.strokeWidth,
      borderColor: vars.base.enabled.checkboxControl.strokeColor,

      borderRadius: vars.base.enabled.checkboxControl.cornerRadius,

      [pseudo(active)]: {
        backgroundColor: vars.base.enabledPressed.checkboxControl.color,
      },

      [pseudo(checked)]: {
        backgroundColor: vars.base.enabledSelected.checkboxControl.color,

        borderWidth: vars.base.enabledSelected.checkboxControl.strokeWidth,
      },

      [pseudo(checked, active)]: {
        backgroundColor: vars.base.enabledSelectedPressed.checkboxControl.color,
      },
    },
    checkboxIcon: {
      width: vars.base.enabled.checkboxIcon.size,
      height: vars.base.enabled.checkboxIcon.size,

      display: "none",

      [pseudo(checked)]: {
        display: "block",

        color: vars.base.enabledSelected.checkboxIcon.color,
      },
    },
    radioControl: {
      flex: "none",

      boxSizing: "border-box",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: vars.base.enabled.radioControl.size,
      height: vars.base.enabled.radioControl.size,

      backgroundColor: vars.base.enabled.radioControl.color,

      borderStyle: "solid",
      borderWidth: vars.base.enabled.radioControl.strokeWidth,
      borderColor: vars.base.enabled.radioControl.strokeColor,

      borderRadius: vars.base.enabled.radioControl.cornerRadius,

      [pseudo(active)]: {
        backgroundColor: vars.base.enabledPressed.radioControl.color,
      },

      [pseudo(checked)]: {
        backgroundColor: vars.base.enabledSelected.radioControl.color,

        borderWidth: vars.base.enabledSelected.radioControl.strokeWidth,
      },

      [pseudo(checked, active)]: {
        backgroundColor: vars.base.enabledSelectedPressed.radioControl.color,
      },
    },
    radioIcon: {
      width: vars.base.enabled.radioIcon.size,
      height: vars.base.enabled.radioIcon.size,

      borderRadius: vars.base.enabled.radioIcon.cornerRadius,

      display: "none",

      [pseudo(checked)]: {
        display: "block",

        backgroundColor: vars.base.enabledSelected.radioIcon.color,
      },
    },
    label: {
      color: vars.base.enabled.label.color,

      fontWeight: vars.base.enabled.label.fontWeight,
      fontSize: vars.base.enabled.label.fontSize,
      lineHeight: vars.base.enabled.label.lineHeight,
    },
    description: {
      color: vars.base.enabled.description.color,

      fontWeight: vars.base.enabled.description.fontWeight,
      fontSize: vars.base.enabled.description.fontSize,
      lineHeight: vars.base.enabled.description.lineHeight,
    },
  },
  variants: {},
});

export default selectBoxGroup;
