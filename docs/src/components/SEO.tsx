import { graphql, useStaticQuery } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import { useEffect, useState } from "react";

interface SEOProps {
  name?: string;
  description: string;
}

const SEO = ({ name, description }: SEOProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const data = useStaticQuery<GatsbyTypes.SEOQuery>(graphql`
    query SEO {
      ogImage: imageSharp(original: { src: { regex: "/ogimage/" } }) {
        gatsbyImageData(layout: FIXED)
      }
      blackFavicon: file(
        name: { eq: "seed_favicon_black" }
        ext: { eq: ".svg" }
      ) {
        publicURL
      }
      whiteFavicon: file(
        name: { eq: "seed_favicon_white" }
        ext: { eq: ".svg" }
      ) {
        publicURL
      }
    }
  `);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setMode(isDark ? "dark" : "light");
  }, []);

  const nameWithPrefix = (name ? `${name} | ` : "") + "SEED Design";

  return (
    <>
      <title>{nameWithPrefix}</title>
      <meta property="og:title" content={nameWithPrefix} />
      <meta property="description" content={description} />
      <meta property="og:image" content={getSrc(data.ogImage!)} />
      {mode === "dark" ? (
        <link rel="icon" href={data.whiteFavicon!.publicURL!} />
      ) : (
        <link rel="icon" href={data.blackFavicon!.publicURL!} />
      )}
    </>
  );
};

export default SEO;
