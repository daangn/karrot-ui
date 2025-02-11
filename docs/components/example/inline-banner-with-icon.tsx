import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
} from "seed-design/ui/inline-banner";
import { IconBellFill } from "@daangn/react-monochrome-icon";
import { Stack } from "seed-design/ui/layout";

export default function InlineBannerWithIcon() {
  return (
    <Stack gap="x4" width="full">
      <InlineBanner icon={<IconBellFill />} description="사업자 정보를 등록해주세요." />
      <ActionableInlineBanner icon={<IconBellFill />} description="사업자 정보를 등록해주세요." />
      <DismissibleInlineBanner icon={<IconBellFill />} description="사업자 정보를 등록해주세요." />
    </Stack>
  );
}
