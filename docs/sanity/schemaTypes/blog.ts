import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "블로그",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "블로그 제목",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "블로그 설명",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "블로그 url",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "thumbnail",
      title: "블로그 썸네일",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "블로그 내용",
      description: "블로그 내용을 입력해주세요.",
      type: "blockContent",
    }),
    defineField({
      name: "publishedAt",
      title: "블로그 출시일",
      type: "datetime",
    }),
  ],
});
