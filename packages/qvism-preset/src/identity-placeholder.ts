import { identityPlaceholder as vars } from "@seed-design/vars/component";
import { defineRecipe } from "./helper";

const identityPlaceholder = defineRecipe({
  name: "identityPlaceholder",
  slots: ["root", "image"],
  base: {
    root: {
      boxSizing: "border-box",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      width: "100%",
      height: "100%",

      backgroundColor: vars.base.enabled.root.color,
    },
    image: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      overflow: "hidden",

      fill: vars.base.enabled.image.color,
    },
  },
  variants: {
    identity: {
      person: {},
      // business: {},
    },
  },
  defaultVariants: {
    identity: "person",
  },
});

export default identityPlaceholder;
