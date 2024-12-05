import { InlineBanner, InlineBannerDescription } from "seed-design/ui/inline-banner";

export default function InlineBannerTextOnly() {
  return (
    <InlineBanner variant="informativeWeak">
      <InlineBannerDescription>다른 사람과 예약된 물품이 있어요.</InlineBannerDescription>
    </InlineBanner>
  );
}
