import type * as jscodeshift from "jscodeshift";
import { colorMappings } from "@seed-design/mapping/color";
import { TokenMigrationReporter } from "../../utils/reporter.js";
import { handleImports } from "./import-handler.js";
import { getMemberExpressionName, buildMemberExpression } from "./ast-utils.js";
import { fromKebabCaseWithNumbers, toKebabCaseWithNumbers } from "./token-utils.js";

const replaceVarsColor: jscodeshift.Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const reporter = new TokenMigrationReporter("replace-vars-color");
  const unresolvedIdentifiers = new Set<string>();

  reporter.startNewFile(file.path);

  // Replace color references
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
      const line = path.node.loc?.start.line;

      if (mapping) {
        if (mapping.next.length === 0 || mapping.next.length > 1) {
          reporter.addResult({
            previousToken: memberName,
            nextToken: null,
            line,
            status: "failure",
            failureReason:
              mapping.next.length === 0 ? "No mapping available" : "Multiple mappings found",
          });
          unresolvedIdentifiers.add(memberName);
          return;
        }

        const newName = `${fromKebabCaseWithNumbers(mapping.next[0])}`;
        const newExpr = buildMemberExpression(j, newName);
        path.replace(newExpr);

        reporter.addResult({
          previousToken: memberName,
          nextToken: newName,
          line,
          status: "success",
        });
      }
    });

  // Handle imports first
  handleImports(j, root, unresolvedIdentifiers.size > 0);

  // Then update unresolved references to use legacyVars
  if (unresolvedIdentifiers.size > 0) {
    root
      .find(j.MemberExpression)
      .filter((path) => {
        const memberName = getMemberExpressionName(path);
        return unresolvedIdentifiers.has(memberName);
      })
      .forEach((path) => {
        const memberName = getMemberExpressionName(path);
        const newName = memberName.replace(/^vars\./, "legacyVars.");
        const newExpr = buildMemberExpression(j, newName);
        path.replace(newExpr);
      });
  }

  reporter.finishFile();
  reporter.writeReport();

  return root.toSource();
};

export default replaceVarsColor;
