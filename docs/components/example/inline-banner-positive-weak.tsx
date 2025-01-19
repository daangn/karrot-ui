import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconCheckmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerPositiveWeak() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner
        variant="positiveWeak"
        icon={<IconCheckmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <LinkInlineBanner
        variant="positiveWeak"
        icon={<IconCheckmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner
        variant="positiveWeak"
        icon={<IconCheckmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <DismissibleInlineBanner
        variant="positiveWeak"
        icon={<IconCheckmarkCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
    </div>
  );
}
