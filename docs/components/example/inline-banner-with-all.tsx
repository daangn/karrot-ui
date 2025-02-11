import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
} from "seed-design/ui/inline-banner";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { Stack } from "seed-design/ui/layout";

export default function InlineBannerWithAll() {
  return (
    <Stack gap="x4" width="full">
      <InlineBanner
        icon={<IconBellFill />}
        title="타이틀"
        description="사업자 정보를 등록해주세요."
      />
      <ActionableInlineBanner
        icon={<IconBellFill />}
        title="타이틀"
        description="사업자 정보를 등록해주세요."
      />
      <DismissibleInlineBanner
        icon={<IconBellFill />}
        title="타이틀"
        description="사업자 정보를 등록해주세요."
      />
    </Stack>
  );
}
