import "@seed-design/stylesheet/bottomSheet.css";

import { IconXmarkFill } from "@daangn/react-monochrome-icon";
import { BottomSheet as SeedBottomSheet } from "@seed-design/stackflow";
import { forwardRef } from "react";

export interface BottomSheetProps extends SeedBottomSheet.RootProps {
  title: string;
  description: string;
}

/**
 * @see https://v3.seed-design.io/docs/react/components/stackflow/bottom-sheet
 */
export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
  ({ title, description, children, ...otherProps }, ref) => {
    // FIXME: Footer 안의 action 배열을 다룰 쓸만한 인터페이스가 생각이 안남. 인터페이스 다시 생각할 것.
    return (
      <SeedBottomSheet.Root ref={ref} {...otherProps}>
        <SeedBottomSheet.Backdrop />
        <SeedBottomSheet.Content>
          <SeedBottomSheet.CloseButton>
            <SeedBottomSheet.CloseIcon svg={<IconXmarkFill />} />
          </SeedBottomSheet.CloseButton>
          <SeedBottomSheet.Header>
            <SeedBottomSheet.Title>{title}</SeedBottomSheet.Title>
            <SeedBottomSheet.Description>{description}</SeedBottomSheet.Description>
          </SeedBottomSheet.Header>
          {children}
        </SeedBottomSheet.Content>
      </SeedBottomSheet.Root>
    );
  },
);

BottomSheet.displayName = "BottomSheet";

export const BottomSheetFooter = SeedBottomSheet.Footer;
