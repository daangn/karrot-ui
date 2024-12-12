interface ScreenVariant {
  theme: "cupertino" | "android";
hasAppBar: boolean;
}

type ScreenVariantMap = {
  [key in keyof ScreenVariant]: Array<ScreenVariant[key]>;
};

export type ScreenVariantProps = Partial<ScreenVariant>;

export type ScreenSlotName = "root" | "layer" | "dim" | "edge" | "spacer";

export const screenVariantMap: ScreenVariantMap;

export function screen(
  props?: ScreenVariantProps,
): Record<ScreenSlotName, string>;