"use client";

import * as React from "react";

import * as MonochormeComponents from "@daangn/react-monochrome-icon";
import * as MulticolorComponents from "@daangn/react-multicolor-icon";

import MulticolorData from "@daangn/icon-data/multicolor.json";
import MonochromeData from "@daangn/icon-data/monochrome.json";

import { IconProvider } from "./icon-context";
import { IconGrid } from "./icon-grid";
import { IconSearch } from "./icon-search";
import { IconBottomInfomation } from "./icon-bottom-infomation";

interface Props {
  iconStyle: "multicolor" | "monochrome";
}

export const Icons = ({ iconStyle }: Props) => {
  const IconData = iconStyle === "multicolor" ? MulticolorData : MonochromeData;
  const Components = iconStyle === "multicolor" ? MulticolorComponents : MonochormeComponents;
  return (
    <IconProvider iconStyle={iconStyle} iconData={IconData} iconComponents={Components}>
      <IconSearch />
      <IconGrid />
      <IconBottomInfomation />
    </IconProvider>
  );
};
