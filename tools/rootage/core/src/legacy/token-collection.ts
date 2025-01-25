import type { TokenCollectionDeclaration, TokenCollectionsModel } from "./types";

export function parseTokenCollectionsModel(
  input: TokenCollectionsModel,
): TokenCollectionDeclaration[] {
  return input.data;
}
