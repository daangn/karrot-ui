import { Slot } from "@radix-ui/react-slot";
import { type AppBarVariantProps, appBar } from "@seed-design/recipe/appBar";
import clsx from "clsx";
import { forwardRef } from "react";
import { AppBar as AppBarPrimitive } from "../../primitive";
import { useAppBarContext } from "../../primitive/AppBar/useAppBarContext";
import { createStyleContext } from "../../utils/createStyleContext";
import { mergeProps } from "@seed-design/dom-utils";
import { Primitive } from "@seed-design/react-primitive";

const { PropsProvider, withProvider, withContext, useClassNames } = createStyleContext(appBar);

export const AppBarPropsProvider = PropsProvider;

export interface AppBarProps extends AppBarVariantProps, AppBarPrimitive.RootProps {}

export const AppBarRoot = withProvider<HTMLDivElement, AppBarProps>(AppBarPrimitive.Root, "root");

export interface AppBarLeftProps extends AppBarPrimitive.LeftProps {}

export const AppBarLeft = withContext<HTMLDivElement, AppBarLeftProps>(
  AppBarPrimitive.Left,
  "left",
);

export interface AppBarRightProps extends AppBarPrimitive.RightProps {}

export const AppBarRight = withContext<HTMLDivElement, AppBarRightProps>(
  AppBarPrimitive.Right,
  "right",
);

export interface AppBarTitleProps extends AppBarPrimitive.TitleProps {}

export const AppBarTitle = withContext<HTMLDivElement, AppBarTitleProps>(
  AppBarPrimitive.Title,
  "title",
);

export interface AppBarTitleMainProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AppBarTitleMain = withContext<HTMLDivElement, AppBarTitleMainProps>(
  Primitive.div,
  "titleMain",
);

export interface AppBarTitleTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const AppBarTitleText = withContext<HTMLSpanElement, AppBarTitleTextProps>(
  Primitive.span,
  "titleText",
);

export interface AppBarSubtitleTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const AppBarSubtitleText = withContext<HTMLSpanElement, AppBarSubtitleTextProps>(
  Primitive.span,
  "subtitleText",
);

export interface AppBarIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const AppBarIconButton = forwardRef<HTMLButtonElement, AppBarIconButtonProps>(
  ({ children, className, ...otherProps }, ref) => {
    const { stateProps } = useAppBarContext();
    const classNames = useClassNames();

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(classNames.iconButton, className)}
        {...mergeProps(stateProps, otherProps)}
      >
        <Slot className={classNames.icon} {...stateProps}>
          {children}
        </Slot>
      </button>
    );
  },
);
AppBarIconButton.displayName = "IconButton";
