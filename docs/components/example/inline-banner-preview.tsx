import { Stack } from "seed-design/ui/layout";
import {
  ActionableInlineBanner,
  DismissibleInlineBanner,
  InlineBanner,
  LinkInlineBanner,
} from "seed-design/ui/inline-banner";

export default function InlineBannerPreview() {
  return (
    <Stack gap="s4" width="full">
      <InlineBanner description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet." />
      <LinkInlineBanner
        description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet."
        linkLabel="자세히보기"
      />
      <ActionableInlineBanner description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet." />
      <DismissibleInlineBanner description="Ut veniam in ea ea anim laborum magna dolore ea laborum duis ut aute mollit amet." />
    </Stack>
  );
}
