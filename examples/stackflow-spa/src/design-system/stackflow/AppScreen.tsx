import "@seed-design/stylesheet/screen.css";

import { AppScreen as SeedAppScreen, type AppScreenProps } from "@seed-design/stackflow";
import { forwardRef } from "react";

export const AppScreen = forwardRef<HTMLDivElement, AppScreenProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <SeedAppScreen.Root ref={ref} {...otherProps}>
        <SeedAppScreen.Dim />
        <SeedAppScreen.Layer>{children}</SeedAppScreen.Layer>
        <SeedAppScreen.Edge />
      </SeedAppScreen.Root>
    );
  },
);
AppScreen.displayName = "AppScreen";
