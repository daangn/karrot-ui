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
      <DismissibleCalloutLink asChild>
        <a href="https://www.daangn.com" target="_blank" rel="noreferrer">
          시도해 보기
        </a>
      </DismissibleCalloutLink>
    </DismissibleCallout>
  );
}
