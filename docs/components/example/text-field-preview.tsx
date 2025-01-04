"use client";

import { useState } from "react";
import { TextField, TextFieldInput } from "seed-design/ui/text-field";

export default function TextFieldPreview() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center w-full">
      <TextField value={value} onValueChange={({ value }) => setValue(value)}>
        <TextFieldInput autoFocus />
      </TextField>
      <p className="text-center">현재 값: {value}</p>
    </div>
  );
}
