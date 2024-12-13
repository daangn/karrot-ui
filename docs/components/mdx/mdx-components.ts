import { ComponentExample } from "@/components/component-example";
import { ComponentSpecBlock } from "@/components/component-spec-block";
import { Installation } from "@/components/installation";
import { SanityGuideline } from "@/components/sanity/sanity-content";
import { StackflowExample } from "@/components/stackflow-example";
import { TokenTable } from "@/components/token-table";
import { createTypeTable } from "fumadocs-typescript/ui";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { AtomIcon } from "lucide-react";

const { AutoTypeTable } = createTypeTable();

export const mdxComponents = {
  ...defaultMdxComponents,
  Installation,
  ComponentExample,
  TokenTable,
  ComponentSpecBlock,
  SanityGuideline: SanityGuideline,
  Tab,
  Tabs,
  Step,
  Steps,
  File,
  Folder,
  Files,
  AtomIcon,
  StackflowExample,
  AutoTypeTable,
};
