import { IconBellFill } from "@daangn/react-monochrome-icon";
import { ExtendedFab } from "seed-design/ui/extended-fab";

export default function ExtendedFabLayerFloating() {
  return (
    <ExtendedFab variant="layerFloating" prefixIcon={<IconBellFill />}>
      알림 설정
    </ExtendedFab>
  );
}
