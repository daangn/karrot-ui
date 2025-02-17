import { getLayoutVariableName } from "./variable";

function unit(value: number) {
  if (value === 0) return 0;
  return `${value}px`;
}

interface FigmaLayoutProps {
  layoutMode: AutoLayoutMixin["layoutMode"];
  layoutWrap: AutoLayoutMixin["layoutWrap"];
  paddingLeft: AutoLayoutMixin["paddingLeft"];
  paddingRight: AutoLayoutMixin["paddingRight"];
  paddingTop: AutoLayoutMixin["paddingTop"];
  paddingBottom: AutoLayoutMixin["paddingBottom"];
  primaryAxisAlignItems: AutoLayoutMixin["primaryAxisAlignItems"];
  counterAxisAlignItems: AutoLayoutMixin["counterAxisAlignItems"];
  primaryAxisSizingMode: AutoLayoutMixin["primaryAxisSizingMode"];
  counterAxisSizingMode: AutoLayoutMixin["counterAxisSizingMode"];
  layoutGrow: AutoLayoutChildrenMixin["layoutGrow"];
  layoutAlign: AutoLayoutChildrenMixin["layoutAlign"];
  itemSpacing: AutoLayoutMixin["itemSpacing"];
  counterAxisSpacing: AutoLayoutMixin["counterAxisSpacing"];
  boundVariables: NonNullable<SceneNodeMixin["boundVariables"]>;
  bottomLeftRadius: RectangleCornerMixin["bottomLeftRadius"];
  bottomRightRadius: RectangleCornerMixin["bottomRightRadius"];
  topLeftRadius: RectangleCornerMixin["topLeftRadius"];
  topRightRadius: RectangleCornerMixin["topRightRadius"];
  children: readonly SceneNode[];
}

type LayoutPropHandler = (
  props: FigmaLayoutProps,
) => string | number | boolean | undefined | Promise<string | number | boolean | undefined>;

const layoutPropHandlers = {
  flexDirection: ({ layoutMode }) => (layoutMode === "HORIZONTAL" ? "row" : "column"),
  justifyContent: ({ primaryAxisAlignItems }) => {
    switch (primaryAxisAlignItems) {
      case "MIN":
        return "flexStart";
      case "CENTER":
        return "center";
      case "MAX":
        return "flexEnd";
      case "SPACE_BETWEEN":
        return "spaceBetween";
    }
  },
  alignItems: ({ counterAxisAlignItems, children }) => {
    const isStretch = children.every((child) => {
      if (!("layoutAlign" in child)) {
        return false;
      }

      return child.layoutAlign === "STRETCH";
    });

    if (isStretch) {
      return "stretch";
    }

    switch (counterAxisAlignItems) {
      case "MIN":
        return "flexStart";
      case "CENTER":
        return "center";
      case "MAX":
        return "flexEnd";
      case "BASELINE":
        return "baseline";
    }
  },
  flexWrap: ({ layoutWrap }) => (layoutWrap === "WRAP" ? "wrap" : "nowrap"),
  flexGrow: ({ layoutGrow }) => layoutGrow,
  alignSelf: ({ layoutAlign }) => {
    switch (layoutAlign) {
      case "STRETCH":
        return "stretch";
      case "MIN":
        return "flexStart";
      case "CENTER":
        return "center";
      case "MAX":
        return "flexEnd";
    }
  },
  gap: async ({ itemSpacing, boundVariables, primaryAxisAlignItems, children }) =>
    children.length <= 1
      ? 0
      : primaryAxisAlignItems === "SPACE_BETWEEN"
        ? 0
        : boundVariables.itemSpacing
          ? await getLayoutVariableName(boundVariables.itemSpacing.id)
          : unit(itemSpacing),
  paddingTop: async ({ paddingTop, boundVariables }) =>
    boundVariables.paddingTop
      ? await getLayoutVariableName(boundVariables.paddingTop.id)
      : unit(paddingTop),
  paddingBottom: async ({ paddingBottom, boundVariables }) =>
    boundVariables.paddingBottom
      ? await getLayoutVariableName(boundVariables.paddingBottom.id)
      : unit(paddingBottom),
  paddingLeft: async ({ paddingLeft, boundVariables }) =>
    boundVariables.paddingLeft
      ? await getLayoutVariableName(boundVariables.paddingLeft.id)
      : unit(paddingLeft),
  paddingRight: async ({ paddingRight, boundVariables }) =>
    boundVariables.paddingRight
      ? await getLayoutVariableName(boundVariables.paddingRight.id)
      : unit(paddingRight),
  borderRadius: async ({
    bottomLeftRadius,
    bottomRightRadius,
    topLeftRadius,
    topRightRadius,
    boundVariables,
  }) => {
    if (
      bottomLeftRadius === bottomRightRadius &&
      bottomLeftRadius === topLeftRadius &&
      bottomLeftRadius === topRightRadius
    ) {
      return boundVariables.bottomLeftRadius
        ? await getLayoutVariableName(boundVariables.bottomLeftRadius.id)
        : unit(bottomLeftRadius);
    }
  },
} satisfies Record<string, LayoutPropHandler>;

type GeneratedLayoutProps = keyof typeof layoutPropHandlers;

type LayoutShorthandHandler = (
  props: Record<GeneratedLayoutProps, string | number | boolean | undefined>,
) =>
  | {
      value: string | number | boolean | undefined;
      exclude: GeneratedLayoutProps[];
    }
  | undefined;

const layoutShorthandHandlers = {
  paddingX: ({ paddingLeft, paddingRight, paddingTop, paddingBottom }) => {
    if (
      paddingLeft === paddingRight &&
      paddingTop === paddingBottom &&
      paddingLeft === paddingTop
    ) {
      return undefined;
    }
    if (paddingLeft === paddingRight) {
      const value =
        paddingLeft === "globalGutter" || paddingLeft === "betweenChips"
          ? `spacingX.${paddingLeft}`
          : paddingLeft;
      return {
        value,
        exclude: ["paddingLeft", "paddingRight"],
      };
    }
    return undefined;
  },
  paddingY: ({ paddingLeft, paddingRight, paddingTop, paddingBottom }) => {
    if (
      paddingLeft === paddingRight &&
      paddingTop === paddingBottom &&
      paddingLeft === paddingTop
    ) {
      return undefined;
    }
    if (paddingTop === paddingBottom) {
      return {
        value: paddingTop,
        exclude: ["paddingTop", "paddingBottom"],
      };
    }
    return undefined;
  },
  padding: ({ paddingLeft, paddingRight, paddingTop, paddingBottom }) => {
    if (
      paddingLeft === paddingRight &&
      paddingTop === paddingBottom &&
      paddingLeft === paddingTop
    ) {
      return {
        value: paddingLeft,
        exclude: ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"],
      };
    }
    return undefined;
  },
} satisfies Record<string, LayoutShorthandHandler>;

type GeneratedShorthandLayoutProps = keyof typeof layoutShorthandHandlers;

const layoutPropDefaults: Record<string, string | number | boolean> = {
  flexDirection: "row",
  justifyContent: "flexStart",
  alignItems: "stretch",
  flexWrap: "nowrap",
  flexGrow: 0,
  alignSelf: "auto",
  gap: 0,
  padding: 0,
  paddingX: 0,
  paddingY: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  borderRadius: 0,
} satisfies Record<GeneratedLayoutProps | GeneratedShorthandLayoutProps, string | number | boolean>;

export async function createLayoutProps(
  node: DefaultFrameMixin,
): Promise<Record<string, string | number | boolean>> {
  const boundVariables = node.boundVariables;
  const children = node.children;

  if (!boundVariables) {
    return {};
  }

  const autoLayoutProperties = {
    layoutMode: node.inferredAutoLayout?.layoutMode ?? node.layoutMode,
    layoutWrap: node.inferredAutoLayout?.layoutWrap ?? node.layoutWrap,
    paddingLeft: node.inferredAutoLayout?.paddingLeft ?? node.paddingLeft,
    paddingRight: node.inferredAutoLayout?.paddingRight ?? node.paddingRight,
    paddingTop: node.inferredAutoLayout?.paddingTop ?? node.paddingTop,
    paddingBottom: node.inferredAutoLayout?.paddingBottom ?? node.paddingBottom,
    primaryAxisAlignItems:
      node.inferredAutoLayout?.primaryAxisAlignItems ?? node.primaryAxisAlignItems,
    counterAxisAlignItems:
      node.inferredAutoLayout?.counterAxisAlignItems ?? node.counterAxisAlignItems,
    primaryAxisSizingMode:
      node.inferredAutoLayout?.primaryAxisSizingMode ?? node.primaryAxisSizingMode,
    counterAxisSizingMode:
      node.inferredAutoLayout?.counterAxisSizingMode ?? node.counterAxisSizingMode,
    layoutGrow: node.inferredAutoLayout?.layoutGrow ?? node.layoutGrow,
    layoutAlign: node.inferredAutoLayout?.layoutAlign ?? node.layoutAlign,
    itemSpacing: node.inferredAutoLayout?.itemSpacing ?? node.itemSpacing,
    counterAxisSpacing: node.inferredAutoLayout?.counterAxisSpacing ?? node.counterAxisSpacing,
  };

  const radiusProperties = {
    bottomLeftRadius: node.bottomLeftRadius,
    bottomRightRadius: node.bottomRightRadius,
    topLeftRadius: node.topLeftRadius,
    topRightRadius: node.topRightRadius,
  };

  const result: Record<string, string | number | boolean> = {};

  for await (const [prop, handler] of Object.entries(layoutPropHandlers)) {
    const value = await handler({
      ...autoLayoutProperties,
      ...radiusProperties,
      boundVariables,
      children,
    });
    if (value !== undefined && value !== layoutPropDefaults[prop]) {
      result[prop] = value;
    }
  }

  for (const [prop, handler] of Object.entries(layoutShorthandHandlers)) {
    const shorthandResult = handler(result);
    if (shorthandResult === undefined) {
      continue;
    }
    const { value, exclude } = shorthandResult;
    if (value !== undefined && value !== layoutPropDefaults[prop]) {
      result[prop] = value;
      for (const excludedProp of exclude) {
        delete result[excludedProp];
      }
    }
  }

  return result;
}
