import { isTokenRef } from "../parser/is-token-ref";
import type * as Document from "../parser/document";
import type { TokenRef } from "../parser/document";
import type * as Shorthand from "./shorthand-document";
import { transformValue } from "./value";

export function transformTokensModel(model: Shorthand.TokensModel): Document.TokensModel {
  const { tokens, collection } = model.data;
  const result: Document.TokensModel["data"]["tokens"] = {};

  const tokenEntries = Object.entries(tokens) as [
    TokenRef,
    Shorthand.TokensData["tokens"][TokenRef],
  ][];

  for (const [tokenName, token] of tokenEntries) {
    const values = Object.entries(token.values).map(([mode, righthand]) => {
      return [mode, isTokenRef(righthand) ? null : transformValue(righthand)];
    });

    result[tokenName] = {
      values: Object.fromEntries(values),
      description: token.description,
    };
  }

  for (const [tokenName, token] of tokenEntries) {
    for (const [mode, righthand] of Object.entries(token.values)) {
      if (isTokenRef(righthand)) {
        if (!result[righthand]) {
          throw new Error(`Token not found: ${righthand}`);
        }

        result[tokenName]!.values[mode] = {
          type: result[righthand].values[mode]!.type,
          value: righthand,
        };
      }
    }
  }

  return {
    kind: "Tokens",
    metadata: model.metadata,
    data: {
      collection,
      tokens: result,
    },
  };
}
