"use client";

import { PullToRefresh } from "@seed-design/react/primitive";
import { AppScreen as SeedAppScreen } from "@seed-design/stackflow";
import { useActions } from "@stackflow/react";
import { forwardRef } from "react";
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

export interface AppScreenContentProps extends SeedAppScreen.LayerProps {
  ptr?: boolean;

  onPtrReady?: () => void;

  onPtrRefresh?: () => Promise<void>;
}

export const AppScreenContent = forwardRef<
  HTMLDivElement,
  AppScreenContentProps
>(({ children, ptr, onPtrReady, onPtrRefresh, ...otherProps }, ref) => {
  if (!ptr) {
    return (
      <SeedAppScreen.Layer ref={ref} {...otherProps}>
        {children}
      </SeedAppScreen.Layer>
    );
  }

  return (
    <PullToRefresh.Root
      asChild
      onPtrReady={onPtrReady}
      onPtrRefresh={onPtrRefresh}
    >
      <SeedAppScreen.Layer ref={ref} {...otherProps}>
        <PullToRefresh.Indicator>
          {(props) => <ProgressCircle tone="brand" {...props} />}
        </PullToRefresh.Indicator>
        <PullToRefresh.Content asChild>{children}</PullToRefresh.Content>
      </SeedAppScreen.Layer>
    </PullToRefresh.Root>
  );
});
