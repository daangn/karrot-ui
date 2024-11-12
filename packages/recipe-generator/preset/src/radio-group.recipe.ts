import { defineRecipe } from "./helper";

const radioGroup = defineRecipe({
  name: "radioGroup",
  slots: ["root", "label", "radios"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    radios: {
      display: "flex",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
  variants: {
    orientation: {
      horizontal: {
        radios: {
          flexDirection: "row",
        },
      },
      vertical: {
        radios: {
          flexDirection: "column",
        },
      },
    },
  },
});

export default radioGroup;
