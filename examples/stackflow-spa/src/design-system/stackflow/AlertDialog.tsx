import "@seed-design/stylesheet/dialog.css";

import { Dialog } from "@seed-design/stackflow";
import type * as React from "react";
import { forwardRef } from "react";

export interface AlertDialogProps extends Dialog.RootProps {
  title: string;
  description: string;
  onInteractOutside?: React.MouseEventHandler;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/alert-dialog
 */
export const AlertDialog = forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ title, description, onInteractOutside, children, ...otherProps }, ref) => {
    // FIXME: Footer 안의 action 배열을 다룰 쓸만한 인터페이스가 생각이 안남. 인터페이스 다시 생각할 것.
    return (
      <Dialog.Root
        ref={ref}
        onInteractOutside={onInteractOutside}
        role="alertdialog"
        {...otherProps}
      >
        <Dialog.Backdrop />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>{children}</Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    );
  },
);

AlertDialog.displayName = "AlertDialog";

export type AlertDialogActionProps = Dialog.ActionProps;

export const AlertDialogAction = Dialog.Action;
