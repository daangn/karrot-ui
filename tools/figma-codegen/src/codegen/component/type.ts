import type { InferFromDefinition } from "./type-helper";

export type BoxButtonProperties = InferFromDefinition<{
  "↳Icons#449:9": {
    type: "INSTANCE_SWAP";
    defaultValue: "102:6198";
  };
  "Suffix Icon#445:1": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Label#369:5": {
    type: "TEXT";
    defaultValue: "라벨";
  };
  "Prefix Icon#366:0": {
    type: "BOOLEAN";
    defaultValue: true;
  };
  Size: {
    type: "VARIANT";
    defaultValue: "Xsmall";
    variantOptions: ["Xsmall", "Medium", "Small", "Large", "XLarge"];
  };
  Variant: {
    type: "VARIANT";
    defaultValue: "Brand";
    variantOptions: ["Neutral", "Brand", "Brand Soft", "Danger"];
  };
  State: {
    type: "VARIANT";
    defaultValue: "Enabled";
    variantOptions: ["Enabled", "Pressed", "Disabled", "Loading"];
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
  "Show Counter#7185:42": {
    type: "BOOLEAN";
    defaultValue: false;
  };
  "Counter#7185:21": {
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
  "Show Counter#7185:42": {
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
  "Counter#7185:21": {
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
