"use client";

import "@seed-design/stylesheet/snackbar.css";
import "@seed-design/stylesheet/snackbarRegion.css";

import {
  Snackbar as SeedSnackbar,
  useSnackbarAdapter as useSeedSnackbarAdapter,
  useSnackbarContext,
  type CreateSnackbarOptions as SeedCreateSnackbarOptions,
} from "@seed-design/react";
import * as React from "react";

import IconCheckmarkCircleFill from "@daangn/react-monochrome-icon/IconCheckmarkCircleFill";
import IconExclamationmarkCircleFill from "@daangn/react-monochrome-icon/IconExclamationmarkCircleFill";

export interface SnackbarProviderProps extends SeedSnackbar.RootProviderProps {}

export const SnackbarProvider = (props: SnackbarProviderProps) => {
  const { children, ...otherProps } = props;
  return (
    <SeedSnackbar.RootProvider {...otherProps}>
      {children}
      <SeedSnackbar.Region>
        <SeedSnackbar.Renderer />
      </SeedSnackbar.Region>
    </SeedSnackbar.RootProvider>
  );
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
        <SeedSnackbar.ActionButton onClick={handleAction}>
          {actionLabel}
        </SeedSnackbar.ActionButton>
        <SeedSnackbar.CloseButton />
      </SeedSnackbar.Root>
    );
  },
);
Snackbar.displayName = "Snackbar";

// TODO: re-export is ugly; should we namespace CreateSnackbarOptions into Snackbar?
export interface CreateSnackbarOptions extends SeedCreateSnackbarOptions {}

export const useSnackbarAdapter = useSeedSnackbarAdapter;

export const SnackbarAvoidOverlap = SeedSnackbar.AvoidOverlap;
