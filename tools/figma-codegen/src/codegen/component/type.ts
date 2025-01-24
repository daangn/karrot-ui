import type { InferFromDefinition } from "./type-helper";
import type * as metadata from "../data/component-sets";

export type ActionButtonProperties = InferFromDefinition<
  typeof metadata.actionButton.componentPropertyDefinitions
>;

export type ActionChipProperties = InferFromDefinition<
  typeof metadata.actionChip.componentPropertyDefinitions
>;

export type AvatarProperties = InferFromDefinition<
  typeof metadata.avatar.componentPropertyDefinitions
>;

export type AvatarStackProperties = InferFromDefinition<
  typeof metadata.avatarStack.componentPropertyDefinitions
>;

export type BadgeProperties = InferFromDefinition<
  typeof metadata.badge.componentPropertyDefinitions
>;

export type CalloutProperties = InferFromDefinition<
  typeof metadata.callout.componentPropertyDefinitions
>;

export type CheckboxProperties = InferFromDefinition<
  typeof metadata.checkbox.componentPropertyDefinitions
>;

export type ChipTabsProperties = InferFromDefinition<
  typeof metadata.chipTablist.componentPropertyDefinitions
>;

export type ChipTabsItemProperties = InferFromDefinition<{
  "Label#8876:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Neutral Solid";
    variantOptions: ["Neutral Solid", "Brand Solid"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: [
      "Enabled",
      "Enabled-Pressed",
      "Enabled-Selected",
      "Enabled-Selected-Pressed",
      "Disabled",
      "Disabled-Selected",
    ];
  };
}>;

export type ControlChipProperties = InferFromDefinition<
  typeof metadata.controlChip.componentPropertyDefinitions
>;

export type ExtendedFabProperties = InferFromDefinition<
  typeof metadata.extendedFloatingActionButton.componentPropertyDefinitions
>;

export type FabProperties = InferFromDefinition<
  typeof metadata.floatingActionButton.componentPropertyDefinitions
>;

export type HelpBubbleProperties = InferFromDefinition<
  typeof metadata.helpBubble.componentPropertyDefinitions
>;

export type IdentityPlaceholderProperties = InferFromDefinition<
  typeof metadata.identityPlaceholder.componentPropertyDefinitions
>;

export type InlineBannerProperties = InferFromDefinition<
  typeof metadata.inlineBanner.componentPropertyDefinitions
>;

export type MultilineTextFieldProperties = InferFromDefinition<
  typeof metadata.multilineTextField.componentPropertyDefinitions
>;

export type ProgressCircleProperties = InferFromDefinition<
  typeof metadata.progressCircle.componentPropertyDefinitions
>;

export type ReactionButtonProperties = InferFromDefinition<
  typeof metadata.reactionButton.componentPropertyDefinitions
>;

export type SegmentedControlProperties = InferFromDefinition<
  typeof metadata.segmentedControl.componentPropertyDefinitions
>;

export type SegmentedControlItemProperties = InferFromDefinition<{
  "Label#11366:15": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled-Selected";
    variantOptions: [
      "Enabled",
      "Enabled-Selected",
      "Enabled-Pressed",
      "Enabled-Selected-Pressed",
      "Disabled",
      "Disabled-Selected",
    ];
  };
}>;

export type SelectBoxGroupProperties = InferFromDefinition<
  typeof metadata.selectBoxGroup.componentPropertyDefinitions
>;

export type SelectBoxProperties = InferFromDefinition<
  typeof metadata.selectBox.componentPropertyDefinitions
>;

export type SkeletonProperties = InferFromDefinition<
  typeof metadata.skeleton.componentPropertyDefinitions
>;

export type SnackbarProperties = InferFromDefinition<
  typeof metadata.snackbar.componentPropertyDefinitions
>;

export type SwitchProperties = InferFromDefinition<
  typeof metadata.switch.componentPropertyDefinitions
>;

export type TabsProperties = InferFromDefinition<
  typeof metadata.tablist.componentPropertyDefinitions
>;

export type TabsHugItemProperties = InferFromDefinition<{
  "Label#4478:2": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Small";
    variantOptions: ["Small", "Medium"];
  };
  Notification: {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["True", "False"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled-Selected";
    variantOptions: ["Enabled", "Enabled-Selected", "Disabled"];
  };
}>;

export type TabsFillItemProperties = InferFromDefinition<{
  "Label#4478:2": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Small";
    variantOptions: ["Small", "Medium"];
  };
  Notification: {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["True", "False"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled-Selected";
    variantOptions: ["Enabled", "Enabled-Selected", "Disabled"];
  };
}>;

export type TextButtonProperties = InferFromDefinition<
  typeof metadata.textButton.componentPropertyDefinitions
>;

export type TextFieldProperties = InferFromDefinition<
  typeof metadata.textField.componentPropertyDefinitions
>;

export type ToggleButtonProperties = InferFromDefinition<
  typeof metadata.toggleButton.componentPropertyDefinitions
>;
