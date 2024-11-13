import type { RegistryUI } from "./schema";

export const registryUI: RegistryUI = [
  {
    name: "alert-dialog",
    innerDependencies: ["action-button"],
    files: ["ui:alert-dialog.tsx"],
  },
  {
    name: "action-button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:action-button.tsx"],
  },
  {
    name: "action-chip",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:action-chip.tsx"],
  },
  {
    name: "badge",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:badge.tsx"],
  },
  {
    name: "callout",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:callout.tsx"],
  },
  {
    name: "dismissible-callout",
    dependencies: [
      "@seed-design/react-dismissible",
      "@daangn/react-monochrome-icon",
    ],
    files: ["ui:dismissible-callout.tsx"],
  },
  {
    name: "actionable-callout",
    dependencies: ["@daangn/react-monochrome-icon"],
    files: ["ui:actionable-callout.tsx"],
  },
  {
    name: "control-chip",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:control-chip.tsx"],
  },
  {
    name: "checkbox",
    // TODO: remove alpha
    dependencies: [
      "@seed-design/react-checkbox@alpha",
      "@daangn/react-monochrome-icon",
    ],
    files: ["ui:checkbox.tsx"],
  },
  {
    name: "inline-banner",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:inline-banner.tsx"],
  },
  {
    name: "dismissible-inline-banner",
    dependencies: [
      "@seed-design/react-dismissible",
      "@daangn/react-monochrome-icon",
      "@radix-ui/react-slot",
    ],
    files: ["ui:dismissible-inline-banner.tsx"],
  },
  {
    name: "actionable-inline-banner",
    dependencies: ["@daangn/react-monochrome-icon", "@radix-ui/react-slot"],
    files: ["ui:actionable-inline-banner.tsx"],
  },
  {
    name: "tabs",
    // TODO: remove alpha
    dependencies: ["@seed-design/react-tabs@alpha"],
    files: ["ui:tabs.tsx"],
  },
  {
    name: "chip-tabs",
    // TODO: remove alpha
    dependencies: ["@seed-design/react-tabs@alpha"],
    files: ["ui:chip-tabs.tsx"],
  },
  {
    name: "expand-button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:expand-button.tsx"],
  },
  {
    name: "segmented-control",
    dependencies: ["@seed-design/react-segmented-control"],
    files: ["ui:segmented-control.tsx"],
  },
  {
    name: "radio-group",
    dependencies: ["@seed-design/react-radio-group@alpha"],
    files: ["ui:radio-group.tsx"],
  },
  {
    name: "switch",
    // TODO: remove alpha
    dependencies: ["@seed-design/react-switch@alpha"],
    files: ["ui:switch.tsx"],
  },
  {
    name: "text-button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:text-button.tsx"],
  },
];
