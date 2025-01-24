import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/draft-mode";
import { VisualEditing } from "next-sanity";

export async function Live() {
  return (
    <>
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </>
  );
}
