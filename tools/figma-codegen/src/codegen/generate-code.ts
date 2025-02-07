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

export async function generateCode(selection: SceneNode) {
  async function handleFrameNode(node: FrameNode | InstanceNode | ComponentNode) {
    const children = node.children;

    const autoLayout = node.inferredAutoLayout;

    if (!autoLayout) {
      return createElement("div", {}, await Promise.all(children.map(traverse)));
    }

    const props = {
      ...(await createLayoutProps(node)),
      ...(await createSizingProps(node)),
      ...(await createBackgroundProps(node)),
      ...(await createBorderProps(node)),
    };

    if (
      props.flexDirection === "row" &&
      props.alignItems === "flexStart" &&
      props.justifyContent === "flexStart" &&
      props.flexWrap === "wrap"
    ) {
      const { flexDirection, flexWrap, alignItems, justifyContent, ...rest } = props;

      return createElement("Inline", rest, await Promise.all(children.map(traverse)));
    }

    if (
      props.flexDirection === "row" &&
      props.justifyContent === "flexStart" &&
      props.flexWrap === "nowrap"
    ) {
      const { flexDirection, flexWrap, justifyContent, ...rest } = props;

      const childrenResult = await Promise.all(children.map(traverse));

      return createElement(
        "Columns",
        rest,
        childrenResult.map((child) => createElement("Column", {}, child)),
      );
    }

    if (props.flexDirection === "column") {
      const { flexDirection, ...rest } = props;

      return createElement("Stack", rest, await Promise.all(children.map(traverse)));
    }

    return createElement("Flex", props, await Promise.all(children.map(traverse)));
  }

  async function handleTextNode(node: TextNode): Promise<ElementNode> {
    const maxLines = node.textTruncation === "ENDING" ? (node.maxLines ?? undefined) : undefined;

    const segments = node.getStyledTextSegments(["textStyleId", "fills", "boundVariables"]);

    async function handleTextSegment(segment: (typeof segments)[number]) {
      const style = await figma.getStyleByIdAsync(segment.textStyleId);

      if (style && style.type === "TEXT") {
        if (segment.fills.length > 1) {
          throw new Error("Expected a single fill");
        }

        const onlyFill = segment.fills.length === 1 ? segment.fills[0] : null;
        const fillBoundVariableId =
          onlyFill && onlyFill.type === "SOLID"
            ? (onlyFill.boundVariables?.color?.id ?? null)
            : null;

        const color = fillBoundVariableId
          ? await getColorVariableName(fillBoundVariableId)
          : undefined;

        return createElement(
          "Text",
          {
            textStyle: camelCase(style.name, { mergeAmbiguousCharacters: true }),
            ...(color ? { color } : {}),
          },
          segment.characters.replace(/\n/g, "<br />"),
          color ? "" : "color 프로퍼티는 반영되지 않았습니다.",
        );
      }

      const textProps = await createTextProps(segment.boundVariables);
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

      const color = fillBoundVariableId ? await getColorVariableName(fillBoundVariableId) : null;

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
        await Promise.all(segments.map(handleTextSegment)),
        maxLines
          ? "텍스트 레이어가 여러 스타일로 이루어져 있어 max line truncation이 적용되지 않았습니다. <Text /> 컴포넌트는 중첩되어 사용되도록 만들어지지 않았습니다."
          : "",
      );
    }

    const onlySegment = segments[0];
    if (!onlySegment) throw new Error();

    return await handleTextSegment(onlySegment);
  }

  async function handleRectangleNode(node: RectangleNode) {
    return createElement("div", await createSizingProps(node), undefined, "Rectangle");
  }

  async function handleComponentNode(node: ComponentNode) {
    return await handleFrameNode(node);
  }

  async function handleInstanceNode(node: InstanceNode) {
    const mainComponent = await node.getMainComponentAsync();
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
            ...(await createMonochromeIconColorProps(node)),
          });
        case "multicolor":
          return iconElement;
        default:
          return createElement("Icon", {
            size: node.width,
            svg: iconElement,
            ...(await createMonochromeIconColorProps(node)),
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
      return await handleFrameNode(node);
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

  async function traverse(node: SceneNode): Promise<ElementNode | undefined> {
    if ("visible" in node && !node.visible) {
      return;
    }

    if (node.type === "FRAME") return await handleFrameNode(node);
    if (node.type === "TEXT") return await handleTextNode(node);
    if (node.type === "RECTANGLE") return await handleRectangleNode(node);
    if (node.type === "COMPONENT") return await handleComponentNode(node);
    if (node.type === "INSTANCE") return await handleInstanceNode(node);

    return;
  }

  try {
    const rootEl = await traverse(selection);
    if (!rootEl) {
      return "";
    }
    return stringifyElement(rootEl);
  } catch (e) {
    console.error(e);
    return "";
  }
}
