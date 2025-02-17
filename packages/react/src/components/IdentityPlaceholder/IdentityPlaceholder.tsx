import {
  identityPlaceholder,
  type IdentityPlaceholderVariantProps,
} from "@seed-design/css/recipes/identity-placeholder";
import { mergeProps } from "@seed-design/dom-utils";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import * as React from "react";
import { createStyleContext } from "../../utils/createStyleContext";

const { useClassNames, withProvider } = createStyleContext(identityPlaceholder);

export interface IdentityPlaceholderRootProps
  extends IdentityPlaceholderVariantProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const IdentityPlaceholderRoot = withProvider<HTMLDivElement, IdentityPlaceholderRootProps>(
  Primitive.div,
  "root",
);

export interface IdentityPlaceholderImageProps extends React.SVGProps<SVGSVGElement> {}

export const IdentityPlaceholderImage = React.forwardRef<
  SVGSVGElement,
  IdentityPlaceholderImageProps
>((props, ref) => {
  const classNames = useClassNames();
  return (
    <svg
      ref={ref}
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Identity placeholder"
      {...mergeProps({ className: classNames.image }, props)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M481 301c0 56-29 106-72 135a264 264 0 0 1 175 248c0 18-118 38-264 38S56 702 56 684c0-114 73-211 174-248a162 162 0 1 1 251-135Zm-203-1c8 0 14-9 14-20s-6-20-14-20-15 9-15 20 7 20 15 20Zm83 0c8 0 15-9 15-20s-7-20-15-20-15 9-15 20 7 20 15 20Zm-88 25c4-2 9-1 11 4 4 7 15 19 36 19s32-12 36-19a8 8 0 1 1 15 8c-7 12-23 27-51 27s-44-15-50-27c-3-5-1-10 3-12Z"
      />
    </svg>
  );
});
IdentityPlaceholderImage.displayName = "IdentityPlaceholderImage";
