import { Stack } from "seed-design/ui/layout";
import { ActionableCallout, Callout, DismissibleCallout } from "seed-design/ui/callout";

export default function CalloutPreview() {
  return (
    <Stack gap="s4" width="full">
      <Callout description="Aute nulla proident tempor minim eiusmod. In nostrud officia irure laborum." />
      <ActionableCallout description="Aute nulla proident tempor minim eiusmod. In nostrud officia irure laborum." />
      <DismissibleCallout description="Aute nulla proident tempor minim eiusmod. In nostrud officia irure laborum." />
    </Stack>
  );
}
