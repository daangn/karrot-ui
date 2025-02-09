"use client";

import {
  useLazyContents,
  useTabs,
  type ContentProps,
  type TriggerProps,
  type UseLazyContentsProps,
  type UseTabsProps,
} from "@seed-design/react-tabs";
import { chipTab } from "@seed-design/recipe/chipTab";
import { type ChipTabsVariant, chipTabs } from "@seed-design/recipe/chipTabs";
import clsx from "clsx";
import * as React from "react";

type Assign<T, U> = Omit<T, keyof U> & U;

interface ChipTabsContextValue {
  api: ReturnType<typeof useTabs>;
  classNames: ReturnType<typeof chipTabs>;
  shouldRender: (value: string) => boolean;
  variant: ChipTabsVariant["variant"];
}

const ChipTabsContext = React.createContext<ChipTabsContextValue | null>(null);

const useChipTabsContext = () => {
  const context = React.useContext(ChipTabsContext);
  if (!context) {
    throw new Error("Tabs cannot be rendered outside the Tabs");
  }
  return context;
};

export interface ChipTabsProps
  extends Assign<
      React.HTMLAttributes<HTMLDivElement>,
      Omit<UseTabsProps, "layout">
    >,
    ChipTabsVariant,
    Omit<UseLazyContentsProps, "currentValue"> {}

/**
 * @see https://v3.seed-design.io/docs/react/components/tabs/chip-tabs
 */
export const ChipTabs = React.forwardRef<HTMLDivElement, ChipTabsProps>(
  (props, ref) => {
    const { className, lazyMode, isLazy, variant } = props;
    const api = useTabs(props);
    const classNames = chipTabs({
      variant,
    });
    const { rootProps, value, restProps } = api;
    const { shouldRender } = useLazyContents({
      currentValue: value ?? "",
      lazyMode,
      isLazy,
    });

    return (
      <div
        ref={ref}
        {...rootProps}
        {...restProps}
        className={clsx(classNames.root, className)}
      >
        <ChipTabsContext.Provider
          value={{
            api,
            classNames,
            shouldRender,
            variant,
          }}
        >
          {props.children}
        </ChipTabsContext.Provider>
      </div>
    );
  },
);
ChipTabs.displayName = "ChipTabs";

export const ChipTabTriggerList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...otherProps }, ref) => {
  const { api, classNames } = useChipTabsContext();
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
    </div>
  );
});
ChipTabTriggerList.displayName = "ChipTabTriggerList";

export interface ChipTabTriggerProps
  extends Assign<React.HTMLAttributes<HTMLButtonElement>, TriggerProps> {}

export const ChipTabTrigger = React.forwardRef<
  HTMLButtonElement,
  ChipTabTriggerProps
>(({ className, children, value, isDisabled, ...otherProps }, ref) => {
  const { api, variant } = useChipTabsContext();
  const { getTabTriggerProps } = api;
  const { label, root } = chipTab({
    variant,
  });
  const { rootProps, labelProps } = getTabTriggerProps({ value, isDisabled });

  return (
    <button
      ref={ref}
      {...rootProps}
      className={clsx(root, className)}
      {...otherProps}
    >
      <span className={label} {...labelProps}>
        {children}
      </span>
    </button>
  );
});
ChipTabTrigger.displayName = "ChipTabTrigger";

export const ChipTabContent = React.forwardRef<
  HTMLDivElement,
  Assign<React.HTMLAttributes<HTMLDivElement>, ContentProps>
>(({ className, children, value, ...otherProps }, ref) => {
  const { api, classNames, shouldRender } = useChipTabsContext();
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
ChipTabContent.displayName = "ChipTabContent";
