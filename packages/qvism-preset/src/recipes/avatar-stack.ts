import { avatarStack as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { not, pseudo } from "../utils/pseudo";

const avatarStack = defineRecipe({
  name: "avatar-stack",
  slots: ["root", "item"],
  base: {
    root: {
      boxSizing: "border-box",
      display: "inline-flex",
      alignItems: "center",
    },
    item: {
      display: "block",
      borderRadius: vars.base.enabled.item.cornerRadius,
      backgroundClip: "padding-box",
    },
  },
  variants: {
    size: {
      20: {
        item: {
          [pseudo(not(":first-child"))]: {
            marginLeft: vars.size20.enabled.root.gap,
          },
          clipPath: `inset(-${vars.size20.enabled.item.strokeWidth})`,
          boxShadow: `0 0 0 ${vars.size20.enabled.item.strokeWidth} ${vars.base.enabled.item.strokeColor}`,
        },
      },
      24: {
        item: {
          [pseudo(not(":first-child"))]: {
            marginLeft: vars.size24.enabled.root.gap,
          },
          clipPath: `inset(-${vars.size24.enabled.item.strokeWidth})`,
          boxShadow: `0 0 0 ${vars.size24.enabled.item.strokeWidth} ${vars.base.enabled.item.strokeColor}`,
        },
      },
      36: {
        item: {
          [pseudo(not(":first-child"))]: {
            marginLeft: vars.size36.enabled.root.gap,
          },
          clipPath: `inset(-${vars.size36.enabled.item.strokeWidth})`,
          boxShadow: `0 0 0 ${vars.size36.enabled.item.strokeWidth} ${vars.base.enabled.item.strokeColor}`,
        },
      },
      48: {
        item: {
          [pseudo(not(":first-child"))]: {
            marginLeft: vars.size48.enabled.root.gap,
          },
          clipPath: `inset(-${vars.size48.enabled.item.strokeWidth})`,
          boxShadow: `0 0 0 ${vars.size48.enabled.item.strokeWidth} ${vars.base.enabled.item.strokeColor}`,
        },
      },
      64: {
        item: {
          [pseudo(not(":first-child"))]: {
            marginLeft: vars.size64.enabled.root.gap,
          },
          clipPath: `inset(-${vars.size64.enabled.item.strokeWidth})`,
          boxShadow: `0 0 0 ${vars.size64.enabled.item.strokeWidth} ${vars.base.enabled.item.strokeColor}`,
        },
      },
    },
  },
  defaultVariants: {
    size: 48,
  },
});

export default avatarStack;
