import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
} from "seed-design/ui/inline-banner";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { Stack } from "seed-design/ui/layout";

export default function InlineBannerNeutralWeak() {
  return (
    <Stack gap="x4" width="full">
      <InlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
      />
      <ActionableInlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
      />
      <DismissibleInlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
      />
    </Stack>
  );
}
