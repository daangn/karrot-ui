import { IconBellFill } from "@daangn/react-monochrome-icon";
import { ExtendedFab } from "seed-design/ui/extended-fab";

export default function ExtendedFabNeutralSolid() {
  return (
    <ExtendedFab variant="neutralSolid" prefixIcon={<IconBellFill />}>
      알림 설정
    </ExtendedFab>
  );
}
