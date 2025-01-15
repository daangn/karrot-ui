import { camelCase } from "change-case";
import { createBackgroundProps, createBorderProps, createColorProps } from "./color";
import { componentHandlerMap } from "./component";
import { createIconTagNameFromKey, createMonochromeIconFillProps, isIconComponent } from "./icon";
import type { ElementNode } from "./jsx";
import { createElement, stringifyElement } from "./jsx";
import { createLayoutProps } from "./layout";
import { createSizingProps } from "./sizing";
import { createTextProps, getTextStyleTag } from "./text";
import { iconRecord } from "./icon/data";

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

    const segments = node.getStyledTextSegments([
      "textStyleId",
      "fontSize",
      "fontWeight",
      "lineHeight",
      "boundVariables",
    ]);

    function handleTextSegment(segment: (typeof segments)[number]) {
      const style = figma.getStyleById(segment.textStyleId);

      if (style && style.type === "TEXT") {
        const textStyleTag = getTextStyleTag(style);

        return createElement(
          "Text",
          {
            as: textStyleTag,
            variant: camelCase(style.name, { mergeAmbiguousCharacters: true }),
          },
          segment.characters,
          `${textStyleTag} 태그 사용이 적절한지 확인하세요.`,
        );
      }

      const textProps = createTextProps(segment.boundVariables);
      const unavailableProps = Object.entries(textProps)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

      const { fontSize, fontWeight, lineHeight } = textProps;

      return createElement(
        "Text",
        {
          as: "span",
          ...(fontSize ? { fontSize } : {}),
          ...(fontWeight ? { fontWeight } : {}),
          ...(lineHeight ? { lineHeight } : {}),
        },
        segment.characters,
        `${
          unavailableProps.length > 0
            ? `${unavailableProps.join(", ")} 프로퍼티는 반영되지 않았습니다. `
            : ""
        }span 태그 사용이 적절한지 확인하세요.`,
      );
    }

    if (segments.length > 1) {
      return createElement(
        "Text",
        {
          as: "span",
          maxLines,
        },
        segments.map(handleTextSegment),
        "span 태그 사용이 적절한지 확인하세요.",
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
      return createElement(createIconTagNameFromKey(componentKey), {
        size: node.width,
        ...(iconRecord[componentKey]?.type === "monochrome" && createMonochromeIconFillProps(node)),
      });
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
