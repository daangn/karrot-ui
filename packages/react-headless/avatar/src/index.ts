import { dataAttr, elementProps, imgProps } from "@seed-design/dom-utils";
import { useEffect, useState } from "react";

type LoadingStatus = "loading" | "loaded" | "error";

export interface UseAvatarStateProps {
  onLoadingStatusChange?: (status: LoadingStatus) => void;
}

export function useAvatarState(props: UseAvatarStateProps) {
  const [src, setSrc] = useState<string | null>(null);
  const { onLoadingStatusChange } = props;
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("loading");

  const events = {
    setSrc: (payload: { src: string }) => {
      if (src === payload.src) return;
      setSrc(payload.src);
      setLoadingStatus("loading");
      onLoadingStatusChange?.("loading");
    },
    loadSuccess: () => {
      setLoadingStatus("loaded");
      onLoadingStatusChange?.("loaded");
    },
    loadError: () => {
      setLoadingStatus("error");
      onLoadingStatusChange?.("error");
    },
  };

  return {
    loadingStatus,
    events,
  };
}

export interface UseAvatarProps extends UseAvatarStateProps {}

export function useAvatar(props: UseAvatarProps) {
  const { ...restProps } = props;
  const { loadingStatus, events } = useAvatarState(props);
  const isLoaded = loadingStatus === "loaded";

  const stateProps = {
    "data-loading-status": loadingStatus,
  };

  return {
    loadingStatus,
    restProps,
    stateProps,
    rootProps: elementProps({
      ...stateProps,
    }),
    getImageProps: ({
      src,
      onLoad,
      onError,
    }: {
      src?: string;
      onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
      onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
    }) => {
      useEffect(() => {
        events.setSrc({ src });
      }, [src]);

      return imgProps({
        hidden: !isLoaded,
        "data-visible": dataAttr(isLoaded),
        src,
        onLoad: (e) => {
          events.loadSuccess();
          onLoad?.(e);
        },
        onError: (e) => {
          events.loadError();
          onError?.(e);
        },
        ...stateProps,
      });
    },
    fallbackProps: elementProps({
      hidden: isLoaded,
      "data-visible": dataAttr(!isLoaded),
      ...stateProps,
    }),
  };
}
