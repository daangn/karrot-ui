import { Stack } from "@/registry/ui/layout";
import { ActionableCallout, Callout, DismissibleCallout } from "seed-design/ui/callout";

export default function CalloutWarning() {
  return (
    <Stack gap="s4" width="full">
      <Callout
        tone="warning"
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
      />
      <ActionableCallout
        tone="warning"
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
      />
      <DismissibleCallout
        tone="warning"
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
      />
    </Stack>
  );
}
