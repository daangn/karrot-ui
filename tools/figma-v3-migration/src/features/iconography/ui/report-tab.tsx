import {
  Bold,
  Button,
  Container,
  Divider,
  Link,
  Preview,
  Stack,
  Text,
  TextboxMultiline,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { Fragment, h } from "preact";

import { emit } from "@create-figma-plugin/utilities";
import { Modal } from "@/shared/components/modal";
import { useReports } from "../contexts/iconography";
import type { ClearReportsEventHandler } from "../types";

function removeIconPrefix(name: string) {
  return name?.replace(/^icon_/, "");
}

export function ReportTab() {
  const reports = useReports();

  const copyReports = () => {
    const textarea = document.createElement("textarea");
    textarea.value = JSON.stringify(reports, null, 2);
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  if (!reports) {
    return <Container space="medium">리포트가 없습니다.</Container>;
  }

  return (
    <Container space="medium">
      <Stack space="extraSmall">
        <VerticalSpace space="medium" />

        <div>
          {Object.keys(reports).map((key) => {
            const report = reports[key];
            return (
              <div key={key}>
                <Text style={{ fontSize: "12px" }}>
                  <Link href={report.rootFigmaLink} target="_blank">
                    <Bold>{key}</Bold>{" "}
                  </Link>
                  피그마 페이지
                </Text>
                <VerticalSpace space="extraSmall" />
                {Object.entries(report.pages).map(([pageName, page]) => {
                  return (
                    <div key={pageName}>
                      <Text>
                        <Bold>
                          <Link target="_blank" href={page.figmaPageLink}>
                            {pageName}
                          </Link>
                          에서 총 {page.reports.length}개의 아이콘이 변경되었어요.
                        </Bold>
                      </Text>
                      <VerticalSpace space="extraSmall" />
                      <Preview style={{ padding: "6px" }}>
                        {page.reports.map((report, index) => {
                          const {
                            afterNodeName,
                            afterWeight,
                            beforeNodeId,
                            beforeNodeName,
                            beforeWeight,
                            link,
                            type,
                            parentFrameName,
                          } = report;
                          return (
                            <Fragment key={beforeNodeId}>
                              <div>
                                <Text>
                                  <Bold>{index + 1}. </Bold>
                                  {type === "multicolor" ? (
                                    <Fragment>
                                      (멀티컬러) {removeIconPrefix(beforeNodeName)} -{">"}{" "}
                                      {removeIconPrefix(afterNodeName)} -{" "}
                                    </Fragment>
                                  ) : (
                                    <Fragment>
                                      (모노크롬) {removeIconPrefix(beforeNodeName)} ({beforeWeight})
                                      -{">"} {removeIconPrefix(afterNodeName)} ({afterWeight}) -{" "}
                                    </Fragment>
                                  )}
                                  <Link target="_blank" href={link}>
                                    {parentFrameName}
                                  </Link>
                                </Text>
                              </div>
                              <VerticalSpace space="extraSmall" />
                            </Fragment>
                          );
                        })}
                      </Preview>
                      <VerticalSpace space="medium" />
                    </div>
                  );
                })}
                <Divider />
              </div>
            );
          })}
        </div>

        <Bold>전체 리포트</Bold>
        <TextboxMultiline rows={10} value={JSON.stringify(reports, null, 2)} variant="border" />

        <Button onClick={copyReports} fullWidth>
          리포트 복사하기
        </Button>

        <Modal
          primaryButtonText="삭제하기"
          onPrimaryButtonClick={() => emit<ClearReportsEventHandler>("CLEAR_REPORTS")}
          trigger={
            <Button danger fullWidth>
              리포트 삭제하기
            </Button>
          }
        >
          <Text>리포트를 삭제하시겠습니까?</Text>
        </Modal>
        <VerticalSpace space="extraSmall" />
      </Stack>
    </Container>
  );
}
