import type { InferFromDefinition } from "./type-helper";

export type ActionButtonProperties = InferFromDefinition<{
  "Label#5987:61": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Prefix Icon#5987:305": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  "Icon#7574:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  "Suffix Icon#5987:244": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:3654";
    preferredValues: [];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "XSmall";
    variantOptions: ["XSmall", "Small", "Medium", "Large"];
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Text Only";
    variantOptions: ["Text Only", "Icon First", "Icon Last", "Icon Both", "Icon Only"];
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
    variantOptions: ["Enabled", "Enabled-Pressed", "Enabled-Loading", "Disabled"];
  };
}>;

export type ActionChipProperties = InferFromDefinition<{
  "Suffix Icon#8711:3": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:3659";
    preferredValues: [];
  };
  "Prefix Icon#8711:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4043";
    preferredValues: [
      {
        type: "COMPONENT_SET";
        key: "8ed05ef62a40f2dc034ee7eb6945bd0e63ad49aa";
      },
    ];
  };
  "Label#7185:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Icon#8714:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  "Count#7185:21": {
    type: "TEXT";
    defaultValue: "10";
  };
  "Show Count#7185:42": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Medium";
    variantOptions: ["Medium", "Small"];
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Text Only";
    variantOptions: ["Text Only", "Icon First", "Icon Last", "Icon Both", "Icon Only"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Enabled-Pressed", "Disabled"];
  };
}>;

export type AvatarProperties = InferFromDefinition<{
  "Show Badge#1398:26": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Show Image#71850:57": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  Size: {
    type: "VARIANT";
    defaultValue: "20";
    variantOptions: ["20", "24", "36", "40", "48", "64", "80", "96"];
  };
}>;

export type AvatarStackProperties = InferFromDefinition<{
  Size: {
    type: "VARIANT";
    defaultValue: "20";
    variantOptions: ["20", "24", "36", "48", "64"];
  };
  "Item Count": {
    type: "VARIANT";
    defaultValue: "5";
    variantOptions: ["2", "3", "4", "5"];
  };
  "Top Item": {
    type: "VARIANT";
    defaultValue: "Last Item";
    variantOptions: ["Last Item", "First Item"];
  };
}>;

export type BadgeProperties = InferFromDefinition<{
  "Label#1584:0": {
    type: "TEXT";
    defaultValue: "배지라벨";
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Large";
    variantOptions: ["Medium", "Large"];
  };
  Tone: {
    type: "VARIANT";
    defaultValue: "Neutral";
    variantOptions: ["Neutral", "Brand", "Informative", "Positive", "Danger"];
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Weak";
    variantOptions: ["Solid", "Weak", "Outlined"];
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
    preferredValues: [
      {
        type: "COMPONENT_SET";
        key: "f2c04b68b0bec4ec9145d832de45947030d3b653";
      },
    ];
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
    variantOptions: ["Enabled", "Enabled-Pressed"];
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
  Size: {
    type: "VARIANT";
    defaultValue: "Large";
    variantOptions: ["Medium", "Large"];
  };
  Shape: {
    type: "VARIANT";
    defaultValue: "Square";
    variantOptions: ["Square", "Ghost"];
  };
  Weight: {
    type: "VARIANT";
    defaultValue: "Bold";
    variantOptions: ["Regular", "Bold"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: [
      "Enabled",
      "Enabled-Pressed",
      "Enabled-Selected",
      "Enabled-Selected-Pressed",
      "Enabled-Indeterminate",
      "Enabled-Indeterminate-Pressed",
      "Disabled",
      "Disabled-Selected",
      "Disabled-Indeterminate",
    ];
  };
}>;

export type ControlChipProperties = InferFromDefinition<{
  "Count#7185:21": {
    type: "TEXT";
    defaultValue: "10";
  };
  "Icon#8722:41": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4176";
    preferredValues: [];
  };
  "Show Count#7185:42": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Label#7185:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Prefix Icon#8722:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4043";
    preferredValues: [
      {
        type: "COMPONENT_SET";
        key: "8ed05ef62a40f2dc034ee7eb6945bd0e63ad49aa";
      },
    ];
  };
  "Suffix Icon#8722:82": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:3659";
    preferredValues: [];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Medium";
    variantOptions: ["Medium", "Small"];
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Text Only";
    variantOptions: ["Text Only", "Icon First", "Icon Last", "Icon Both", "Icon Only"];
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
    variantOptions: ["Enabled", "Enabled-Pressed"];
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
    variantOptions: ["Enabled", "Enabled-Pressed"];
  };
}>;

export type HelpBubbleProperties = InferFromDefinition<{
  "Title#62535:0": {
    type: "TEXT";
    defaultValue: "Help Bubble\n두 줄일 땐 줄바꿈해요";
  };
  "Description#62535:98": {
    type: "TEXT";
    defaultValue: "디스크립션";
  };
  "Show Description#62499:0": {
    type: "BOOLEAN";
    defaultValue: true;
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
    variantOptions: ["True", "False"];
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
  "Link Label#1547:81": {
    type: "TEXT";
    defaultValue: "자세히보기";
  };
  "Show Icon#11840:27": {
    type: "BOOLEAN";
    defaultValue: true;
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
      "Informative Weak",
      "Positive Weak",
      "Warning Solid",
      "Warning Weak",
      "Danger Solid",
      "Danger Weak",
    ];
  };
  "Show Title": {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["True", "False"];
  };
}>;

export type ProgressCircleProperties = InferFromDefinition<{
  Size: {
    type: "VARIANT";
    defaultValue: "40";
    variantOptions: ["24", "40"];
  };
  Tone: {
    type: "VARIANT";
    defaultValue: "Neutral";
    variantOptions: ["Neutral", "Brand", "Static White"];
  };
  Value: {
    type: "VARIANT";
    defaultValue: "0%";
    variantOptions: ["Indeterminate", "0%", "25%", "75%", "100%"];
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
      "Enabled-Pressed",
      "Enabled-Loading",
      "Enabled-Selected",
      "Enabled-Selected-Pressed",
      "Enabled-Selected-Loading",
      "Disabled",
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
      "Enabled",
      "Enabled-Selected",
      "Enabled-Pressed",
      "Enabled-Selected-Pressed",
      "Disabled",
      "Disabled-Selected",
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
    variantOptions: ["Checkbox", "Radio"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Enabled-Pressed", "Enabled-Selected", "Enabled-Selected-Pressed"];
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
    variantOptions: ["Enabled", "Enabled-Selected", "Disabled", "Disabled-Selected"];
  };
}>;

export type TextButtonProperties = InferFromDefinition<{
  "Label#6148:0": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Prefix Icon#7561:0": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:4174";
    preferredValues: [];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Large";
    variantOptions: ["Small", "Medium", "Large"];
  };
  Layout: {
    type: "VARIANT";
    defaultValue: "Icon First";
    variantOptions: ["Icon First", "Icon Last"];
  };
  Tone: {
    type: "VARIANT";
    defaultValue: "Brand";
    variantOptions: ["Neutral", "Neutral Subtle", "Brand", "Danger"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Enabled-Pressed", "Disabled"];
  };
}>;

export type ToggleButtonProperties = InferFromDefinition<{
  "Label#6122:49": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Prefix Icon#6122:98": {
    type: "INSTANCE_SWAP";
    defaultValue: "8328:3989";
    preferredValues: [];
  };
  "Show Suffix Icon#6122:147": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Show Prefix Icon#6122:392": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Suffix Icon#6122:343": {
    type: "INSTANCE_SWAP";
    defaultValue: "102:6307";
    preferredValues: [];
  };
  Size: {
    type: "VARIANT";
    defaultValue: "XSmall";
    variantOptions: ["Small", "XSmall"];
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Brand Solid";
    variantOptions: ["Neutral Weak", "Brand Solid"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled-Selected";
    variantOptions: [
      "Enabled",
      "Enabled-Pressed",
      "Enabled-Loading",
      "Enabled-Selected",
      "Enabled-Selected-Pressed",
      "Enabled-Selected-Loading",
      "Disabled",
      "Disabled-Selected",
    ];
  };
}>;
