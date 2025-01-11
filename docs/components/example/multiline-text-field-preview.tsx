"use client";

import { useState } from "react";
import { TextField, TextFieldTextarea } from "seed-design/ui/text-field";

export default function MultilineTextFieldPreview() {
  return (
    <TextField>
      <TextFieldTextarea autoFocus />
    </TextField>
  );
}
