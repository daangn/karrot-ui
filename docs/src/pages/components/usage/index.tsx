import { motion } from "framer-motion";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

import Sidebar from "../../../components/Sidebar";
import { fadeInFromBottom } from "../../../framer-motions";
import * as listPageStyle from "../../../styles/list-page.css";
import * as t from "../../../styles/token.css";

interface PageProps {
  data: GatsbyTypes.UsagePageQuery;
}

export const query = graphql`
  query UsagePage {
    configsJson {
      components {
        usage {
          document {
            childMdx {
              frontmatter {
                description
                slug
                title
                thumbnail {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Page = ({ data }: PageProps) => {
  const docs = data.configsJson?.components?.usage!;

  return (
    <main className={t.main}>
      <Sidebar />
      <article className={listPageStyle.content}>
        <h1 className={listPageStyle.title}>Spec - Style</h1>
        <p className={listPageStyle.caption1}>
          {/* TODO: 수정하기 */}
          Styles are headless components that are used to build other
          components.
        </p>
        <motion.div className={listPageStyle.grid} {...fadeInFromBottom}>
          {docs?.map((doc) => {
            const { description, slug, thumbnail, title } =
              doc?.document?.childMdx?.frontmatter!;
            return (
              <Link key={slug} to={slug!}>
                <div className={listPageStyle.gridItem}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={listPageStyle.gridItemImage}
                  >
                    <GatsbyImage
                      draggable={false}
                      image={thumbnail?.childImageSharp?.gatsbyImageData!}
                      alt={title!}
                    />
                  </motion.div>
                  <h2 className={listPageStyle.gridItemTitle}>{title}</h2>
                  <p className={listPageStyle.gridItemDescription}>
                    {description}
                  </p>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </article>
    </main>
  );
};

// TODO: 수정하기
export const Head: HeadFC<GatsbyTypes.UsagePageQuery> = () => {
  return (
    <>
      <title>Seed Design | Usage</title>
      <meta property="og:title" content="Seed Design | Usage" />
      <meta property="description" content="당근마켓 디자인시스템입니다." />
    </>
  );
};

export default Page;
