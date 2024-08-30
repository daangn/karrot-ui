import type { ComponentMetadatas } from "../schemas/metadata";

export const componentMetadatas: ComponentMetadatas = [
  {
    name: "alert-dialog",
    type: "component",
    innerDependencies: ["box-button"],
    snippets: ["alert-dialog.tsx"],
  },
  {
    name: "box-button",
    type: "component",
    dependencies: ["@radix-ui/react-slot"],
    snippets: ["box-button.tsx"],
  },
  {
    name: "checkbox",
    type: "component",
    dependencies: ["@seed-design/react-checkbox"],
    snippets: ["checkbox.tsx"],
  },
  {
    name: "tabs",
    type: "component",
    dependencies: ["@seed-design/react-tabs"],
    snippets: ["tabs.tsx"],
  },
  {
    name: "chip-tabs",
    type: "component",
    dependencies: ["@seed-design/react-tabs"],
    snippets: ["chip-tabs.tsx"],
  },
];
