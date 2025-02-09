"use client";

import { Tabs as SeedTabs } from "@seed-design/react";
import { forwardRef } from "react";

export interface TabsRootProps extends SeedTabs.RootProps {}

export const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <SeedTabs.Root ref={ref} {...otherProps}>
        {children}
      </SeedTabs.Root>
    );
  },
);
TabsRoot.displayName = "TabsRoot";

export interface TabsListProps extends SeedTabs.ListProps {}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <SeedTabs.List ref={ref} {...otherProps}>
        {children}
        <SeedTabs.Indicator />
      </SeedTabs.List>
    );
  },
);
TabsList.displayName = "TabsList";

export interface TabsTriggerProps
  extends Omit<SeedTabs.TriggerProps, "asChild"> {
  notification?: boolean;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  (props, ref) => {
    const { children, notification, ...otherProps } = props;
    return (
      <SeedTabs.Trigger ref={ref} {...otherProps}>
        <SeedTabs.TriggerLabel>
          {children}
          {notification && <SeedTabs.TriggerNotification />}
        </SeedTabs.TriggerLabel>
      </SeedTabs.Trigger>
    );
  },
);
TabsTrigger.displayName = "TabsTrigger";

export interface TabsCarouselProps
  extends Omit<SeedTabs.CarouselProps, "asChild"> {}

export const TabsCarousel = (props: TabsCarouselProps) => {
  const { children, ...otherProps } = props;
  return (
    <SeedTabs.Carousel {...otherProps}>
      <SeedTabs.CarouselCamera>{children}</SeedTabs.CarouselCamera>
    </SeedTabs.Carousel>
  );
};
TabsCarousel.displayName = "TabsCarousel";

export interface TabsContentProps extends SeedTabs.ContentProps {}

export const TabsContent = SeedTabs.Content;
