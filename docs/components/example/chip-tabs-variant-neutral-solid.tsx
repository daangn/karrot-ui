"use client";

import * as React from "react";
import { ChipTabsRoot, ChipTabsTrigger, ChipTabsList } from "seed-design/ui/chip-tabs";

export default function ChipTabsVariantNeutralSolid() {
  const [value, setValue] = React.useState("1");
  return (
    <>
      <ChipTabsRoot
        variant="neutralSolid"
        defaultValue="1"
        value={value}
        onValueChange={(value) => setValue(value)}
      >
        <ChipTabsList>
          <ChipTabsTrigger value="1">라벨1</ChipTabsTrigger>
          <ChipTabsTrigger value="2">라벨2</ChipTabsTrigger>
          <ChipTabsTrigger value="3">라벨3</ChipTabsTrigger>
        </ChipTabsList>
      </ChipTabsRoot>
      {value === "1" && <div>content 1</div>}
      {value === "2" && <div>content 2</div>}
      {value === "3" && <div>content 3</div>}
    </>
  );
}
