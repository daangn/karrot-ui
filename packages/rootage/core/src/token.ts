import { parsePrimitiveExpression } from "./primitive";
import type { TokenBindingStatement, TokenExpression, TokensData } from "./types";

// guard
export function isTokenExpression(expression: string | number | object): expression is string {
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
 * parseToken("$color.bg.layer-1") // { group: ["color", "bg"], key: "layer-1" }
 * parseToken("$unit[1]") // { group: ["unit", key: "1" }
 * parseToken("$unit.space[1]") // { group: ["unit", "space"], key: "1" }
 */
export function parseTokenExpression(tokenExpression: string): TokenExpression {
  if (!isTokenExpression(tokenExpression)) {
    throw new Error("Invalid token format");
  }

  const prefixStriped = tokenExpression.slice(1);
  const numericParts = prefixStriped.split("[");

  if (numericParts.length === 1) {
    const parts = prefixStriped.split(".");
    const group = parts.slice(0, -1);
    const last = parts[parts.length - 1];
    return { type: "token", group, key: last };
  }

  const parts = numericParts[0].split(".");
  const [...group] = parts;
  const key = numericParts[1].slice(0, -1);
  return { type: "token", group, key };
}

export function parseTokensData(input: TokensData): TokenBindingStatement[] {
  const tokenBindingStatements: TokenBindingStatement[] = [];

  for (const tokenName in input.tokens) {
    const values = [];

    for (const mode in input.tokens[tokenName].values) {
      const righthand = input.tokens[tokenName].values[mode];
      values.push({
        mode,
        value: isTokenExpression(righthand)
          ? parseTokenExpression(righthand)
          : parsePrimitiveExpression(righthand),
      });
    }

    tokenBindingStatements.push({
      collection: input.collection,
      token: parseTokenExpression(tokenName),
      values,
    });
  }

  return tokenBindingStatements;
}

export function stringifyTokenExpression(token: TokenExpression): string {
  if (token.group.length === 0) {
    return `$${token.key}`;
  }

  return `$${token.group.join(".")}.${token.key}`;
}
