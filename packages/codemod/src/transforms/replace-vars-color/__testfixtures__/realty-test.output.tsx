// @ts-nocheck
import { vars } from "@seed-design/css/vars";
import { IconHeartFill, IconHeartLine } from "@daangn/react-monochrome-icon";
import useSessionState from "hooks/useSessionState";
import useWatchArticle from "hooks/mutation/useWatchArticle";
import { graphql, useFragment } from "react-relay";
import NudgeEventCollector from "utils/EventCollector";
import Logger from "utils/Logger";
import { ActionHistoryKey, LocalStorage } from "utils/Storage";
import type { WatchButton_article$key } from "__generated__/WatchButton_article.graphql";
import { readArticleMainTrade } from "utils/Article";
import { cn } from "styles/utils";

type Props = {
  articleRef: WatchButton_article$key;
  size?: number;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onWatchArticle?: () => void;
  enableClickAnimation?: boolean;
  position: string;
};

function WatchButton({
  articleRef,
  size = 24,
  color = vars.$color.palette.gray700,
  onClick,
  onWatchArticle,
  position,
  enableClickAnimation = true,
}: Props) {
  const { checkIsLogin } = useSessionState();

  const article = useFragment(
    graphql`
      fragment WatchButton_article on Article {
        id
        originalId
        isViewerWatched
        bizProfile {
          name
          originalId
        }
        salesTypeV2 {
          type
        }
        area
        ...ArticleMainTrade_article
        ...useWatchArticle_Article
      }
    `,
    articleRef,
  );

  const { watchArticle, unWatchArticle, isUnWatchArticleInFlight, isWatchArticleInFlight } =
    useWatchArticle(article);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    if (!checkIsLogin()) return;

    if (article.isViewerWatched) {
      unWatchArticle({
        onCompleted: () => {
          Logger.track("article_card_watch_button_unlike", {
            article_id: article.originalId,
            position,
          });

          if (article.bizProfile) {
            LocalStorage.removeWatchedArticle(article.originalId);
          }
        },
      });
    } else {
      watchArticle({
        onCompleted: () => {
          if (article.bizProfile) {
            LocalStorage.addWatchedArticle({
              articleId: article.originalId,
              bizProfileId: article.bizProfile.originalId,
            });
          }

          onWatchArticle?.();

          Logger.track("article_card_watch_button_like", {
            article_id: article.originalId,
            position,
          });

          Logger.appsflyerLog("click_realty_article_card_watch_button_like");
          Logger.brazeLog("click_realty_article_card_watch_button_like", {
            sales_type: article.salesTypeV2.type,
            trade_type: readArticleMainTrade(article).mainTrade.type,
            area: article.area,
          });

          if (!LocalStorage.getActionHistory(ActionHistoryKey.WatchArticle)) {
            LocalStorage.setActionHistory(ActionHistoryKey.WatchArticle);
            NudgeEventCollector.push({
              key: "ClickLike",
              value: true,
            });
          }
        },
      });
    }
  };

  return (
    (<button
      className="-m-1.5 inline-block p-1.5"
      disabled={isWatchArticleInFlight || isUnWatchArticleInFlight}
      onClick={handleClick}
    >
      {article.isViewerWatched ? (
        <IconHeartFill
          width={size}
          height={size}
          className={cn(enableClickAnimation && "animate-heartBounce")}
          color={vars.$color.palette.carrot600}
        />
      ) : (
        <IconHeartLine width={size} height={size} color={color} />
      )}
    </button>)
  );
}

export default WatchButton;
