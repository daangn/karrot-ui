import { camelCase } from "change-case";
import { match } from "ts-pattern";
import { createIconTagNameFromId } from "../icon";
import type { ElementNode } from "../jsx";
import { createElement } from "../jsx";
import type {
  ActionButtonProperties,
  ActionChipProperties,
  AvatarProperties,
  AvatarStackProperties,
  BadgeProperties,
  CalloutProperties,
  CheckboxProperties,
  ControlChipProperties,
  ExtendedFabProperties,
  FabProperties,
  HelpBubbleProperties,
  IdentityPlaceholderProperties,
} from "./type";

export interface ComponentHandler<
  T extends InstanceNode["componentProperties"] = InstanceNode["componentProperties"],
> {
  key: string;
  codegen: (node: InstanceNode & { componentProperties: T }) => ElementNode;
}

const actionButtonHandler: ComponentHandler<ActionButtonProperties> = {
  key: "450ede9d0bf42fc6ef14345c77e6e407d6d5ee89",
  codegen: ({ componentProperties: props }) => {
    const { layout, prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon only", () => ({
        layout: "iconOnly",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: createElement(createIconTagNameFromId(props["Icon#7574:0"].value)),
      }))
      .with("Icon first", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#5987:305"].value)),
        suffixIcon: undefined,
        children: props["Label#5987:61"].value,
      }))
      .with("Icon last", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#5987:244"].value)),
        children: props["Label#5987:61"].value,
      }))
      .with("Icon both", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#5987:305"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#5987:244"].value)),
        children: props["Label#5987:61"].value,
      }))
      .with("Text only", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: props["Label#5987:61"].value,
      }))
      .exhaustive();

    const commonProps = {
      ...(props.State.value === "Disabled" && {
        disabled: true,
      }),
      ...(props.State.value === "Loading" && {
        loading: true,
      }),
      size: props.Size.value.toString().toLowerCase(),
      variant: camelCase(props.Variant.value, {
        mergeAmbiguousCharacters: true,
      }),
      layout,
      prefixIcon,
      suffixIcon,
    };

    return createElement("ActionButton", commonProps, children);
  },
};

const actionChipHandler: ComponentHandler<ActionChipProperties> = {
  key: "3d21594ef116e94a9465d507447b858aea062575",
  codegen: ({ componentProperties: props }) => {
    const { layout, prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon only", () => ({
        layout: "iconOnly",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: createElement(createIconTagNameFromId(props["Icon#8714:0"].value)),
      }))
      .with("Icon first", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8711:0"].value)),
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .with("Icon last", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8711:3"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Icon both", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8711:0"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8711:3"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Text only", () => ({
        layout: "withText",
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
      ...(props["Show Count#7185:42"].value && {
        count: Number(props["Count#7185:21"].value),
      }),
    };
    return createElement("ChipButton", commonProps, children);
  },
};

const avatarHandler: ComponentHandler<AvatarProperties> = {
  key: "d71644aeba2e29deda366798fdfe35977166d120",
  codegen: (node) => {
    const placeholder = node.findOne(
      (child) => child.type === "INSTANCE" && child.name.includes("Identity Placeholder"),
    ) as InstanceNode | null;

    const { componentProperties: props } = node;

    const avatarHasSrc = props["Image#71850:57"].value;

    const commonProps = {
      ...(avatarHasSrc && {
        // Placeholder
        src: `https://placehold.co/${props.Size.value}x${props.Size.value}`,
      }),
      // XXX
      // alt: ...
      ...(placeholder?.componentProperties && {
        fallback: identityPlaceholderHandler.codegen(
          placeholder as InstanceNode & {
            componentProperties: IdentityPlaceholderProperties;
          },
        ),
      }),
      size: props.Size.value,
    };

    return createElement(
      "Avatar",
      commonProps,
      props["Badge#1398:26"].value ? createElement("AvatarBadge", {}) : undefined,
      avatarHasSrc ? "alt 텍스트를 제공해야 합니다." : undefined,
    );
  },
};

const avatarStackHandler: ComponentHandler<AvatarStackProperties> = {
  key: "019467fdad2192abb48699dcfb79e344df04b799",
  codegen: ({ componentProperties: props, children }) => {
    const avatarStackItems = children.filter(
      (child) => child.type === "INSTANCE" && child.name.includes("Avatar"),
    ) as InstanceNode[];

    const avatars = avatarStackItems
      .filter(
        (item) => item.children.length > 0 && (item.children[0] as SceneNode).type === "INSTANCE",
      )
      .map((item) => item.children[0] as InstanceNode);

    const commonProps = {
      size: props.Size.value,
    };

    const avatarStackChildren = avatars.map((avatar) => {
      const { props, ...rest } = avatarHandler.codegen(
        avatar as InstanceNode & {
          componentProperties: AvatarProperties;
        },
      );

      return {
        ...rest,
        props: {
          ...props,
          size: undefined,
        },
      };
    });

    return createElement("AvatarStack", commonProps, avatarStackChildren);
  },
};

const badgeHandler: ComponentHandler<BadgeProperties> = {
  key: "04609a35d47a1a0ef4904b3c25f79451892a85a1",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      size: props.Size.value.toLowerCase(),
      tone: props.Tone.value.toLowerCase(),
      variant: props.Variant.value.toLowerCase(),
      shape: props.Shape.value.toLowerCase(),
    };

    return createElement("Badge", commonProps, props["Label#1584:0"].value);
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

const checkboxHandler: ComponentHandler<CheckboxProperties> = {
  key: "94a2f6957a86f8ae3b8c7ca200dfcd5e29f6075b",
  codegen: ({ componentProperties: props }) => {
    const states = props.State.value.split("-");

    const commonProps = {
      label: props["Label#49990:0"].value,
      weight: props.Bold.value === "True" ? "bold" : "regular",
      variant: props.Shape.value.toLowerCase(),
      size: props.Size.value.toLowerCase(),
      ...(states.includes("Selected") && {
        defaultChecked: true,
      }),
      ...(states.includes("Indeterminate") && {
        defaultChecked: true,
        indeterminate: true,
      }),
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
    };

    return createElement("Checkbox", commonProps);
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
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8722:0"].value)),
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .with("Icon last", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8722:82"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Icon both", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8722:0"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8722:82"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Text only", () => ({
        layout: "withText",
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
      ...(props["Show Count#7185:42"].value && {
        count: Number(props["Count#7185:21"].value),
      }),
    };

    return createElement("ControlChip.Toggle", commonProps, children);
  },
};

const fabHandler: ComponentHandler<FabProperties> = {
  key: "1974b94703032585bb9e20bd54743e01094b965c",
  codegen: ({ componentProperties: props }) => {
    return createElement(
      "Fab",
      {},
      createElement(createIconTagNameFromId(props["Icon#28796:0"].value)),
      "aria-label이나 aria-labelledby 중 하나를 제공해야 합니다.",
    );
  },
};

const extendedFabHandler: ComponentHandler<ExtendedFabProperties> = {
  key: "032f3fddaad0aa3fa5a7f680768c1f5d02fb463f",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      size: props.Size.value.toLowerCase(),
      variant: camelCase(props.Variant.value, { mergeAmbiguousCharacters: true }),
      prefixIcon: createElement(createIconTagNameFromId(props["Icon#28796:0"].value)),
    };

    return createElement("ExtendedFab", commonProps, props["Label#28936:0"].value);
  },
};

const helpBubbleHandler: ComponentHandler<HelpBubbleProperties> = {
  key: "804b327c091278a40d5891939eaed90bb2889659",
  codegen: ({ componentProperties: props }) => {
    const placement:
      | "top"
      | "right"
      | "bottom"
      | "left"
      | "top-end"
      | "top-start"
      | "right-end"
      | "right-start"
      | "bottom-end"
      | "bottom-start"
      | "left-end"
      | "left-start" = (() => {
      switch (props["Placement (side-align)"].value) {
        case "Bottom-Left":
          return "top-start";
        case "Bottom-Center":
          return "top";
        case "Bottom-Right":
          return "top-end";
        case "Left-Top":
          return "right-start";
        case "Left-Center":
          return "right";
        case "Left-Bottom":
          return "right-end";
        case "Top-Left":
          return "bottom-start";
        case "Top-Center":
          return "bottom";
        case "Top-Right":
          return "bottom-end";
        case "Right-Top":
          return "left-start";
        case "Right-Center":
          return "left";
        case "Right-Bottom":
          return "left-end";
      }
    })();

    const commonProps = {
      title: props["Title Text#62535:0"].value,
      ...(props["Description#62499:0"].value && {
        description: props["↳ Description Text#62535:98"].value,
      }),
      showCloseButton: props["Close Button"].value === "True",
      defaultOpen: true,
      placement,
    };

    return createElement(
      "HelpBubbleTrigger",
      commonProps,
      createElement("ActionButton", {}, "열기", "HelpBubble을 여는 요소를 제공해주세요."),
    );
  },
};

const identityPlaceholderHandler: ComponentHandler<IdentityPlaceholderProperties> = {
  key: "808206c07408aa1056ec85a55925e9844e9265c2",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      identity: props.Identity.value.toLowerCase(),
    };

    return createElement("IdentityPlaceholder", commonProps);
  },
};

const componentHandlers = [
  actionButtonHandler,
  actionChipHandler,
  avatarHandler,
  avatarStackHandler,
  badgeHandler,
  calloutHandler,
  checkboxHandler,
  controlChipHandler,
  fabHandler,
  extendedFabHandler,
  helpBubbleHandler,
  identityPlaceholderHandler,
] as ComponentHandler[];

export const componentHandlerMap = new Map(
  componentHandlers.map((component) => [component.key, component]),
);

export const ignoredComponentKeys = new Set<string>([
  "a96fe9696d66425daa57bdc86a378a54a54ae0f9",
  "5f5b68664abeaacde7d38c2418cc8e9706bf20d8",
]);
