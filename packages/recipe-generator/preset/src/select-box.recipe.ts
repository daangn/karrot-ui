import { selectBox as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { pseudo, active, checked } from "./pseudo";

const selectBox = defineRecipe({
  name: "selectBox",
  slots: ["root", "box", "content", "control", "label", "description"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: vars.base.enabled.root.gap,

      width: "100%",
    },
    box: {
      // XXX: css reset 생기면 불필요할 가능성
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
        backgroundColor: vars.base.pressed.box.color,
      },

      [pseudo(checked)]: {
        backgroundColor: vars.base.selected.box.color,
      },

      [pseudo(checked, active)]: {
        backgroundColor: vars.base.selectedPressed.box.color,
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",

      gap: vars.base.enabled.content.gap,
    },
    control: {
      flex: "none",

      marginBlock: vars.base.enabled.control.marginY,
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

export default selectBox;
