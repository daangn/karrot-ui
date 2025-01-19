import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";

export default function InlineBannerTextOnly() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner description="사업자 정보를 등록해주세요." />
      <LinkInlineBanner description="사업자 정보를 등록해주세요." linkLabel="자세히보기" />
      <ActionableInlineBanner description="사업자 정보를 등록해주세요." />
      <DismissibleInlineBanner description="사업자 정보를 등록해주세요." />
    </div>
  );
}
