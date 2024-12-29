import { parseComponentSpecModel } from "./component-spec";
import { parseTokensModel, stringifyTokenExpression } from "./token";
import { parseTokenCollectionsModel } from "./token-collection";
import type { DependencyGraph, Model, RootageCtx, TokenDeclaration, TokenRef } from "./types";

function buildDependencyGraph(tokenDecls: TokenDeclaration[]): DependencyGraph {
  const graph: DependencyGraph = {};

  for (const tokenDecl of tokenDecls) {
    const { token } = tokenDecl;
    const name = stringifyTokenExpression(token);
    const dependencies: { [mode: string]: TokenRef } = {};

    for (const { mode, value } of tokenDecl.values) {
      if (value.type === "token") {
        const ref = stringifyTokenExpression(value);
        dependencies[mode] = ref;
      }
    }

    graph[name] = { name, declaration: tokenDecl, dependencies };
  }

  return graph;
}

export function buildRootage(models: Model[]): RootageCtx {
  const tokenCollections = models
    .filter((model) => model?.kind === "TokenCollections")
    .flatMap((model) => parseTokenCollectionsModel(model));
  const tokens = models
    .filter((model) => model?.kind === "Tokens")
    .flatMap((model) => parseTokensModel(model));
  const componentSpecs = models
    .filter((model) => model?.kind === "ComponentSpec")
    .map((model) => parseComponentSpecModel(model));

  const dependencyGraph = buildDependencyGraph(tokens);

  return { componentSpecs, tokens, tokenCollections, dependencyGraph };
}
