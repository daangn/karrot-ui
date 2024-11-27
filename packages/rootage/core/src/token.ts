import type { TokenDeclaration, TokenExpression, TokenRef, TokensModel } from "./types";
import { parseValueExpression } from "./value";

// guard
export function isTokenRef(expression: string | number | object): expression is TokenRef {
  if (typeof expression === "number") {
    return false;
  }

  if (typeof expression === "object") {
    return false;
  }

  return expression.startsWith("$");
}

// parse
/**
 * @example
 * parseTokenExpression("$color.bg.layer-1") // { group: ["color", "bg"], key: "layer-1" }
 */
export function parseTokenExpression(input: TokenRef): TokenExpression {
  if (!isTokenRef(input)) {
    throw new Error("Invalid token format");
  }

  const prefixStriped = input.slice(1);

  const parts = prefixStriped.split(".");
  const group = parts.slice(0, -1);
  const last = parts[parts.length - 1]!;
  return { type: "token", group, key: last };
}

export function parseTokensModel(model: TokensModel): TokenDeclaration[] {
  const { tokens, collection } = model.data;
  const tokenDeclarations: TokenDeclaration[] = [];

  const tokenNames = Object.keys(tokens) as TokenRef[];
  for (const tokenName of tokenNames) {
    const token = tokens[tokenName]!;
    const values = Object.entries(token.values).map(([mode, righthand]) => {
      return {
        mode,
        value: isTokenRef(righthand)
          ? parseTokenExpression(righthand)
          : parseValueExpression(righthand),
      };
    });

    tokenDeclarations.push({
      collection: collection,
      token: parseTokenExpression(tokenName),
      values,
    });
  }

  return tokenDeclarations;
}

export function stringifyTokenExpression(token: TokenExpression): string {
  if (token.group.length === 0) {
    return `$${token.key}`;
  }

  return `$${token.group.join(".")}.${token.key}`;
}
