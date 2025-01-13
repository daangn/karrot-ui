import { camelCase } from "change-case";
import { match } from "ts-pattern";
import { createIconTagNameFromId, createIconTagNameFromKey } from "../icon";
import type { ElementNode } from "../jsx";
import { createElement } from "../jsx";
import type { BoxButtonProperties, CalloutProperties, ChipProperties } from "./type";

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

const chipHandler: ComponentHandler<ChipProperties> = {
  key: "a586288593c6dccf4932ebc684cbb2f91851ed4c",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      size: props.Size.value.toString().toLowerCase(),
      variant: match(props.동작.value)
        .with("Button", () => (props.Inverted.value === "True" ? "inverted" : "default"))
        .with("Toggle", () => undefined)
        .with("Radio", () => undefined)
        .exhaustive(),
      prefixIcon: props["Prefix#28752:25"].value
        ? createElement(createIconTagNameFromId(props["↳Icon#52835:0"].value))
        : undefined,
      suffixIcon: props["Suffix#28752:0"].value
        ? createElement(createIconTagNameFromId(props["↳Icon #52835:5"].value))
        : undefined,
    };
    return createElement("ChipButton", commonProps, props["Label#28900:0"].value);
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
      icon: props["Prefix Icon#12598:229"].value
        ? createElement(createIconTagNameFromId(props["Icon#12598:210"].value))
        : undefined,
    };

    return createElement(tag, commonProps);
  },
};

const componentHandlers = [boxButtonHandler, chipHandler, calloutHandler] as ComponentHandler[];

export const componentHandlerMap = new Map(
  componentHandlers.map((component) => [component.key, component]),
);

export const ignoredComponentKeys = new Set<string>([
  "a96fe9696d66425daa57bdc86a378a54a54ae0f9",
  "5f5b68664abeaacde7d38c2418cc8e9706bf20d8",
]);
