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
    dependencies: [
      "@radix-ui/react-slot",
      "@seed-design/react-dismissible",
      "@daangn/react-monochrome-icon",
    ],
    files: ["ui:callout.tsx"],
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
    dependencies: [
      "@radix-ui/react-slot",
      "@seed-design/react-dismissible",
      "@daangn/react-monochrome-icon",
    ],
    files: ["ui:inline-banner.tsx"],
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
    name: "progress-circle",
    dependencies: ["@seed-design/react-progress"],
    files: ["ui:progress-circle.tsx"],
  },
  {
    name: "select-box-group",
    dependencies: [
      "@seed-design/react-checkbox",
      "@seed-design/react-radio-group",
      "@daangn/react-monochrome-icon",
    ],
    files: ["ui:select-box-group.tsx"],
  },
  {
    name: "segmented-control",
    dependencies: ["@seed-design/react-segmented-control"],
    files: ["ui:segmented-control.tsx"],
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
  {
    name: "text-field",
    dependencies: [
      "@seed-design/react-text-field",
      "@daangn/react-monochrome-icon",
      "@radix-ui/react-slot",
    ],
    files: ["ui:text-field.tsx"],
  },
];
