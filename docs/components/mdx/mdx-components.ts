import { ComponentExample } from "@/components/component-example";
import { ComponentSpecBlock } from "@/components/component-spec-block";
import { Installation } from "@/components/installation";
import { SanityGuideline } from "@/components/sanity/sanity-content";
import { StackflowExample } from "@/components/stackflow-example";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { AtomIcon } from "lucide-react";
import { createReactTypeTable } from "../react-type-table";
import { TokenReference } from "../token-reference";

const { ReactTypeTable } = createReactTypeTable();

export const mdxComponents = {
  ...defaultMdxComponents,
  Installation,
  ComponentExample,
  TokenReference,
  ComponentSpecBlock,
  SanityGuideline,
  Tab,
  Tabs,
  Step,
  Steps,
  File,
  Folder,
  Files,
  AtomIcon,
  StackflowExample,
  ReactTypeTable,
};
