"use client";

import { SegmentedControl, SegmentedControlSegment } from "seed-design/ui/segmented-control";
import { useIcon } from "./icon-context";

export const IconSegmentedControl = () => {
  const { setIconStyle, iconStyle } = useIcon();

  return (
    <SegmentedControl
      onValueChange={(value) => setIconStyle(value as "monochrome" | "multicolor")}
      defaultValue={iconStyle}
      value={iconStyle}
      aria-label="Sort by"
    >
      <SegmentedControlSegment value="monochrome">Monochrome</SegmentedControlSegment>
      <SegmentedControlSegment value="multicolor">Multicolor</SegmentedControlSegment>
    </SegmentedControl>
  );
};
