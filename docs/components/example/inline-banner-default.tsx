import { InlineBanner } from "seed-design/ui/inline-banner";
import { IconExclamationmarkCircleFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerDefault() {
  return (
    <div className="flex gap-2 w-full flex-col">
      <InlineBanner tone="warning" prefixIcon={<IconExclamationmarkCircleFill />}>
        사업자 정보를 등록해주세요.
      </InlineBanner>
      <InlineBanner tone="warning" prefixIcon={<IconExclamationmarkCircleFill />}>
        사업자 정보를 등록해주세요. 사업자 등록을 하지 않으면, 판매자로서의 활동이 제한됩니다.
        왜냐하면, 판매자로서의 활동을 하기 위해서는 사업자 등록이 필요하기 때문입니다.
      </InlineBanner>
    </div>
  );
}
