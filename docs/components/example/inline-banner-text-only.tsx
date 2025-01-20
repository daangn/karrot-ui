import { Stack } from "@/registry/ui/layout";
import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";

export default function InlineBannerTextOnly() {
  return (
    <Stack gap="s4" width="full">
      <InlineBanner description="사업자 정보를 등록해주세요." />
      <LinkInlineBanner description="사업자 정보를 등록해주세요." linkLabel="자세히보기" />
      <ActionableInlineBanner description="사업자 정보를 등록해주세요." />
      <DismissibleInlineBanner description="사업자 정보를 등록해주세요." />
    </Stack>
  );
}
