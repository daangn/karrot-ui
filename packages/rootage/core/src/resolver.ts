import { stringifyTokenExpression } from "./token";
import type {
  ResolvedTokenResult,
  RootageCtx,
  TokenDeclaration,
  TokenExpression,
  TokenRef,
  ValueExpression,
} from "./types";

export function resolveToken(
  rootage: RootageCtx,
  token: TokenExpression,
  modes: Record<string, string>,
): ResolvedTokenResult {
  const { dependencyGraph } = rootage;

  function rec(name: TokenRef): TokenDeclaration[] {
    const node = dependencyGraph[name];

    if (!node) {
      throw new Error(`Token not found: ${name}`);
    }

    const mode = modes[node.declaration.collection];

    if (!mode) {
      throw new Error(`${node.declaration.collection} does not exist in modes`);
    }

    const nextNode = node.dependencies[mode];

    if (nextNode) {
      return [node.declaration, ...rec(nextNode)];
    }

    return [node.declaration];
  }

  const path = rec(stringifyTokenExpression(token));
  const last = path.at(-1)!;
  const value = last.values.find((v) => v.mode === modes[last.collection])?.value;

  if (!value) {
    throw new Error(
      `Value not found for ${last.collection}=${modes[last.collection]} in ${JSON.stringify(last.values, null, 2)}`,
    );
  }

  if (value.type === "token") {
    throw new Error(`Unexpected resolved token type: ${value}`);
  }

  return { path, value };
}
