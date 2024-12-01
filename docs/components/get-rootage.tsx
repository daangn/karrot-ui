import { Model, buildRootage } from "@seed-design/rootage-core";

export const getRootage = async () => {
  const index: { resources: { path: string }[] } = await import("@/public/rootage/index.json").then(
    (module) => {
      return module.default;
    },
  );
  const models: Model[] = await Promise.all(
    index.resources.map((resource) => import(`@/public/rootage${resource.path}`)),
  );
  return buildRootage(models);
};
