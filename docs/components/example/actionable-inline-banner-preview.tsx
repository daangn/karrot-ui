"use client";

import {
  ActionableInlineBanner,
  ActionableInlineBannerDescription,
} from "seed-design/ui/actionable-inline-banner";

export default function ActionableInlineBannerPreview() {
  const onClick = () => window.alert("Hello World");

  return (
    <div className="flex flex-col gap-3 w-full">
      <ActionableInlineBanner onClick={onClick}>
        <ActionableInlineBannerDescription>ullamco</ActionableInlineBannerDescription>
      </ActionableInlineBanner>
      <ActionableInlineBanner onClick={onClick}>
        <ActionableInlineBannerDescription>
          Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet.
        </ActionableInlineBannerDescription>
      </ActionableInlineBanner>
    </div>
  );
}
