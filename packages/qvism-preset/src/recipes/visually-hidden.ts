import { defineRecipe } from "../utils/define-recipe";

const visuallyHidden = defineRecipe({
  name: "visuallyHidden",
  slots: ["root"],
  base: {
    root: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px",
    },
  },
  variants: {},
  defaultVariants: {},
});

export default visuallyHidden;
