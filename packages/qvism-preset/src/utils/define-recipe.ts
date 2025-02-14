import type { SlotRecipeDefinition } from "@seed-design/qvism-core";

export function defineRecipe<T extends SlotRecipeDefinition<string, any>>(definition: T): T {
  return definition;
}
