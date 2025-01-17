import * as changeCase from "change-case";
import { cva } from "class-variance-authority";
import * as React from "react";
import { useIcon } from "./icon-context";
import { Tag } from "./tags";

// 타입 정의
type IconComponentType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement> & { size?: number | string }, "ref"> &
    React.RefAttributes<SVGSVGElement>
>;

// 아이콘 컴포넌트
const IconItem = ({
  iconName,
  IconComponent,
  isSelected,
  isDanger,
  metadataString,
  onSelect,
}: {
  iconName: string;
  IconComponent: IconComponentType;
  isSelected: boolean;
  isDanger: boolean;
  metadataString: string;
  onSelect: (name: string) => void;
}) => {
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

  return (
    <div
      onClick={() => onSelect(iconName)}
      className={iconComponentVariants({
        danger: isDanger,
        selected: isSelected,
      })}
      data-metadatas={metadataString}
    >
      <IconComponent />
    </div>
  );
};

// 메인 컴포넌트
export const IconGrid = () => {
  const {
    iconComponents,
    iconData,
    search,
    setSelectedIconName,
    setIconStyle,
    selectedIcon,
    iconStyle,
  } = useIcon();

  const handleIconSelect = (iconName: string, iconStyle: "monochrome" | "multicolor") => {
    const isSameIcon = selectedIcon?.name === iconName;
    if (isSameIcon) {
      setSelectedIconName("");
      return;
    }

    setIconStyle(iconStyle);
    setSelectedIconName(iconName);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-4">
      {Object.keys(iconComponents[iconStyle]).map((iconName) => {
        const snakeCaseIconName = changeCase.snakeCase(iconName);
        const metadataString = iconData[iconStyle][snakeCaseIconName]?.metadatas.join(", ");
        const dangerTags = [Tag.figmaNotPublished, Tag.fat, Tag.service];
        const isDanger =
          iconStyle === "multicolor" ||
          iconData[iconStyle][snakeCaseIconName]?.metadatas.some((metadata) =>
            dangerTags.includes(metadata),
          );

        const shouldRenderIcon =
          search === "" || metadataString?.includes(search) || snakeCaseIconName.includes(search);
        if (!shouldRenderIcon) {
          return null;
        }

        return (
          <IconItem
            key={iconName}
            iconName={snakeCaseIconName}
            IconComponent={iconComponents[iconStyle][iconName] as IconComponentType}
            isSelected={selectedIcon?.name === snakeCaseIconName}
            isDanger={isDanger}
            metadataString={metadataString}
            onSelect={(iconName) => handleIconSelect(iconName, iconStyle)}
          />
        );
      })}
    </div>
  );
};
