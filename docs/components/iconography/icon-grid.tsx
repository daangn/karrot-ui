import * as changeCase from "change-case";
import * as React from "react";

import { cva } from "class-variance-authority";
import { useIcon } from "./icon-context";
import { Tag } from "./tags";
import { getServiceName } from "./utils";

export const IconGrid = () => {
  const { iconComponents, iconData, search, setSelectedIcon, selectedIcon, iconStyle } = useIcon();

  const onSelect = (iconName: string) => {
    const isSameIcon = selectedIcon?.name === iconName;
    if (isSameIcon) {
      setSelectedIcon(undefined);
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("icon", iconName);
    const url = `${window.location.pathname}?${searchParams.toString()}`;
    setSelectedIcon(iconData[iconName]);
    window.history.pushState({}, "", url);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-4">
      {Object.keys(iconComponents).map((iconName) => {
        const IconComponent = iconComponents[iconName] as React.ForwardRefExoticComponent<
          Omit<
            React.SVGProps<SVGSVGElement> & {
              size?: number | string;
            },
            "ref"
          > &
            React.RefAttributes<SVGSVGElement>
        >;
        const snakeCaseIconName = changeCase.snakeCase(iconName);
        const isSelected = selectedIcon?.name === snakeCaseIconName;
        const metadataString = iconData[snakeCaseIconName]?.metadatas.join(", ");

        if (search !== "" && !metadataString.includes(search)) {
          return null;
        }

        const iconComponentVariants = cva(
          "relative aspect-square rounded-md flex items-center justify-center cursor-pointer transition-colors",
          {
            variants: {
              selected: {
                true: "bg-seed-bg-brand-weak hover:bg-seed-bg-brand-weak-pressed border-seed-stroke-brand",
                false: "bg-seed-bg-layer-default hover:bg-seed-bg-layer-default-pressed",
              },
              danger: {
                true: "border-seed-stroke-danger border-[1px] bg-seed-bg-danger-weak",
                false: "border-[1px]",
              },
            },
          },
        );

        const dangerTags = [Tag.figmaNotPublished, Tag.fat, Tag.service];
        const isDanger =
          iconStyle === "multicolor" ||
          iconData[snakeCaseIconName]?.metadatas.some((metadata) => dangerTags.includes(metadata));

        return (
          <div
            onClick={() => onSelect(snakeCaseIconName)}
            key={iconName}
            className={iconComponentVariants({
              danger: isDanger,
              selected: isSelected,
            })}
            data-metadatas={metadataString}
          >
            <IconComponent />
          </div>
        );
      })}
    </div>
  );
};
