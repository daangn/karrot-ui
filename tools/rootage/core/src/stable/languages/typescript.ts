import { camelCase } from "change-case";
import type { RootageAST, StateExpression, TokenLit, VariantExpression } from "../parser/ast";
import { stringifyCssValue, stringifyTokenReference } from "./css";

/**
 * camelCase but preserve underscore between numbers.
 * temporary workaround to avoid x1_5 -> x15
 * @example "color-1_5" -> "color1_5"
 */
function camelCasePreserveUnderscoreBetweenNumbers(input: string) {
  return camelCase(input, {
    mergeAmbiguousCharacters: false,
  })
    .replaceAll(/(\D)_(\d)/g, "$1$2")
    .replaceAll(/(\d)_(\D)/g, "$1$2");
}

function stringifyVariantKey(variants: VariantExpression[]): string {
  const asKebab = variants.map(({ name, value }) => `${name}-${value}`).join("-");

  if (asKebab === "") {
    return "base";
  }

  return camelCase(asKebab, { mergeAmbiguousCharacters: true });
}

function stringifyStateKey(state: StateExpression[]): string {
  return camelCase(state.map((s) => s.value).join("-"));
}

function getComponentSpec(ast: RootageAST, componentId: string) {
  const body = ast.componentSpecs.find((spec) => spec.id === componentId)?.body;
  if (!body) {
    throw new Error(`Component spec not found: ${componentId}`);
  }

  const result: Record<string, Record<string, Record<string, Record<string, string>>>> = {};

  for (const variantDecl of body) {
    const variantKey = stringifyVariantKey(variantDecl.variants);
    const variant: Record<string, Record<string, Record<string, string>>> = {};

    for (const stateDecl of variantDecl.body) {
      const stateKey = stringifyStateKey(stateDecl.states);
      const slot: Record<string, Record<string, string>> = {};

      for (const slotDecl of stateDecl.body) {
        const slotKey = slotDecl.slot;
        const property: Record<string, string> = {};

        for (const propertyDecl of slotDecl.body) {
          const propertyKey = propertyDecl.property;
          const expr = propertyDecl.value;

          property[propertyKey] = stringifyCssValue(expr);
        }

        slot[slotKey] = property;
      }

      variant[stateKey] = slot;
    }

    result[variantKey] = variant;
  }

  return result;
}

export function getComponentSpecMjs(ast: RootageAST, componentId: string) {
  const result = getComponentSpec(ast, componentId);
  return `export const vars = ${JSON.stringify(result, null, 2)}`;
}

export function getComponentSpecDts(ast: RootageAST, componentId: string) {
  const result = getComponentSpec(ast, componentId);
  return `export declare const vars: ${JSON.stringify(result, null, 2)}`;
}

export function getComponentSpecIndexMjs(ast: RootageAST) {
  const result = ast.componentSpecs.map((spec) => {
    return `export { vars as ${camelCase(spec.id, { mergeAmbiguousCharacters: true })} } from "./${spec.id}.mjs";`;
  });

  return result.join("\n");
}

export function getComponentSpecIndexDts(ast: RootageAST) {
  const result = ast.componentSpecs.map((spec) => {
    return `export { vars as ${camelCase(spec.id, { mergeAmbiguousCharacters: true })} } from "./${spec.id}";`;
  });

  return result.join("\n");
}

interface TokenDefinition {
  key: string;
  value: string;
}

interface TokenGroup {
  dir: string;
  code: TokenDefinition[];
}

function getTokenGroups(ast: RootageAST): TokenGroup[] {
  const { tokens } = ast;
  const tokenExpressions = tokens.map((decl) => decl.token);

  const groups: Record<string, TokenLit[]> = {};

  for (const expression of tokenExpressions) {
    for (let i = 0; i < expression.group.length; i++) {
      const group = expression.group.slice(0, i + 1).join("/");
      if (!groups[group]) {
        groups[group] = [];
      }
    }
  }

  for (const expression of tokenExpressions) {
    const group = expression.group.join("/");
    groups[group]!.push(expression);
  }

  return Object.entries(groups).map(([group, expressions]) => {
    const definitions = expressions.map((expression) => {
      const key = camelCasePreserveUnderscoreBetweenNumbers(expression.key);
      const value = stringifyTokenReference(expression);
      return { key, value };
    });

    return {
      dir: group,
      code: definitions,
    };
  });
}

function generateTokenCode(
  groups: TokenGroup[],
  isDeclaration: boolean,
): { path: string; code: string }[] {
  return groups.map(({ dir, code }) => {
    const definitions = code
      .map(({ key, value }) => {
        const exportKeyword = isDeclaration ? "export declare const" : "export const";
        return `${exportKeyword} ${key} = "${value}";`;
      })
      .join("\n");

    const reExports = groups
      .filter(
        (g) => g.dir.startsWith(`${dir}/`) && g.dir.split("/").length === dir.split("/").length + 1,
      )
      .map((g) => {
        const isTargetNested = groups.some((x) => x.dir.startsWith(`${g.dir}/`));
        const name = g.dir.replace(`${dir}/`, "");
        const relativePath = isTargetNested ? `${name}/index` : name;
        return `export * as ${camelCase(name)} from "./${isDeclaration ? name : `${relativePath}.mjs`}";`;
      })
      .join("\n");

    const path = isDeclaration
      ? reExports
        ? `${dir}/index.d.ts`
        : `${dir}.d.ts`
      : reExports
        ? `${dir}/index.mjs`
        : `${dir}.mjs`;

    return {
      path,
      code: [definitions, reExports].filter(Boolean).join("\n\n"),
    };
  });
}

export function getTokenMjs(ast: RootageAST): { path: string; code: string }[] {
  const groups = getTokenGroups(ast);
  return generateTokenCode(groups, false);
}

export function getTokenDts(ast: RootageAST): { path: string; code: string }[] {
  const groups = getTokenGroups(ast);
  return generateTokenCode(groups, true);
}
