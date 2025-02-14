import { IconBellFill } from "@daangn/react-monochrome-icon";
import { PrefixIcon } from "@seed-design/react";
import { ExtendedFab } from "seed-design/ui/extended-fab";

export default function ExtendedFabPreview() {
  return (
    <ExtendedFab>
      <PrefixIcon svg={<IconBellFill />} />
      알림 설정
    </ExtendedFab>
  );
}
