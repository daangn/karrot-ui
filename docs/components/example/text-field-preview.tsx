"use client";

import { useState } from "react";
import { TextField, TextFieldInput } from "seed-design/ui/text-field";

export default function TextFieldPreview() {
  return (
    <TextField>
      <TextFieldInput autoFocus />
    </TextField>
  );
}
