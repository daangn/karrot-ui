import { Slot } from "@radix-ui/react-slot";
import { mergeProps } from "@seed-design/dom-utils";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { type AppBarVariantProps, appBar } from "@seed-design/recipe/appBar";
import clsx from "clsx";
import { forwardRef } from "react";
import { AppBar as AppBarPrimitive } from "../../primitive";
import { useAppBarContext } from "../../primitive/AppBar/useAppBarContext";
import { createStyleContext } from "../../utils/createStyleContext";

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

export interface AppBarTitleMainProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const AppBarTitleMain = withContext<HTMLDivElement, AppBarTitleMainProps>(
  Primitive.div,
  "titleMain",
);

export interface AppBarTitleTextProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const AppBarTitleText = withContext<HTMLSpanElement, AppBarTitleTextProps>(
  Primitive.span,
  "titleText",
);

export interface AppBarSubtitleTextProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const AppBarSubtitleText = withContext<HTMLSpanElement, AppBarSubtitleTextProps>(
  Primitive.span,
  "subtitleText",
);

export interface AppBarIconButtonProps
  extends PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const AppBarIconButton = forwardRef<HTMLButtonElement, AppBarIconButtonProps>(
  ({ children, className, ...otherProps }, ref) => {
    const { stateProps } = useAppBarContext();
    const classNames = useClassNames();

    return (
      <Primitive.button
        ref={ref}
        type="button"
        className={clsx(classNames.iconButton, className)}
        {...mergeProps(stateProps, otherProps)}
      >
        <Slot className={classNames.icon} {...stateProps}>
          {children}
        </Slot>
      </Primitive.button>
    );
  },
);
AppBarIconButton.displayName = "IconButton";
