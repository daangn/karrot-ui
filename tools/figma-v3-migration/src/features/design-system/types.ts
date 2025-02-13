import type { PaletteProperty } from "@/features/design-system/services/get-color-variable-suggestions-by-properties";
import type {
  CORNER_RADIUS_VARIABLE_BINDABLE_NODE_FIELDS,
  LAYOUT_VARIABLE_BINDABLE_NODE_FIELDS,
  SIZING_VARIABLE_BINDABLE_NODE_FIELDS,
  STROKE_WEIGHT_VARIABLE_BINDABLE_NODE_FIELDS,
} from "@/features/design-system/services/get-unit-variable-suggestions";
import type { Preferences } from "@/shared/contexts/PreferencesProvider";
import type { EventHandler } from "@create-figma-plugin/utilities";

export interface SerializedBaseNode {
  id: BaseNode["id"];
  name: BaseNode["name"];
  type: BaseNode["type"];
  characters?: TextNode["characters"];
}

export interface SerializedTextNode {
  id: TextNode["id"];
  name: TextNode["name"];
  characters: TextNode["characters"];
  fontSize: Exclude<TextNode["fontSize"], PluginAPI["mixed"]> | null;
  fontWeight: Exclude<TextNode["fontWeight"], PluginAPI["mixed"]> | null;
  lineHeight: Exclude<TextNode["lineHeight"], PluginAPI["mixed"]> | null;
}

export interface SerializedInstanceNode {
  id: InstanceNode["id"];
  name: InstanceNode["name"];
}

export interface SerializedTextStyle {
  id: TextStyle["id"];
  name: TextStyle["name"];
  fontSize: TextStyle["fontSize"];
  fontNameStyle: TextStyle["fontName"]["style"];
  lineHeight: TextStyle["lineHeight"];
}

export interface SerializedPaintStyle {
  id: PaintStyle["id"];
  name: PaintStyle["name"];
}

export interface SerializedVariable {
  id: Variable["id"];
  key: Variable["key"];
  name: Variable["name"];
}

export type TextStylesSuggestionsResults = {
  textNode: TextNode;
  suggestions: {
    textStyle: TextStyle;
    distance: number;
    differences: {
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
    };
  }[];
}[];

export type SerializedTextStyleSuggestionsResults = {
  textNode: SerializedTextNode;
  closestInstanceNode: SerializedInstanceNode | null;
  selectedNewTextStyleId: SerializedTextStyle["id"] | null;
  suggestions: {
    textStyle: SerializedTextStyle;
    distance: number;
    differences: {
      fontSize: number | null;
      fontWeight: number | null;
      lineHeight: number | null;
    };
  }[];
}[];

export type GroupedSerializedTextStyleSuggestionsResults = {
  groupId: string;
  items: SerializedTextStyleSuggestionsResults;
}[];

export type ColorVariablesSuggestionsResults = {
  oldValue:
    | {
        type: "style";
        style: PaintStyle;
        hex: string;
        opacity: number;
        paletteProperty: PaletteProperty;
      }
    | { type: "detached"; hex: string; opacity: number }
    | { type: "variable"; variable: Variable; hex: string; opacity: number }
    | { type: "uncheckable" };
  suggestions: { variable: Variable; hex: string; opacity: number }[];
  consumers: {
    node: SceneNode;
    properties: ("Fill" | "Stroke" | "Effect")[];
  }[];
}[];

export type SerializedColorVariablesSuggestionsResults = {
  oldValue:
    | {
        type: "style";
        style: SerializedPaintStyle;
        hex: string;
        opacity: number;
        paletteProperty: PaletteProperty;
      }
    | { type: "detached"; hex: string; opacity: number }
    | { type: "variable"; variable: SerializedVariable; hex: string; opacity: number }
    | { type: "uncheckable" };
  suggestions: { variable: SerializedVariable; hex: string; opacity: number }[];
  consumers: {
    node: SerializedBaseNode;
    closestInstanceNode: SerializedInstanceNode | null;
    properties: ("Fill" | "Stroke" | "Effect")[];
    selectedNewVariableId: SerializedVariable["id"] | null;
  }[];
}[];

export type SizingVariablesSuggestionsResults = {
  oldValue: number;
  suggestions: { variable: Variable; value: number }[];
  consumers: {
    node: SceneNode;
    properties: (typeof SIZING_VARIABLE_BINDABLE_NODE_FIELDS)[number][];
  }[];
}[];

export type SerializedSizingVariablesSuggestionsResults = {
  oldValue: number;
  suggestions: { variable: SerializedVariable; value: number }[];
  consumers: {
    node: SerializedBaseNode;
    closestInstanceNode: SerializedInstanceNode | null;
    properties: (typeof SIZING_VARIABLE_BINDABLE_NODE_FIELDS)[number][];
    selectedNewVariableId: SerializedVariable["id"] | null;
  }[];
}[];

export type LayoutVariablesSuggestionsResults = {
  oldValue: number;
  suggestions: { variable: Variable; value: number }[];
  consumers: {
    node: SceneNode;
    properties: (typeof LAYOUT_VARIABLE_BINDABLE_NODE_FIELDS)[number][];
  }[];
}[];

export type SerializedLayoutVariablesSuggestionsResults = {
  oldValue: number;
  suggestions: { variable: SerializedVariable; value: number }[];
  consumers: {
    node: SerializedBaseNode;
    closestInstanceNode: SerializedInstanceNode | null;
    properties: (typeof LAYOUT_VARIABLE_BINDABLE_NODE_FIELDS)[number][];
    selectedNewVariableId: SerializedVariable["id"] | null;
  }[];
}[];

export type StrokeWeightAndCornerRadiusVariablesSuggestionsResults = {
  oldValue: { type: "strokeWeight" | "cornerRadius"; value: number };
  suggestions: { variable: Variable; value: number }[];
  consumers: {
    node: SceneNode;
    properties: (
      | (typeof STROKE_WEIGHT_VARIABLE_BINDABLE_NODE_FIELDS)[number]
      | (typeof CORNER_RADIUS_VARIABLE_BINDABLE_NODE_FIELDS)[number]
    )[];
  }[];
}[];

export type SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults = {
  oldValue: { type: "strokeWeight" | "cornerRadius"; value: number };
  suggestions: { variable: SerializedVariable; value: number }[];
  consumers: {
    node: SerializedBaseNode;
    closestInstanceNode: SerializedInstanceNode | null;
    properties: (
      | (typeof STROKE_WEIGHT_VARIABLE_BINDABLE_NODE_FIELDS)[number]
      | (typeof CORNER_RADIUS_VARIABLE_BINDABLE_NODE_FIELDS)[number]
    )[];
    selectedNewVariableId: SerializedVariable["id"] | null;
  }[];
}[];

export interface AnnounceSelectionsEventHandler extends EventHandler {
  name: "ANNOUNCE_SELECTION";
  handler: (params: { serializedSelections: SerializedBaseNode[] }) => void;
}

export interface AnnounceTargetsEventHandler extends EventHandler {
  name: "ANNOUNCE_TARGET";
  handler: (params: { serializedTargets: SerializedBaseNode[] }) => void;
}

export interface RequestAnnounceTargetsEventHandler extends EventHandler {
  name: "REQUEST_ANNOUNCE_TARGET";
  handler: (params: { nodeIds: string[] }) => void;
}

export interface FocusNodeEventHandler extends EventHandler {
  name: "FOCUS_NODE";
  handler: (params: { nodeIds: string[] }) => void;
}

export interface ComponentInfo {
  id: string;
  name: string;
  type: string;
  key: string | null;
  isComponent: boolean;
  isInstance: boolean;
}

export interface InstanceInfo {
  id: string;
  name: string;
  key: string;
  componentProperties: ComponentProperties;
  version: "v2" | "v3";
}

export interface CheckComponentEventHandler extends EventHandler {
  name: "CHECK_COMPONENT";
  handler: (targetIds: SerializedBaseNode["id"][]) => void;
}

export interface SendComponentInfoEventHandler extends EventHandler {
  name: "SEND_COMPONENT_INFO";
  handler: (components: InstanceInfo[]) => void;
}

export interface SwapComponentEventHandler extends EventHandler {
  name: "SWAP_COMPONENT";
  handler: (instanceNode: InstanceInfo, selectedVariants?: Record<string, string>) => void;
}

export interface SwapAllComponentsEventHandler extends EventHandler {
  name: "SWAP_ALL_COMPONENTS";
  handler: (instanceNodes: InstanceInfo[], selectedVariants?: Record<string, string>) => void;
}

export type SwapResult = Record<
  InstanceInfo["id"],
  {
    ok: boolean;
    errorMessage?: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    metadata?: Record<string, any>;
  }
>;

export interface FigmaMetadata {
  currentUser: {
    id: string;
    name: string;
  };
  currentPage: {
    id: string;
    name: string;
  };
  currentRoot: {
    name: string;
  };
  fileKey: string;
}

export interface SendFigmaMetadataEventHandler extends EventHandler {
  name: "SEND_FIGMA_METADATA";
  handler: (params: FigmaMetadata) => void;
}

export interface SendPreferencesEventHandler extends EventHandler {
  name: "SEND_PREFERENCES";
  handler: (params: { preferences: Preferences }) => void;
}

export interface UpdatePreferencesEventHandler extends EventHandler {
  name: "UPDATE_PREFERENCES";
  handler: (params: { preferences: Preferences }) => void;
}

export interface NotifyEventHandler extends EventHandler {
  name: "NOTIFY";
  handler: (params: { message: string }) => void;
}

export interface SwapResultEventHandler extends EventHandler {
  name: "SWAP_RESULT";
  handler: (params: SwapResult) => void;
}

export interface RequestTextStyleSuggestionsEventHandler extends EventHandler {
  name: "REQUEST_TEXT_STYLE_SUGGESTIONS";
  handler: (params: { nodeIds: SerializedBaseNode["id"][] }) => void;
}

export interface SuggestTextStylesEventHandler extends EventHandler {
  name: "SUGGEST_TEXT_STYLES";
  handler: (params: {
    results: GroupedSerializedTextStyleSuggestionsResults;
  }) => void;
}

export interface ApplyTextStyleEventHandler extends EventHandler {
  name: "APPLY_TEXT_STYLE";
  handler: (params: {
    textNodeIds: SerializedTextNode["id"][];
    textStyleId: SerializedTextStyle["id"];
  }) => void;
}

export interface RequestColorSuggestionsEventHandler extends EventHandler {
  name: "REQUEST_COLOR_SUGGESTIONS";
  handler: (params: { nodeIds: SerializedBaseNode["id"][] }) => void;
}

export interface SuggestColorVariablesEventHandler extends EventHandler {
  name: "SUGGEST_COLOR_VARIABLES";
  handler: (params: {
    results: SerializedColorVariablesSuggestionsResults;
  }) => void;
}

export interface ApplyColorVariableEventHandler extends EventHandler {
  name: "APPLY_COLOR_VARIABLE";
  handler: (params: {
    oldValue: SerializedColorVariablesSuggestionsResults[number]["oldValue"];
    consumerNodeIds: SerializedColorVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
    variableId: SerializedColorVariablesSuggestionsResults[number]["suggestions"][number]["variable"]["id"];
  }) => void;
}

export interface RequestSizingSuggestionsEventHandler extends EventHandler {
  name: "REQUEST_SIZING_SUGGESTIONS";
  handler: (params: { nodeIds: SerializedBaseNode["id"][] }) => void;
}

export interface SuggestSizingVariablesEventHandler extends EventHandler {
  name: "SUGGEST_SIZING_VARIABLES";
  handler: (params: {
    results: SerializedSizingVariablesSuggestionsResults;
  }) => void;
}

export interface ApplySizingVariableEventHandler extends EventHandler {
  name: "APPLY_SIZING_VARIABLE";
  handler: (params: {
    oldValue: SerializedSizingVariablesSuggestionsResults[number]["oldValue"];
    consumerNodeIds: SerializedSizingVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
    variableId: SerializedSizingVariablesSuggestionsResults[number]["suggestions"][number]["variable"]["id"];
  }) => void;
}

export interface RequestLayoutSuggestionsEventHandler extends EventHandler {
  name: "REQUEST_LAYOUT_SUGGESTIONS";
  handler: (params: { nodeIds: SerializedBaseNode["id"][] }) => void;
}

export interface SuggestLayoutVariablesEventHandler extends EventHandler {
  name: "SUGGEST_LAYOUT_VARIABLES";
  handler: (params: {
    results: SerializedLayoutVariablesSuggestionsResults;
  }) => void;
}

export interface ApplyLayoutVariableEventHandler extends EventHandler {
  name: "APPLY_LAYOUT_VARIABLE";
  handler: (params: {
    oldValue: SerializedLayoutVariablesSuggestionsResults[number]["oldValue"];
    consumerNodeIds: SerializedLayoutVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
    variableId: SerializedLayoutVariablesSuggestionsResults[number]["suggestions"][number]["variable"]["id"];
  }) => void;
}

export interface RequestStrokeWeightAndCornerRadiusSuggestionsEventHandler extends EventHandler {
  name: "REQUEST_STROKE_WEIGHT_AND_CORNER_RADIUS_SUGGESTIONS";
  handler: (params: { nodeIds: SerializedBaseNode["id"][] }) => void;
}

export interface SuggestStrokeWeightAndCornerRadiusVariablesEventHandler extends EventHandler {
  name: "SUGGEST_STROKE_WEIGHT_AND_CORNER_RADIUS_VARIABLES";
  handler: (params: {
    results: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults;
  }) => void;
}

export interface ApplyStrokeWeightAndCornerRadiusVariableEventHandler extends EventHandler {
  name: "APPLY_STROKE_WEIGHT_AND_CORNER_RADIUS_VARIABLE";
  handler: (params: {
    oldValue: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults[number]["oldValue"];
    consumerNodeIds: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults[number]["consumers"][number]["node"]["id"][];
    variableId: SerializedStrokeWeightAndCornerRadiusVariablesSuggestionsResults[number]["suggestions"][number]["variable"]["id"];
  }) => void;
}

////////////////////////////////////////////////////////////////////////////////////

export interface DebugEventHandler extends EventHandler {
  name: "DEBUG";
  // biome-ignore lint/suspicious/noExplicitAny: 타입 정의 모호함 때문에 임시로 허용
  handler: (payload: any) => void;
}
