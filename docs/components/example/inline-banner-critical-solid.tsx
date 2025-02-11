import { ActionableInlineBanner, InlineBanner } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";
import { Stack } from "seed-design/ui/layout";

export default function InlineBannerCriticalSolid() {
  return (
    <Stack gap="x4" width="full">
      <InlineBanner
        variant="criticalSolid"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <ActionableInlineBanner
        variant="criticalSolid"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
    </Stack>
  );
}
