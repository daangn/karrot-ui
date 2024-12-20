"use client";

import { Slot } from "@radix-ui/react-slot";
import { useAvatar, type UseAvatarProps } from "@seed-design/react-avatar";
import { avatar, type AvatarVariantProps } from "@seed-design/recipe/avatar";
import clsx from "clsx";
import * as React from "react";

import "@seed-design/stylesheet/avatar.css";
import { createStyleContext } from "../util/createStyleContext";

const { rootSlot, childSlot } = createStyleContext(avatar);

const UseAvatarContext = React.createContext<ReturnType<
  typeof useAvatar
> | null>(null);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AvatarVariantProps,
    UseAvatarProps {
  asChild?: boolean;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { className, size = "36", children, asChild = false, ...otherProps },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";
    const { classNames, StyleProvider } = rootSlot({ size });
    const api = useAvatar({ ...otherProps });
    return (
      <Comp
        ref={ref}
        className={clsx(classNames.root, className)}
        {...api.rootProps}
        {...api.restProps}
      >
        <StyleProvider>
          <UseAvatarContext.Provider value={api}>
            {children}
          </UseAvatarContext.Provider>
        </StyleProvider>
      </Comp>
    );
  },
);
Avatar.displayName = "Avatar";

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  asChild?: boolean;
}

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  (props, ref) => {
    const { asChild = false, className, src, ...otherProps } = props;

    const Comp = asChild ? Slot : "img";
    const { classNames } = childSlot();
    const { getImageProps } = React.useContext(UseAvatarContext)!;
    const imageProps = getImageProps({ src });

    return (
      <Comp
        ref={ref}
        className={clsx(classNames.image, className)}
        {...imageProps}
        {...otherProps}
      />
    );
  },
);
AvatarImage.displayName = "AvatarImage";

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  AvatarFallbackProps
>((props, ref) => {
  const { asChild = false, className, ...otherProps } = props;

  const Comp = asChild ? Slot : "div";
  const { classNames } = childSlot();
  const { fallbackProps } = React.useContext(UseAvatarContext)!;
  return (
    <Comp
      ref={ref}
      className={clsx(classNames.fallback, className)}
      {...fallbackProps}
      {...otherProps}
    />
  );
});
AvatarFallback.displayName = "AvatarFallback";

export interface AvatarBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const AvatarBadge = React.forwardRef<HTMLDivElement, AvatarBadgeProps>(
  (props, ref) => {
    const { asChild = false, className, ...otherProps } = props;

    const Comp = asChild ? Slot : "div";
    const { classNames } = childSlot();
    return (
      <Comp
        ref={ref}
        className={clsx(classNames.badge, className)}
        {...otherProps}
      />
    );
  },
);
AvatarBadge.displayName = "AvatarBadge";
