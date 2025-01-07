import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconILowercaseSerifCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerInformativeWeak() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner
        variant="informativeWeak"
        icon={<IconILowercaseSerifCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <LinkInlineBanner
        variant="informativeWeak"
        icon={<IconILowercaseSerifCircleFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner
        variant="informativeWeak"
        icon={<IconILowercaseSerifCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
      <DismissibleInlineBanner
        variant="informativeWeak"
        icon={<IconILowercaseSerifCircleFill />}
        description="사업자 정보를 등록해주세요."
      />
    </div>
  );
}
