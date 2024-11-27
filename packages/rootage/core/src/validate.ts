import { stringifyTokenExpression } from "./token";
import type { RootageAST } from "./types";

interface ValidationResult {
  valid: boolean;
  message: string;
}

export function validate(ast: RootageAST): ValidationResult {
  const { componentSpecs, tokens, tokenCollections } = ast;

  // validate collection names
  const collectionNames = tokenCollections.map((collection) => collection.name);
  const collectionNameSet = new Set(collectionNames);

  for (const tokenBinding of tokens) {
    if (!collectionNameSet.has(tokenBinding.collection)) {
      return {
        valid: false,
        message: `Token collection "${tokenBinding.collection}" is not defined but used in "${stringifyTokenExpression(tokenBinding.token)}"`,
      };
    }
  }

  // validate collection modes
  for (const tokenBinding of tokens) {
    const collection = tokenCollections.find(
      (collection) => collection.name === tokenBinding.collection,
    )!;
    for (const { mode } of tokenBinding.values) {
      if (!collection.modes.includes(mode)) {
        return {
          valid: false,
          message: `Mode "${mode}" is not defined in token collection "${tokenBinding.collection}" but used in "${stringifyTokenExpression(tokenBinding.token)}"`,
        };
      }
    }
  }

  // validate token references
  const tokenNames = tokens.map((binding) => stringifyTokenExpression(binding.token));
  const tokenNameSet = new Set(tokenNames);

  for (const tokenBinding of tokens) {
    for (const { value } of tokenBinding.values) {
      if (value.type === "token") {
        const tokenName = stringifyTokenExpression(value);
        if (!tokenNameSet.has(tokenName)) {
          return {
            valid: false,
            message: `Token "${tokenName}" is not defined but used in "${stringifyTokenExpression(tokenBinding.token)}"`,
          };
        }
      }
    }
  }

  for (const componentSpec of componentSpecs) {
    for (const variant of componentSpec.data) {
      for (const state of variant.state) {
        for (const slot of state.slot) {
          for (const property of slot.property) {
            if (property.value.type === "token") {
              const tokenName = stringifyTokenExpression(property.value);
              if (!tokenNameSet.has(tokenName)) {
                return {
                  valid: false,
                  message: `Token "${tokenName}" is not defined but used in component spec "${componentSpec.name}"`,
                };
              }
            }
          }
        }
      }
    }
  }

  return { valid: true, message: "" };
}
