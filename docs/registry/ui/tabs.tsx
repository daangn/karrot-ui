"use client";

import clsx from "clsx";
import * as React from "react";
import {
  useTabs,
  useSwipeable,
  type UseTabsProps,
  type TriggerProps,
  type ContentProps,
  useLazyContents,
  type UseLazyContentsProps,
} from "@seed-design/react-tabs";
import { tabs } from "@seed-design/recipe/tabs";
import { tab } from "@seed-design/recipe/tab";

import "@seed-design/stylesheet/tabs.css";
import "@seed-design/stylesheet/tab.css";

type Assign<T, U> = Omit<T, keyof U> & U;

interface TabsContextValue {
  api: ReturnType<typeof useTabs>;
  classNames: ReturnType<typeof tabs>;
  shouldRender: (value: string) => boolean;

  /**
   * @default false
   */
  isSwipeable: boolean;

  layout: "fill" | "hug";
  size: "small" | "medium";
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs cannot be rendered outside the Tabs");
  }
  return context;
};

export interface TabsProps
  extends Omit<UseLazyContentsProps, "currentValue">,
    UseTabsProps {
  /**
   * @default "hug"
   */
  layout?: "fill" | "hug";

  /**
   * @default "small"
   */
  size?: "small" | "medium";

  /**
   * @default false
   */
  fixTriggerList?: boolean;
}

interface ReactTabsProps
  extends Assign<React.HTMLAttributes<HTMLDivElement>, UseTabsProps>,
    Omit<UseLazyContentsProps, "currentValue">,
    TabsProps {}

export const Tabs = React.forwardRef<HTMLDivElement, ReactTabsProps>(
  (props, ref) => {
    const {
      className,
      lazyMode,
      isLazy,
      isSwipeable = false,
      layout = "hug",
      size = "small",
      fixTriggerList = false,
      onSwipeStart,
      onSwipeEnd,
    } = props;
    const useTabsProps = useTabs(props);
    const classNames = tabs({
      layout,
      size,
      fixTriggerList,
    });
    const { rootProps, value } = useTabsProps;
    const { shouldRender } = useLazyContents({
      currentValue: value,
      lazyMode,
      isLazy,
    });
    const api = {
      ...useTabsProps,
    };

    return (
      <div
        ref={ref}
        {...rootProps}
        style={{ ...rootProps.style, ...props.style }}
        className={clsx(classNames.root, className)}
      >
        <TabsContext.Provider
          value={{
            api,
            size,
            classNames,
            shouldRender,
            isSwipeable,
            layout,
            onSwipeStart,
            onSwipeEnd,
          }}
        >
          {props.children}
        </TabsContext.Provider>
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

export const TabTriggerList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...otherProps }, ref) => {
  const { api, classNames } = useTabsContext();
  const { tabTriggerListProps, triggerSize } = api;
  const { left } = triggerSize;
  const { triggerList } = classNames;

  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current?.scrollTo({
        // NOTE: 27px is half of tab's min-width
        left: left - 27,
        behavior: "smooth",
      });
    }
  }, [left]);

  return (
    <div
      ref={containerRef}
      {...tabTriggerListProps}
      className={clsx(triggerList, className)}
      {...otherProps}
    >
      {children}
      <TabIndicator />
    </div>
  );
});
TabTriggerList.displayName = "TabTriggerList";

export interface TabTriggerProps extends TriggerProps {
  /**
   * @default false
   */
  alert?: boolean;

  isDisabled?: boolean;

  value: string;
}

interface ReactTabTriggerProps
  extends Assign<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    TabTriggerProps
  > {}

export const TabTrigger = React.forwardRef<
  HTMLButtonElement,
  ReactTabTriggerProps
>(
  (
    { className, children, value, isDisabled, alert = false, ...otherProps },
    ref,
  ) => {
    const { api, layout, size } = useTabsContext();
    const { getTabTriggerProps } = api;
    const { label, notification, root } = tab({
      size,
      layout,
    });
    const { rootProps, notificationProps, labelProps } = getTabTriggerProps({
      value,
      isDisabled,
    });

    return (
      <button
        ref={ref}
        className={clsx(root, className)}
        {...rootProps}
        {...otherProps}
        // FIXME: temporal fix for event merging, should be replaced with `mergeProps`.
        onClick={(e) => {
          rootProps.onClick?.(e);
          otherProps.onClick?.(e);
        }}
      >
        <span className={label} {...labelProps}>
          {children}
          {alert && <div className={notification} {...notificationProps} />}
        </span>
      </button>
    );
  },
);
TabTrigger.displayName = "TabTrigger";

export const TabContentList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...otherProps }, ref) => {
  const { api, classNames, isSwipeable, onSwipeStart, onSwipeEnd } =
    useTabsContext();
  const {
    tabContentListProps,
    tabContentCameraProps,
    currentTabEnabledIndex,
    tabEnabledCount,
    moveNext,
    movePrev,
  } = api;
  const { contentList, contentCamera } = classNames;
  const { dragProps, swipeMoveX, swipeStatus } = useSwipeable({
    isSwipeable,
    onSwipeLeftToRight: movePrev,
    onSwipeRightToLeft: moveNext,
    onSwipeStart,
    onSwipeEnd,
  });

  const getCameraTranslateX = () => {
    const MODIFIER = 5;

    const isSide =
      currentTabEnabledIndex === 0 ||
      currentTabEnabledIndex === tabEnabledCount - 1;
    const swipeOffset = isSide ? swipeMoveX / MODIFIER : swipeMoveX;

    return `calc(var(--seed-design-tabs-current-tab-enabled-index) * var(--seed-design-tabs-tab-camera-width) * -1px + ${swipeOffset}px)`;
  };

  return (
    <div
      ref={ref}
      {...tabContentListProps}
      className={clsx(contentList, className)}
      {...otherProps}
      style={{
        userSelect: "none",
        touchAction: "pan-y",
        ...otherProps.style,
      }}
    >
      <div
        {...tabContentCameraProps}
        {...dragProps}
        className={clsx(contentCamera)}
        style={{
          willChange: "transform",
          transition:
            isSwipeable && swipeStatus === "idle"
              ? "transform 0.2s cubic-bezier(0.15, 0.3, 0.25, 1)"
              : "none",
          transform: `translateX(${getCameraTranslateX()})`,
        }}
      >
        {children}
      </div>
    </div>
  );
});
TabContentList.displayName = "TabContentList";

export const TabContent = React.forwardRef<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, ContentProps>
>(({ className, children, value, ...otherProps }, ref) => {
  const { api, classNames, shouldRender } = useTabsContext();
  const { getTabContentProps } = api;
  const { content } = classNames;
  const tabContentProps = getTabContentProps({ value });
  const isRender = shouldRender(value);

  return (
    <div
      ref={ref}
      {...tabContentProps}
      className={clsx(content, className)}
      {...otherProps}
    >
      {isRender && children}
    </div>
  );
});
TabContent.displayName = "TabContent";

const TabIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...otherProps }, ref) => {
  const { api, classNames } = useTabsContext();
  const { tabIndicatorProps } = api;
  const { indicator } = classNames;

  return (
    <div
      ref={ref}
      {...tabIndicatorProps}
      className={clsx(indicator, className)}
      {...otherProps}
    />
  );
});
TabIndicator.displayName = "TabIndicator";
