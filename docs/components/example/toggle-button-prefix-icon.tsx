"use client";

import { IconCheckmarkLine, IconPlusLine } from "@daangn/react-monochrome-icon";
import { useState } from "react";
import { ToggleButton } from "seed-design/ui/toggle-button";

export default function ToggleButtonPrefixIcon() {
  const [pressed, setPressed] = useState(false);

  return (
    <ToggleButton
      prefixIcon={pressed ? <IconPlusLine /> : <IconCheckmarkLine />}
      pressed={pressed}
      onPressedChange={setPressed}
    >
      {pressed ? "선택됨" : "미선택"}
    </ToggleButton>
  );
}
