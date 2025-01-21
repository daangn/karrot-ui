import type { ActivityComponentType } from "@stackflow/react";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import React from "react";
import { ErrorState, type ErrorStateProps } from "../design-system/ui/error-state";

const ActivityErrorState: ActivityComponentType = () => {
  const [variant, setVariant] = React.useState<ErrorStateProps["variant"]>("default");
  return (
    <AppScreen appBar={{}}>
      <ErrorState
        variant={variant}
        title="에러 타이틀"
        description="에러가 발생했습니다."
        primaryActionProps={{
          children: "다시 시도",
        }}
        secondaryActionProps={{
          children: variant === "default" ? "default로 전환" : "basement로 전환",
          onClick: () => setVariant((prev) => (prev === "default" ? "basement" : "default")),
        }}
      />
    </AppScreen>
  );
};

export default ActivityErrorState;
