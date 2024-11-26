"use client";

import { useState } from "react";
import { TextField } from "seed-design/ui/text-field";

export default function TextFieldPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center w-full">
      <TextField autoFocus value={value} onValueChange={setValue} />
      <p className="text-center">현재 값: {value}</p>
    </div>
  );
}
