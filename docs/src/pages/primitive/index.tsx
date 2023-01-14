import { motion } from "framer-motion";
import type { HeadFC } from "gatsby";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import PageLayout from "../../components/PageLayout";
import { elevateUp, fadeInFromBottom } from "../../framer-motions";
import * as listPageStyle from "../../styles/page-styles/list-page.css";

interface PageProps {
  data: GatsbyTypes.PrimitiveListPageQuery;
}

export const query = graphql`
  query PrimitiveListPage {
    allComponentInfoJson(filter: { primitive: { status: { eq: "done" } } }) {
      nodes {
        primitive {
          path {
            childMdx {
              ...ListPageMdxContent
            }
          }
        }
      }
    }
  }
`;

const Page = ({ data }: PageProps) => {
  const primitivies = data.allComponentInfoJson.nodes;

  return (
    <PageLayout>
      <h1 className={listPageStyle.title}>Primitive</h1>
      <p className={listPageStyle.caption1}>
        컴포넌트의 시각적 정의를 제외한 본질적인 기능과 동작에 대한 정의
      </p>
      <motion.div className={listPageStyle.grid} {...fadeInFromBottom}>
        {primitivies?.map((primitive) => {
          const title =
            primitive?.primitive?.path?.childMdx?.frontmatter?.title!;
          const description =
            primitive?.primitive?.path?.childMdx?.frontmatter?.description!;
          const thumbnail =
            primitive?.primitive?.path?.childMdx?.frontmatter?.thumbnail
              ?.childImageSharp?.gatsbyImageData!;
          const slug = primitive?.primitive?.path?.childMdx?.frontmatter?.slug!;

          return (
            <Link key={slug} to={slug}>
              <motion.div {...elevateUp} className={listPageStyle.gridItem}>
                <div className={listPageStyle.gridItemImage}>
                  <GatsbyImage
                    draggable={false}
                    image={thumbnail}
                    alt={title}
                  />
                </div>
                <h2 className={listPageStyle.gridItemTitle}>{title}</h2>
                <p className={listPageStyle.gridItemDescription}>
                  {description}
                </p>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </PageLayout>
  );
};

// TODO: 수정하기
export const Head: HeadFC<GatsbyTypes.PrimitiveListPageQuery> = () => {
  return (
    <>
      <title>Seed Design | Primitive</title>
      <meta property="og:title" content="Seed Design | Primitive" />
      <meta property="description" content="당근마켓 디자인시스템입니다." />
    </>
  );
};

export default Page;
