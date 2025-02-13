import { colorMappings } from "@seed-design/mapping/color";
import type * as jscodeshift from "jscodeshift";
import type { ASTPath } from "jscodeshift";

/**
 * vars.$scale.color.carrot500 -> $scale.color.carrot-500
 * vars.$scale.color.grayAlpha50 -> $scale.color.gray-alpha-50
 */
export function toKebabCaseWithNumbers(name: string): string {
  return name
    .replace(/^vars\./, "")
    .replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)
    .replace(/(\d+)/g, "-$1");
}

/**
 * $scale.color.carrot-500 -> vars.$scale.color.carrot500
 * $scale.color.gray-alpha-50 -> vars.$scale.color.grayAlpha50
 */
export function fromKebabCaseWithNumbers(name: string): string {
  return `vars.${name
    .replace(/-(\d+)/g, "$1")
    .replace(/-([a-z])/g, (_, char) => char.toUpperCase())}`;
}

const replaceVarsColor: jscodeshift.Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 1. Replace imports
  root
    .find(j.ImportDeclaration, {
      source: {
        value: "@seed-design/design-token",
      },
    })
    .forEach((path) => {
      path.node.source.value = "@seed-design/vars";
    });

  // 2. Replace color references
  root
    .find(j.MemberExpression)
    .filter((path) => {
      const memberName = getMemberExpressionName(path);
      return memberName.startsWith("vars.");
    })
    .forEach((path) => {
      const memberName = getMemberExpressionName(path);
      const tokenId = toKebabCaseWithNumbers(memberName);
      const mapping = colorMappings.find((m) => m.previous === tokenId);

      if (mapping) {
        if (mapping.next.length === 0) {
          console.warn(`Warning: No mapping found for ${memberName} at ${file.path}`);
          return;
        }

        if (mapping.next.length > 1) {
          console.warn(
            `Warning: Multiple mappings found for ${memberName} at ${file.path}. Using first value: ${mapping.next[0]}`,
          );
        }

        const newName = fromKebabCaseWithNumbers(mapping.next[0]);
        const newExpr = buildMemberExpression(j, newName);
        path.replace(newExpr);
        api.report?.(`Changed ${memberName} to ${newName} at ${file.path}`);
      }
    });

  return root.toSource();
};

function getMemberExpressionName(path: ASTPath<jscodeshift.MemberExpression>): string {
  const parts: string[] = [];
  let current: jscodeshift.MemberExpression | jscodeshift.Identifier = path.node;

  while (current.type === "MemberExpression") {
    if (current.property.type === "Identifier") {
      parts.unshift(current.property.name);
    }
    current = current.object as jscodeshift.MemberExpression | jscodeshift.Identifier;
  }

  if (current.type === "Identifier") {
    parts.unshift(current.name);
  }

  return parts.join(".");
}

function buildMemberExpression(
  j: jscodeshift.JSCodeshift,
  name: string,
): jscodeshift.MemberExpression {
  const parts = name.split(".");
  let expr: jscodeshift.Identifier | jscodeshift.MemberExpression = j.identifier(parts[0]);

  for (let i = 1; i < parts.length; i++) {
    expr = j.memberExpression(expr, j.identifier(parts[i]));
  }

  return expr as jscodeshift.MemberExpression;
}

export default replaceVarsColor;
