import {
  DismissibleInlineBanner,
  DismissibleInlineBannerDescription,
} from "seed-design/ui/dismissible-inline-banner";

export default function DismissibleInlineBannerTextOnly() {
  return (
    <DismissibleInlineBanner dismissAriaLabel="닫기" variant="informativeWeak">
      <DismissibleInlineBannerDescription>
        다른 사람과 예약된 물품이 있어요.
      </DismissibleInlineBannerDescription>
    </DismissibleInlineBanner>
  );
}
