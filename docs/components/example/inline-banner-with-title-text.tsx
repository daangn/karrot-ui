import {
  InlineBanner,
  InlineBannerDescription,
  InlineBannerTitle,
} from "seed-design/ui/inline-banner";

export default function InlineBannerWithTitleText() {
  return (
    <InlineBanner variant="informativeWeak">
      <InlineBannerTitle>예약</InlineBannerTitle>
      <InlineBannerDescription>다른 사람과 예약된 물품이 있어요.</InlineBannerDescription>
    </InlineBanner>
  );
}
