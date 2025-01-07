import { useCallbackRef } from "@radix-ui/react-use-callback-ref";
import { buttonProps, dataAttr, elementProps } from "@seed-design/dom-utils";
import { useActions, useActivity } from "@stackflow/react";
import { useZIndexBase } from "@stackflow/react-ui-core";
import * as React from "react";
import { createContext, useCallback, useContext, useId, useMemo } from "react";

export interface UseDialogProps {
  onInteractOutside?: React.MouseEventHandler;
}

export function useDialog(props: UseDialogProps) {
  const activity = useActivity();
  const { pop } = useActions();
  const popLock = React.useRef(false);

  const rootRef = React.useRef<HTMLDivElement>(null);
  const backdropRef = React.useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (popLock.current) {
      return;
    }
    popLock.current = true;

    pop();
  }, [pop]);

  const onInteractOutside = useCallbackRef(props.onInteractOutside);
  const onClickOutside: React.MouseEventHandler = useCallback(
    (e) => {
      onInteractOutside?.(e);
      e.stopPropagation();
    },
    [onInteractOutside],
  );
  const onClickContent: React.MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onClickCloseButton: React.MouseEventHandler = useCallback(() => {
    handleClose();
  }, [handleClose]);

  const zIndexBase = useZIndexBase() + 3;
  const zIndexContent = useZIndexBase() + 4;
  const transitionState = activity?.transitionState ?? "enter-done";

  const stateProps = useMemo(
    () => ({
      "data-activity-id": activity?.id,
      "data-activity-is-top": dataAttr(activity?.isTop),
      "data-activity-is-active": dataAttr(activity?.isActive),
      "data-transition-state": transitionState,
    }),
    [activity?.id, activity?.isActive, activity?.isTop, transitionState],
  );

  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;

  return useMemo(
    () => ({
      refs: {
        root: rootRef,
        backdrop: backdropRef,
      },
      stateProps,
      rootProps: elementProps({
        ...stateProps,
        onClick: onClickOutside,
        style: {
          zIndex: zIndexBase,
        },
      }),
      contentProps: elementProps({
        ...stateProps,
        role: "dialog",
        "aria-modal": true,
        "aria-labelledby": titleId,
        "aria-describedby": descriptionId,
        onClick: onClickContent,
        style: {
          zIndex: zIndexContent,
        },
      }),
      closeButtonProps: buttonProps({
        ...stateProps,
        onClick: onClickCloseButton,
      }),
      titleProps: elementProps({
        id: titleId,
        ...stateProps,
      }),
      descriptionProps: elementProps({
        id: descriptionId,
        ...stateProps,
      }),
    }),
    [
      stateProps,
      onClickOutside,
      onClickContent,
      onClickCloseButton,
      zIndexBase,
      zIndexContent,
      titleId,
      descriptionId,
    ],
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
