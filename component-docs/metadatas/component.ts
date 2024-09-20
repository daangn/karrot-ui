import type { ComponentMetadataSchema } from "../schemas/component";

export const componentMetadatas: ComponentMetadataSchema[] = [
  {
    name: "alert-dialog",
    type: "component",
    innerDependencies: ["box-button"],
    snippets: ["component/alert-dialog.tsx"],
  },
  {
    name: "box-button",
    type: "component",
    dependencies: ["@radix-ui/react-slot"],
    snippets: ["component/box-button.tsx"],
  },
  {
    name: "checkbox",
    type: "component",
    dependencies: ["@seed-design/react-checkbox"],
    snippets: ["component/checkbox.tsx"],
  },
  {
    name: "tabs",
    type: "component",
    dependencies: ["@seed-design/react-tabs"],
    snippets: ["component/tabs.tsx"],
  },
  {
    name: "chip-tabs",
    type: "component",
    dependencies: ["@seed-design/react-tabs"],
    snippets: ["component/chip-tabs.tsx"],
  },
];
