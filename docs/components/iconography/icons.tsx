"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import * as MonochormeComponents from "@daangn/react-monochrome-icon";
import * as MulticolorComponents from "@daangn/react-multicolor-icon";

import MonochromeData from "@daangn/icon-data/monochrome.json";
import MulticolorData from "@daangn/icon-data/multicolor.json";

import { IconBottomInfomation } from "./icon-bottom-infomation";
import { IconProvider } from "./icon-context";
import { IconGrid } from "./icon-grid";
import { IconSearch } from "./icon-search";
import { IconSegmentedControl } from "./icon-segmented-control";
import { Suspense } from "react";

export const IconLibrary = () => {
  return (
    <NuqsAdapter>
      <Suspense>
        <IconProvider
          iconData={{ monochrome: MonochromeData, multicolor: MulticolorData }}
          iconComponents={{
            monochrome: MonochormeComponents,
            multicolor: MulticolorComponents,
          }}
        >
          <IconSegmentedControl />
          <IconSearch />
          <IconGrid />
          <IconBottomInfomation />
        </IconProvider>
      </Suspense>
    </NuqsAdapter>
  );
};
