"use client";

import { ActionableInlineBanner } from "seed-design/ui/actionable-inline-banner";

export default function ActionableInlineBannerPreview() {
  const onClick = () => window.alert("Hello World");

  return (
    <div className="flex flex-col gap-3 w-full">
      <ActionableInlineBanner onClick={onClick}>ullamco</ActionableInlineBanner>
      <ActionableInlineBanner onClick={onClick}>
        Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet.
      </ActionableInlineBanner>
    </div>
  );
}
