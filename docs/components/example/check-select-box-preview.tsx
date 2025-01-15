"use client";

import { Stack } from "@seed-design/react";
import { CheckSelectBox, CheckSelectBoxGroup } from "seed-design/ui/select-box";

export default function CheckSelectBoxPreview() {
  return (
    <CheckSelectBoxGroup>
      <Stack gap="s3">
        <CheckSelectBox label="Apple" defaultChecked />
        <CheckSelectBox
          label="Melon"
          description="Elit cupidatat dolore fugiat enim veniam culpa."
        />
        <CheckSelectBox label="Mango" />
      </Stack>
    </CheckSelectBoxGroup>
  );
}
