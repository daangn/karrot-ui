"use client";

import { Stack } from "@seed-design/react";
import { ErrorState } from "seed-design/ui/error-state";

export default function ErrorStateBasement() {
  return (
    <Stack minHeight="480px" width="320px" borderWidth={1} borderColor="stroke.neutral">
      <ErrorState
        variant="basement"
        title="에러 타이틀"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        primaryActionProps={{
          children: "메인 액션",
        }}
        secondaryActionProps={{
          children: "보조 액션",
        }}
      />
    </Stack>
  );
}
