import "./src/styles/global.css";

import type { WrapPageElementBrowserArgs } from "gatsby";

import Layout from "./src/_Layout";
import Root from "./src/_Root";

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  const layoutType = props.location.pathname === "/" ? "main" : "document";

  return (
    <Root>
      <Layout type={layoutType}>{element}</Layout>
    </Root>
  );
};
