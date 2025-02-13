import { h } from "preact";
import { LoadingIndicator as Spinner } from "@create-figma-plugin/ui";

export function LoadingIndicator() {
  return (
    <div className="flex flex-col grow items-center justify-center gap-8">
      <Spinner />
      <div className="flex flex-col font-medium text-neutral-800 items-center gap-1">
        <p>레이어가 많은 경우 시간이 오래 걸릴 수 있습니다.</p>
        <p>화면 하나를 검사하는 경우 일반적으로 5-10초 안에 결과가 표시됩니다.</p>
        <p>이 창이 오랫동안 열려 있는 경우, 플러그인을 닫고 다시 열어주세요.</p>
      </div>
    </div>
  );
}
