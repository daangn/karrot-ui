import { parseValueExpression } from "./value";
import { isTokenRef, parseTokenExpression } from "./token";
import type {
  ComponentSpecDeclaration,
  ComponentSpecExpression,
  ComponentSpecModel,
} from "./types";

// parse
export function parseVariantExpression(variantExpression: string) {
  if (variantExpression === "base") {
    return {};
  }

  const keyValues = variantExpression.split(",").map((s) => s.trim());
  const variant: Record<string, string> = {};
  for (const keyValue of keyValues) {
    const [key, value] = keyValue.split("=");
    if (!key || !value) {
      throw new Error(`Invalid variant format: ${variantExpression}`);
    }

    variant[key] = value;
  }

  return variant;
}

export function parseStateExpression(stateExpression: string) {
  return stateExpression.split(",");
}

export function stringifyVariantExpression(variant: Record<string, string>) {
  return (
    Object.entries(variant)
      .map(([key, value]) => `${key}=${value}`)
      .join(",") || "base"
  );
}

export function stringifyStateExpression(state: string[]) {
  return state.join(",");
}

export function parseComponentSpecModel(model: ComponentSpecModel): ComponentSpecDeclaration {
  const { data, metadata } = model;
  const parsedExpressions: ComponentSpecExpression = [];

  for (const variantExpression in data) {
    const variant = parseVariantExpression(variantExpression);
    const state = [];

    for (const stateExpression in data[variantExpression]) {
      const slot = [];

      for (const slotExpression in data[variantExpression][stateExpression]) {
        const property = [];

        for (const propertyExpression in data[variantExpression][stateExpression][slotExpression]) {
          const righthandExpression =
            data[variantExpression][stateExpression][slotExpression][propertyExpression];

          if (righthandExpression == null) {
            continue;
          }

          property.push({
            key: propertyExpression,
            value: isTokenRef(righthandExpression)
              ? parseTokenExpression(righthandExpression)
              : parseValueExpression(righthandExpression),
          });
        }

        slot.push({ key: slotExpression, property });
      }

      state.push({ key: parseStateExpression(stateExpression), slot });
    }

    parsedExpressions.push({ key: variant, state });
  }

  return {
    id: metadata.id,
    name: metadata.name,
    data: parsedExpressions,
  };
}
