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
  ChipTabsItemProperties,
  ChipTabsProperties,
  ControlChipProperties,
  ExtendedFabProperties,
  FabProperties,
  HelpBubbleProperties,
  IdentityPlaceholderProperties,
  InlineBannerProperties,
  MultilineTextFieldProperties,
  ProgressCircleProperties,
  ReactionButtonProperties,
  SegmentedControlItemProperties,
  SegmentedControlProperties,
  SelectBoxItemProperties,
  SelectBoxProperties,
  SkeletonProperties,
  SnackbarProperties,
  SwitchProperties,
  TabsFillItemProperties,
  TabsHugItemProperties,
  TabsProperties,
  TextButtonProperties,
  TextFieldProperties,
  ToggleButtonProperties,
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
    const states = props.State.value.split("-");

    const { layout, prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon Only", () => ({
        layout: "iconOnly",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: createElement(createIconTagNameFromId(props["Icon#7574:0"].value)),
      }))
      .with("Icon First", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#5987:305"].value)),
        suffixIcon: undefined,
        children: props["Label#5987:61"].value,
      }))
      .with("Icon Last", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#5987:244"].value)),
        children: props["Label#5987:61"].value,
      }))
      .with("Icon Both", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#5987:305"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#5987:244"].value)),
        children: props["Label#5987:61"].value,
      }))
      .with("Text Only", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: props["Label#5987:61"].value,
      }))
      .exhaustive();

    const commonProps = {
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
      ...(states.includes("Loading") && {
        loading: true,
      }),
      size: camelCase(props.Size.value),
      variant: camelCase(props.Variant.value),
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
    const states = props.State.value.split("-");

    const { layout, prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon Only", () => ({
        layout: "iconOnly",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: createElement(createIconTagNameFromId(props["Icon#8714:0"].value)),
      }))
      .with("Icon First", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8711:0"].value)),
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .with("Icon Last", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8711:3"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Icon Both", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8711:0"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8711:3"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Text Only", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .exhaustive();

    const commonProps = {
      size: camelCase(props.Size.value),
      layout,
      prefixIcon,
      suffixIcon,
      ...(states.includes("Disabled") && {
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
    ) as (InstanceNode & { componentProperties: IdentityPlaceholderProperties }) | null;

    const { componentProperties: props } = node;

    const avatarHasSrc = props["Show Image#71850:57"].value;

    const commonProps = {
      ...(avatarHasSrc && {
        // Placeholder
        src: `https://placehold.co/${props.Size.value}x${props.Size.value}`,
      }),
      ...(placeholder && {
        fallback: identityPlaceholderHandler.codegen(placeholder),
      }),
      size: props.Size.value,
    };

    return createElement(
      "Avatar",
      commonProps,
      props["Show Badge#1398:26"].value ? createElement("AvatarBadge", {}) : undefined,
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
      // TODO: top item
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
      size: camelCase(props.Size.value),
      tone: camelCase(props.Tone.value),
      variant: camelCase(props.Variant.value),
      shape: camelCase(props.Shape.value),
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
      ...(props["Icon#12598:210"].value && {
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
      weight: camelCase(props.Weight.value),
      variant: camelCase(props.Shape.value),
      size: camelCase(props.Size.value),
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

const chipTabsHandler: ComponentHandler<ChipTabsProperties> = {
  key: "d098159beacf7713e9116f0ef38d8a20f64ec84f",
  codegen: ({ componentProperties: props, children }) => {
    const chipTabsItems = children.filter(
      (child) =>
        child.type === "INSTANCE" &&
        ((child.mainComponent?.parent?.type === "COMPONENT_SET" &&
          child.mainComponent?.parent.key === chipTabsItemHandler.key) ||
          child.mainComponent?.key === chipTabsItemHandler.key),
    ) as (InstanceNode & { componentProperties: ChipTabsItemProperties })[];

    const selectedChipTabsItem = chipTabsItems.find((chipTabsItem) =>
      chipTabsItem.componentProperties.State.value.split("-").includes("Selected"),
    );

    const chipTabTriggerList = createElement(
      "ChipTabTriggerList",
      undefined,
      chipTabsItems.map(chipTabsItemHandler.codegen),
    );

    const commonProps = {
      variant: camelCase(props.Variant.value),
      ...(selectedChipTabsItem && {
        defaultValue: selectedChipTabsItem.componentProperties["Label#8876:0"].value,
      }),
    };

    return createElement("ChipTabs", commonProps, chipTabTriggerList);
  },
};

const chipTabsItemHandler: ComponentHandler<ChipTabsItemProperties> = {
  key: "fa80168b02051fbb0ba032238bd76d840dbe2e15",
  codegen: ({ componentProperties: props }) => {
    const states = props.State.value.split("-");

    const commonProps = {
      value: props["Label#8876:0"].value,
      ...(states.includes("Disabled") && {
        // XXX: 구현체 isDisabled, 수정 예정
        disabled: true,
      }),
    };

    return createElement("ChipTabTrigger", commonProps, props["Label#8876:0"].value);
  },
};

const controlChipHandler: ComponentHandler<ControlChipProperties> = {
  key: "5780d56fc2f9bc4bbd6bc3db93949d8a8b7b7563",
  codegen: ({ componentProperties: props }) => {
    const states = props.State.value.split("-");

    const { layout, prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon Only", () => {
        return {
          layout: "iconOnly",
          prefixIcon: undefined,
          suffixIcon: undefined,
          children: createElement(createIconTagNameFromId(props["Icon#8722:41"].value)),
        };
      })
      .with("Icon First", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8722:0"].value)),
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .with("Icon Last", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8722:82"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Icon Both", () => ({
        layout: "withText",
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#8722:0"].value)),
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#8722:82"].value)),
        children: props["Label#7185:0"].value,
      }))
      .with("Text Only", () => ({
        layout: "withText",
        prefixIcon: undefined,
        suffixIcon: undefined,
        children: props["Label#7185:0"].value,
      }))
      .exhaustive();

    const commonProps = {
      size: camelCase(props.Size.value),
      layout,
      prefixIcon,
      suffixIcon,
      ...(states.includes("Selected") && {
        defaultChecked: true,
      }),
      ...(states.includes("Disabled") && {
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
      size: camelCase(props.Size.value),
      variant: camelCase(props.Variant.value),
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
      undefined,
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
      switch (props.Placement.value) {
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
      title: props["Title#62535:0"].value,
      ...(props["Show Description#62499:0"].value && {
        description: props["Description#62535:98"].value,
      }),
      showCloseButton: props["Show Close Button"].value === "True",
      defaultOpen: true,
      placement,
    };

    return createElement(
      "HelpBubbleTrigger",
      commonProps,
      createElement("ActionButton", undefined, "열기", "HelpBubble을 여는 요소를 제공해주세요."),
    );
  },
};

const identityPlaceholderHandler: ComponentHandler<IdentityPlaceholderProperties> = {
  key: "808206c07408aa1056ec85a55925e9844e9265c2",
  codegen: ({ componentProperties: props }) => {
    const commonProps = {
      identity: camelCase(props.Identity.value),
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
        linkLabel: props["Link Label#1547:81"].value,
      }),
      ...(props["Show Icon#11840:27"].value &&
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

const multilineTextFieldHandler: ComponentHandler<MultilineTextFieldProperties> = {
  key: "88b2399c930c85f9ce2972163a078bc684b84bbe",
  codegen: ({ componentProperties: props }) => {
    const {
      Size: { value: size },
      State: { value: state },
      Filled: { value: filled },
      "Show Header#870:0": { value: showHeader },
      "Label#15327:323": { value: label },
      "Show Indicator#1259:0": { value: showIndicator },
      "Indicator#15327:286": { value: indicator },
      "Placeholder#958:0": { value: placeholder },
      "Filled Text#1304:0": { value: defaultValue },
      "Show Footer#958:25": { value: showFooter },
      "Show Description#958:50": { value: showDescription },
      "Description#15327:212": { value: description },
      "Show Character count#958:75": { value: showCharacterCount },
      "Character Count#15327:360": { value: _characterCount },
      "Max Character Count#15327:175": { value: maxCharacterCount },
    } = props;

    const states = state.split("-");

    const commonProps = {
      size: camelCase(size),
      // header
      ...(showHeader && {
        label,
      }),
      ...(showHeader &&
        showIndicator && {
          indicator,
        }),
      // input
      ...(filled === "True" && {
        defaultValue,
      }),
      ...(states.includes("Invalid") && {
        invalid: true,
      }),
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
      ...(states.includes("Read Only") && {
        readOnly: true,
      }),
      // footer
      ...(showFooter &&
        showDescription &&
        states.includes("Invalid") && {
          // invalid인 경우 description을 error로 사용
          errorMessage: description,
        }),
      ...(showFooter &&
        showDescription &&
        !states.includes("Invalid") && {
          // invalid가 아닌 경우 description을 description으로 사용
          description,
        }),
      ...(showFooter &&
        showCharacterCount && {
          maxGraphemeCount: Number(maxCharacterCount),
        }),
    };

    const inputProps = {
      placeholder,
    };

    const TextFieldChildren = createElement("TextFieldTextarea", inputProps);

    return createElement("TextField", commonProps, TextFieldChildren);
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
    const states = props.State.value.split("-");

    const commonProps = {
      prefixIcon: createElement(createIconTagNameFromId(props["Icon#12379:0"].value)),
      ...(props["Show Count#6397:33"].value && {
        count: Number(props["Count#15816:0"].value),
      }),
      size: camelCase(props.Size.value),
      ...(states.includes("Loading") && {
        loading: true,
      }),
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
      ...(states.includes("Selected") && {
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

    const selectedSegment = segments.find((segment) =>
      segment.componentProperties.State.value.split("-").includes("Selected"),
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

    const selectedSelectBoxItem = selectBoxItems.find((selectBoxItem) =>
      selectBoxItem.componentProperties.State.value.split("-").includes("Selected"),
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
      ...(props["Show Description#3033:0"].value && {
        description: props["Description #3033:5"].value,
      }),
      ...(tag === "RadioSelectBox" && {
        value: props["Label#3635:0"].value,
      }),
      ...(tag === "CheckSelectBox" &&
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
      radius: camelCase(props.Radius.value),
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
      variant: camelCase(props.Variant.value),
      ...(props["Show Action Button#1528:0"].value && {
        actionLabel: props["Action Button Label#1528:8"].value,
      }),
    };

    // TODO: adapter.create({ render })
    return createElement("Snackbar", commonProps);
  },
};

const tabsHandler: ComponentHandler<TabsProperties> = {
  key: "ffe33411fb8796f7a95d3637b90150007f0dd954",
  codegen: ({ componentProperties: props, children }) => {
    const tabsItems = children
      .map((child) => {
        if (child.type !== "INSTANCE") return null;

        const componentKey =
          child.mainComponent?.parent?.type === "COMPONENT_SET"
            ? child.mainComponent?.parent?.key
            : child.mainComponent?.key;

        if (componentKey === tabsHugItemHandler.key)
          return {
            layout: "hug" as const,
            node: child as InstanceNode & { componentProperties: TabsHugItemProperties },
          };

        if (componentKey === tabsFillItemHandler.key)
          return {
            layout: "fill" as const,
            node: child as InstanceNode & { componentProperties: TabsFillItemProperties },
          };

        return null;
      })
      .filter((tabsItem) => tabsItem !== null);

    const selectedTabsItem = tabsItems.find(({ node: { componentProperties } }) =>
      componentProperties.State.value.split("-").includes("Selected"),
    )?.node;

    const tabTriggerList = createElement(
      "TabTriggerList",
      undefined,
      tabsItems.map(({ layout, node }) => {
        switch (layout) {
          case "hug":
            return tabsHugItemHandler.codegen(node);
          case "fill":
            return tabsFillItemHandler.codegen(node);
        }
      }),
    );

    const tabContentList = createElement(
      "TabContentList",
      undefined,
      tabsItems.map(({ node }) => {
        const value = node.componentProperties["Label#4478:2"].value;
        const content = createElement("Content", undefined, value);

        return createElement("TabContent", { value }, content);
      }),
    );

    const commonProps = {
      layout: camelCase(props.Layout.value),
      size: camelCase(props.Size.value),
      ...(selectedTabsItem && {
        defaultValue: selectedTabsItem.componentProperties["Label#4478:2"].value,
      }),
    };

    return createElement("Tabs", commonProps, [tabTriggerList, tabContentList]);
  },
};

const tabsHugItemHandler: ComponentHandler<TabsHugItemProperties> = {
  key: "c242492543b327ceb84fa9933841512fc62a898c",
  codegen: ({ componentProperties: props }) => {
    const states = props.State.value.split("-");

    const commonProps = {
      value: props["Label#4478:2"].value,
      ...(props.Notification.value === "True" && {
        alert: true,
      }),
      ...(states.includes("Disabled") && {
        // XXX: 구현체 isDisabled, 수정 예정
        disabled: true,
      }),
    };

    return createElement("TabTrigger", commonProps, props["Label#4478:2"].value);
  },
};

const tabsFillItemHandler: ComponentHandler<TabsFillItemProperties> = {
  key: "7275293344efb40ee9a3f5248ba2659b94a0b305",
  codegen: ({ componentProperties: props }) => {
    const states = props.State.value.split("-");

    const commonProps = {
      value: props["Label#4478:2"].value,
      ...(props.Notification.value === "True" && {
        alert: true,
      }),
      ...(states.includes("Disabled") && {
        // XXX: 구현체 isDisabled, 수정 예정
        disabled: true,
      }),
    };

    return createElement("TabTrigger", commonProps, props["Label#4478:2"].value);
  },
};

const textButtonHandler: ComponentHandler<TextButtonProperties> = {
  key: "601f788792916250e33d04bd3165dee1404342df",
  codegen: (node) => {
    const { componentProperties: props } = node;

    const states = props.State.value.split("-");

    const { prefixIcon, suffixIcon, children } = match(props.Layout.value)
      .with("Icon First", () => ({
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#7561:0"].value)),
        suffixIcon: undefined,
        children: props["Label#6148:0"].value,
      }))
      .with("Icon Last", () => {
        const suffixIconNode = node.findOne(
          (node) => node.type === "INSTANCE" && node.name === "Suffix Icon",
        ) as InstanceNode | null;

        const suffixIconComponentKey = suffixIconNode?.mainComponent?.key;

        return {
          prefixIcon: undefined,
          suffixIcon: suffixIconComponentKey
            ? createElement(createIconTagNameFromKey(suffixIconComponentKey))
            : undefined,
          children: props["Label#6148:0"].value,
        };
      })
      .exhaustive();

    const commonProps = {
      tone: camelCase(props.Tone.value),
      size: camelCase(props.Size.value),
      prefixIcon,
      suffixIcon,
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
    };

    return createElement("TextButton", commonProps, children);
  },
};

const textFieldHandler: ComponentHandler<TextFieldProperties> = {
  key: "c49873c37a639f0dffdea4efd0eb43760d66c141",
  codegen: ({ componentProperties: props }) => {
    const {
      Size: { value: size },
      State: { value: state },
      Filled: { value: filled },
      "Show Header#870:0": { value: showHeader },
      "Label#14964:0": { value: label },
      "Show Indicator#1259:0": { value: showIndicator },
      "Indicator#15327:249": { value: indicator },
      "Show Prefix#958:125": { value: showPrefix },
      "Show Prefix Icon#1267:50": { value: showPrefixIcon },
      "Prefix Icon#1267:25": { value: prefixIcon },
      "Show Prefix Text#1267:0": { value: showPrefixText },
      "Prefix Text#15327:101": { value: prefix },
      "Placeholder#958:0": { value: placeholder },
      "Filled Text#1304:0": { value: defaultValue },
      "Show Suffix#958:100": { value: showSuffix },
      "Show Suffix Icon#1267:75": { value: showSuffixIcon },
      "Suffix Icon #1267:100": { value: suffixIcon },
      "Show Suffix Text#1267:125": { value: showSuffixText },
      "Suffix Text#15327:138": { value: suffix },
      "Show Footer#958:25": { value: showFooter },
      "Show Description#958:50": { value: showDescription },
      "Description#12626:5": { value: description },
      "Show Character Count#958:75": { value: showCharacterCount },
      "Character Count#15327:64": { value: _characterCount },
      "Max Character Count#15327:27": { value: maxCharacterCount },
    } = props;

    const states = state.split("-");

    const commonProps = {
      size: camelCase(size),
      // header
      ...(showHeader && {
        label,
      }),
      ...(showHeader &&
        showIndicator && {
          indicator,
        }),
      // input affixes
      ...(showPrefix &&
        showPrefixIcon && {
          prefixIcon: createElement(createIconTagNameFromId(prefixIcon)),
        }),
      ...(showPrefix &&
        showPrefixText && {
          prefix,
        }),
      ...(showSuffix &&
        showSuffixIcon && {
          suffixIcon: createElement(createIconTagNameFromId(suffixIcon)),
        }),
      ...(showSuffix &&
        showSuffixText && {
          suffix,
        }),
      // input
      ...(filled === "True" && {
        defaultValue,
      }),
      ...(states.includes("Invalid") && {
        invalid: true,
      }),
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
      ...(states.includes("Read Only") && {
        readOnly: true,
      }),
      // footer
      ...(showFooter &&
        showDescription &&
        states.includes("Invalid") && {
          // invalid인 경우 description을 error로 사용
          errorMessage: description,
        }),
      ...(showFooter &&
        showDescription &&
        !states.includes("Invalid") && {
          // invalid가 아닌 경우 description을 description으로 사용
          description,
        }),
      ...(showFooter &&
        showCharacterCount && {
          maxGraphemeCount: Number(maxCharacterCount),
        }),
    };

    const inputProps = {
      placeholder,
    };

    const TextFieldChildren = createElement("TextFieldInput", inputProps);

    return createElement("TextField", commonProps, TextFieldChildren);
  },
};

// const switchHandler: ComponentHandler<SwitchProperties> = {
//   key: "80ce5a33b5ab713ab3bd2449472e2fb13d78c7f3",
//   codegen: ({ componentProperties: props }) => {
//     const commonProps = {};

//     return createElement("Switch", commonProps);
//   },
// };

const toggleButtonHandler: ComponentHandler<ToggleButtonProperties> = {
  key: "1d240ee5fd7a56879713e69cbea1b6f006f0ea22",
  codegen: ({ componentProperties: props }) => {
    const states = props.State.value.split("-");

    const commonProps = {
      variant: camelCase(props.Variant.value),
      size: camelCase(props.Size.value),
      ...(props["Show Prefix Icon#6122:392"].value && {
        prefixIcon: createElement(createIconTagNameFromId(props["Prefix Icon#6122:98"].value)),
      }),
      ...(props["Show Suffix Icon#6122:147"].value && {
        suffixIcon: createElement(createIconTagNameFromId(props["Suffix Icon#6122:343"].value)),
      }),
      ...(states.includes("Selected") && {
        // XXX: selected vs pressed
        defaultPressed: true,
      }),
      ...(states.includes("Disabled") && {
        disabled: true,
      }),
      ...(states.includes("Loading") && {
        loading: true,
      }),
    };

    return createElement("ToggleButton", commonProps, props["Label#6122:49"].value);
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
  chipTabsHandler,
  controlChipHandler,
  extendedFabHandler,
  fabHandler,
  helpBubbleHandler,
  identityPlaceholderHandler,
  inlineBannerHandler,
  multilineTextFieldHandler,
  progressCircleHandler,
  reactionButtonHandler,
  segmentedControlHandler,
  selectBoxHandler,
  skeletonHandler,
  snackbarHandler,
  tabsHandler,
  textButtonHandler,
  textFieldHandler,
  toggleButtonHandler,
] as ComponentHandler[];

export const componentHandlerMap = new Map(
  componentHandlers.map((component) => [component.key, component]),
);

export const ignoredComponentKeys = new Set<string>([
  "a96fe9696d66425daa57bdc86a378a54a54ae0f9",
  "5f5b68664abeaacde7d38c2418cc8e9706bf20d8",
]);
