import { camelCase } from "change-case";
import { createBackgroundProps, createBorderProps } from "./color";
import { componentHandlerMap, ignoredComponentKeys } from "./component";
import { createIconTagNameFromKey, createMonochromeIconColorProps, isIconComponent } from "./icon";
import type { ElementNode } from "./jsx";
import { createElement, stringifyElement } from "./jsx";
import { createLayoutProps } from "./layout";
import { createSizingProps } from "./sizing";
import { createTextProps } from "./text";
import { iconRecord } from "./data/icons";
import { getColorVariableName } from "./variable";

export function generateCode(selection: SceneNode) {
  function handleFrameNode(node: FrameNode | InstanceNode | ComponentNode) {
    const children = node.children;

    const autoLayout = node.inferredAutoLayout;
    if (!autoLayout) {
      return createElement("div", {}, children.map(traverse));
    }

    return createElement(
      "Flex",
      {
        ...createLayoutProps(node),
        ...createSizingProps(node),
        ...createBackgroundProps(node),
        ...createBorderProps(node),
      },
      children.map(traverse),
    );
  }

  function handleTextNode(node: TextNode): ElementNode {
    const maxLines = node.textTruncation === "ENDING" ? (node.maxLines ?? undefined) : undefined;

    const segments = node.getStyledTextSegments(["textStyleId", "fills", "boundVariables"]);

    function handleTextSegment(segment: (typeof segments)[number]) {
      const style = figma.getStyleById(segment.textStyleId);

      if (style && style.type === "TEXT") {
        if (segment.fills.length > 1) {
          throw new Error("Expected a single fill");
        }

        const onlyFill = segment.fills.length === 1 ? segment.fills[0] : null;
        const fillBoundVariableId =
          onlyFill && onlyFill.type === "SOLID"
            ? (onlyFill.boundVariables?.color?.id ?? null)
            : null;

        const color = fillBoundVariableId ? getColorVariableName(fillBoundVariableId) : undefined;

        return createElement(
          "Text",
          {
            variant: camelCase(style.name, { mergeAmbiguousCharacters: true }),
            ...(color ? { color } : {}),
          },
          segment.characters.replace(/\n/g, "<br />"),
          color ? "" : "color 프로퍼티는 반영되지 않았습니다.",
        );
      }

      const textProps = createTextProps(segment.boundVariables);
      const unavailableProps = Object.entries(textProps)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

      const { fontSize, fontWeight, lineHeight } = textProps;

      if (segment.fills.length > 1) {
        throw new Error("Expected a single fill");
      }

      const onlyFill = segment.fills.length === 1 ? segment.fills[0] : null;
      const fillBoundVariableId =
        onlyFill && onlyFill.type === "SOLID" ? (onlyFill.boundVariables?.color?.id ?? null) : null;

      const color = fillBoundVariableId ? getColorVariableName(fillBoundVariableId) : null;

      return createElement(
        "Text",
        {
          ...(fontSize ? { fontSize } : {}),
          ...(fontWeight ? { fontWeight } : {}),
          ...(lineHeight ? { lineHeight } : {}),
          ...(color ? { color } : {}),
        },
        segment.characters.replace(/\n/g, "<br />"),
        unavailableProps.length > 0
          ? `${unavailableProps.join(", ")} 프로퍼티는 반영되지 않았습니다.`
          : "",
      );
    }

    if (segments.length > 1) {
      return createElement(
        "span",
        undefined,
        segments.map((segment) => handleTextSegment(segment)),
        maxLines
          ? "텍스트 레이어가 여러 스타일로 이루어져 있어 max line truncation이 적용되지 않았습니다. <Text /> 컴포넌트는 중첩되어 사용되도록 만들어지지 않았습니다."
          : "",
      );
    }

    const onlySegment = segments[0];
    if (!onlySegment) throw new Error();

    return handleTextSegment(onlySegment);
  }

  function handleRectangleNode(node: RectangleNode) {
    return createElement("div", createSizingProps(node), undefined, "Rectangle");
  }

  function handleComponentNode(node: ComponentNode) {
    return handleFrameNode(node);
  }

  function handleInstanceNode(node: InstanceNode) {
    const mainComponent = node.mainComponent;
    if (!mainComponent) {
      return;
    }

    const componentKey = mainComponent.key;
    const componentSetKey =
      mainComponent.parent?.type === "COMPONENT_SET" ? mainComponent.parent.key : null;

    if (isIconComponent(componentKey)) {
      const iconElement = createElement(createIconTagNameFromKey(componentKey));

      switch (iconRecord[componentKey]?.type) {
        case "monochrome":
          return createElement("Icon", {
            size: node.width,
            svg: iconElement,
            ...createMonochromeIconColorProps(node),
          });
        case "multicolor":
          return iconElement;
        default:
          return createElement("Icon", {
            size: node.width,
            svg: iconElement,
            ...createMonochromeIconColorProps(node),
          });
      }
    }

    if (ignoredComponentKeys.has(componentSetKey ?? componentKey)) {
      return;
    }

    const componentData = componentSetKey
      ? componentHandlerMap.get(componentSetKey)
      : componentHandlerMap.get(componentKey);

    if (componentData) {
      return componentData.codegen(node);
    }

    if (node.id === selection.id) {
      return handleFrameNode(node);
    }

    return createElement(
      mainComponent.parent?.type === "COMPONENT_SET"
        ? mainComponent.parent.name
        : mainComponent.name,
      Object.fromEntries(
        Object.entries(node.componentProperties)
          .filter(([_, props]) => props.type === "VARIANT" || props.type === "TEXT")
          .map(([key, props]) => [camelCase(key), camelCase(props.value as string)]),
      ),
      undefined,
      "Custom Component",
    );
  }

  function traverse(node: SceneNode): ElementNode | undefined {
    if ("visible" in node && !node.visible) {
      return;
    }

    if (node.type === "FRAME") return handleFrameNode(node);
    if (node.type === "TEXT") return handleTextNode(node);
    if (node.type === "RECTANGLE") return handleRectangleNode(node);
    if (node.type === "COMPONENT") return handleComponentNode(node);
    if (node.type === "INSTANCE") return handleInstanceNode(node);

    return;
  }

  try {
    const rootEl = traverse(selection);
    if (!rootEl) {
      return "";
    }
    return stringifyElement(rootEl);
  } catch (e) {
    console.error(e);
    return "";
  }
}
