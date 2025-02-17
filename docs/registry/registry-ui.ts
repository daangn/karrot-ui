import type { RegistryUI } from "./schema";

export const registryUI: RegistryUI = [
  {
    name: "app-screen",
    files: ["ui:app-screen.tsx", "ui:app-bar.tsx"],
    innerDependencies: ["ui:pull-to-refresh"],
    dependencies: ["@seed-design/react", "@seed-design/stackflow"],
  },
  {
    name: "error-state",
    files: ["ui:error-state.tsx"],
    innerDependencies: ["ui:action-button"],
    dependencies: ["@seed-design/react"],
  },
  {
    name: "text",
    files: ["ui:text.tsx"],
    dependencies: ["@seed-design/react"],
  },
  {
    name: "manner-temp-badge",
    files: ["ui:manner-temp-badge.tsx"],
    innerDependencies: ["lib:manner-temp-level"],
    dependencies: ["@seed-design/react"],
  },
  {
    name: "alert-dialog",
    innerDependencies: ["ui:action-button"],
    dependencies: ["@seed-design/stackflow"],
    files: ["ui:alert-dialog.tsx"],
  },
  {
    name: "bottom-sheet",
    dependencies: ["@seed-design/react"],
    files: ["ui:bottom-sheet.tsx"],
  },
  {
    name: "action-sheet",
    dependencies: ["@seed-design/react"],
    files: ["ui:action-sheet.tsx"],
  },
  {
    name: "extended-action-sheet",
    dependencies: ["@seed-design/react"],
    files: ["ui:extended-action-sheet.tsx"],
  },
  {
    name: "avatar",
    innerDependencies: ["ui:identity-placeholder"],
    dependencies: ["@seed-design/react"],
    files: ["ui:avatar.tsx"],
  },
  {
    name: "pull-to-refresh",
    dependencies: ["@seed-design/react"],
    innerDependencies: ["ui:progress-circle"],
    files: ["ui:pull-to-refresh.tsx"],
  },
  {
    name: "loading-indicator",
    dependencies: ["@seed-design/react"],
    innerDependencies: ["ui:progress-circle"],
    files: ["ui:loading-indicator.tsx"],
  },
  {
    name: "action-button",
    dependencies: ["@seed-design/react"],
    innerDependencies: ["ui:loading-indicator"],
    files: ["ui:action-button.tsx"],
  },
  {
    name: "toggle-button",
    dependencies: ["@seed-design/react"],
    innerDependencies: ["ui:loading-indicator"],
    files: ["ui:toggle-button.tsx"],
  },
  {
    name: "reaction-button",
    dependencies: ["@seed-design/react"],
    innerDependencies: ["ui:loading-indicator"],
    files: ["ui:reaction-button.tsx"],
  },
  {
    name: "fab",
    dependencies: ["@seed-design/react"],
    files: ["ui:fab.tsx"],
  },
  {
    name: "extended-fab",
    dependencies: ["@seed-design/react"],
    files: ["ui:extended-fab.tsx"],
  },
  {
    name: "action-chip",
    dependencies: ["@seed-design/react"],
    files: ["ui:action-chip.tsx"],
  },
  {
    name: "badge",
    dependencies: ["@seed-design/react"],
    files: ["ui:badge.tsx"],
  },
  {
    name: "callout",
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:callout.tsx"],
  },
  {
    name: "control-chip",
    dependencies: ["@seed-design/react"],
    files: ["ui:control-chip.tsx"],
  },
  {
    name: "checkbox",
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:checkbox.tsx"],
  },
  {
    name: "identity-placeholder",
    dependencies: ["@seed-design/react"],
    files: ["ui:identity-placeholder.tsx"],
  },
  {
    name: "inline-banner",
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:inline-banner.tsx"],
  },
  {
    name: "layout",
    dependencies: ["@seed-design/react"],
    files: ["ui:layout.tsx"],
  },
  {
    name: "snackbar",
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:snackbar.tsx"],
  },
  {
    name: "help-bubble",
    dependencies: ["@seed-design/react"],
    files: ["ui:help-bubble.tsx"],
  },
  {
    name: "tabs",
    dependencies: ["@seed-design/react"],
    files: ["ui:tabs.tsx"],
  },
  {
    name: "chip-tabs",
    dependencies: ["@seed-design/react"],
    files: ["ui:chip-tabs.tsx"],
  },
  {
    name: "progress-circle",
    dependencies: ["@seed-design/react"],
    files: ["ui:progress-circle.tsx"],
  },
  {
    name: "select-box",
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:select-box.tsx"],
  },
  {
    name: "segmented-control",
    dependencies: ["@seed-design/react"],
    files: ["ui:segmented-control.tsx"],
  },
  {
    name: "switch",
    dependencies: ["@seed-design/react"],
    files: ["ui:switch.tsx"],
  },
  {
    name: "skeleton",
    dependencies: ["@seed-design/react"],
    files: ["ui:skeleton.tsx"],
  },
  {
    name: "link-with-icon",
    dependencies: ["@seed-design/react"],
    files: ["ui:link-with-icon.tsx"],
  },
  {
    name: "text-field",
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:text-field.tsx"],
  },
];
