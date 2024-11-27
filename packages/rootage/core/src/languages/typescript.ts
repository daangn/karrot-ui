import { camelCase } from "change-case";
import type { ComponentSpecExpression, RootageAST, TokenExpression } from "../types";
import { stringifyCssValue, stringifyTokenReference } from "./css";

// camelCase but preserve underscore between numbers.
// temporary workaround to avoid x1_5 -> x15
// "color-1_5" -> "color1_5"
function camelCasePreserveUnderscoreBetweenNumbers(input: string) {
  return camelCase(input, {
    mergeAmbiguousCharacters: false,
  })
    .replaceAll(/(\D)_(\d)/g, "$1$2")
    .replaceAll(/(\d)_(\D)/g, "$1$2");
}

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

export function getComponentSpecTs(expressions: ComponentSpecExpression) {
  const result: Record<string, Record<string, Record<string, Record<string, string>>>> = {};

  for (const expression of expressions) {
    const variantKey = stringifyVariantKey(expression.key);
    const variant: Record<string, Record<string, Record<string, string>>> = {};

    for (const state of expression.state) {
      const stateKey = stringifyStateKey(state.key);
      const slot: Record<string, Record<string, string>> = {};

      for (const slotItem of state.slot) {
        const slotKey = slotItem.key;
        const property: Record<string, string> = {};

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

export function getTokenTs(ast: RootageAST) {
  const { tokens } = ast;
  const tokenExpressions = tokens.map((decl) => decl.token);

  const groups: Record<string, TokenExpression[]> = {};

  for (const expression of tokenExpressions) {
    const group = expression.group.join("/");
    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(expression);
  }

  return Object.entries(groups).map(([group, expressions]) => {
    const definitions = expressions
      .map((expression) => {
        const key = camelCasePreserveUnderscoreBetweenNumbers(expression.key);
        const value = stringifyTokenReference(expression);

        return `export const ${key} = "${value}";`;
      })
      .join("\n");

    return {
      path: group,
      code: definitions,
    };
  });
}
