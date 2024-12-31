import { Avatar as AvatarPrimitive, useAvatarContext } from "@seed-design/react-avatar";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import { avatar, type AvatarVariantProps } from "@seed-design/recipe/avatar";
import { avatarStack, type AvatarStackVariantProps } from "@seed-design/recipe/avatarStack";
import clsx from "clsx";
import * as React from "react";
import { useMemo } from "react";
import { createStyleContext } from "../utils/createStyleContext";

const { ClassNamesProvider, PropsProvider, useClassNames, useProps } = createStyleContext(avatar);

////////////////////////////////////////////////////////////////////////////////////

export interface AvatarRootProps extends AvatarVariantProps, AvatarPrimitive.RootProps {}

export const AvatarRoot = React.forwardRef<HTMLDivElement, AvatarRootProps>(
  ({ className, size, ...otherProps }, ref) => {
    const contextProps = useProps();
    const classNames = avatar({ size: contextProps?.size ?? size });

    return (
      <ClassNamesProvider value={classNames}>
        <AvatarPrimitive.Root
          ref={ref}
          className={clsx(classNames.root, className)}
          {...otherProps}
        />
      </ClassNamesProvider>
    );
  },
);
AvatarRoot.displayName = "AvatarRoot";

////////////////////////////////////////////////////////////////////////////////////

export interface AvatarImageProps extends AvatarPrimitive.ImageProps {}

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>((props, ref) => {
  const { className, ...otherProps } = props;
  const classNames = useClassNames();

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={clsx(classNames.image, className)}
      {...otherProps}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

////////////////////////////////////////////////////////////////////////////////////

export interface AvatarFallbackProps extends AvatarPrimitive.FallbackProps {}

export const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  (props, ref) => {
    const { className, ...otherProps } = props;
    const classNames = useClassNames();

    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={clsx(classNames.fallback, className)}
        {...otherProps}
      />
    );
  },
);
AvatarFallback.displayName = "AvatarFallback";

////////////////////////////////////////////////////////////////////////////////////

export interface AvatarBadgeProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const AvatarBadge = React.forwardRef<HTMLDivElement, AvatarBadgeProps>((props, ref) => {
  const { className, ...otherProps } = props;
  const classNames = useClassNames();
  const { stateProps } = useAvatarContext();

  return (
    <Primitive.div
      ref={ref}
      className={clsx(classNames.badge, className)}
      {...stateProps}
      {...otherProps}
    />
  );
});
AvatarBadge.displayName = "AvatarBadge";

////////////////////////////////////////////////////////////////////////////////////

export interface AvatarStackProps
  extends AvatarStackVariantProps,
    React.HTMLAttributes<HTMLDivElement> {}

// TODO: implement stacking order
export const AvatarStack = React.forwardRef<HTMLDivElement, AvatarStackProps>(
  ({ className, children, size, ...otherProps }, ref) => {
    const classNames = avatarStack({ size });
    const avatars = React.Children.toArray(children);
    return (
      <PropsProvider value={useMemo(() => ({ size }), [size])}>
        <div ref={ref} className={clsx(classNames.root, className)} {...otherProps}>
          {avatars.map((avatar, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: There is no unique key for each child
            <div key={index} className={classNames.item}>
              {avatar}
            </div>
          ))}
        </div>
      </PropsProvider>
    );
  },
);
