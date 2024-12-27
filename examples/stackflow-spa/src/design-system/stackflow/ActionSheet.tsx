"use client";

import "@seed-design/stylesheet/actionSheet.css";
import "@seed-design/stylesheet/actionSheetItem.css";
import "@seed-design/stylesheet/actionSheetCloseButton.css";

import { ActionSheet as SeedActionSheet } from "@seed-design/stackflow";
import { forwardRef } from "react";

export interface ActionSheetProps extends SeedActionSheet.RootProps {}

/**
 * @see https://v3.seed-design.io/docs/react/components/stackflow/action-sheet
 */
export const ActionSheet = forwardRef<HTMLDivElement, ActionSheetProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <SeedActionSheet.Root ref={ref} {...otherProps}>
        <SeedActionSheet.Backdrop />
        <SeedActionSheet.Content>
          <SeedActionSheet.List>{children}</SeedActionSheet.List>
          <SeedActionSheet.Footer>
            {/* You may implement your own i18n for dismiss label */}
            <SeedActionSheet.CloseButton>닫기</SeedActionSheet.CloseButton>
          </SeedActionSheet.Footer>
        </SeedActionSheet.Content>
      </SeedActionSheet.Root>
    );
  },
);

ActionSheet.displayName = "ActionSheet";

export const ActionSheetGroup = SeedActionSheet.Group;

export interface ActionSheetItemProps extends SeedActionSheet.ItemProps {
  label: React.ReactNode;

  prefixIcon?: React.ReactNode;
}

export const ActionSheetItem = forwardRef<HTMLButtonElement, ActionSheetItemProps>(
  ({ label, prefixIcon, ...otherProps }, ref) => {
    return (
      <SeedActionSheet.Item ref={ref} {...otherProps}>
        <SeedActionSheet.ItemPrefixIcon svg={prefixIcon} />
        <SeedActionSheet.ItemLabel>{label}</SeedActionSheet.ItemLabel>
      </SeedActionSheet.Item>
    );
  },
);
