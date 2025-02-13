import {
  Banner,
  Bold,
  Button,
  Columns,
  Container,
  IconWarning32,
  Stack,
  Text,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";

import type {
  ChangeIconEventHandler,
  CheckNewIconEventHandler,
  CheckOldIconEventHandler,
  ConvertMonochromeWeightEventHandler,
  EmitGetChangedIconCountEventHandler,
  HotfixEventHandler,
  ReturnNewIconEventHandler,
  ReturnOldIconEventHandler,
} from "../types";

import { Modal } from "@/shared/components/modal";
import {
  useActions,
  useFrameCount,
  useHotfixAllCount,
  useHotfixCount,
  useHotfixStatus,
  useIconCount,
  useIsLoading,
} from "../contexts/iconography";

export function MigrationTab() {
  const iconCount = useIconCount();
  const isLoading = useIsLoading();
  const frameCount = useFrameCount();
  const hotfixStatus = useHotfixStatus();
  const hotfixCount = useHotfixCount();
  const hotfixAllCount = useHotfixAllCount();
  const { setIsLoading } = useActions();

  return (
    <Container space="medium">
      <Stack space="extraSmall">
        <VerticalSpace space="extraSmall" />

        {frameCount === 0 ? (
          <Text>
            <Bold style={{ color: "red" }}>프레임을 선택해주세요!!!</Bold>
          </Text>
        ) : (
          <Text>
            현재 선택된 노드는
            <Bold style={{ color: "blue" }}>{frameCount}개</Bold>에요.
          </Text>
        )}
        <Text>선택된 노드만 변경돼요.</Text>

        <VerticalSpace space="extraSmall" />

        <Text>
          <Bold>이전 아이콘 (V2)</Bold>
        </Text>
        <Columns space="small">
          <Button
            disabled={frameCount === 0}
            onClick={() => emit<CheckOldIconEventHandler>("CHECK_OLD_ICON")}
            fullWidth
            danger
          >
            배경색 변경하기
          </Button>
          <Button
            disabled={frameCount === 0}
            onClick={() => emit<ReturnOldIconEventHandler>("RETURN_OLD_ICON")}
            fullWidth
            secondary
          >
            되돌리기
          </Button>
        </Columns>

        <VerticalSpace space="extraSmall" />

        <Text>
          <Bold>🌱 신규 아이콘 (V3)</Bold>
        </Text>
        <Columns space="small">
          <Button
            disabled={frameCount === 0}
            onClick={() => emit<CheckNewIconEventHandler>("CHECK_NEW_ICON")}
            fullWidth
          >
            배경색 변경하기
          </Button>

          <Button
            disabled={frameCount === 0}
            onClick={() => emit<ReturnNewIconEventHandler>("RETURN_NEW_ICON")}
            fullWidth
            secondary
          >
            되돌리기
          </Button>
        </Columns>

        <VerticalSpace space="extraSmall" />

        <Text>
          <Bold>아이콘 변경하기</Bold>
        </Text>
        <Modal
          primaryButtonText="변경하기"
          onPrimaryButtonClick={() => {
            setIsLoading(true);
            emit<ChangeIconEventHandler>("CHANGE_ICON");
          }}
          trigger={
            <Button
              disabled={frameCount === 0}
              loading={isLoading}
              fullWidth
              danger
              secondary
              style={{ height: "36px" }}
            >
              새로운 아이콘으로 변경하기
            </Button>
          }
          onTriggerClick={() => {
            emit<EmitGetChangedIconCountEventHandler>("EMIT_GET_CHANGED_ICON_COUNT");
          }}
        >
          <h2 style={{ fontSize: "14px" }}>{iconCount} 개의 아이콘을 변경하시겠습니까?</h2>
          <p>{frameCount}개의 프레임안에 아이콘이 변경될 예정이에요.</p>
          <p>버튼을 누르면 새로운 아이콘으로 변경됩니다.</p>
          <p>다시 되돌리고 싶다면 피그마 페이지에서 command + z 를 눌러 돌려주세요.</p>

          <VerticalSpace space="extraSmall" />

          <Banner icon={<IconWarning32 />} variant="warning">
            변경 후 피그마를 껐다 키면 히스토리가 남지 않기 때문에 되돌리기가 불가능합니다.
            주의해주세요.
          </Banner>
        </Modal>

        <Modal
          primaryButtonText="변경하기"
          onPrimaryButtonClick={() => {
            emit<ConvertMonochromeWeightEventHandler>("CONVERT_MONOCHROME_WEIGHT");
          }}
          trigger={
            <Button fullWidth secondary disabled={frameCount === 0}>
              새 모노크롬 아이콘 Weight 전환하기
            </Button>
          }
          onTriggerClick={() => {
            emit<EmitGetChangedIconCountEventHandler>("EMIT_GET_CHANGED_ICON_COUNT");
          }}
        >
          <h2 style={{ fontSize: "14px" }}>
            선택된 프레임안의 V3 모노크롬 아이콘의 Weight 변경돼요.
          </h2>
          <p>다시 되돌리고 싶다면 피그마 페이지에서 command + z 를 눌러 돌려주세요.</p>

          <VerticalSpace space="extraSmall" />

          <Banner icon={<IconWarning32 />} variant="warning">
            변경 후 피그마를 껐다 키면 히스토리가 남지 않기 때문에 되돌리기가 불가능합니다.
            주의해주세요.
          </Banner>
        </Modal>

        <VerticalSpace space="extraSmall" />

        <Text>
          <Bold>핫픽스</Bold>
        </Text>

        <Button
          onClick={() => emit<HotfixEventHandler>("HOTFIX", "page")}
          fullWidth
          secondary
          style={{ height: "36px", fontSize: "10px" }}
          danger
          loading={hotfixStatus === "loading"}
        >
          페이지 모든 아이콘 Seed V3 Icons 아이콘으로 변경
        </Button>
        <Button
          onClick={() => emit<HotfixEventHandler>("HOTFIX", "root")}
          fullWidth
          secondary
          style={{ height: "36px", fontSize: "10px" }}
          danger
          loading={hotfixStatus === "loading"}
        >
          파일 모든 아이콘 Seed V3 Icons 아이콘으로 변경 (오래걸림)
        </Button>
        {hotfixStatus === "loading" && (
          <Text>
            {hotfixCount}개 / {hotfixAllCount}개
          </Text>
        )}
      </Stack>
    </Container>
  );
}
