import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";

export default function InlineBannerPreview() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <InlineBanner description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet." />
      <LinkInlineBanner
        description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet." />
      <DismissibleInlineBanner description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet." />
    </div>
  );
}
