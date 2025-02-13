import { h } from "preact";
import type { CSSProperties } from "preact/compat";

export function ColorChip({
  backgroundColor,
  opacity,
}: Pick<CSSProperties, "backgroundColor" | "opacity">) {
  return (
    <div
      className="size-2.5 flex-none rounded-full ring-inset ring-[1px] ring-opacity-30 ring-black"
      style={{ backgroundColor, opacity }}
    />
  );
}
