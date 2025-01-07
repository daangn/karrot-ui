import * as React from "react";

export interface UseDismissibleProps {
  /**
   * @default true
   */
  defaultOpen?: boolean;
  open?: boolean;
  onDismiss?: () => void;
}

export type UseDismissibleReturn = ReturnType<typeof useDismissible>;

export function useDismissible({
  defaultOpen = true,
  open: propOpen,
  onDismiss,
}: UseDismissibleProps) {
  const [stateOpen, setStateOpen] = React.useState(propOpen ?? defaultOpen);

  function handleDismiss() {
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
    handleDismiss,
  };
}

const DismissibleContext = React.createContext<ReturnType<typeof useDismissible> | null>(null);

export const DismissibleProvider = DismissibleContext.Provider;

export const useDismissibleContext = () => {
  const context = React.useContext(DismissibleContext);
  if (context === null) {
    throw new Error("useDismissibleContext should be used within DismissibleProvider");
  }

  return context;
};
