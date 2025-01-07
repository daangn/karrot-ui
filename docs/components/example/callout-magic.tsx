import { ActionableCallout, Callout, DismissibleCallout } from "seed-design/ui/callout";

export default function CalloutMagic() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Callout
        tone="magic"
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
      />
      <ActionableCallout
        tone="magic"
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
      />
      <DismissibleCallout
        tone="magic"
        description="기능에 대한 안내 또는 유익한 내용을 전달해요. 콜아웃은 꼭 필요한 경우에만 절제하여 사용해요."
      />
    </div>
  );
}
