"use client";

import { useState } from "react";
import { FormControl, TextField } from "seed-design/ui/text-field";

export default function TextFieldSlicing() {
  const [value, setValue] = useState("");

  return (
    <FormControl
      label="라벨"
      description="6글자까지 입력 가능합니다"
      maxGraphemeCount={6}
      value={value}
      onValueChange={({ slicedValue }) => setValue(slicedValue)}
    >
      <TextField placeholder="플레이스홀더" />
    </FormControl>
  );
}
