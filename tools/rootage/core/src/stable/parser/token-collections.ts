import type * as Document from "./document";
import type { TokenCollectionDeclaration } from "./ast";
import * as factory from "./factory";

export function parseTokenCollectionsModel(
  model: Document.TokenCollectionsModel,
): TokenCollectionDeclaration[] {
  return model.data.map((tc) => factory.createTokenCollectionDeclaration(tc.name, tc.modes));
}
