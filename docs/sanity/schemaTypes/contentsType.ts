import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contentsType = defineType({
  name: "contents",
  title: "Contents",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "컨텐츠 이름",
      description: "컨텐츠 이름은 변경하지 말아주세요.",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "컨텐츠",
      description: "컨텐츠를 입력해주세요.",
      type: "blockContent",
    }),
    defineField({
      name: "publishedAt",
      title: "출시일",
      type: "datetime",
    }),
  ],
});
