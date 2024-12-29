import { dialog as vars } from "@seed-design/vars/component";
import { defineRecipe, enterAnimation, exitAnimation } from "./helper";
import { pseudo } from "./pseudo";

const dialog = defineRecipe({
  name: "dialog",
  slots: ["backdrop", "container", "content", "header", "footer", "action", "title", "description"],
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
      alignItems: "center",
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
      maxWidth: vars.base.enabled.content.maxWidth,
      margin: `auto ${vars.base.enabled.content.marginX}`,
      padding: `${vars.base.enabled.content.paddingY} ${vars.base.enabled.content.paddingX}`,
      borderRadius: vars.base.enabled.content.cornerRadius,

      [pseudo(":is([data-transition-state='exit-active'],[data-transition-state='exit-done'])")]:
        exitAnimation({
          timingFunction: vars.base.enabled.content.exitTimingFunction,
          duration: vars.base.enabled.content.exitDuration,
          opacity: vars.base.enabled.content.exitOpacity,
        }),
      [pseudo(":is([data-transition-state='enter-active'],[data-transition-state='enter-done'])")]:
        enterAnimation({
          timingFunction: vars.base.enabled.content.enterTimingFunction,
          duration: vars.base.enabled.content.enterDuration,
          opacity: vars.base.enabled.content.enterOpacity,
          scale: vars.base.enabled.content.enterScale,
        }),
    },
    header: {
      display: "flex",
      flexDirection: "column",

      gap: vars.base.enabled.header.gap,
    },
    title: {
      color: vars.base.enabled.title.color,
      fontSize: vars.base.enabled.title.fontSize,
      lineHeight: vars.base.enabled.title.lineHeight,
      fontWeight: vars.base.enabled.title.fontWeight,

      margin: 0,
    },
    description: {
      color: vars.base.enabled.description.color,
      fontSize: vars.base.enabled.description.fontSize,
      lineHeight: vars.base.enabled.description.lineHeight,
      fontWeight: vars.base.enabled.description.fontWeight,

      margin: 0,
      whiteSpace: "pre-wrap",
    },
    footer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "stretch",

      paddingTop: vars.base.enabled.footer.paddingTop,
      gap: vars.base.enabled.footer.gap,
    },
    action: {
      width: "initial",
      minWidth: `calc(50% - ${vars.base.enabled.footer.gap} / 2)`,
    },
  },
  variants: {
    footerLayout: {
      horizontal: {
        footer: {
          flexDirection: "row-reverse",
        },
      },
      vertical: {
        footer: {
          flexDirection: "column",
        },
      },
    },
  },
});

export default dialog;
