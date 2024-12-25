interface BottomSheetVariant {
  
}

type BottomSheetVariantMap = {
  [key in keyof BottomSheetVariant]: Array<BottomSheetVariant[key]>;
};

export type BottomSheetVariantProps = Partial<BottomSheetVariant>;

export type BottomSheetSlotName = "backdrop" | "container" | "content" | "header" | "footer" | "title" | "description" | "closeButton" | "closeIcon";

export const bottomSheetVariantMap: BottomSheetVariantMap;

export function bottomSheet(
  props?: BottomSheetVariantProps,
): Record<BottomSheetSlotName, string>;