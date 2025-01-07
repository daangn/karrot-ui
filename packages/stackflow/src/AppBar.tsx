import { composeRefs } from "@radix-ui/react-compose-refs";
import { Slot } from "@radix-ui/react-slot";
import { type AppBarVariantProps, appBar } from "@seed-design/recipe/appBar";
import { useAppBarTitleMaxWidth } from "@stackflow/react-ui-core";
import clsx from "clsx";
import { createContext, forwardRef, useContext, useMemo, useRef } from "react";
import { useAppScreenContext } from "./primitive/useAppScreen";

export const PropsContext = createContext<Partial<AppBarProps> | null>(null);

export const PropsProvider = PropsContext.Provider;

function usePropsContext() {
  const context = useContext(PropsContext);
  if (!context) {
    throw new Error("usePropsContext must be used within a AppBar");
  }

  return context;
}

const StyleContext = createContext<ReturnType<typeof appBar> | null>(null);

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
    const { stateProps } = useAppScreenContext();
    const classNames = useStyleContext();

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(classNames.iconButton, className)}
        {...stateProps}
        {...props}
      >
        <Slot className={classNames.icon} {...stateProps}>
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
    const { stateProps } = useAppScreenContext();

    return (
      <div ref={ref} className={clsx(classNames.left, className)} {...stateProps} {...otherProps}>
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
    const { stateProps } = useAppScreenContext();

    return (
      <div ref={ref} className={clsx(classNames.right, className)} {...stateProps} {...otherProps}>
        {children}
      </div>
    );
  },
);
AppBarRight.displayName = "AppBarRight";

export interface AppBarTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppBarTitle = forwardRef<HTMLDivElement, AppBarTitleProps>(
  ({ children, className, ...otherProps }, ref) => {
    const { stateProps, appBarEdgeProps, refs } = useAppScreenContext();
    const innerRef = useRef<HTMLDivElement>(null);
    const { maxWidth } = useAppBarTitleMaxWidth({
      outerRef: refs.appBar,
      innerRef: innerRef,
      enable: true,
    });
    const classNames = useStyleContext();

    return (
      <div
        ref={composeRefs(ref, innerRef)}
        className={clsx(classNames.title, className)}
        {...stateProps}
        {...otherProps}
      >
        <div
          className={classNames.titleMain}
          style={{ width: maxWidth ? `${maxWidth}px` : undefined }}
          {...stateProps}
        >
          {typeof children === "string" ? (
            <div className={classNames.titleText} {...stateProps}>
              {children}
            </div>
          ) : (
            <Slot className={classNames.titleText} {...stateProps}>
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

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement>, AppBarVariantProps {}

export const AppBarRoot = forwardRef<HTMLDivElement, AppBarProps>(
  ({ theme, border, tone, children, ...otherProps }, ref) => {
    const props = usePropsContext();
    const { refs, stateProps } = useAppScreenContext();

    const classNames = useMemo(
      () =>
        appBar({
          theme: theme ?? props.theme,
          border: border ?? props.border,
          tone: tone ?? props.tone,
        }),
      [theme, border, tone, props],
    );

    return (
      <div
        ref={composeRefs(ref, refs.appBar)}
        className={classNames.root}
        {...stateProps}
        {...otherProps}
      >
        <div className={classNames.safeArea} {...stateProps} />
        <div className={classNames.container} {...stateProps}>
          <StyleContext.Provider value={classNames}>{children}</StyleContext.Provider>
        </div>
      </div>
    );
  },
);
AppBarRoot.displayName = "AppBarRoot";
