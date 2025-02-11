import type { Model } from "../types";

export function genJsonIndex(
  models: Model[],
  options: {
    version?: string;
    resourcePrefix?: string;
  } = {},
) {
  const { version = "0.0.0", resourcePrefix = "" } = options;

  // Get all token files - place in root
  const tokenPaths = models
    .filter((model) => model.kind === "Tokens")
    .map((model) => {
      return `${model.metadata.id}.json`;
    });

  // Get all component spec files - place in components directory
  const componentPaths = models
    .filter((model) => model.kind === "ComponentSpec")
    .map((model) => {
      return `components/${model.metadata.id}.json`;
    });

  const tokenCollectionPaths = models
    .filter((model) => model.kind === "TokenCollections")
    .map((model) => {
      return `${model.metadata.id}.json`;
    });

  // Combine all paths and add prefix
  const resources = [...new Set([...tokenPaths, ...componentPaths, ...tokenCollectionPaths])]
    .sort()
    .map((path) => ({
      path: `${resourcePrefix}/${path}`.replace(/\/+/g, "/"),
    }));

  return {
    name: "Rootage",
    version,
    resources,
  };
}
