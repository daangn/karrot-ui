import type { ActivityComponentType } from "@stackflow/react";

import React from "react";
import { AppScreen, AppScreenContent } from "../design-system/stackflow/AppScreen";
import { ErrorState, type ErrorStateProps } from "../design-system/ui/error-state";
import { AppBar, AppBarLeft, AppBarTitle, BackButton } from "../design-system/stackflow/AppBar";

const ActivityErrorState: ActivityComponentType = () => {
  const [variant, setVariant] = React.useState<ErrorStateProps["variant"]>("default");
  const [hideAppBarTitle, setHideAppBarTitle] = React.useState(false);
  return (
    <AppScreen>
      <AppBar>
        <AppBarLeft>
          <BackButton />
        </AppBarLeft>
        <AppBarTitle>Error State</AppBarTitle>
      </AppBar>
      <AppScreenContent>
        <ErrorState
          variant={variant}
          title={hideAppBarTitle ? undefined : "에러 타이틀"}
          description="에러가 발생했습니다."
          primaryActionProps={{
            children: hideAppBarTitle ? "타이틀 보이기" : "타이틀 숨기기",
            onClick: () => setHideAppBarTitle((prev) => !prev),
          }}
          secondaryActionProps={{
            children: variant === "basement" ? "default로 전환" : "basement로 전환",
            onClick: () => setVariant((prev) => (prev === "default" ? "basement" : "default")),
          }}
        />
      </AppScreenContent>
    </AppScreen>
  );
};

export default ActivityErrorState;
