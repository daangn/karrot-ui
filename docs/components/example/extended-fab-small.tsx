import { IconBellFill } from "@daangn/react-monochrome-icon";
import { ExtendedFab } from "seed-design/ui/extended-fab";

export default function ExtendedFabSmall() {
  return (
    <ExtendedFab size="small" prefixIcon={<IconBellFill />}>
      알림 설정
    </ExtendedFab>
  );
}
