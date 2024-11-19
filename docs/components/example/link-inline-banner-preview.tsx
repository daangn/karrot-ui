"use client";

import { LinkInlineBanner } from "seed-design/ui/link-inline-banner";

export default function LinkInlineBannerPreview() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <LinkInlineBanner linkLabel="Details" onLinkLabelClick={() => window.alert("Hello World")}>
        ullamco
      </LinkInlineBanner>
      <LinkInlineBanner
        linkLabel="자세히 보기"
        onLinkLabelClick={() => window.alert("Hello World")}
      >
        Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet.
      </LinkInlineBanner>
    </div>
  );
}
