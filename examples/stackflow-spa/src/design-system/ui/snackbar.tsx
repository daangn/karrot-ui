"use client";

import {
  Snackbar as SeedSnackbar,
  useSnackbarAdapter as useSeedSnackbarAdapter,
  useSnackbarContext,
} from "@seed-design/react";
import * as React from "react";

import IconCheckmarkCircleFill from "@daangn/react-monochrome-icon/IconCheckmarkCircleFill";
import IconExclamationmarkCircleFill from "@daangn/react-monochrome-icon/IconExclamationmarkCircleFill";
import "@seed-design/stylesheet/snackbar.css";

export interface SnackbarProviderProps extends SeedSnackbar.RootProviderProps {}

export const SnackbarProvider = (props: SnackbarProviderProps) => {
  const { children, ...otherProps } = props;
  return (
    <SeedSnackbar.RootProvider {...otherProps}>
      {children}
      <SeedSnackbar.Region>
        <SeedSnackbar.Renderer />
      </SeedSnackbar.Region>
      <Debug />
    </SeedSnackbar.RootProvider>
  );
};

const Debug = () => {
  const api = useSnackbarContext();
  console.log(api);
  return null;
};

export interface SnackbarProps extends SeedSnackbar.RootProps {
  message: string;

  actionLabel: string;

  onAction: () => void;

  /**
   * @default true
   */
  shouldCloseOnAction?: boolean;
}

export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      variant = "default",
      children,
      message,
      actionLabel,
      onAction,
      shouldCloseOnAction = true,
      ...otherProps
    },
    ref,
  ) => {
    const api = useSnackbarContext();
    if (!api.currentSnackbar) return;

    const handleAction: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      onAction();
      if (shouldCloseOnAction) {
        e.currentTarget.blur();
        api.dismiss();
      }
    };

    return (
      <SeedSnackbar.Root ref={ref} variant={variant} {...otherProps}>
        <SeedSnackbar.PrefixIcon
          svg={
            variant === "positive" ? (
              <IconCheckmarkCircleFill />
            ) : variant === "danger" ? (
              <IconExclamationmarkCircleFill />
            ) : null
          }
        />
        <SeedSnackbar.Message>{message}</SeedSnackbar.Message>
        <SeedSnackbar.ActionButton onClick={handleAction}>{actionLabel}</SeedSnackbar.ActionButton>
        <SeedSnackbar.CloseButton />
      </SeedSnackbar.Root>
    );
  },
);
Snackbar.displayName = "Snackbar";

export const useSnackbarAdapter = useSeedSnackbarAdapter;

export const SnackbarAvoidOverlap = SeedSnackbar.AvoidOverlap;
