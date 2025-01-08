import { actionSheet as vars } from "@seed-design/vars/component";
import { defineRecipe } from "../utils/define-recipe";
import { enterAnimation, exitAnimation } from "../utils/animation";
import { pseudo } from "../utils/pseudo";

const actionSheet = defineRecipe({
  name: "actionSheet",
  slots: ["backdrop", "container", "content", "list", "group", "footer"],
  base: {
    backdrop: {
      position: "fixed",
      inset: 0,
      background: vars.base.enabled.backdrop.color,

      [pseudo(":is([data-transition-state='exit-active'],[data-transition-state='exit-done'])")]:
        exitAnimation({
          timingFunction: vars.base.enabled.backdrop.exitTimingFunction,
          duration: vars.base.enabled.backdrop.exitDuration,
          opacity: vars.base.enabled.backdrop.exitOpacity,
        }),
      [pseudo(":is([data-transition-state='enter-active'],[data-transition-state='enter-done'])")]:
        enterAnimation({
          timingFunction: vars.base.enabled.backdrop.enterTimingFunction,
          duration: vars.base.enabled.backdrop.enterDuration,
          opacity: vars.base.enabled.backdrop.enterOpacity,
        }),
    },
    container: {
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      inset: 0,
    },
    content: {
      position: "relative",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      boxSizing: "border-box",
      wordBreak: "break-all",

      background: vars.base.enabled.content.color,
      paddingInline: vars.base.enabled.content.paddingX,
      paddingBlock: vars.base.enabled.content.paddingY,
      borderTopLeftRadius: vars.base.enabled.content.cornerTopRadius,
      borderTopRightRadius: vars.base.enabled.content.cornerTopRadius,

      [pseudo(":is([data-transition-state='exit-active'],[data-transition-state='exit-done'])")]:
        exitAnimation({
          timingFunction: vars.base.enabled.content.exitTimingFunction,
          duration: vars.base.enabled.content.exitDuration,
          translateY: "100%",
        }),
      [pseudo(":is([data-transition-state='enter-active'],[data-transition-state='enter-done'])")]:
        enterAnimation({
          timingFunction: vars.base.enabled.content.enterTimingFunction,
          duration: vars.base.enabled.content.enterDuration,
          translateY: "100%",
        }),
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",

      gap: vars.base.enabled.list.gap,
    },
    group: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      overflow: "hidden",

      borderRadius: vars.base.enabled.group.cornerRadius,
    },
    footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",

      paddingTop: vars.base.enabled.footer.paddingTop,
    },
  },
  variants: {},
  defaultVariants: {},
});

export default actionSheet;
