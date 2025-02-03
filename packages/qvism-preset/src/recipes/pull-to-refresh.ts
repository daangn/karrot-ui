import { vars } from "@seed-design/vars";
import { defineRecipe } from "../utils/define-recipe";

const pullToRefresh = defineRecipe({
  name: "pullToRefresh",
  slots: ["root", "indicator"],
  base: {
    root: {
      "--ptr-size": "44px",
      "--ptr-transition-duration": vars.$duration.s6,
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  variants: {},
  defaultVariants: {},
});

export default pullToRefresh;
