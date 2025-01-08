import type { SlotRecipeDefinition, SlotRecipeVariantRecord } from "@seed-design/qvism-core";

export function defineRecipe<S extends string, V extends SlotRecipeVariantRecord<S>>(
  definition: SlotRecipeDefinition<S, V>,
): SlotRecipeDefinition<S, V> {
  return definition;
}
