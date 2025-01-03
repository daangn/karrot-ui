interface ScreenVariant {
  /**
  * @default cupertino
  */
  theme: "cupertino" | "android";
/**
  * @default false
  */
  hasAppBar: boolean;
}

type ScreenVariantMap = {
  [key in keyof ScreenVariant]: Array<ScreenVariant[key]>;
};

export type ScreenVariantProps = Partial<ScreenVariant>;

export type ScreenSlotName = "root" | "layer" | "dim" | "edge";

export const screenVariantMap: ScreenVariantMap;

export function screen(
  props?: ScreenVariantProps,
): Record<ScreenSlotName, string>;