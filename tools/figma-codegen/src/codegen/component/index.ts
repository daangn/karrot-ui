import { camelCase } from "change-case";
import { match } from "ts-pattern";
import { createIconTagNameFromId } from "../icon";
import type { ElementNode } from "../jsx";
import { createElement } from "../jsx";
import type {
  BoxButtonProperties,
  CalloutProperties,
  ActionChipProperties,
  ControlChipProperties,
} from "./type";

export interface ComponentHandler<
  T extends InstanceNode["componentProperties"] = InstanceNode["componentProperties"],
> {
  key: string;
  codegen: (node: InstanceNode & { componentProperties: T }) => ElementNode;
}

const boxButtonHandler: ComponentHandler<BoxButtonProperties> = {
  key: "21ca4a592a75b9dae5b964421c065c1beb37416e",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      size: props.Size.value.toString().toLowerCase(),
      variant: camelCase(props.Variant.value.toString(), {
        mergeAmbiguousCharacters: true,
      }),
      prefixIcon: props["Prefix Icon#366:0"].value
        ? createElement(createIconTagNameFromId(props["↳Icons#449:9"].value))
        : undefined,
    };
    return createElement("BoxButton", commonProps, props["Label#369:5"].value);
  },
};

const actionChipHandler: ComponentHandler<ActionChipProperties> = {
  key: "3d21594ef116e94a9465d507447b858aea062575",
  codegen: ({ componentProperties: props }) => {
    const { layout, prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon only", () => {
        return {
          layout: "iconOnly",
          prefixIcon: undefined,
          suffixIcon: undefined,
          children: createElement(createIconTagNameFromId(props["Icon#8714:0"].value)),
        };
      })
      .with("Icon first", () => ({
        layout: undefined,
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8711:0"].value)),
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .with("Icon last", () => ({
        layout: undefined,
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8711:3"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Icon both", () => ({
        layout: undefined,
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8711:0"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8711:3"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Text only", () => ({
        layout: undefined,
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .exhaustive();

    const commonProps = {
      size: props.Size.value.toLowerCase(),
      layout,
      prefixIcon,
      suffixIcon,
      ...(props.State.value === "Disabled" && {
        disabled: true,
      }),
      ...(props["Show Counter#7185:42"].value && {
        count: Number(props["Counter#7185:21"].value),
      }),
    };
    return createElement("ChipButton", commonProps, children);
  },
};

const calloutHandler: ComponentHandler<CalloutProperties> = {
  key: "ec46d38baac3c367c4a5ffa47a2110d51ba0a4fe",
  codegen: ({ componentProperties: props, children }) => {
    const tag = (() => {
      switch (props.Interaction.value) {
        case "Actionable":
          return "ActionableCallout";
        case "Dismissible":
          return "DismissibleCallout";
        case "Default":
          return "Callout";
        default:
          return "Callout";
      }
    })();

    const textNode = children.find((child) => child.type === "TEXT") as TextNode;
    const slices = textNode.getStyledTextSegments(["fontWeight", "textDecoration"]);

    let title: string | undefined;
    let description: string | undefined;
    let linkLabel: string | undefined;

    switch (slices.length) {
      case 1: {
        description = slices[0]?.characters.trim();

        break;
      }
      case 2: {
        const firstSlice = slices[0];
        const secondSlice = slices[1];

        if (firstSlice?.fontWeight === 700) {
          title = firstSlice?.characters.trim();
          description = secondSlice?.characters.trim();
          break;
        }

        description = firstSlice?.characters.trim();

        if (tag !== "ActionableCallout") {
          linkLabel = secondSlice?.characters.trim();
        }

        break;
      }
      case 3: {
        title = slices[0]?.characters.trim();
        description = slices[1]?.characters.trim();

        if (tag !== "ActionableCallout") {
          linkLabel = slices[2]?.characters.trim();
        }

        break;
      }
    }

    const commonProps = {
      tone: camelCase(props.Tone.value),
      title,
      description,
      linkLabel,
      ...(linkLabel && { linkProps: {} }),
      ...(props["Prefix Icon#12598:229"].value && {
        icon: createElement(createIconTagNameFromId(props["Icon#12598:210"].value)),
      }),
    };

    return createElement(tag, commonProps);
  },
};

const controlChipHandler: ComponentHandler<ControlChipProperties> = {
  key: "5780d56fc2f9bc4bbd6bc3db93949d8a8b7b7563",
  codegen: ({ componentProperties: props }) => {
    const { layout, prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon only", () => {
        return {
          layout: "iconOnly",
          prefixIcon: undefined,
          suffixIcon: undefined,
          children: createElement(createIconTagNameFromId(props["Icon#8722:41"].value)),
        };
      })
      .with("Icon first", () => ({
        layout: undefined,
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8722:0"].value)),
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .with("Icon last", () => ({
        layout: undefined,
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8722:82"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Icon both", () => ({
        layout: undefined,
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8722:0"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8722:82"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Text only", () => ({
        layout: undefined,
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .exhaustive();

    const commonProps = {
      size: props.Size.value.toLowerCase(),
      layout,
      prefixIcon,
      suffixIcon,
      ...(props.State.value === "Disabled" && {
        disabled: true,
      }),
      ...(props["Show Counter#7185:42"].value && {
        count: Number(props["Counter#7185:21"].value),
      }),
    };

    return createElement("ControlChip.Toggle", commonProps, children);
  },
};

const componentHandlers = [
  boxButtonHandler,
  actionChipHandler,
  calloutHandler,
  controlChipHandler,
] as ComponentHandler[];

export const componentHandlerMap = new Map(
  componentHandlers.map((component) => [component.key, component]),
);

export const ignoredComponentKeys = new Set<string>([
  "a96fe9696d66425daa57bdc86a378a54a54ae0f9",
  "5f5b68664abeaacde7d38c2418cc8e9706bf20d8",
]);
