import type { DependencyGraph, ReferenceGraph, RootageCtx } from "./types";
import type { TokenRef } from "../parser/document";
import type { ComponentSpecDeclaration, RootageAST, TokenDeclaration } from "../parser/ast";
import {
  stringifyStateExpression,
  stringifyTokenLit,
  stringifyVariantExpression,
} from "./stringify";

function buildDependencyGraph(tokenDecls: TokenDeclaration[]): DependencyGraph {
  const graph: DependencyGraph = {};

  for (const tokenDecl of tokenDecls) {
    const { token } = tokenDecl;
    const name = stringifyTokenLit(token);
    const dependencies: { [mode: string]: TokenRef } = {};

    for (const { mode, value } of tokenDecl.values) {
      if (value.kind === "TokenLit") {
        const ref = stringifyTokenLit(value);
        dependencies[mode] = ref;
      }
    }

    graph[name] = { name, collection: tokenDecl.collection, dependencies };
  }

  return graph;
}

function buildReferenceGraph(
  tokenDecls: TokenDeclaration[],
  componentSpecs: ComponentSpecDeclaration[],
): ReferenceGraph {
  const graph: ReferenceGraph = {};

  // Initialize reference graph
  for (const tokenDecl of tokenDecls) {
    const { token } = tokenDecl;
    const name = stringifyTokenLit(token);
    const references: { [collection: string]: TokenRef[] } = {};

    for (const { mode } of tokenDecl.values) {
      references[mode] = [];
    }

    graph[name] = { name, collection: tokenDecl.collection, references };
  }

  // Add token references
  for (const tokenDecl of tokenDecls) {
    const { token } = tokenDecl;
    const name = stringifyTokenLit(token);

    for (const { mode, value } of tokenDecl.values) {
      if (value.kind === "TokenLit") {
        const ref = stringifyTokenLit(value);
        graph[ref]?.references[mode]?.push(name);
      }
    }
  }

  // Add component spec references
  for (const componentSpec of componentSpecs) {
    const { id, body } = componentSpec;

    for (const { variants: variantKey, body: state } of body) {
      for (const { states: stateKey, body: slot } of state) {
        for (const { slot: slotKey, body: property } of slot) {
          for (const { property: propertyKey, value } of property) {
            if (value.kind === "TokenLit") {
              const tokenName = stringifyTokenLit(value);
              const componentRef = `${id}/${stringifyVariantExpression(variantKey)}/${stringifyStateExpression(stateKey)}/${slotKey}/${propertyKey}`;
              for (const mode in graph[tokenName]?.references) {
                graph[tokenName]?.references[mode]?.push(componentRef);
              }
            }
          }
        }
      }
    }
  }

  return graph;
}

export function buildContext(ast: RootageAST): RootageCtx {
  const tokenIds = ast.tokens.map((x) => stringifyTokenLit(x.token));
  const tokenEntities = Object.fromEntries(ast.tokens.map((x) => [stringifyTokenLit(x.token), x]));
  const tokenCollectionIds = ast.tokenCollections.map((x) => x.name);
  const tokenCollectionEntities = Object.fromEntries(ast.tokenCollections.map((x) => [x.name, x]));
  const componentSpecIds = ast.componentSpecs.map((x) => x.id);
  const componentSpecEntities = Object.fromEntries(ast.componentSpecs.map((x) => [x.id, x]));
  const dependencyGraph = buildDependencyGraph(ast.tokens);
  const referenceGraph = buildReferenceGraph(ast.tokens, ast.componentSpecs);

  return {
    tokenIds,
    tokenEntities,
    tokenCollectionIds,
    tokenCollectionEntities,
    componentSpecIds,
    componentSpecEntities,
    dependencyGraph,
    referenceGraph,
  };
}
