"use client";

import { useMemo, useState } from "react";
import { TextField } from "seed-design/ui/text-field";

export default function TextFieldSlicing() {
  const [value, setValue] = useState("");

  return (
    <TextField
      label="라벨"
      placeholder="플레이스홀더"
      description="6글자까지 입력 가능합니다"
      maxGraphemeCount={6}
      value={value}
      onValueChange={({ slicedValue }) => setValue(slicedValue)}
    />
  );
}
