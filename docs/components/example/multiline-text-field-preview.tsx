"use client";

import { useState } from "react";
import { MultilineTextField } from "seed-design/ui/multiline-text-field";

export default function TextFieldPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center w-full">
      <MultilineTextField autoFocus value={value} onValueChange={setValue} />
      <p className="text-center">현재 값: {value}</p>
    </div>
  );
}
