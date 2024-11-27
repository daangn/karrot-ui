import type { EventHandler } from "@create-figma-plugin/utilities";

export interface RequestComponentPropertyDefinitionsHandler extends EventHandler {
  name: "REQUEST_COMPONENT_PROPERTY_DEFINITIONS";
  handler: () => void;
}

export interface RequestComponentKeyHandler extends EventHandler {
  name: "REQUEST_COMPONENT_KEY";
  handler: () => void;
}

export interface ResponseHandler extends EventHandler {
  name: "RESPONSE";
  handler: (code: string) => void;
}

export interface RequestRootageTokensHandler extends EventHandler {
  name: "REQUEST_ROOTAGE_TOKENS";
  handler: (scope: "color" | "font-size" | "line-height" | "unit") => void;
}
