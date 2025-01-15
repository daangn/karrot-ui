import { camelCase } from "change-case";
import { match } from "ts-pattern";
import { createIconTagNameFromId, createIconTagNameFromKey } from "../icon";
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
  InlineBannerProperties,
  ProgressCircleProperties,
  ReactionButtonProperties,
  SegmentedControlItemProperties,
  SegmentedControlProperties,
  SelectBoxItemProperties,
  SelectBoxProperties,
  SkeletonProperties,
  SnackbarProperties,
  SwitchProperties,
} from "./type";
import { getLayoutVariableName } from "../variable";

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
      (child) =>
        child.type === "INSTANCE" && child.mainComponent?.key === identityPlaceholderHandler.key,
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
          placeholder as typeof placeholder & {
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
    const avatars = children
      .map((avatarStackItem) => {
        if ("findChild" in avatarStackItem === false) return null;

        const avatar = avatarStackItem.findChild(
          (avatarStackItemChild) =>
            avatarStackItemChild.type === "INSTANCE" &&
            (avatarStackItemChild.mainComponent?.parent?.type === "COMPONENT_SET"
              ? avatarStackItemChild.mainComponent.parent.key === avatarHandler.key
              : avatarStackItemChild.mainComponent?.key === avatarHandler.key),
        ) as (InstanceNode & { componentProperties: AvatarProperties }) | null;

        return avatar ?? null;
      })
      .filter((avatar) => avatar !== null);

    const commonProps = {
      size: props.Size.value,
    };

    const avatarStackChildren = avatars.map((avatar) => {
      const { props, ...rest } = avatarHandler.codegen(avatar);

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
        case "Default":
          return "Callout";
        case "Actionable":
          return "ActionableCallout";
        case "Dismissible":
          return "DismissibleCallout";
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

const inlineBannerHandler: ComponentHandler<InlineBannerProperties> = {
  key: "ce587d0f21754af05240cb32a4880227cb0ea1e1",
  codegen: (node) => {
    const { componentProperties: props } = node;

    const tag = (() => {
      switch (props.Interaction.value) {
        case "Default":
          return "InlineBanner";
        case "Actionable":
          return "ActionableInlineBanner";
        case "Dismissible":
          return "DismissibleInlineBanner";
        case "Link":
          return "LinkInlineBanner";
        default:
          return "InlineBanner";
      }
    })();

    const textNode = node.findOne(
      (child) => child.type === "TEXT" && child.name === "Label",
    ) as TextNode;
    const slices = textNode.getStyledTextSegments(["fontWeight"]);

    let title: string | undefined;
    let description: string | undefined;

    switch (slices.length) {
      case 1: {
        description = slices[0]?.characters.trim();

        break;
      }
      case 2: {
        title = slices[0]?.characters.trim();
        description = slices[1]?.characters.trim();

        break;
      }
    }

    const iconNode = node.findOne(
      (child) => child.type === "INSTANCE" && child.name === "icon",
    ) as InstanceNode;

    const commonProps = {
      variant: camelCase(props.Variant.value),
      title,
      description,
      ...(props.Interaction.value === "Link" && {
        linkLabel: props["Link Text#1547:81"].value,
        linkProps: {},
      }),
      ...(props["Prefix Icon#11840:27"].value &&
        iconNode &&
        iconNode.mainComponent && {
          // Figma: 종류별로 아이콘이 지정되어 있음
          // 웹 구현체: icon prop으로 열려 있음
          icon: createElement(createIconTagNameFromKey(iconNode.mainComponent.key)),
        }),
    };

    return createElement(tag, commonProps);
  },
};

const progressCircleHandler: ComponentHandler<ProgressCircleProperties> = {
  key: "6e6779a372cab2485a0e25529bc4dbc9932a7346",
  codegen: ({ componentProperties: props }) => {
    const { value, minValue, maxValue } = match(props.Value.value)
      .with("Indeterminate", () => ({
        value: undefined,
        minValue: undefined,
        maxValue: undefined,
      }))
      .with("0%", () => ({
        value: 0,
        minValue: 0,
        maxValue: 100,
      }))
      .with("25%", () => ({
        value: 25,
        minValue: 0,
        maxValue: 100,
      }))
      .with("75%", () => ({
        value: 75,
        minValue: 0,
        maxValue: 100,
      }))
      .with("100%", () => ({
        value: 100,
        minValue: 0,
        maxValue: 100,
      }))
      .exhaustive();

    const commonProps = {
      value,
      minValue,
      maxValue,
      size: props.Size.value,
      tone: camelCase(props.Tone.value),
    };

    return createElement("ProgressCircle", commonProps);
  },
};

const reactionButtonHandler: ComponentHandler<ReactionButtonProperties> = {
  key: "ec43e4e881f7048e95601f8b58c01a0905a174e0",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      prefixIcon: createElement(createIconTagNameFromId(props["Icon#12379:0"].value)),
      ...(props["Show Count#6397:33"].value && {
        count: Number(props["Count#15816:0"].value),
      }),
      size: props.Size.value.toLowerCase(),
      ...(props.State.value === "Loading" && {
        loading: true,
      }),
      ...(props.State.value === "Disabled" && {
        disabled: true,
      }),
      ...(props.Selected.value === "True" && {
        defaultPressed: true,
      }),
    };

    return createElement("ReactionButton", commonProps, props["Label#6397:0"].value);
  },
};

const segmentedControlHandler: ComponentHandler<SegmentedControlProperties> = {
  key: "3ad7133ba52755867f42f9232375f75639e00d58",
  codegen: ({ children }) => {
    const segments = children.filter(
      (child) =>
        child.type === "INSTANCE" &&
        ((child.mainComponent?.parent?.type === "COMPONENT_SET" &&
          child.mainComponent?.parent.key === segmentedControlItemHandler.key) ||
          child.mainComponent?.key === segmentedControlItemHandler.key),
    ) as (InstanceNode & { componentProperties: SegmentedControlItemProperties })[];

    const selectedSegment = segments.find(
      (segment) =>
        "State" in segment.componentProperties &&
        typeof segment.componentProperties?.State.value === "string" &&
        segment.componentProperties?.State.value.split("-").includes("Selected"),
    );

    const segmentedControlChildren = segments.map(segmentedControlItemHandler.codegen);

    const commonProps = {
      ...(selectedSegment && {
        defaultValue: selectedSegment.componentProperties["Label#11366:15"].value,
      }),
    };

    return createElement(
      "SegmentedControl",
      commonProps,
      segmentedControlChildren,
      "aria-label이나 aria-labelledby 중 하나를 제공해야 합니다.",
    );
  },
};

const segmentedControlItemHandler: ComponentHandler<SegmentedControlItemProperties> = {
  key: "9a7ba0d4c041ddbce84ee48881788434fd6bccc8",
  codegen: ({ componentProperties: props }) => {
    const states = props.State.value.split("-");
    const commonProps = {
      value: props["Label#11366:15"].value,
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
    };

    return createElement("SegmentedControlSegment", commonProps, props["Label#11366:15"].value);
  },
};

const selectBoxHandler: ComponentHandler<SelectBoxProperties> = {
  key: "a3d58bb8540600878742cdcf2608a4b3851667ec",
  codegen: ({ componentProperties: props, children }) => {
    const tag = (() => {
      switch (props.Control.value) {
        case "Checkbox":
          return "CheckSelectBoxGroup";
        case "Radio":
          return "RadioSelectBoxGroup";
      }
    })();

    const selectBoxItems = children.filter(
      (child) =>
        child.type === "INSTANCE" &&
        ((child.mainComponent?.parent?.type === "COMPONENT_SET" &&
          child.mainComponent?.parent.key === selectBoxItemHandler.key) ||
          child.mainComponent?.key === selectBoxItemHandler.key),
    ) as (InstanceNode & { componentProperties: SelectBoxItemProperties })[];

    const selectedSelectBoxItem = selectBoxItems.find(
      (selectBoxItem) =>
        "State" in selectBoxItem.componentProperties &&
        typeof selectBoxItem.componentProperties?.State.value === "string" &&
        selectBoxItem.componentProperties?.State.value.split("-").includes("Selected"),
    );

    const selectBoxChildren = selectBoxItems.map(selectBoxItemHandler.codegen);

    const commonProps = {
      ...(props.Control.value === "Radio" && {
        defaultValue: selectedSelectBoxItem?.componentProperties["Label#3635:0"].value,
      }),
    };

    return createElement(tag, commonProps, selectBoxChildren);
  },
};

const selectBoxItemHandler: ComponentHandler<SelectBoxItemProperties> = {
  key: "38722ffeb4c966256a709155e8ddac50c93d7c60",
  codegen: ({ componentProperties: props }) => {
    const tag = (() => {
      switch (props.Control.value) {
        case "Checkbox":
          return "CheckSelectBox";
        case "Radio":
          return "RadioSelectBox";
      }
    })();

    const states = props.State.value.split("-");

    const commonProps = {
      label: props["Label#3635:0"].value,
      ...(props["Description#3033:0"].value && {
        description: props["Description #3033:5"].value,
      }),
      ...(props.Control.value === "Radio" && {
        value: props["Label#3635:0"].value,
      }),
      ...(props.Control.value === "Checkbox" &&
        states.includes("Selected") && {
          defaultChecked: true,
        }),
    };

    return createElement(tag, commonProps);
  },
};

const skeletonHandler: ComponentHandler<SkeletonProperties> = {
  key: "ef22c3288722fbfa64a5ab73df397ade88f8e05a",
  codegen: ({
    componentProperties: props,
    width,
    height,
    layoutSizingHorizontal,
    layoutSizingVertical,
    boundVariables,
    parent,
  }) => {
    const commonProps = {
      radius: props.Radius.value.toLowerCase(),
      width: (() => {
        switch (layoutSizingHorizontal) {
          case "FIXED": {
            const variableId = boundVariables?.width?.id;
            if (variableId) return getLayoutVariableName(variableId);

            return `${width}px`;
          }
          case "FILL":
            if (parent?.type === "FRAME" && parent.layoutMode === "VERTICAL") return "full";

            // TODO: grow하는 Flex로 감싸야 할 수도 있다
            return "full";
          default:
            return "full";
        }
      })(),
      height: (() => {
        switch (layoutSizingVertical) {
          case "FIXED": {
            const variableId = boundVariables?.height?.id;
            if (variableId) return getLayoutVariableName(variableId);

            return `${height}px`;
          }
          case "FILL":
            if (parent?.type === "FRAME" && parent.layoutMode === "HORIZONTAL") return "full";

            // TODO: grow하는 Flex로 감싸야 할 수도 있다
            return "full";
          default:
            return "full";
        }
      })(),
    };

    return createElement("Skeleton", commonProps);
  },
};

const snackbarHandler: ComponentHandler<SnackbarProperties> = {
  key: "81b17fb8c7d731a19cf8d36a8605559d41414eca",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      message: props["Message#1528:4"].value,
      variant: props.Variant.value.toLowerCase(),
      ...(props["Action Button#1528:0"].value && {
        actionLabel: props["Action Button Label#1528:8"].value,
      }),
    };

    // TODO: adapter.create({ render })
    return createElement("Snackbar", commonProps);
  },
};

// const switchHandler: ComponentHandler<SwitchProperties> = {
//   key: "80ce5a33b5ab713ab3bd2449472e2fb13d78c7f3",
//   codegen: ({ componentProperties: props }) => {
//     const commonProps = {};

//     return createElement("Switch", commonProps);
//   },
// };

const componentHandlers = [
  actionButtonHandler,
  actionChipHandler,
  avatarHandler,
  avatarStackHandler,
  badgeHandler,
  calloutHandler,
  checkboxHandler,
  controlChipHandler,
  extendedFabHandler,
  fabHandler,
  helpBubbleHandler,
  identityPlaceholderHandler,
  inlineBannerHandler,
  progressCircleHandler,
  reactionButtonHandler,
  segmentedControlHandler,
  selectBoxHandler,
  skeletonHandler,
  snackbarHandler,
] as ComponentHandler[];

export const componentHandlerMap = new Map(
  componentHandlers.map((component) => [component.key, component]),
);

export const ignoredComponentKeys = new Set<string>([
  "a96fe9696d66425daa57bdc86a378a54a54ae0f9",
  "5f5b68664abeaacde7d38c2418cc8e9706bf20d8",
]);
