import { InlineBanner } from "seed-design/ui/inline-banner";

export default function InlineBannerPreview() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner>ullamco</InlineBanner>
      <InlineBanner>
        Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet.
      </InlineBanner>
    </div>
  );
}
