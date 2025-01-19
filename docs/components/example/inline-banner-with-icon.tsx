import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";
import { IconBellFill } from "@daangn/react-monochrome-icon";

export default function InlineBannerWithIcon() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner icon={<IconBellFill />} description="사업자 정보를 등록해주세요." />
      <LinkInlineBanner
        icon={<IconBellFill />}
        description="사업자 정보를 등록해주세요."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner icon={<IconBellFill />} description="사업자 정보를 등록해주세요." />
      <DismissibleInlineBanner icon={<IconBellFill />} description="사업자 정보를 등록해주세요." />
    </div>
  );
}
