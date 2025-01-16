import { defineArrayMember } from "sanity";
import { imageFieldType } from "./imageType";

export const doDontType = defineArrayMember({
  name: "doDont",
  title: "Do & Don't",
  type: "object",
  fields: [
    {
      name: "do",
      title: "Do",
      type: "object",
      fields: [
        imageFieldType,
        {
          name: "description",
          title: "설명",
          type: "text",
        },
      ],
    },
    {
      name: "dont",
      title: "Don't",
      type: "object",
      fields: [
        imageFieldType,
        {
          name: "description",
          title: "설명",
          type: "text",
        },
      ],
    },
  ],
  preview: {
    select: {
      doUploadImage: "do.imageField.uploadImage",
      doExternalUrl: "do.imageField.externalUrl",
      doImageType: "do.imageField.imageType",
      dontUploadImage: "dont.imageField.uploadImage",
      dontExternalUrl: "dont.imageField.externalUrl",
      dontImageType: "dont.imageField.imageType",
    },
    prepare({
      doUploadImage,
      doExternalUrl,
      doImageType,
      dontUploadImage,
      dontExternalUrl,
      dontImageType,
    }) {
      const doImage =
        doImageType === "upload"
          ? doUploadImage
          : doExternalUrl
            ? { _type: "image", asset: { _type: "reference", url: doExternalUrl } }
            : undefined;

      const dontImage =
        dontImageType === "upload"
          ? dontUploadImage
          : dontExternalUrl
            ? { _type: "image", asset: { _type: "reference", url: dontExternalUrl } }
            : undefined;

      return {
        title: "Do & Don't",
        media: doImage || dontImage,
      };
    },
  },
});
