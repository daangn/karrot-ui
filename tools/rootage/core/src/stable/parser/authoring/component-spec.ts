import type {
  ComponentSpecDeclaration,
  ComponentSpecDocument,
  PropertyDeclaration,
  SlotDeclaration,
  StateDeclaration,
  VariantDeclaration,
} from "../ast";
import * as factory from "../factory";
import type * as Document from "./types";
import { isTokenRef } from "./is-token-ref";
import { parseMetadataDeclaration } from "./metadata";
import { parseValue } from "./value";

export function parseComponentSpecDocument(
  model: Document.ComponentSpecModel,
): ComponentSpecDocument {
  return factory.createComponentSpecDocument(
    parseMetadataDeclaration(model.metadata),
    parseComponentSpecDeclaration(model),
  );
}

export function parseComponentSpecDeclaration(
  model: Document.ComponentSpecModel,
): ComponentSpecDeclaration {
  const { id, name } = model.metadata;
  const body: VariantDeclaration[] = [];

  for (const [key, value] of Object.entries(model.data)) {
    body.push(parseVariantDeclaration(key, value));
  }

  return factory.createComponentSpecDeclaration(id, name, body);
}

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

function parseVariantDeclaration(
  key: string,
  decl: Document.ComponentSpecData[string],
): VariantDeclaration {
  const variantExprs = Object.entries(parseVariantExpression(key)).map(([k, v]) =>
    factory.createVariantExpression(k, v),
  );

  // Convert definitions => array of StateDeclaration
  const stateDecls: StateDeclaration[] = Object.entries(decl).map(([k, v]) =>
    parseStateDeclaration(k, v),
  );

  return factory.createVariantDeclaration(variantExprs, stateDecls);
}

function parseStateDeclaration(
  key: string,
  decl: Record<string, Record<string, Document.Value>>,
): StateDeclaration {
  // We'll treat def.states as an array of strings => an array of StateExpression
  const stateExpressions = parseStateExpression(key).map((st) => factory.createStateExpression(st));

  // Convert slot data => array of SlotDeclaration
  const slotDecls: SlotDeclaration[] = [];

  for (const [slotName, props] of Object.entries(decl)) {
    const propertyDecls: PropertyDeclaration[] = [];

    for (const [propKey, lhValue] of Object.entries(props)) {
      propertyDecls.push(parsePropertyDeclaration(propKey, lhValue));
    }

    slotDecls.push(factory.createSlotDeclaration(slotName, propertyDecls));
  }

  return factory.createStateDeclaration(stateExpressions, slotDecls);
}

/**
 * Turn a property name + Document.Value => one of property declarations
 * (ColorPropertyDeclaration, DimensionPropertyDeclaration, etc.).
 */
function parsePropertyDeclaration(property: string, lhValue: Document.Value): PropertyDeclaration {
  if (isTokenRef(lhValue)) {
    return factory.createUnresolvedPropertyDeclaration(property, factory.createTokenLit(lhValue));
  }

  const valueLit = parseValue(lhValue);
  switch (valueLit.kind) {
    case "ColorHexLit":
      return factory.createColorPropertyDeclaration(property, valueLit);

    case "DimensionLit":
      return factory.createDimensionPropertyDeclaration(property, valueLit);

    case "NumberLit":
      return factory.createNumberPropertyDeclaration(property, valueLit);

    case "DurationLit":
      return factory.createDurationPropertyDeclaration(property, valueLit);

    case "CubicBezierLit":
      return factory.createCubicBezierPropertyDeclaration(property, valueLit);

    case "ShadowLit":
      return factory.createShadowPropertyDeclaration(property, valueLit);

    case "GradientLit":
      return factory.createGradientPropertyDeclaration(property, valueLit);
  }
}
