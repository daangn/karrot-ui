import { useActions, useActivity } from "@stackflow/react";
import { useStyleEffect, useZIndexBase } from "@stackflow/react-ui-core";
import * as React from "react";
import { createContext, useCallback, useContext, useMemo } from "react";

export interface UseDialogProps {
  onInteractOutside?: React.MouseEventHandler;
}

export function useDialog({ onInteractOutside }: UseDialogProps) {
  const activity = useActivity();
  const { pop } = useActions();
  const popLock = React.useRef(false);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);

  useStyleEffect({
    styleName: "hide",
    refs: [rootRef],
  });
  useStyleEffect({
    styleName: "offset",
    refs: [backdropRef],
  });
  useStyleEffect({
    styleName: "swipe-back",
    refs: [backdropRef],
  });

  const handleClose = useCallback(() => {
    if (popLock.current) {
      return;
    }
    popLock.current = true;

    pop();
  }, [pop]);

  const onClickOutside: React.MouseEventHandler = useCallback((e) => {
    onInteractOutside?.(e);
  }, []);

  const onClickCloseButton: React.MouseEventHandler = useCallback(() => {
    handleClose();
  }, [handleClose]);

  const zIndexBase = useZIndexBase() + 3;
  const zIndexLayer = useZIndexBase() + 4;
  const transitionState = activity?.transitionState ?? "enter-done";

  const dataProps = useMemo(
    () => ({
      "data-stackflow-activity-id": activity?.id,
      "data-stackflow-activity-is-active": activity?.isActive,
      "data-transition-state": transitionState,
    }),
    [activity?.id, activity?.isActive, transitionState],
  );

  return useMemo(
    () => ({
      refs: {
        root: rootRef,
        backdrop: backdropRef,
      },
      dataProps,
      rootProps: {
        ...dataProps,
        onClick: onClickOutside,
        style: {
          zIndex: zIndexBase,
        },
      },
      layerProps: {
        ...dataProps,
        style: {
          zIndex: zIndexLayer,
        },
      },
      closeButtonProps: {
        ...dataProps,
        onClick: onClickCloseButton,
      },
    }),
    [dataProps, onClickOutside, onClickCloseButton, zIndexBase, zIndexLayer],
  );
}

const DialogContext = createContext<ReturnType<typeof useDialog> | null>(null);

export const DialogProvider = DialogContext.Provider;

export function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a Dialog");
  }

  return context;
}
