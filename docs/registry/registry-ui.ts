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
    name: "control-chip",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:control-chip.tsx"],
  },
  {
    name: "checkbox",
    dependencies: ["@seed-design/react-checkbox@alpha"],
    files: ["ui:checkbox.tsx"],
  },
  {
    name: "inline-banner",
    dependencies: ["@radix-ui/react-slot", "@daangn/react-monochrome-icon"],
    files: ["ui:inline-banner.tsx", "hook:use-dismissible.ts"],
  },
  {
    name: "tabs",
    dependencies: ["@seed-design/react-tabs@alpha"],
    files: ["ui:tabs.tsx"],
  },
  {
    name: "chip-tabs",
    dependencies: ["@seed-design/react-tabs@alpha"],
    files: ["ui:chip-tabs.tsx"],
  },
  {
    name: "expand-button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:expand-button.tsx"],
  },
  {
    name: "switch",
    dependencies: ["@seed-design/react-switch@alpha"],
    files: ["ui:switch.tsx"],
  },
];
