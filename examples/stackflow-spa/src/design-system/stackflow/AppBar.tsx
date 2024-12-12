import "@seed-design/stylesheet/topNavigation.css";

import { useActions } from "@stackflow/react";
import { createContext, forwardRef, useCallback, useContext, useRef } from "react";

import { IconChevronLeftLine, IconXmarkLine } from "@daangn/react-monochrome-icon";
import { topNavigation, type TopNavigationVariantProps } from "@seed-design/recipe/topNavigation";
import { useAppBarTitleMaxWidth, useNullableActivity } from "@stackflow/react-ui-core";
import clsx from "clsx";
import { useAppScreenContext } from "./AppScreen";

const StyleContext = createContext<ReturnType<typeof topNavigation> | null>(null);

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a AppBar");
  }

  return context;
}

export const BackButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, onClick, ...otherProps }, ref) => {
  const activity = useNullableActivity();
  const actions = useActions();
  const { dataProps } = useAppScreenContext();
  const classNames = useStyleContext();

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
    <button
      ref={ref}
      aria-label="Go Back"
      type="button"
      className={clsx(classNames.icon, className)}
      onClick={handleOnClick}
      {...dataProps}
      {...otherProps}
    >
      {children ?? <IconChevronLeftLine />}
    </button>
  );
});

BackButton.displayName = "BackButton";

export const CloseButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  const activity = useNullableActivity();
  const { dataProps } = useAppScreenContext();
  const classNames = useStyleContext();

  const isRoot = !activity || activity.isRoot;

  if (!isRoot) {
    return null;
  }

  return (
    <button
      ref={ref}
      aria-label="Close"
      type="button"
      className={clsx(classNames.icon, className)}
      {...dataProps}
      {...props}
    >
      {children ?? <IconXmarkLine />}
    </button>
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
  const { theme } = useAppScreenContext();
  const centerRef = useRef<HTMLDivElement>(null);
  const { maxWidth } = useAppBarTitleMaxWidth({
    outerRef: ref,
    innerRef: centerRef,
    enable: theme === "cupertino",
  });
  const { dataProps } = useAppScreenContext();
  const classNames = useStyleContext();

  return (
    <div ref={ref} className={clsx(classNames.title, className)} {...dataProps} {...otherProps}>
      <div className={classNames.titleMain} style={{ width: `${maxWidth}px` }} {...dataProps}>
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
          style={{ width: `${maxWidth}px` }}
          {...dataProps}
        />
      </div>
    </div>
  );
});

interface AppBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<TopNavigationVariantProps, "theme"> {}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
  ({ border = true, tone = "layer", children }, ref) => {
    const { theme, dataProps } = useAppScreenContext();

    const classNames = topNavigation({ theme, border, tone });

    return (
      <div ref={ref} className={classNames.root} {...dataProps}>
        <div className={classNames.safeArea} {...dataProps} />
        <div className={classNames.container} {...dataProps}>
          <StyleContext.Provider value={classNames}>{children}</StyleContext.Provider>
        </div>
      </div>
    );
  },
);

AppBar.displayName = "AppBar";
