import { Fragment, h } from "preact";

import { Button } from "@create-figma-plugin/ui";
import { copy } from "../../utils/copy";
import { useMigration } from "../context";
import { useComponentsContext } from "./context";
import { emit } from "@create-figma-plugin/utilities";

import type { NotifyEventHandler } from "../../types";
import { useFigmaMetadata } from "@/shared/contexts/FigmaMetadataProvider";
import { createFigmaLink } from "../../utils/link";

export function DoneBanner() {
  const { oldComponents, swapResults } = useComponentsContext();
  const figmaMetadata = useFigmaMetadata();

  const { showNextStep, targets } = useMigration();

  if (oldComponents.length > 0) return null;

  const hasError = Object.values(swapResults).some((result) => !result.ok);
  const errorLength = Object.values(swapResults).filter((result) => !result.ok).length;
  const successLength = Object.values(swapResults).filter((result) => result.ok).length;
  const filterOnlyErrorSwapResults = Object.entries(swapResults).filter(
    ([_, result]) => !result.ok,
  );

  const handleCopyError = () => {
    const data = {
      errors: filterOnlyErrorSwapResults,
      userName: figmaMetadata?.currentUser.name,
      rootName: figmaMetadata?.currentRoot.name,
      pageName: figmaMetadata?.currentPage.name,
      figmaLink: createFigmaLink({
        fileKey: figmaMetadata?.fileKey ?? "",
        rootName: encodeURIComponent(figmaMetadata?.currentRoot.name ?? ""),
        nodeId: targets[0].id,
      }),
    };

    const formattedString = JSON.stringify(data, null, 2);
    copy(formattedString);
    emit<NotifyEventHandler>("NOTIFY", { message: "에러 메세지 복사 완료" });
  };

  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-neutral-800 text-white z-10 p-5 rounded-xl shadow flex flex-col gap-2">
      <p className="text-center text-[10px]">
        {hasError
          ? `${errorLength}개 교체 실패. ${successLength}개 교체 성공.`
          : Object.keys(swapResults).length > 0
            ? `${successLength}개 컴포넌트가 교체되었습니다.`
            : "교체할 컴포넌트가 없어요."}
      </p>

      {hasError && (
        <Fragment>
          <span className="text-[10px]">
            메세지를 복사해서{" "}
            <a
              href="https://daangn.slack.com/archives/C05Q5KU34AK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              _design-core
            </a>{" "}
            채널에 `@june.jung`을 호출하고 해당 메세지를 붙여 넣어주세요.
          </span>
          <Button danger fullWidth onClick={handleCopyError}>
            에러 메세지 복사하기
          </Button>
        </Fragment>
      )}

      <Button fullWidth onClick={showNextStep}>
        다음 단계로
      </Button>
    </div>
  );
}
