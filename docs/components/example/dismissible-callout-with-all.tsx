"use client";

import {
  DismissibleCallout,
  DismissibleCalloutLabel,
  DismissibleCalloutLink,
  DismissibleCalloutTitle,
} from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutWithAll() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <DismissibleCalloutTitle>새로운 기능</DismissibleCalloutTitle>
      <DismissibleCalloutLabel>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </DismissibleCalloutLabel>
      <DismissibleCalloutLink onClick={() => window.alert("Hello World")}>
        시도해 보기
      </DismissibleCalloutLink>
    </DismissibleCallout>
  );
}
