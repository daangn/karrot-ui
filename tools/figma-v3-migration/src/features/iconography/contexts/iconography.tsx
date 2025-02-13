import { createContext, h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { on } from "@create-figma-plugin/utilities";
import type { PropsWithChildren } from "preact/compat";
import type {
  ErrorEventHandler,
  FrameSelectionEventHandler,
  HotfixCountIconsEventHandler,
  HotfixCountUpEventHandler,
  HotfixStatusEventHandler,
  OnGetChangedIconCountEventHandler,
  Reports,
  ReportsEventHandler,
} from "../types";

interface IconographyState {
  reports: Reports;
  iconCount: number;
  frameCount: number;
  isLoading: boolean;
  hotfixAllCount: number;
  hotfixStatus: "init" | "loading";
  hotfixCount: number;
  actions: {
    setReports: (reports: Reports) => void;
    setIconCount: (iconCount: number) => void;
    setIsLoading: (isLoading: boolean) => void;
  };
}

export const IconographyContext = createContext<IconographyState | null>(null);

const IconographyProvider = ({ children }: PropsWithChildren) => {
  const [reports, setReports] = useState<Reports>({});
  const [iconCount, setIconCount] = useState<number>(0);
  const [frameCount, setFrameCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hotfixStatus, setHotfixStatus] = useState<"init" | "loading">("init");
  const [hotfixCount, setHotfixCount] = useState<number>(0);
  const [hotfixAllCount, setHotfixAllCount] = useState<number>(0);

  useEffect(() => {
    on<ReportsEventHandler>("REPORTS", (reports) => {
      setReports(reports);
      setIsLoading(false);
    });
    on<OnGetChangedIconCountEventHandler>("ON_GET_CHANGED_ICON_COUNT", (count, frameCount) => {
      setIconCount(count);
      frameCount && setFrameCount(frameCount);
    });
    on<ErrorEventHandler>("ERROR", () => {
      setIsLoading(false);
    });
    on<FrameSelectionEventHandler>("FRAME_SELECTION", (frameCount) => {
      setFrameCount(frameCount);
    });

    on<HotfixCountIconsEventHandler>("HOTFIX_COUNT_ICONS", (count) => {
      setHotfixAllCount(count);
    });
    on<HotfixCountUpEventHandler>("HOTFIX_COUNT_UP", () => {
      setHotfixCount((prev) => prev + 1);
    });
    on<HotfixStatusEventHandler>("HOTFIX_STATUS", (status) => {
      setHotfixStatus(status);
    });
  }, []);

  useEffect(() => {
    if (hotfixStatus === "init") {
      setHotfixAllCount(0);
      setHotfixCount(0);
    }
  }, [hotfixStatus]);

  return (
    <IconographyContext.Provider
      value={{
        reports,
        isLoading,
        hotfixStatus,
        hotfixAllCount,
        hotfixCount,
        frameCount,
        iconCount,
        actions: {
          setReports,
          setIconCount,
          setIsLoading,
        },
      }}
    >
      {children}
    </IconographyContext.Provider>
  );
};

export default IconographyProvider;

export function useReports() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useReports must be used within a IconographyProvider");
  return context.reports;
}

export function useIconCount() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useIconCount must be used within a IconographyProvider");
  return context.iconCount;
}

export function useFrameCount() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useFrameCount must be used within a IconographyProvider");
  return context.frameCount;
}

export function useIsLoading() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useIsLoading must be used within a IconographyProvider");
  return context.isLoading;
}

export function useActions() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useActions must be used within a IconographyProvider");
  return context.actions;
}

export function useHotfixAllCount() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useHotfixAllCount must be used within a IconographyProvider");
  return context.hotfixAllCount;
}

export function useHotfixCount() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useHotfixCount must be used within a IconographyProvider");
  return context.hotfixCount;
}

export function useHotfixStatus() {
  const context = useContext(IconographyContext);
  if (!context) throw new Error("useHotfixStatus must be used within a IconographyProvider");
  return context.hotfixStatus;
}
