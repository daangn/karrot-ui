"use client";

import {
  IconChevronLeftLine,
  IconXmarkLine,
} from "@daangn/react-monochrome-icon";
import {
  AppBar as SeedAppBar,
  AppScreen as SeedAppScreen,
} from "@seed-design/stackflow";
import { useActions, useActivity } from "@stackflow/react";
import { forwardRef, useCallback } from "react";

export type AppBarProps = SeedAppBar.RootProps;

export type AppScreenProps = SeedAppScreen.RootProps;

export const AppBar = SeedAppBar.Root;

export const Left = SeedAppBar.Left;

export const Right = SeedAppBar.Right;

export const Title = SeedAppBar.Title;

export const IconButton = SeedAppBar.IconButton;

export const BackButton = forwardRef<
  HTMLButtonElement,
  SeedAppBar.IconButtonProps
>(({ children = <IconChevronLeftLine />, onClick, ...otherProps }, ref) => {
  const activity = useActivity();
  const actions = useActions();

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      if (!e.defaultPrevented) {
        actions.pop();
      }
    },
    [actions],
  );

  if (!activity) {
    return null;
  }
  if (activity.isRoot) {
    return null;
  }

  return (
    <SeedAppBar.IconButton
      ref={ref}
      aria-label="Go Back"
      type="button"
      onClick={handleOnClick}
      {...otherProps}
    >
      {children}
    </SeedAppBar.IconButton>
  );
});
BackButton.displayName = "BackButton";

export const CloseButton = forwardRef<
  HTMLButtonElement,
  SeedAppBar.IconButtonProps
>(({ children = <IconXmarkLine />, onClick, ...otherProps }, ref) => {
  const activity = useActivity();

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      if (!e.defaultPrevented) {
        // you can do something here
      }
    },
    [],
  );

  const isRoot = !activity || activity.isRoot;

  if (!isRoot) {
    return null;
  }

  return (
    <IconButton
      ref={ref}
      aria-label="Close"
      type="button"
      onClick={handleOnClick}
      {...otherProps}
    >
      {children}
    </IconButton>
  );
});
CloseButton.displayName = "CloseButton";

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
