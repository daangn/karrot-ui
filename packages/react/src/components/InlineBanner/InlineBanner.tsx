import clsx from "clsx";
import * as React from "react";

import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { inlineBanner, type InlineBannerVariantProps } from "@seed-design/recipe/inline-banner";
import { createStyleContext } from "../../utils/createStyleContext";
import { Icon, type IconProps } from "../private/Icon";
import {
  DismissibleDismissButton,
  DismissibleRoot,
  type DismissibleRootProps,
} from "../private/useDismissible";

const { withContext, withProvider, useClassNames } = createStyleContext(inlineBanner);

export interface InlineBannerRootProps extends InlineBannerVariantProps, DismissibleRootProps {}

export const InlineBannerRoot = withProvider<HTMLDivElement, InlineBannerRootProps>(
  DismissibleRoot,
  "root",
);

export interface InlineBannerContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const InlineBannerContent = withContext<HTMLDivElement, InlineBannerContentProps>(
  Primitive.div,
  "content",
);

export interface InlineBannerIconProps extends IconProps {}

export const InlineBannerIcon = withContext<SVGSVGElement, InlineBannerIconProps>(Icon, "icon");

export interface InlineBannerTextContentProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const InlineBannerTextContent = React.forwardRef<
  HTMLDivElement,
  InlineBannerTextContentProps
>((props, ref) => {
  return <Primitive.div ref={ref} {...props} />;
});
InlineBannerTextContent.displayName = "InlineBannerTextContent";

export interface InlineBannerTitleProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const InlineBannerTitle = React.forwardRef<HTMLSpanElement, InlineBannerTitleProps>(
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
InlineBannerTitle.displayName = "InlineBannerTitle";

export interface InlineBannerDescriptionProps
  extends PrimitiveProps,
    React.HTMLAttributes<HTMLSpanElement> {}

export const InlineBannerDescription = withContext<HTMLSpanElement, InlineBannerDescriptionProps>(
  Primitive.span,
  "description",
);

export interface InlineBannerLinkProps
  extends PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InlineBannerLink = withContext<HTMLButtonElement, InlineBannerLinkProps>(
  Primitive.button,
  "linkLabel",
);

export interface InlineBannerDismissButtonProps
  extends PrimitiveProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InlineBannerDismissButton = withContext<
  HTMLButtonElement,
  InlineBannerDismissButtonProps
>(DismissibleDismissButton, "dismissButton");

export interface InlineBannerDismissIconProps extends IconProps {}

export const InlineBannerDismissIcon = withContext<SVGSVGElement, InlineBannerDismissIconProps>(
  Icon,
  "dismissIcon",
);

export interface InlineBannerActionableIconProps extends IconProps {}

export const InlineBannerActionableIcon = withContext<
  SVGSVGElement,
  InlineBannerActionableIconProps
>(Icon, "actionableIcon");
