import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
} from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";
import { Stack } from "seed-design/ui/layout";

export default function InlineBannerWarningWeak() {
  return (
    <Stack gap="x4" width="full">
      <InlineBanner
        variant="warningWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <ActionableInlineBanner
        variant="warningWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <DismissibleInlineBanner
        variant="warningWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
    </Stack>
  );
}
