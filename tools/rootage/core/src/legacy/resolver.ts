import { stringifyTokenExpression } from "./token";
import type {
  ComponentSpecRef,
  ResolvedTokenResult,
  RootageCtx,
  TokenExpression,
  TokenRef,
} from "./types";

export function resolveToken(
  rootage: RootageCtx,
  tokenId: TokenRef,
  modes: Record<string, string>,
): ResolvedTokenResult {
  const { dependencyGraph } = rootage;

  function rec(name: TokenRef): TokenRef[] {
    const node = dependencyGraph[name];

    if (!node) {
      throw new Error(`Token not found: ${name}`);
    }

    const mode = modes[node.collection];

    if (!mode) {
      throw new Error(`${node.collection} does not exist in modes`);
    }

    const nextNode = node.dependencies[mode];

    if (nextNode) {
      return [node.name, ...rec(nextNode)];
    }

    return [node.name];
  }

  const path = rec(tokenId);
  const last = path.at(-1)!;
  const resolvedToken = rootage.tokenEntities[last];

  if (!resolvedToken) {
    throw new Error(`Token not found: ${last}`);
  }

  const value = resolvedToken.values.find((v) => v.mode === modes[resolvedToken.collection])?.value;

  if (!value) {
    throw new Error(
      `Value not found for ${resolvedToken.collection}=${modes[resolvedToken.collection]} in ${JSON.stringify(resolvedToken.values, null, 2)}`,
    );
  }

  if (value.type === "token") {
    throw new Error(`Unexpected resolved token type: ${value}`);
  }

  return { path, value };
}

export function resolveReferences(
  rootage: RootageCtx,
  tokenId: TokenRef,
  modes: Record<string, string>,
): (TokenRef | ComponentSpecRef)[] {
  const { referenceGraph } = rootage;

  function rec(name: TokenRef): (TokenRef | ComponentSpecRef)[] {
    const node = referenceGraph[name];

    if (!node) {
      return [];
    }

    const mode = modes[node.collection];

    if (!mode) {
      throw new Error(`${node.collection} does not exist in modes`);
    }

    return node.references[mode]!.flatMap((ref) => [ref, ...rec(ref as TokenRef)]);
  }

  return rec(tokenId);
}
