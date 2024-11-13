import * as React from "react";

export interface DismissibleProps {
  /**
   * @default true
   */
  defaultOpen?: boolean;
  isOpen?: boolean;
  onDismiss?: () => void;
}

export function useDismissible({
  defaultOpen = true,
  isOpen: isPropOpen,
  onDismiss,
}: DismissibleProps) {
  const [isStateOpen, setIsStateOpen] = React.useState(isPropOpen ?? defaultOpen);

  function onDismissButtonClick() {
    onDismiss?.();

    if (isPropOpen === undefined) {
      setIsStateOpen(false);
    }
  }

  React.useEffect(() => {
    if (isPropOpen !== undefined && isPropOpen !== isStateOpen) {
      setIsStateOpen(isPropOpen);
    }
  }, [isPropOpen, isStateOpen]);

  return {
    isOpen: isStateOpen,
    onDismissButtonClick,
  };
}
