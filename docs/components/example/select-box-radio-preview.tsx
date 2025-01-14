"use client";

import { RadioSelectBoxGroup, RadioSelectBox } from "seed-design/ui/select-box";

export default function RadioSelectBoxPreview() {
  return (
    <RadioSelectBoxGroup defaultValue="apple" aria-label="Fruit">
      <RadioSelectBox value="apple" label="Apple" />
      <RadioSelectBox
        value="melon"
        label="Melon"
        description="Elit cupidatat dolore fugiat enim veniam culpa."
      />
      <RadioSelectBox value="mango" label="Mango" />
    </RadioSelectBoxGroup>
  );
}
