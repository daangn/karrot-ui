import { ActionableCallout, Callout, DismissibleCallout } from "seed-design/ui/callout";

export default function CalloutPreview() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Callout description="Aute nulla proident tempor minim eiusmod. In nostrud officia irure laborum." />
      <ActionableCallout description="Aute nulla proident tempor minim eiusmod. In nostrud officia irure laborum." />
      <DismissibleCallout description="Aute nulla proident tempor minim eiusmod. In nostrud officia irure laborum." />
    </div>
  );
}
