import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { Stack } from "@/registry/ui/layout";

export default function InlineBannerNeutralWeak() {
  return (
    <Stack gap="s4" width="full">
      <InlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
      />
      <LinkInlineBanner
        variant="neutralWeak"
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
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
