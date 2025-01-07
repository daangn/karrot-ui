import "@seed-design/stylesheet/appScreen.css";

import { AppScreen as SeedAppScreen, type AppScreenProps } from "@seed-design/stackflow";
import { useActions } from "@stackflow/react";
import { forwardRef } from "react";
import { flushSync } from "react-dom";

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
        <SeedAppScreen.Layer>{children}</SeedAppScreen.Layer>
        <SeedAppScreen.Edge />
      </SeedAppScreen.Root>
    );
  },
);
AppScreen.displayName = "AppScreen";
