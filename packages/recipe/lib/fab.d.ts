interface FabVariant {
  /**
  * @default medium
  */
  size: "small" | "medium";
}

type FabVariantMap = {
  [key in keyof FabVariant]: Array<FabVariant[key]>;
};

export type FabVariantProps = Partial<FabVariant>;

export type FabSlotName = "root" | "icon";

export const fabVariantMap: FabVariantMap;

export function fab(
  props?: FabVariantProps,
): Record<FabSlotName, string>;