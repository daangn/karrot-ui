import {
  ActionableInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";
import { Stack } from "@/registry/ui/layout";

export default function InlineBannerCriticalWeak() {
  return (
    <Stack gap="s4" width="full">
      <InlineBanner
        variant="criticalWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <LinkInlineBanner
        variant="criticalWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner
        variant="criticalWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
    </Stack>
  );
}
