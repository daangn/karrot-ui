import { camelCase } from "change-case";
import type { ComponentSpecExpression } from "../types";
import { stringifyCssValue } from "./css";

function stringifyVariantKey(variant: Record<string, string>) {
  const asKebab = Object.entries(variant)
    .map(([key, value]) => `${key}-${value}`)
    .join("-");

  if (asKebab === "") {
    return "base";
  }

  return camelCase(asKebab, { mergeAmbiguousCharacters: true });
}

function stringifyStateKey(state: string[]) {
  return camelCase(state.join("-"));
}

export function stringifyComponentSpecTs(expressions: ComponentSpecExpression) {
  const result = {};

  for (const expression of expressions) {
    const variantKey = stringifyVariantKey(expression.key);
    const variant = {};

    for (const state of expression.state) {
      const stateKey = stringifyStateKey(state.key);
      const slot = {};

      for (const slotItem of state.slot) {
        const slotKey = slotItem.key;
        const property = {};

        for (const propertyItem of slotItem.property) {
          const propertyKey = propertyItem.key;
          const expr = propertyItem.value;

          property[propertyKey] = stringifyCssValue(expr);
        }

        slot[slotKey] = property;
      }

      variant[stateKey] = slot;
    }

    result[variantKey] = variant;
  }

  return `export const vars = ${JSON.stringify(result, null, 2)}`;
}
