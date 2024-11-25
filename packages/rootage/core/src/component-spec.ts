import { camelCase } from "change-case";
import { isTokenExpression, parseTokenExpression, stringifyTokenCssVar } from "./token";
import type { ComponentSpecData, ComponentSpecExpression, TokenExpression } from "./types";
import { parsePrimitiveExpression, stringifyPrimitiveExpression } from "./primitive";

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

// stringify
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

          property[propertyKey] =
            expr.type === "token" ? stringifyTokenCssVar(expr) : stringifyPrimitiveExpression(expr);
        }

        slot[slotKey] = property;
      }

      variant[stateKey] = slot;
    }

    result[variantKey] = variant;
  }

  return `export const vars = ${JSON.stringify(result, null, 2)}`;
}
