import { useFlow } from "@stackflow/react/future";
import { Inline, Stack } from "seed-design/ui/layout";
import { Text } from "seed-design/ui/text";
import { Badge } from "seed-design/ui/badge";
import { CATEGORIES, type Article } from "@/components/example/demo/data";
import { ArticleAuthor } from "@/components/example/demo/components/article-author";
import { formatDate } from "@/components/example/demo/utils/date";

type ArticleProps = Article & {};

export function ArticleListItem(article: ArticleProps) {
  const { title, content, author, categoryId, createdAt, isPopular } = article;
  const categoryName = CATEGORIES.find((c) => c.id === categoryId)?.name;
  const { push } = useFlow();

  return (
    <Stack
      as="button"
      onClick={() => push("demo/article-detail", { article })}
      style={{ textAlign: "start" }}
      gap="s2_5"
      paddingX="spacingX.globalGutter"
      paddingY="s1"
    >
      <Inline justifyContent="spaceBetween" alignItems="center">
        <ArticleAuthor author={author} />
      </Inline>
      <Stack gap="s2">
        <Stack gap="s1">
          <Text as="h1" textStyle="bodyMediumStrong" color="fg.neutral" maxLines={1}>
            {title}
          </Text>
          <Text as="p" textStyle="bodySmallDefault" color="fg.neutralMuted" maxLines={2}>
            {content}
          </Text>
        </Stack>
        <Inline alignItems="center" gap="s2">
          {isPopular && (
            <Badge variant="outline" tone="brand">
              인기
            </Badge>
          )}
          <Text textStyle="bodySmallDefault" color="fg.neutralSubtle">
            {categoryName} ⸱ 서초2동 ⸱ {formatDate(createdAt)}
          </Text>
        </Inline>
      </Stack>
    </Stack>
  );
}
