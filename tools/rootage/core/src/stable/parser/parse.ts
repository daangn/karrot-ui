import type * as Document from "./document";
import { parseComponentSpecModel } from "./component-spec";
import * as factory from "./factory";
import { parseTokenCollectionsModel } from "./token-collections";
import { parseTokensModel } from "./tokens";
import type {
  ComponentSpecDeclaration,
  RootageAST,
  TokenCollectionDeclaration,
  TokenDeclaration,
} from "./ast";

/**
 * Main entry point. Loops through each `Document.Model` in the array,
 * converting them into AST representation, then returns a
 * single RootageAST that contains them all.
 */
export function parse(models: Document.Model[]): RootageAST {
  const componentSpecs: ComponentSpecDeclaration[] = [];
  const tokens: TokenDeclaration[] = [];
  const tokenCollections: TokenCollectionDeclaration[] = [];

  for (const model of models) {
    switch (model.kind) {
      case "ComponentSpec":
        componentSpecs.push(parseComponentSpecModel(model));
        break;

      case "Tokens":
        tokens.push(...parseTokensModel(model));
        break;

      case "TokenCollections":
        tokenCollections.push(...parseTokenCollectionsModel(model));
        break;
    }
  }

  // Build the final RootageAST node
  return factory.createRootageAST(componentSpecs, tokens, tokenCollections);
}
