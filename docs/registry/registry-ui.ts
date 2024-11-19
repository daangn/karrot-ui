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
    name: "link-inline-banner",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:link-inline-banner.tsx"],
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
  {
    name: "text-button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["component/text-button.tsx"],
  },
];
