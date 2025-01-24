import { parseComponentSpecModel } from "./component-spec";
import { parseTokensModel } from "./token";
import { parseTokenCollectionsModel } from "./token-collection";
import type { Model, RootageAST } from "./types";

export function parse(models: Model[]): RootageAST {
  const tokenCollections = models
    .filter((model) => model?.kind === "TokenCollections")
    .flatMap((model) => parseTokenCollectionsModel(model));
  const tokens = models
    .filter((model) => model?.kind === "Tokens")
    .flatMap((model) => parseTokensModel(model));
  const componentSpecs = models
    .filter((model) => model?.kind === "ComponentSpec")
    .map((model) => parseComponentSpecModel(model));

  return {
    tokenCollections,
    tokens,
    componentSpecs,
  };
}
