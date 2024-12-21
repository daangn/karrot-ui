import * as React from "react";

export interface UseDismissibleProps {
  /**
   * @default true
   */
  defaultOpen?: boolean;
  open?: boolean;
  onDismiss?: () => void;
}

export function useDismissible({
  defaultOpen = true,
  open: propOpen,
  onDismiss,
}: UseDismissibleProps) {
  const [stateOpen, setStateOpen] = React.useState(propOpen ?? defaultOpen);

  function onDismissButtonClick() {
    onDismiss?.();

    if (propOpen === undefined) {
      setStateOpen(false);
    }
  }

  React.useEffect(() => {
    if (propOpen !== undefined && propOpen !== stateOpen) {
      setStateOpen(propOpen);
    }
  }, [propOpen, stateOpen]);

  return {
    open: stateOpen,
    onDismissButtonClick,
  };
}
