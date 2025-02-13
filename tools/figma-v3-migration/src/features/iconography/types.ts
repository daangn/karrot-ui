import type { EventHandler } from "@create-figma-plugin/utilities";

export interface CheckOldIconEventHandler extends EventHandler {
  name: "CHECK_OLD_ICON";
  handler: () => void;
}

export interface CheckNewIconEventHandler extends EventHandler {
  name: "CHECK_NEW_ICON";
  handler: () => void;
}

export interface ReturnNewIconEventHandler extends EventHandler {
  name: "RETURN_NEW_ICON";
  handler: () => void;
}
export interface ReturnOldIconEventHandler extends EventHandler {
  name: "RETURN_OLD_ICON";
  handler: () => void;
}

export interface ChangeIconEventHandler extends EventHandler {
  name: "CHANGE_ICON";
  handler: () => void;
}

/////////////////////////////////////////////////////////

export interface HotfixEventHandler extends EventHandler {
  name: "HOTFIX";
  handler: (target: "page" | "root" | "selection") => void;
}

export interface HotfixCountIconsEventHandler extends EventHandler {
  name: "HOTFIX_COUNT_ICONS";
  handler: (count: number) => void;
}

export interface HotfixCountUpEventHandler extends EventHandler {
  name: "HOTFIX_COUNT_UP";
  handler: () => void;
}

export interface HotfixStatusEventHandler extends EventHandler {
  name: "HOTFIX_STATUS";
  handler: (status: "init" | "loading") => void;
}

/////////////////////////////////////////////////////////

export interface GetComponentKeysEventHandler extends EventHandler {
  name: "GET_COMPONENT_KEYS";
  handler: () => void;
}

export interface EmitGetChangedIconCountEventHandler extends EventHandler {
  name: "EMIT_GET_CHANGED_ICON_COUNT";
  handler: () => void;
}

export interface ChangeComponentPrefix extends EventHandler {
  name: "CHANGE_COMPONENT_PREFIX";
  handler: () => void;
}

export interface OnGetChangedIconCountEventHandler extends EventHandler {
  name: "ON_GET_CHANGED_ICON_COUNT";
  handler: (count: number, frameLength?: number) => void;
}

export interface FrameSelectionEventHandler extends EventHandler {
  name: "FRAME_SELECTION";
  handler: (frameLength: number) => void;
}

export interface ErrorEventHandler extends EventHandler {
  name: "ERROR";
  handler: () => void;
}

/**
 * rootName: {
 *   rootFigmaLink: string;
 *   figmaPageName: {
 *     figmaPageLink: string;
 *     figmaPageId: string;
 *     reports: Report[];
 *   }
 * }
 */
interface FigmaPage {
  figmaPageLink: string;
  figmaPageId: string;
  reports: Report[];
}

export type OldWeight = "Thin" | "Regular" | "Fill";
export type NewWeight = "Line" | "Fill";

export interface Reports {
  [figmaFileName: string]: FigmaFile;
}

interface FigmaFile {
  rootFigmaLink: string;
  pages: {
    [figmaPageName: string]: FigmaPage;
  };
}

export interface Report {
  beforeNodeId: string;
  beforeNodeName: string;
  beforeWeight?: OldWeight;
  afterNodeName: string;
  afterWeight?: NewWeight;
  type?: "monochrome" | "multicolor";
  parentFrameName: string;
  link: string;
}

export interface ReportsEventHandler extends EventHandler {
  name: "REPORTS";
  handler: (reports: Reports) => void;
}

export interface ClearReportsEventHandler extends EventHandler {
  name: "CLEAR_REPORTS";
  handler: () => void;
}

export interface ConvertMonochromeWeightEventHandler extends EventHandler {
  name: "CONVERT_MONOCHROME_WEIGHT";
  handler: () => void;
}

export interface FrameSelectionEventHandler extends EventHandler {
  name: "FRAME_SELECTION";
  handler: (frameLength: number) => void;
}
