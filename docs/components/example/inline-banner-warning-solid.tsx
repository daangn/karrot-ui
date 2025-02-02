import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";
import { Stack } from "seed-design/ui/layout";

export default function InlineBannerWarningSolid() {
  return (
    <Stack gap="s4" width="full">
      <InlineBanner
        variant="warningSolid"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <LinkInlineBanner
        variant="warningSolid"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner
        variant="warningSolid"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <DismissibleInlineBanner
        variant="warningSolid"
        icon={<IconExclamationmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
    </Stack>
  );
}
