import { composeRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { type TopNavigationVariantProps, topNavigation } from "@seed-design/recipe/topNavigation";
import { useAppBarTitleMaxWidth } from "@stackflow/react-ui-core";
import clsx from "clsx";
import { createContext, forwardRef, useContext, useMemo, useRef } from "react";
import { useAppScreenContext } from "./primitive/useAppScreen";

const StyleContext = createContext<ReturnType<typeof topNavigation> | null>(null);

function useStyleContext() {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a AppBar");
  }

  return context;
}

export interface AppBarIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const AppBarIconButton = forwardRef<HTMLButtonElement, AppBarIconButtonProps>(
  ({ children, className, ...props }, ref) => {
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
  },
);
AppBarIconButton.displayName = "IconButton";

export interface AppBarLeftProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppBarLeft = forwardRef<HTMLDivElement, AppBarLeftProps>(
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
AppBarLeft.displayName = "AppBarLeft";

export interface AppBarRightProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppBarRight = forwardRef<HTMLDivElement, AppBarRightProps>(
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
AppBarRight.displayName = "AppBarRight";

export interface AppBarTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppBarTitle = forwardRef<HTMLDivElement, AppBarTitleProps>(
  ({ children, className, ...otherProps }, ref) => {
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
        ref={composeRefs(ref, innerRef)}
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
            <Slot className={classNames.titleText} {...dataProps}>
              {children}
            </Slot>
          )}
          <button
            type="button"
            className={classNames.titleEdge}
            style={{ width: maxWidth ? `${maxWidth}px` : undefined }}
            {...appBarEdgeProps}
          />
        </div>
      </div>
    );
  },
);
AppBarTitle.displayName = "AppBarTitle";

export interface AppBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<TopNavigationVariantProps, "theme"> {}

export const AppBarRoot = forwardRef<HTMLDivElement, AppBarProps>(
  ({ border = true, tone = "layer", children, ...otherProps }, ref) => {
    const { theme, refs, dataProps } = useAppScreenContext();

    const classNames = useMemo(() => topNavigation({ theme, border, tone }), [theme, border, tone]);

    return (
      <div
        ref={composeRefs(ref, refs.appBar)}
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
AppBarRoot.displayName = "AppBarRoot";
