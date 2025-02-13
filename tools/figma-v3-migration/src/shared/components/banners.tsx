import type { SerializedInstanceNode } from "@/features/design-system/types";
import { Banner, IconWarning16 } from "@create-figma-plugin/ui";
import { h } from "preact";

export function InstanceWarningBanner({
  closestInstanceNodeName,
}: {
  closestInstanceNodeName?: SerializedInstanceNode["name"];
}) {
  return (
    <Banner variant="warning" icon={<IconWarning16 />}>
      <p className="font-bold mb-1">
        {closestInstanceNodeName
          ? "이 레이어는 인스턴스 내부에 있습니다."
          : "인스턴스 내부에 있는 레이어가 있습니다."}
      </p>
      <p className="mb-1">
        <span className="font-semibold">레이어 우클릭 → Go to main component</span> 기능으로 원본
        컴포넌트를 찾아 수정해야, 해당 컴포넌트의 다른 모든 인스턴스까지 수정됩니다.
      </p>
      {closestInstanceNodeName && (
        <p>
          원본 컴포넌트: <span className="font-semibold">{closestInstanceNodeName}</span>
        </p>
      )}
    </Banner>
  );
}
