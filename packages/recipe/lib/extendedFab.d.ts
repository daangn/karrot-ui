interface ExtendedFabVariant {
  /**
  * @default neutralSolid
  */
  variant: "neutralSolid" | "layerFloating";
/**
  * @default medium
  */
  size: "small" | "medium";
}

type ExtendedFabVariantMap = {
  [key in keyof ExtendedFabVariant]: Array<ExtendedFabVariant[key]>;
};

export type ExtendedFabVariantProps = Partial<ExtendedFabVariant>;

export type ExtendedFabSlotName = "root" | "label" | "prefixIcon";

export const extendedFabVariantMap: ExtendedFabVariantMap;

export function extendedFab(
  props?: ExtendedFabVariantProps,
): Record<ExtendedFabSlotName, string>;