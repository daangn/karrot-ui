import { getLayoutVariableName } from "./variable";

type SizingPropHandler = (props: {
  boundVariables: NonNullable<SceneNodeMixin["boundVariables"]>;
  layoutSizingHorizontal: FrameNode["layoutSizingHorizontal"];
  layoutSizingVertical: FrameNode["layoutSizingVertical"];
  width: FrameNode["width"];
  height: FrameNode["height"];
}) => string | number | boolean | undefined | Promise<string | number | boolean | undefined>;

const sizingPropHandlers = {
  height: async ({ boundVariables, layoutSizingVertical, height }) =>
    layoutSizingVertical === "FIXED"
      ? boundVariables.height
        ? await getLayoutVariableName(boundVariables.height.id)
        : height
      : undefined,
} satisfies Record<string, SizingPropHandler>;

export async function createSizingProps(
  node: DefaultShapeMixin,
): Promise<Record<string, string | number | boolean>> {
  const boundVariables = node.boundVariables;
  const layoutSizingHorizontal = node.layoutSizingHorizontal;
  const layoutSizingVertical = node.layoutSizingVertical;
  const width = node.width;
  const height = node.height;

  if (!boundVariables) {
    return {};
  }

  const result: Record<string, string | number | boolean> = {};

  for await (const [prop, handler] of Object.entries(sizingPropHandlers)) {
    const value = await handler({
      boundVariables,
      layoutSizingHorizontal,
      layoutSizingVertical,
      width,
      height,
    });
    if (value !== undefined) {
      result[prop] = value;
    }
  }

  return result;
}
