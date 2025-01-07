import { LinkInlineBanner } from "seed-design/ui/inline-banner";

export default function InlineBannerLinkLabelAsChild() {
  return (
    <LinkInlineBanner
      description="사업자 정보를 등록해주세요."
      linkLabel={
        <a href="https://www.daangn.com" target="_blank" rel="noreferrer">
          자세히보기
        </a>
      }
      linkProps={{ asChild: true }}
    />
  );
}
