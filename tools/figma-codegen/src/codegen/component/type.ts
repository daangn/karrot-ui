import type { InferFromDefinition } from "./type-helper";

export type ActionButtonProperties = InferFromDefinition<{
  "Suffix Icon#5987:244": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:3654";
    preferredValues: [];
  };
  "Icon#7574:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  "Prefix Icon#5987:305": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  "Label#5987:61": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  Size: {
    type: "VARIANT";
    defaultValue: "XSmall";
    variantOptions: ["XSmall", "Small", "Medium", "Large"];
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Neutral Solid";
    variantOptions: [
      "Neutral Solid",
      "Neutral Weak",
      "Neutral Outline",
      "Brand Solid",
      "Brand Outline",
      "Danger Solid",
    ];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Pressed", "Loading", "Disabled"];
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Text Only";
    variantOptions: ["Text Only", "Icon First", "Icon Last", "Icon Both", "Icon Only"];
  };
}>;

export type ActionChipProperties = InferFromDefinition<{
  "Icon#8714:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [{ type: "COMPONENT_SET"; key: "8be1768c683a0e39d3f319b5d9286ae38f6d5c18" }];
  };
  "Prefix Icon#8711:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4043";
    preferredValues: [{ type: "COMPONENT_SET"; key: "8ed05ef62a40f2dc034ee7eb6945bd0e63ad49aa" }];
  };
  "Suffix Icon#8711:3": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:3659";
    preferredValues: [];
  };
  "Label#7185:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Show Count#7185:42": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Count#7185:21": {
    type: "TEXT";
    defaultValue: "10";
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Text Only";
    variantOptions: ["Text Only", "Icon First", "Icon Last", "Icon Both", "Icon Only"];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Medium";
    variantOptions: ["Medium", "Small"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Pressed", "Disabled"];
  };
}>;

export type AvatarProperties = InferFromDefinition<{
  "Show Image#71850:57": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Show Badge#1398:26": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  Size: {
    type: "VARIANT";
    defaultValue: "20";
    variantOptions: ["20", "24", "36", "48", "64", "80", "96", "40"];
  };
}>;

export type AvatarStackProperties = InferFromDefinition<{
  Size: {
    type: "VARIANT";
    defaultValue: "20";
    variantOptions: ["20", "24", "36", "48", "64"];
  };
  "Top Item": {
    type: "VARIANT";
    defaultValue: "Last Item";
    variantOptions: ["Last Item", "First Item"];
  };
  "Item Count": {
    type: "VARIANT";
    defaultValue: "5";
    variantOptions: ["2", "3", "4", "5"];
  };
}>;

export type BadgeProperties = InferFromDefinition<{
  "Label#1584:0": {
    type: "TEXT";
    defaultValue: "배지라벨";
  };
  Tone: {
    type: "VARIANT";
    defaultValue: "Neutral";
    variantOptions: ["Neutral", "Brand", "Informative", "Positive", "Danger"];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Large";
    variantOptions: ["Medium", "Large"];
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Weak";
    variantOptions: ["Solid", "Outlined", "Weak"];
  };
  Shape: {
    type: "VARIANT";
    defaultValue: "Rectangle";
    variantOptions: ["Rectangle", "Pill"];
  };
}>;

export type CalloutProperties = InferFromDefinition<{
  "Show Icon#12598:229": {
    type: "BOOLEAN";
    defaultValue: true;
  };
  "Icon#12598:210": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4221";
    preferredValues: [{ type: "COMPONENT_SET"; key: "f2c04b68b0bec4ec9145d832de45947030d3b653" }];
  };
  Interaction: {
    type: "VARIANT";
    defaultValue: "Default";
    variantOptions: ["Default", "Actionable", "Dismissible"];
  };
  Tone: {
    type: "VARIANT";
    defaultValue: "Neutral";
    variantOptions: ["Neutral", "Informative", "Warning", "Danger", "Magic"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Pressed"];
  };
  "Show Title": {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["True", "False"];
  };
  "Show Link Label": {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["True", "False"];
  };
}>;

export type CheckboxProperties = InferFromDefinition<{
  "Label#49990:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  Shape: {
    type: "VARIANT";
    defaultValue: "Square";
    variantOptions: ["Ghost", "Square"];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Large";
    variantOptions: ["Medium", "Large"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Unselected-Enabled";
    variantOptions: [
      "Unselected-Enabled",
      "Unselected-Pressed",
      "Unselected-Disabled",
      "Selected-Enabled",
      "Selected-Pressed",
      "Selected-Disabled",
      "Indeterminate-Enabled",
      "Indeterminate-Pressed",
      "Indeterminate-Disabled",
    ];
  };
  Weight: {
    type: "VARIANT";
    defaultValue: "Bold";
    variantOptions: ["Regular", "Bold"];
  };
}>;

export type ControlChipProperties = InferFromDefinition<{
  "Suffix Icon#8722:82": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:3659";
    preferredValues: [];
  };
  "Label#7185:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Show Count#7185:42": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Icon#8722:41": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  "Prefix Icon#8722:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4043";
    preferredValues: [{ type: "COMPONENT_SET"; key: "8ed05ef62a40f2dc034ee7eb6945bd0e63ad49aa" }];
  };
  "Count#7185:21": {
    type: "TEXT";
    defaultValue: "10";
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Text Only";
    variantOptions: ["Text Only", "Icon First", "Icon Last", "Icon Both", "Icon Only"];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Medium";
    variantOptions: ["Medium", "Small"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: [
      "Enabled",
      "Enabled-Pressed",
      "Disabled",
      "Enabled-Selected",
      "Enabled-Selected-Pressed",
      "Disabled-Selected",
    ];
  };
}>;

export type ExtendedFabProperties = InferFromDefinition<{
  "Label#28936:0": {
    type: "TEXT";
    defaultValue: "Label";
  };
  "Icon#28796:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4106";
    preferredValues: [];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Medium";
    variantOptions: ["Medium", "Small"];
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Layer Floating";
    variantOptions: ["Neutral Solid", "Layer Floating"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Pressed"];
  };
}>;

export type FabProperties = InferFromDefinition<{
  "Icon#28796:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Pressed"];
  };
}>;

export type HelpBubbleProperties = InferFromDefinition<{
  "Description#62535:98": {
    type: "TEXT";
    defaultValue: "디스크립션";
  };
  "Show Description#62499:0": {
    type: "BOOLEAN";
    defaultValue: true;
  };
  "Title#62535:0": {
    type: "TEXT";
    defaultValue: "Help Bubble\n두 줄일 땐 줄바꿈해요";
  };
  Placement: {
    type: "VARIANT";
    defaultValue: "Bottom-Left";
    variantOptions: [
      "Right-Top",
      "Right-Center",
      "Right-Bottom",
      "Left-Top",
      "Left-Center",
      "Left-Bottom",
      "Bottom-Left",
      "Bottom-Center",
      "Bottom-Right",
      "Top-Left",
      "Top-Center",
      "Top-Right",
    ];
  };
  "Show Close Button": {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["False", "True"];
  };
}>;

export type IdentityPlaceholderProperties = InferFromDefinition<{
  Identity: {
    type: "VARIANT";
    defaultValue: "Person";
    variantOptions: ["Person", "Business"];
  };
}>;

export type InlineBannerProperties = InferFromDefinition<{
  "Show Icon#11840:27": {
    type: "BOOLEAN";
    defaultValue: true;
  };
  "Link Label#1547:81": {
    type: "TEXT";
    defaultValue: "자세히보기";
  };
  Interaction: {
    type: "VARIANT";
    defaultValue: "Default";
    variantOptions: ["Default", "Link", "Actionable", "Dismissible"];
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Neutral Weak";
    variantOptions: [
      "Neutral Weak",
      "Positive Weak",
      "Informative Weak",
      "Warning Weak",
      "Warning Solid",
      "Danger Weak",
      "Danger Solid",
    ];
  };
  "Show Title": {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["False", "True"];
  };
}>;

export type ProgressCircleProperties = InferFromDefinition<{
  Value: {
    type: "VARIANT";
    defaultValue: "0%";
    variantOptions: ["Indeterminate", "0%", "25%", "75%", "100%"];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "40";
    variantOptions: ["24", "40"];
  };
  Tone: {
    type: "VARIANT";
    defaultValue: "Neutral";
    variantOptions: ["Brand", "Neutral", "Static White"];
  };
}>;

export type ReactionButtonProperties = InferFromDefinition<{
  "Icon#12379:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4010";
    preferredValues: [];
  };
  "Show Count#6397:33": {
    type: "BOOLEAN";
    defaultValue: true;
  };
  "Count#15816:0": {
    type: "TEXT";
    defaultValue: "1";
  };
  "Label#6397:0": {
    type: "TEXT";
    defaultValue: "도움돼요";
  };
  Size: {
    type: "VARIANT";
    defaultValue: "XSmall";
    variantOptions: ["XSmall", "Small"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: [
      "Enabled",
      "Enabled-Selected-Pressed",
      "Enabled-Selected-Loading",
      "Disabled",
      "Enabled-Pressed",
      "Enabled-Loading",
      "Enabled-Selected",
      "Disabled-Selected",
    ];
  };
}>;

export type SegmentedControlProperties = InferFromDefinition<{
  "Item Count": {
    type: "VARIANT";
    defaultValue: "2";
    variantOptions: ["2", "3", "4"];
  };
  "Selected Item": {
    type: "VARIANT";
    defaultValue: "1";
    variantOptions: ["1", "2", "3", "4"];
  };
}>;

export type SegmentedControlItemProperties = InferFromDefinition<{
  "Label#11366:15": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled-Selected";
    variantOptions: [
      "Enabled-Selected",
      "Enabled",
      "Disabled",
      "Disabled-Selected",
      "Enabled-Selected-Pressed",
      "Enabled-Pressed",
    ];
  };
}>;

export type SelectBoxProperties = InferFromDefinition<{
  Control: {
    type: "VARIANT";
    defaultValue: "Radio";
    variantOptions: ["Checkbox", "Radio"];
  };
  "Item Count": {
    type: "VARIANT";
    defaultValue: "1";
    variantOptions: ["1", "2", "3", "4", "5", "6"];
  };
}>;

export type SelectBoxItemProperties = InferFromDefinition<{
  "Label#3635:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Description #3033:5": {
    type: "TEXT";
    defaultValue: "내용을 입력해보세요";
  };
  "Show Description#3033:0": {
    type: "BOOLEAN";
    defaultValue: true;
  };
  Control: {
    type: "VARIANT";
    defaultValue: "Radio";
    variantOptions: ["Radio", "Checkbox"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled-Selected", "Enabled-Pressed", "Enabled-Selected-Pressed", "Enabled"];
  };
}>;

export type SkeletonProperties = InferFromDefinition<{
  Radius: {
    type: "VARIANT";
    defaultValue: "0";
    variantOptions: ["0", "8", "16", "Full"];
  };
}>;

export type SnackbarProperties = InferFromDefinition<{
  "Action Button Label#1528:8": {
    type: "TEXT";
    defaultValue: "확인";
  };
  "Message#1528:4": {
    type: "TEXT";
    defaultValue: "메세지를 입력하세요";
  };
  "Show Action Button#1528:0": {
    type: "BOOLEAN";
    defaultValue: true;
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Default";
    variantOptions: ["Default", "Positive", "Danger"];
  };
}>;

export type SwitchProperties = InferFromDefinition<{
  "Label#15191:2": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Medium";
    variantOptions: ["Medium", "Small"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Disabled", "Enabled", "Enabled-Selected", "Disabled-Selected"];
  };
}>;

export type TextButtonProperties = InferFromDefinition<{
  "Prefix Icon#7561:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4174";
    preferredValues: [];
  };
  "Label#6148:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Icon First";
    variantOptions: ["Icon First", "Icon Last"];
  };
  Tone: {
    type: "VARIANT";
    defaultValue: "Brand";
    variantOptions: ["Brand", "Neutral", "Neutral Subtle", "Danger"];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Large";
    variantOptions: ["Small", "Medium", "Large"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Enabled-Pressed", "Disabled"];
  };
}>;
