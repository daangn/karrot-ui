import clsx from "clsx";
import * as React from "react";

import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { callout, type CalloutVariantProps } from "@seed-design/recipe/callout";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";
import { useDismissibleContext } from "../../hooks/useDismissible";

const { withContext, withProvider, useClassNames } = createStyleContext(callout);

export interface CalloutRootProps
  extends CalloutVariantProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const CalloutRoot = withProvider<HTMLDivElement, CalloutRootProps>(Primitive.div, "root");

export interface CalloutIconProps extends IconProps {}

export const CalloutIcon = withContext<SVGSVGElement, CalloutIconProps>(Icon, "icon");

export interface CalloutTextContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const CalloutTextContent = React.forwardRef<HTMLDivElement, CalloutTextContentProps>(
  (props, ref) => {
    return <Primitive.div ref={ref} {...props} />;
  },
);

export interface CalloutTitleProps extends PrimitiveProps, React.HTMLAttributes<HTMLSpanElement> {}

export const CalloutTitle = React.forwardRef<HTMLSpanElement, CalloutTitleProps>(
  ({ className, ...otherProps }, ref) => {
    const classNames = useClassNames();

    return (
      <>
        <Primitive.span ref={ref} className={clsx(classNames.title, className)} {...otherProps} />
        <Primitive.span className={classNames.spacer}> </Primitive.span>
      </>
    );
  },
);
CalloutTitle.displayName = "CalloutTitle";

export interface CalloutDescriptionProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const CalloutDescription = withContext<HTMLSpanElement, CalloutDescriptionProps>(
  Primitive.span,
  "description",
);

export interface CalloutLinkProps
  extends PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CalloutLink = React.forwardRef<HTMLButtonElement, CalloutLinkProps>(
  ({ className, ...otherProps }, ref) => {
    const classNames = useClassNames();

    return (
      <>
        <Primitive.span className={classNames.spacer}> </Primitive.span>
        <Primitive.button
          ref={ref}
          className={clsx(classNames.linkLabel, className)}
          {...otherProps}
        />
      </>
    );
  },
);
CalloutLink.displayName = "CalloutLink";

export interface CalloutDismissButtonProps
  extends PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CalloutDismissButton = React.forwardRef<HTMLButtonElement, CalloutDismissButtonProps>(
  ({ className, onClick, ...otherProps }, ref) => {
    const classNames = useClassNames();
    const { handleDismiss } = useDismissibleContext();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
      (event) => {
        onClick?.(event);
        handleDismiss();
      },
      [handleDismiss, onClick],
    );

    return (
      <Primitive.button
        ref={ref}
        className={clsx(classNames.dismissButton, className)}
        onClick={handleClick}
        {...otherProps}
      />
    );
  },
);
CalloutDismissButton.displayName = "CalloutDismissButton";

export interface CalloutDismissIconProps extends IconProps {}

export const CalloutDismissIcon = withContext<SVGSVGElement, CalloutDismissIconProps>(
  Icon,
  "dismissIcon",
);

export interface CalloutActionableIconProps extends IconProps {}

export const CalloutActionableIcon = withContext<SVGSVGElement, CalloutActionableIconProps>(
  Icon,
  "actionableIcon",
);
