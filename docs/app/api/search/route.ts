import { source } from "@/app/source";
import { tokenizer } from "@orama/orama/components";
import { AdvancedIndex, createSearchAPI } from "fumadocs-core/search/server";

// it should be cached forever
export const revalidate = false;

const defaultTokenizer = await tokenizer.createTokenizer({
  language: "english",
});

const normalizeToken = tokenizer.normalizeToken.bind(defaultTokenizer, "");

function trim(text: string[]): string[] {
  while (text[text.length - 1] === "") {
    text.pop();
  }
  while (text[0] === "") {
    text.shift();
  }
  return text;
}

function tokenize(input: string): string[] {
  if (typeof input !== "string") {
    return [input];
  }

  const splitRule = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣|A-Za-zàèéìòóù0-9_'-]+/gim;
  const tokens = input
    .toLowerCase()
    .split(splitRule)
    .map((t) => normalizeToken(t))
    .filter(Boolean);

  const trimTokens = trim(tokens);

  return Array.from(new Set(trimTokens));
}

export const { staticGET: GET } = createSearchAPI("advanced", {
  indexes: () =>
    Promise.all(
      source.getPages().map(async (page) => {
        const { structuredData } = await page.data.load();

        return {
          id: page.url,
          title: page.data.title,
          description: page.data.description,
          structuredData,
          tag: page.slugs[0],
          url: page.url,
        } satisfies AdvancedIndex;
      }),
    ),
  tokenizer: {
    language: "english",
    tokenize: (raw) => tokenize(raw),
  },
});
