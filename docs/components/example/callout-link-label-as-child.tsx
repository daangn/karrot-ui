"use client";

import { Callout, DismissibleCallout } from "seed-design/ui/callout";

export default function CalloutLinkLabelAsChild() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Callout
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
        linkLabel={
          <a href="https://www.daangn.com" target="_blank" rel="noreferrer">
            시도해 보기
          </a>
        }
        linkProps={{ asChild: true }}
      />
      <DismissibleCallout
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
        linkLabel={
          <a href="https://www.daangn.com" target="_blank" rel="noreferrer">
            시도해 보기
          </a>
        }
        linkProps={{ asChild: true }}
      />
    </div>
  );
}
