"use client";

import {
  DismissibleCallout,
  DismissibleCalloutDescription,
  DismissibleCalloutLink,
} from "seed-design/ui/dismissible-callout";

export default function DismissibleCalloutWithLink() {
  return (
    <DismissibleCallout dismissAriaLabel="닫기" variant="magic">
      <DismissibleCalloutDescription>
        Aliquip laboris excepteur enim sunt eiusmod laboris anim.
      </DismissibleCalloutDescription>
      <DismissibleCalloutLink onClick={() => window.alert("Hello World")}>
        시도해 보기
      </DismissibleCalloutLink>
    </DismissibleCallout>
  );
}
