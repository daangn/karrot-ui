import {
  Button,
  Columns,
  Container,
  Modal as LibModal,
  MiddleAlign,
  VerticalSpace,
} from "@create-figma-plugin/ui";
// biome-ignore lint/style/useImportType: <explanation>
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";

interface ModalProps {
  trigger: h.JSX.Element;
  primaryButtonText?: string;
  onPrimaryButtonClick: () => void;
  onTriggerClick?: () => void;
}

const style = {
  padding: "12px",
  width: "240px",
};

export const Modal = ({
  children,
  trigger,
  primaryButtonText,
  onPrimaryButtonClick,
  onTriggerClick,
}: React.PropsWithChildren<ModalProps>) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleCloseButtonClick = () => {
    setOpen(false);
  };

  const onTriggerClickHandler = () => {
    if (onTriggerClick) {
      onTriggerClick();
    }
    setOpen(true);
  };

  const onPrimaryButtonClickHandler = () => {
    onPrimaryButtonClick();
    setOpen(false);
  };

  trigger.props.onClick = onTriggerClickHandler;

  return (
    <Fragment>
      {trigger}
      <LibModal onOverlayClick={handleCloseButtonClick} open={open}>
        <MiddleAlign>
          <div style={style}>{children}</div>
          <Container space="medium">
            <Columns space="medium">
              <Button onClick={onPrimaryButtonClickHandler} fullWidth>
                {primaryButtonText || "확인"}
              </Button>
              <Button onClick={handleCloseButtonClick} secondary fullWidth>
                취소
              </Button>
            </Columns>
            <VerticalSpace space="extraSmall" />
          </Container>
        </MiddleAlign>
      </LibModal>
    </Fragment>
  );
};
