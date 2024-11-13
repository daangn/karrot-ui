"use client";

import { useState } from "react";
import { ActionButton } from "seed-design/ui/action-button";
import { RadioGroup, Radio } from "seed-design/ui/radio-group";

export default function RadioGroupControlled() {
  const options = ["duis", "officia", "sint"];
  const [value, setValue] = useState<(typeof options)[number] | undefined>();

  return (
    <div className="flex flex-col gap-2">
      <ActionButton onClick={() => setValue(options[1])}>Select Second</ActionButton>
      <RadioGroup value={value} onValueChange={setValue}>
        {options.map((option) => (
          <Radio key={option} value={option}>
            {option}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}
