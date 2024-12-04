"use client";

import { useMemo, useState } from "react";
import { TextField } from "seed-design/ui/text-field";

export default function TextFieldNumberFormatting() {
  const [value, setValue] = useState("");

  const formattedValue = useMemo(() => {
    const number = Number(value.replace(/,/g, ""));
    if (Number.isNaN(number)) return "";

    return number.toLocaleString();
  }, [value]);

  return (
    <TextField
      label="금액"
      placeholder="1,000,000"
      description="금액을 써주세요"
      value={formattedValue}
      onValueChange={setValue}
    />
  );
}
