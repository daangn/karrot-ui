import { PullToRefresh, usePullToRefreshContext } from "@seed-design/react/primitive";
import { AppScreen as SeedAppScreen } from "@seed-design/stackflow";
import { useActions } from "@stackflow/react";
import { forwardRef } from "react";
import { theme } from "../../stackflow/theme";
import { ProgressCircle } from "../ui/progress-circle";

export interface AppScreenProps extends SeedAppScreen.RootProps {}

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
        {children}
        <SeedAppScreen.Edge />
      </SeedAppScreen.Root>
    );
  },
);
AppScreen.displayName = "AppScreen";

export interface AppScreenContentProps extends SeedAppScreen.LayerProps {}

export const AppScreenContent = forwardRef<HTMLDivElement, AppScreenContentProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <PullToRefresh.Root>
        <SeedAppScreen.Layer ref={ref} {...otherProps}>
          <PullToRefresh.Indicator>
            {(props) => <ProgressCircle tone="brand" {...props} />}
          </PullToRefresh.Indicator>
          <PullToRefresh.Container style={{ height: "100%" }}>{children}</PullToRefresh.Container>
        </SeedAppScreen.Layer>
        <Debug />
      </PullToRefresh.Root>
    );
  },
);

function Debug() {
  const { state } = usePullToRefreshContext();
  console.log(state);
  return null;
}
