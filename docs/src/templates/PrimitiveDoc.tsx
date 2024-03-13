import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import TableOfContents from "../components/TableOfContents";
import * as style from "./PrimitiveCommon.css";

export const query = graphql`
  query PrimitiveDocTemplate($id: String) {
    primitiveMetaJson(id: { eq: $id }) {
      name
      description
      primitive {
        childMdx {
          tableOfContents
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;

const DocsTemplate: React.FC<
  PageProps<GatsbyTypes.PrimitiveDocTemplateQuery>
> = ({ data, children }) => {
  const { name, description } = data.primitiveMetaJson!;
  const tableOfContents =
    data.primitiveMetaJson?.primitive?.childMdx?.tableOfContents;
  return (
    <>
      <article className={style.content}>
        <h1 className={style.title}>{name}</h1>
        <p className={style.titleDescription}>{description}</p>
        <div className={style.markdown}>{children}</div>
      </article>
      <TableOfContents tableOfContents={tableOfContents} />
    </>
  );
};

export const Head: HeadFC<GatsbyTypes.PrimitiveDocTemplateQuery> = ({
  data,
}) => {
  const { name, description } = data.primitiveMetaJson!;
  return <SEO name={`${name}`} description={`${description}`} />;
};

export default DocsTemplate;
