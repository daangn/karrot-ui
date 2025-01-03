import type { RegistryUI } from "./schema";

import segmentedControlPkg from "@seed-design/react-segmented-control/package.json";
import textFieldPkg from "@seed-design/react-text-field/package.json";
import dismissiblePkg from "@seed-design/react-dismissible/package.json";
import tabsPkg from "@seed-design/react-tabs/package.json";
import popoverPkg from "@seed-design/react-popover/package.json";

export const registryUI: RegistryUI = [
  {
    name: "app-screen",
    files: ["ui:app-screen.tsx"],
    dependencies: ["@seed-design/stackflow"],
  },
  {
    name: "text",
    files: ["ui:text.tsx"],
    dependencies: ["@seed-design/react"],
  },
  {
    name: "alert-dialog",
    innerDependencies: ["action-button"],
    dependencies: ["@seed-design/stackflow"],
    files: ["ui:alert-dialog.tsx"],
  },
  {
    name: "bottom-sheet",
    dependencies: ["@seed-design/stackflow"],
    files: ["ui:bottom-sheet.tsx"],
  },
  {
    name: "action-sheet",
    dependencies: ["@seed-design/stackflow"],
    files: ["ui:action-sheet.tsx"],
  },
  {
    name: "avatar",
    innerDependencies: ["identity-placeholder"],
    dependencies: ["@radix-ui/react-slot", "@seed-design/react-avatar"],
    files: ["ui:avatar.tsx"],
  },
  {
    name: "action-button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:action-button.tsx"],
  },
  {
    name: "toggle-button",
    dependencies: ["@radix-ui/react-slot", "@seed-design/react-toggle"],
    files: ["ui:toggle-button.tsx"],
  },
  {
    name: "reaction-button",
    dependencies: ["@radix-ui/react-slot", "@seed-design/react-toggle"],
    files: ["ui:reaction-button.tsx"],
  },
  {
    name: "fab",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:fab.tsx"],
  },
  {
    name: "extended-fab",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:extended-fab.tsx"],
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
      `@seed-design/react-dismissible@${dismissiblePkg.version}`,
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
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:checkbox.tsx"],
  },
  {
    name: "identity-placeholder",
    dependencies: [],
    files: ["ui:identity-placeholder.tsx"],
  },
  {
    name: "inline-banner",
    dependencies: [
      "@radix-ui/react-slot",
      `@seed-design/react-dismissible@${dismissiblePkg.version}`,
      "@daangn/react-monochrome-icon",
    ],
    files: ["ui:inline-banner.tsx"],
  },
  {
    name: "help-bubble",
    dependencies: [
      `@seed-design/react-popover@${popoverPkg.version}`,
      "@radix-ui/react-slot",
    ],
    files: ["ui:help-bubble.tsx"],
  },
  {
    name: "tabs",
    dependencies: [`@seed-design/react-tabs@${tabsPkg.version}`],
    files: ["ui:tabs.tsx"],
  },
  {
    name: "chip-tabs",
    dependencies: [`@seed-design/react-tabs@${tabsPkg.version}`],
    files: ["ui:chip-tabs.tsx"],
  },
  {
    name: "progress-circle",
    dependencies: ["@seed-design/react-progress"],
    files: ["ui:progress-circle.tsx"],
  },
  {
    name: "select-box",
    dependencies: ["@seed-design/react", "@daangn/react-monochrome-icon"],
    files: ["ui:select-box.tsx"],
  },
  {
    name: "segmented-control",
    dependencies: [
      `@seed-design/react-segmented-control@${segmentedControlPkg.version}`,
    ],
    files: ["ui:segmented-control.tsx"],
  },
  {
    name: "switch",
    dependencies: ["@seed-design/react"],
    files: ["ui:switch.tsx"],
  },
  {
    name: "skeleton",
    dependencies: [],
    files: ["ui:skeleton.tsx"],
  },
  {
    name: "text-button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui:text-button.tsx"],
  },
  {
    name: "text-field",
    dependencies: [
      `@seed-design/react-text-field@${textFieldPkg.version}`,
      "@daangn/react-monochrome-icon",
      "@radix-ui/react-slot",
    ],
    files: ["ui:text-field.tsx"],
  },
];
