import clsx from "clsx";
import * as React from "react";

import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { callout, type CalloutVariantProps } from "@seed-design/css/recipes/callout";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";
import {
  DismissibleDismissButton,
  DismissibleRoot,
  type DismissibleRootProps,
} from "../private/useDismissible";

const { withContext, withProvider, useClassNames } = createStyleContext(callout);

export interface CalloutRootProps extends CalloutVariantProps, DismissibleRootProps {}

export const CalloutRoot = withProvider<HTMLDivElement, CalloutRootProps>(DismissibleRoot, "root");

export interface CalloutIconProps extends IconProps {}

export const CalloutIcon = withContext<SVGSVGElement, CalloutIconProps>(Icon, "icon");

export interface CalloutTextContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const CalloutTextContent = withContext<HTMLDivElement, CalloutTextContentProps>(
  Primitive.div,
  "textContent",
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

export const CalloutDismissButton = withContext<HTMLButtonElement, CalloutDismissButtonProps>(
  DismissibleDismissButton,
  "dismissButton",
);

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
