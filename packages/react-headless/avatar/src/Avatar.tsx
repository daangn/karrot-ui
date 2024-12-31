import { composeRefs } from "@radix-ui/react-compose-refs";
import { Primitive, type PrimitiveProps } from "@seed-design/react-primitive";
import type * as React from "react";
import { forwardRef } from "react";
import { useAvatar, type UseAvatarProps } from "./useAvatar";
import { AvatarProvider, useAvatarContext } from "./useAvatarContext";

export interface AvatarRootProps
  extends UseAvatarProps,
    PrimitiveProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const AvatarRoot = forwardRef<HTMLDivElement, AvatarRootProps>(
  ({ asChild = false, ...otherProps }, ref) => {
    const api = useAvatar({ ...otherProps });
    return (
      <AvatarProvider value={api}>
        <Primitive.div ref={ref} {...api.rootProps} {...api.restProps} />
      </AvatarProvider>
    );
  },
);
AvatarRoot.displayName = "AvatarRoot";

export interface AvatarImageProps
  extends PrimitiveProps,
    React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>((props, ref) => {
  const { src, onLoad, onError, ...otherProps } = props;

  const { refs, getImageProps } = useAvatarContext();
  const imageProps = getImageProps({ src, onLoad, onError });

  return <Primitive.img ref={composeRefs(refs.image, ref)} {...imageProps} {...otherProps} />;
});
AvatarImage.displayName = "AvatarImage";

export interface AvatarFallbackProps extends PrimitiveProps, React.HTMLAttributes<HTMLDivElement> {}

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>((props, ref) => {
  const { fallbackProps } = useAvatarContext();
  return <Primitive.div ref={ref} {...fallbackProps} {...props} />;
});
AvatarFallback.displayName = "AvatarFallback";
