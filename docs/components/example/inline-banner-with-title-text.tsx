import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";

export default function InlineBannerWithTitleText() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner title="타이틀" description="사업자 정보를 등록해주세요." />
      <LinkInlineBanner
        title="타이틀"
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner title="타이틀" description="사업자 정보를 등록해주세요." />
      <DismissibleInlineBanner title="타이틀" description="사업자 정보를 등록해주세요." />
    </div>
  );
}
