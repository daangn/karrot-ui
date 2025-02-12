import type * as jscodeshift from "jscodeshift";
import type { ASTPath } from "jscodeshift";
import { SCALE_TO_PALETTE_MAP } from "./mapping.js";

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

  // 2. Replace scale color references
  root
    .find(j.MemberExpression)
    .filter((path) => {
      const memberName = getMemberExpressionName(path);
      return memberName.startsWith("vars.$scale.color.");
    })
    .forEach((path) => {
      const memberName = getMemberExpressionName(path);
      const newName = SCALE_TO_PALETTE_MAP[memberName];

      if (newName) {
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
