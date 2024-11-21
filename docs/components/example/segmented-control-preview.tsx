"use client";

import { useState } from "react";
import { SegmentedControl, SegmentedControlOption } from "seed-design/ui/segmented-control";

export default function SegmentedControlPreview() {
  const options = ["New", "Hot"];
  const [value, setValue] = useState("New");

  return (
    <div className="flex flex-col gap-3 items-center text-center">
      <SegmentedControl value={value} defaultValue="New" onValueChange={setValue}>
        {options.map((option) => (
          <SegmentedControlOption key={option} value={option}>
            {option}
          </SegmentedControlOption>
        ))}
      </SegmentedControl>
      <div>Selected value: {value}</div>
    </div>
  );
}
