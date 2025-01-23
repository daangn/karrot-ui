import type { ActivityComponentType } from "@stackflow/react";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import React from "react";
import { ErrorState, type ErrorStateProps } from "../design-system/ui/error-state";

const ActivityErrorState: ActivityComponentType = () => {
  const [variant, setVariant] = React.useState<ErrorStateProps["variant"]>("default");
  const [hideTitle, setHideTitle] = React.useState(false);
  return (
    <AppScreen appBar={{}}>
      <ErrorState
        variant={variant}
        title={hideTitle ? undefined : "에러 타이틀"}
        description="에러가 발생했습니다."
        primaryActionProps={{
          children: hideTitle ? "타이틀 보이기" : "타이틀 숨기기",
          onClick: () => setHideTitle((prev) => !prev),
        }}
        secondaryActionProps={{
          children: variant === "basement" ? "default로 전환" : "basement로 전환",
          onClick: () => setVariant((prev) => (prev === "default" ? "basement" : "default")),
        }}
      />
    </AppScreen>
  );
};

export default ActivityErrorState;
