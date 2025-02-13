import { Debug } from "@/shared/components/debug";
import { MODE } from "@/shared/env";
import { h } from "preact";
import { ComponentsProvider } from "./context";
import { ComponentsFooter } from "./footer";
import { NewComponentList, OldComponentList } from "./list";
import { DoneBanner } from "./banner";

export const ComponentsSection = () => {
  return (
    <ComponentsProvider>
      <div className="flex grow overflow-y-hidden">
        <div className="flex grow overflow-y-hidden relative">
          <div className="flex flex-col w-full h-full border-r">
            <NewComponentList />
            <OldComponentList />
          </div>
        </div>
      </div>

      {MODE === "dev" && (
        <div className="flex-1 max-h-[600px]">
          <Debug />
        </div>
      )}

      <DoneBanner />
      <ComponentsFooter />
    </ComponentsProvider>
  );
};
