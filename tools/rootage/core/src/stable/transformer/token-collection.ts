import type * as Document from "../parser/document";
import type * as Shorthand from "./shorthand-document";

export function transformTokenCollectionsModel(
  input: Shorthand.TokenCollectionsModel,
): Document.TokenCollectionsModel {
  return input;
}
