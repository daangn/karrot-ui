import { defineArrayMember, defineType } from "sanity";
import { imageFieldType } from "./imageType";

export const doDontSectionType = defineType({
  name: "doDontSection",
  title: "섹션",
  type: "object",
  fields: [
    {
      name: "type",
      title: "타입",
      type: "string",
      options: {
        list: [
          { title: "Do", value: "do" },
          { title: "Don't", value: "dont" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    imageFieldType, // 기존 imageFieldType 재사용
    {
      name: "description",
      title: "설명",
      type: "text",
    },
  ],
});

export const doDontType = defineArrayMember({
  name: "doDont",
  title: "Do & Don't",
  type: "object",
  fields: [
    {
      name: "first",
      title: "첫 번째 섹션",
      type: "doDontSection",
    },
    {
      name: "second",
      title: "두 번째 섹션",
      type: "doDontSection",
    },
  ],
  preview: {
    select: {
      firstType: "first.type",
      secondType: "second.type",
      firstImage: "first.imageField.uploadImage",
      firstUrl: "first.imageField.externalUrl",
      firstImageType: "first.imageField.imageType",
    },
    prepare({ firstType, secondType, firstImage, firstUrl, firstImageType }) {
      const image =
        firstImageType === "upload"
          ? firstImage
          : firstUrl
            ? { _type: "image", asset: { _type: "reference", url: firstUrl } }
            : undefined;

      const title = secondType
        ? `${firstType?.toUpperCase()} & ${secondType?.toUpperCase()}`
        : firstType?.toUpperCase();

      return {
        title,
        media: image,
      };
    },
  },
});
