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
      description: "이름은 Sanity에서 사용되는 이름입니다.",
      type: "string",
    }),
    defineField({
      name: "path",
      title: "가이드라인 path",
      description: "가이드라인 path는 seed-design.io를 제외한 나머지 path를 붙여주세요. docs는 생략해주세요. (ex: design/foundation/iconography/library)",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "카테고리",
      type: "reference",
      to: [{ type: "category" }],
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
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
    },
  },
});
