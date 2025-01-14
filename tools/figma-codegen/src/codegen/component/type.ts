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
    defaultValue: "Text only";
    variantOptions: ["Text only", "Icon first", "Icon last", "Icon both", "Icon only"];
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
    defaultValue: "Text only";
    variantOptions: ["Text only", "Icon first", "Icon last", "Icon both", "Icon only"];
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
  "Image#71850:57": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Badge#1398:26": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  Size: {
    type: "VARIANT";
    defaultValue: "20";
    variantOptions: ["20", "24", "36", "48", "64", "80", "96", "40"];
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
  "Prefix Icon#12598:229": {
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
  Title: {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["True", "False"];
  };
  Link: {
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
  Bold: {
    type: "VARIANT";
    defaultValue: "True";
    variantOptions: ["False", "True"];
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
    defaultValue: "Text only";
    variantOptions: ["Text only", "Icon first", "Icon last", "Icon both", "Icon only"];
  };
  Selected: {
    type: "VARIANT";
    defaultValue: "False";
    variantOptions: ["False", "True"];
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

export type IdentityPlaceholderProperties = InferFromDefinition<{
  Identity: {
    type: "VARIANT";
    defaultValue: "Person";
    variantOptions: ["Person", "Business"];
  };
}>;
