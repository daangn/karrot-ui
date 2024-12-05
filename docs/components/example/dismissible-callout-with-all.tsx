"use client";

import {
  DismissibleCallout,
  DismissibleCalloutDescription,
  DismissibleCalloutLink,
  DismissibleCalloutTitle,
} from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutWithAll() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <DismissibleCalloutTitle>새로운 기능</DismissibleCalloutTitle>
      <DismissibleCalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </DismissibleCalloutDescription>
      <DismissibleCalloutLink onClick={() => window.alert("Hello World")}>
        시도해 보기
      </DismissibleCalloutLink>
    </DismissibleCallout>
  );
}
