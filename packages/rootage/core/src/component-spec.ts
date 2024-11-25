import { parsePrimitiveExpression } from "./primitive";
import { isTokenExpression, parseTokenExpression } from "./token";
import type { ComponentSpecData, ComponentSpecExpression } from "./types";

// parse
function parseVariant(variantExpression: string) {
  if (variantExpression === "base") {
    return {};
  }

  const keyValues = variantExpression.split(",");
  const variant = {};
  for (const keyValue of keyValues) {
    const [key, value] = keyValue.split("=");
    variant[key] = value;
  }

  return variant;
}

function parseState(stateExpression: string) {
  return stateExpression.split(",");
}

export function parseComponentSpecData(input: ComponentSpecData): ComponentSpecExpression {
  const parsedExpressions: ComponentSpecExpression = [];

  for (const variantExpression in input) {
    const variant = parseVariant(variantExpression);
    const state = [];

    for (const stateExpression in input[variantExpression]) {
      const slot = [];

      for (const slotExpression in input[variantExpression][stateExpression]) {
        const property = [];

        for (const propertyExpression in input[variantExpression][stateExpression][
          slotExpression
        ]) {
          const righthandExpression =
            input[variantExpression][stateExpression][slotExpression][propertyExpression];

          property.push({
            key: propertyExpression,
            value: isTokenExpression(righthandExpression)
              ? parseTokenExpression(righthandExpression)
              : parsePrimitiveExpression(righthandExpression),
          });
        }

        slot.push({ key: slotExpression, property });
      }

      state.push({ key: parseState(stateExpression), slot });
    }

    parsedExpressions.push({ key: variant, state });
  }

  return parsedExpressions;
}
