import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "guideline",
  title: "가이드라인",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "가이드라인 이름",
      description: "가이드라인 이름은 변경하지 말아주세요.",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "가이드라인",
      description: "가이드라인을 입력해주세요.",
      type: "blockContent",
    }),
    defineField({
      name: "publishedAt",
      title: "출시일",
      type: "datetime",
    }),
  ],
});
