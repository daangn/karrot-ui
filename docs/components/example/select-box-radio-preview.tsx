"use client";

import { SelectBoxRadioGroup, SelectBoxRadio } from "seed-design/ui/select-box";

export default function SelectBoxRadioPreview() {
  return (
    <SelectBoxRadioGroup defaultValue="apple" aria-label="Fruit">
      <SelectBoxRadio value="apple" label="Apple" />
      <SelectBoxRadio
        value="melon"
        label="Melon"
        description="Elit cupidatat dolore fugiat enim veniam culpa."
      />
      <SelectBoxRadio value="mango" label="Mango" />
    </SelectBoxRadioGroup>
  );
}
