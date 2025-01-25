import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";
import { Stack } from "@/registry/ui/layout";

export default function InlineBannerWarningWeak() {
  return (
    <Stack gap="s4" width="full">
      <InlineBanner
        variant="warningWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <LinkInlineBanner
        variant="warningWeak"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
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
