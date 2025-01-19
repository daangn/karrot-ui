import { AppScreen as SeedAppScreen, type AppScreenProps } from "@seed-design/stackflow";
import { useActions } from "@stackflow/react";
import { forwardRef } from "react";
import { theme } from "../../stackflow/theme";

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
        <SeedAppScreen.Layer>{children}</SeedAppScreen.Layer>
        <SeedAppScreen.Edge />
      </SeedAppScreen.Root>
    );
  },
);
AppScreen.displayName = "AppScreen";
