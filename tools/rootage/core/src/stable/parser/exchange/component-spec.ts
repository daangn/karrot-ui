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
import { parseMetadataDeclaration } from "./metadata";
import {
  parseColorValue,
  parseCubicBezierValue,
  parseDimensionValue,
  parseDurationValue,
  parseGradientValue,
  parseNumberValue,
  parseShadowValue,
} from "./value";

export function parseComponentSpecDocument(
  model: Document.ComponentSpecModel,
): ComponentSpecDocument {
  return factory.createComponentSpecDocument(
    parseMetadataDeclaration(model.metadata),
    parseComponentSpecDeclaration(model.data),
  );
}

export function parseComponentSpecDeclaration(
  data: Document.ComponentSpecData,
): ComponentSpecDeclaration {
  const { id, name } = data;
  const body: VariantDeclaration[] = [];

  for (const variantDecl of data.definitions) {
    body.push(parseVariantDeclaration(variantDecl));
  }

  return factory.createComponentSpecDeclaration(id, name, body);
}

function parseVariantDeclaration(input: Document.VariantDeclaration): VariantDeclaration {
  // Convert each { [variantName]: string } pair => AST.createVariantExpression
  const variantExprs = Object.entries(input.variants).map(([k, v]) =>
    factory.createVariantExpression(k, v),
  );

  // Convert definitions => array of StateDeclaration
  const stateDecls: StateDeclaration[] = input.definitions.map((def) => parseStateDeclaration(def));

  return factory.createVariantDeclaration(variantExprs, stateDecls);
}

function parseStateDeclaration(def: {
  states: string[];
  slots: Record<string, Record<string, Document.Value>>;
}): StateDeclaration {
  // We'll treat def.states as an array of strings => an array of StateExpression
  const stateExpressions = def.states.map((st) => factory.createStateExpression(st));

  // Convert slot data => array of SlotDeclaration
  const slotDecls: SlotDeclaration[] = [];

  for (const [slotName, props] of Object.entries(def.slots)) {
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
  switch (lhValue.type) {
    case "color":
      return factory.createColorPropertyDeclaration(property, parseColorValue(lhValue));

    case "dimension":
      return factory.createDimensionPropertyDeclaration(property, parseDimensionValue(lhValue));

    case "number":
      return factory.createNumberPropertyDeclaration(property, parseNumberValue(lhValue));

    case "duration":
      return factory.createDurationPropertyDeclaration(property, parseDurationValue(lhValue));

    case "cubicBezier":
      return factory.createCubicBezierPropertyDeclaration(property, parseCubicBezierValue(lhValue));

    case "shadow":
      return factory.createShadowPropertyDeclaration(property, parseShadowValue(lhValue));

    case "gradient":
      return factory.createGradientPropertyDeclaration(property, parseGradientValue(lhValue));
  }
}
