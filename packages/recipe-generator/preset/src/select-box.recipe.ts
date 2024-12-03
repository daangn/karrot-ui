import { selectBox as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";
import { pseudo, active, checked } from "./pseudo";

const selectBox = defineRecipe({
  name: "selectBox",
  slots: ["root", "content", "control", "label", "description"],
  base: {
    root: {
      // XXX: css reset 생기면 불필요할 가능성
      cursor: "pointer",
      borderStyle: "solid",
      boxSizing: "border-box",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: vars.base.enabled.root.gap,
      width: "100%",

      paddingInline: vars.base.enabled.root.paddingX,
      paddingBlock: vars.base.enabled.root.paddingY,

      borderWidth: vars.base.enabled.root.strokeWidth,
      borderColor: vars.base.enabled.root.strokeColor,

      borderRadius: vars.base.enabled.root.cornerRadius,

      [pseudo(active)]: {
        backgroundColor: vars.base.pressed.root.color,
      },

      [pseudo(checked)]: {
        backgroundColor: vars.base.selected.root.color,
      },

      [pseudo(checked, active)]: {
        backgroundColor: vars.base.selectedPressed.root.color,
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",

      gap: vars.base.enabled.content.gap,
    },
    control: {
      flex: "none",
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
