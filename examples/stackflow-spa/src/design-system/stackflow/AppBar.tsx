import "@seed-design/stylesheet/topNavigation.css";

import IconChevronLeftLine from "@daangn/react-monochrome-icon/IconChevronLeftLine";
import IconXmarkLine from "@daangn/react-monochrome-icon/IconXmarkLine";
import { Slot } from "@radix-ui/react-slot";
import { topNavigation, type TopNavigationVariantProps } from "@seed-design/recipe/topNavigation";
import { useActions } from "@stackflow/react";
import { useAppBarTitleMaxWidth, useNullableActivity } from "@stackflow/react-ui-core";
import clsx from "clsx";
import { createContext, forwardRef, useCallback, useContext, useRef } from "react";

import { mergeRefs } from "../util/mergeRefs";
import { useAppScreenContext } from "./useAppScreen";

const StyleContext = createContext<ReturnType<typeof topNavigation> | null>(null);

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a AppBar");
  }

  return context;
}

export const IconButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children = <IconXmarkLine />, className, ...props }, ref) => {
  const { dataProps } = useAppScreenContext();
  const classNames = useStyleContext();

  return (
    <button
      ref={ref}
      type="button"
      className={clsx(classNames.iconButton, className)}
      {...dataProps}
      {...props}
    >
      <Slot className={classNames.icon} {...dataProps}>
        {children}
      </Slot>
    </button>
  );
});

IconButton.displayName = "IconButton";

export const BackButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children = <IconChevronLeftLine />, onClick, ...otherProps }, ref) => {
  const activity = useNullableActivity();
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
    <IconButton
      ref={ref}
      aria-label="Go Back"
      type="button"
      onClick={handleOnClick}
      {...otherProps}
    >
      {children}
    </IconButton>
  );
});

BackButton.displayName = "BackButton";

export const CloseButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children = <IconXmarkLine />, ...props }, ref) => {
  const activity = useNullableActivity();

  const isRoot = !activity || activity.isRoot;

  if (!isRoot) {
    return null;
  }

  return (
    <IconButton ref={ref} aria-label="Close" type="button" {...props}>
      {children}
    </IconButton>
  );
});

CloseButton.displayName = "CloseButton";

export const Left = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...otherProps }, ref) => {
    const classNames = useStyleContext();
    const { dataProps } = useAppScreenContext();

    return (
      <div ref={ref} className={clsx(classNames.left, className)} {...dataProps} {...otherProps}>
        {children}
      </div>
    );
  },
);

export const Right = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...otherProps }, ref) => {
    const classNames = useStyleContext();
    const { dataProps } = useAppScreenContext();

    return (
      <div ref={ref} className={clsx(classNames.right, className)} {...dataProps} {...otherProps}>
        {children}
      </div>
    );
  },
);

export const Title = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onTopClick?: (e: React.MouseEvent) => void;
  }
>(({ children, onTopClick, className, ...otherProps }, ref) => {
  const { theme, dataProps, appBarEdgeProps, refs } = useAppScreenContext();
  const innerRef = useRef<HTMLDivElement>(null);
  const { maxWidth } = useAppBarTitleMaxWidth({
    outerRef: refs.appBar,
    innerRef: innerRef,
    enable: theme === "cupertino",
  });
  const classNames = useStyleContext();

  return (
    <div
      ref={mergeRefs(ref, innerRef)}
      className={clsx(classNames.title, className)}
      {...dataProps}
      {...otherProps}
    >
      <div
        className={classNames.titleMain}
        style={{ width: maxWidth ? `${maxWidth}px` : undefined }}
        {...dataProps}
      >
        {typeof children === "string" ? (
          <div className={classNames.titleText} {...dataProps}>
            {children}
          </div>
        ) : (
          children
        )}
        <button
          type="button"
          onClick={onTopClick}
          className={classNames.titleEdge}
          style={{ width: maxWidth ? `${maxWidth}px` : undefined }}
          {...appBarEdgeProps}
        />
      </div>
    </div>
  );
});

interface AppBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<TopNavigationVariantProps, "theme"> {}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
  ({ border = true, tone = "layer", children, ...otherProps }, ref) => {
    const { theme, refs, dataProps } = useAppScreenContext();

    const classNames = topNavigation({ theme, border, tone });

    return (
      <div
        ref={mergeRefs(ref, refs.appBar)}
        className={classNames.root}
        {...dataProps}
        {...otherProps}
      >
        <div className={classNames.safeArea} {...dataProps} />
        <div className={classNames.container} {...dataProps}>
          <StyleContext.Provider value={classNames}>{children}</StyleContext.Provider>
        </div>
      </div>
    );
  },
);

AppBar.displayName = "AppBar";
