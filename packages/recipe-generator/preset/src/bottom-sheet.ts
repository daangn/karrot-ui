import { bottomSheet as vars } from "@seed-design/vars/component";
import { defineRecipe, enterAnimation, exitAnimation } from "./helper";
import { pseudo } from "./pseudo";

const bottomSheet = defineRecipe({
  name: "bottomSheet",
  slots: [
    "backdrop",
    "container",
    "content",
    "header",
    "footer",
    "title",
    "description",
    "closeButton",
    "closeIcon",
  ],
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
    header: {
      display: "flex",
      flexDirection: "column",

      gap: vars.base.enabled.header.gap,
      paddingInline: vars.base.enabled.header.paddingX,
      paddingTop: vars.base.enabled.header.paddingTop,
      paddingBottom: vars.base.enabled.header.paddingBottom,
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
      flexDirection: "column",

      paddingInline: vars.base.enabled.footer.paddingX,
      paddingTop: vars.base.enabled.footer.paddingTop,
      paddingBottom: vars.base.enabled.footer.paddingBottom,
    },
    closeButton: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      top: vars.base.enabled.closeButton.fromTop,
      right: vars.base.enabled.closeButton.fromRight,
      borderRadius: vars.base.enabled.closeButton.cornerRadius,
      background: vars.base.enabled.closeButton.color,
      width: vars.base.enabled.closeButton.size,
      height: vars.base.enabled.closeButton.size,

      "&:after": {
        content: '""',
        position: "absolute",
        inset: `calc((${vars.base.enabled.closeButton.size} - ${vars.base.enabled.closeButton.targetSize}) / 2)`,
      },
    },
    closeIcon: {
      flexShrink: 0,

      color: vars.base.enabled.closeIcon.color,
      width: vars.base.enabled.closeIcon.size,
      height: vars.base.enabled.closeIcon.size,
    },
  },
  variants: {},
});

export default bottomSheet;
