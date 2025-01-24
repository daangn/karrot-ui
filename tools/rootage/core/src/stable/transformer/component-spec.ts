import type * as Shorthand from "./shorthand-document";
import type * as Document from "../parser/document";
import { transformValue } from "./value";
import { isTokenRef } from "../parser/is-token-ref";

function parseVariantExpression(variantExpression: string) {
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

function parseStateExpression(stateExpression: string) {
  return stateExpression.split(",");
}

function transformRighthandValue(rv: Shorthand.RighthandValue): Document.Value {
  if (isTokenRef(rv)) {
    return {
      type: "color",
      value: rv,
    };
  }
  return transformValue(rv as Shorthand.Value);
}

function transformComponentSpecData(data: Shorthand.ComponentSpecData): Document.ComponentSpecData {
  const variantDeclarations: Document.VariantDeclaration[] = [];

  // Each key is a "variantExpression" like "size=small|type=primary"
  for (const [variantExpression, statesObject] of Object.entries(data)) {
    const variants = parseVariantExpression(variantExpression);

    // Build an array of definitions, one per state (or merge if you like).
    const definitions: Document.VariantDeclaration["definitions"] = [];
    for (const [stateExpression, slotsObject] of Object.entries(statesObject)) {
      // Convert each slot's properties
      const transformedSlots: Record<string, Record<string, Document.Value>> = {};
      for (const [slotName, properties] of Object.entries(slotsObject)) {
        const transformedProps: Record<string, Document.Value> = {};
        for (const [propName, shorthandValue] of Object.entries(properties)) {
          transformedProps[propName] = transformRighthandValue(shorthandValue);
        }
        transformedSlots[slotName] = transformedProps;
      }

      definitions.push({
        states: parseStateExpression(stateExpression),
        slots: transformedSlots,
      });
    }

    variantDeclarations.push({
      variants,
      definitions,
    });
  }

  return variantDeclarations;
}

export function transformComponentSpecModel(
  shorthand: Shorthand.ComponentSpecModel,
): Document.ComponentSpecModel {
  return {
    kind: "ComponentSpec",
    metadata: {
      id: shorthand.metadata.id,
      name: shorthand.metadata.name,
    },
    data: transformComponentSpecData(shorthand.data),
  };
}
