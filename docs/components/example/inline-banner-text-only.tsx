import { InlineBanner, InlineBannerLabel } from "seed-design/ui/inline-banner";

export default function InlineBannerTextOnly() {
  return (
    <InlineBanner variant="informativeWeak">
      <InlineBannerLabel>다른 사람과 예약된 물품이 있어요.</InlineBannerLabel>
    </InlineBanner>
  );
}
