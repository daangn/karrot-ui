import { IconChevronLeftLine, IconXmarkLine } from "@daangn/react-monochrome-icon";
import { AppBar as SeedAppBar, type AppBarIconButtonProps } from "@seed-design/stackflow";
import { useActions, useActivity } from "@stackflow/react";
import { forwardRef } from "react";

export const AppBar = SeedAppBar.Root;

export const Left = SeedAppBar.Left;

export const Right = SeedAppBar.Right;

export const Title = SeedAppBar.Title;

export const IconButton = SeedAppBar.IconButton;

export const BackButton = forwardRef<HTMLButtonElement, AppBarIconButtonProps>(
  ({ children = <IconChevronLeftLine />, onClick, ...otherProps }, ref) => {
    const activity = useActivity();
    const actions = useActions();

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      if (!e.defaultPrevented) {
        actions.pop();
      }
    };

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
  },
);
BackButton.displayName = "BackButton";

export const CloseButton = forwardRef<HTMLButtonElement, AppBarIconButtonProps>(
  ({ children = <IconXmarkLine />, onClick, ...otherProps }, ref) => {
    const activity = useActivity();

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);

      if (!e.defaultPrevented) {
        // you can do something here
      }
    };

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
  },
);
CloseButton.displayName = "CloseButton";
