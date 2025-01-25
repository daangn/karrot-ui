import type * as Document from "../parser/document";
import type * as Shorthand from "./shorthand-document";
import { transformComponentSpecModel } from "./component-spec";
import { transformTokenCollectionsModel } from "./token-collection";
import { transformTokensModel } from "./tokens";

export function transform(models: Shorthand.Model[]): Document.Model[] {
  const result: Document.Model[] = [];

  for (const model of models) {
    switch (model.kind) {
      case "ComponentSpec":
        result.push(transformComponentSpecModel(model));
        break;

      case "Tokens":
        result.push(transformTokensModel(model));
        break;

      case "TokenCollections":
        result.push(transformTokenCollectionsModel(model));
        break;
    }
  }

  return result;
}
