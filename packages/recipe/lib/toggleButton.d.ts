interface ToggleButtonVariant {
  /**
  * @default brandSolid
  */
  variant: "brandSolid" | "neutralWeak";
/**
  * @default small
  */
  size: "xsmall" | "small";
}

type ToggleButtonVariantMap = {
  [key in keyof ToggleButtonVariant]: Array<ToggleButtonVariant[key]>;
};

export type ToggleButtonVariantProps = Partial<ToggleButtonVariant>;

export type ToggleButtonSlotName = "root" | "label" | "prefixIcon" | "suffixIcon" | "progressCircle";

export const toggleButtonVariantMap: ToggleButtonVariantMap;

export function toggleButton(
  props?: ToggleButtonVariantProps,
): Record<ToggleButtonSlotName, string>;