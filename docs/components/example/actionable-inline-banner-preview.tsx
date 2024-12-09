"use client";

import { ActionableInlineBanner, InlineBannerDescription } from "seed-design/ui/inline-banner";

export default function ActionableInlineBannerPreview() {
  const onClick = () => window.alert("Hello World");

  return (
    <div className="flex flex-col gap-3 w-full">
      <ActionableInlineBanner onClick={onClick}>
        <InlineBannerDescription>ullamco</InlineBannerDescription>
      </ActionableInlineBanner>
      <ActionableInlineBanner onClick={onClick}>
        <InlineBannerDescription>
          Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet.
        </InlineBannerDescription>
      </ActionableInlineBanner>
    </div>
  );
}
