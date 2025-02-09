"use client";

import { ChipTabs as SeedChipTabs } from "@seed-design/react";
import { forwardRef } from "react";

export interface ChipTabsRootProps extends SeedChipTabs.RootProps {}

export const ChipTabsRoot = forwardRef<HTMLDivElement, ChipTabsRootProps>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <SeedChipTabs.Root ref={ref} {...otherProps}>
        {children}
      </SeedChipTabs.Root>
    );
  },
);
ChipTabsRoot.displayName = "ChipTabsRoot";

export interface ChipTabsListProps extends SeedChipTabs.ListProps {}

export const ChipTabsList = SeedChipTabs.List;

export interface ChipTabsTriggerProps
  extends Omit<SeedChipTabs.TriggerProps, "asChild"> {
  notification?: boolean;
}

export const ChipTabsTrigger = forwardRef<
  HTMLButtonElement,
  ChipTabsTriggerProps
>((props, ref) => {
  const { children, notification, ...otherProps } = props;
  return (
    <SeedChipTabs.Trigger ref={ref} {...otherProps}>
      <SeedChipTabs.TriggerLabel>{children}</SeedChipTabs.TriggerLabel>
    </SeedChipTabs.Trigger>
  );
});
ChipTabsTrigger.displayName = "ChipTabsTrigger";

export interface ChipTabsCarouselProps
  extends Omit<SeedChipTabs.CarouselProps, "asChild"> {}

export const ChipTabsCarousel = (props: ChipTabsCarouselProps) => {
  const { children, ...otherProps } = props;
  return (
    <SeedChipTabs.Carousel {...otherProps}>
      <SeedChipTabs.CarouselCamera>{children}</SeedChipTabs.CarouselCamera>
    </SeedChipTabs.Carousel>
  );
};
ChipTabsCarousel.displayName = "ChipTabsCarousel";

export interface ChipTabsContentProps extends SeedChipTabs.ContentProps {}

export const ChipTabsContent = SeedChipTabs.Content;
