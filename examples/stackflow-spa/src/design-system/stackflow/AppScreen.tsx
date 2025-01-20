import { AppScreen as SeedAppScreen, type AppScreenProps } from "@seed-design/stackflow";
import { PullToRefresh, usePullToRefreshContext } from "@seed-design/react/primitive";
import { useActions } from "@stackflow/react";
import { forwardRef } from "react";
import { theme } from "../../stackflow/theme";
import { ProgressCircle } from "../ui/progress-circle";

export const AppScreen = forwardRef<HTMLDivElement, AppScreenProps>(
  ({ children, onSwipeEnd, ...otherProps }, ref) => {
    const { pop } = useActions();

    return (
      <SeedAppScreen.Root
        ref={ref}
        onSwipeEnd={({ swiped }) => {
          if (swiped) {
            pop();
          }
          onSwipeEnd?.({ swiped });
        }}
        theme={theme}
        {...otherProps}
      >
        <SeedAppScreen.Dim />
        <PullToRefresh.Root>
          <PullToRefresh.Indicator render={(props) => <ProgressCircle {...props} />} />
          <SeedAppScreen.Layer>
            <PullToRefresh.Container>{children}</PullToRefresh.Container>
          </SeedAppScreen.Layer>
          <Debug />
        </PullToRefresh.Root>
        <SeedAppScreen.Edge />
      </SeedAppScreen.Root>
    );
  },
);
AppScreen.displayName = "AppScreen";

function Debug() {
  const { state } = usePullToRefreshContext();
  console.log(state);
  return null;
}
