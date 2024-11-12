import type { RegistryUIMachineGenerated } from "@/src/schema";

export function addRelativeComponents(
  userSelects: string[],
  registryIndex: RegistryUIMachineGenerated,
) {
  const selectedComponents = new Set<string>();

  function addSeedDependencies(componentName: string) {
    if (selectedComponents.has(componentName)) return;

    selectedComponents.add(componentName);

    const component = registryIndex.find((c) => c.name === componentName);
    if (!component) return;

    if (component.innerDependencies) {
      for (const dep of component.innerDependencies) {
        addSeedDependencies(dep);
      }
    }
  }

  for (const componentName of userSelects) {
    addSeedDependencies(componentName);
  }

  return Array.from(selectedComponents);
}
