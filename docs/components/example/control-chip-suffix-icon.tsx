"use client";

import { IconChevronDownFill } from "@daangn/react-monochrome-icon";
import { ControlChip } from "seed-design/ui/control-chip";

export default function ControlChipSuffixIcon() {
  return <ControlChip.Toggle suffixIcon={<IconChevronDownFill />}>라벨</ControlChip.Toggle>;
}
