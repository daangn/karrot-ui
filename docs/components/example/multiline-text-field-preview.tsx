"use client";

import { useState } from "react";
import { FormControl, MultilineTextField } from "seed-design/ui/text-field";

export default function MultilineTextFieldPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center w-full">
      <FormControl autoFocus value={value} onValueChange={({ value }) => setValue(value)}>
        <MultilineTextField />
      </FormControl>
      <p className="text-center">현재 값: {value}</p>
    </div>
  );
}
