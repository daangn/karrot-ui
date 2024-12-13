import { type SchemaTypeDefinition } from "sanity";

import blockContentType from "./blockContent";
import guidelineType from "./guideline";
import blogType from "./blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, guidelineType, blogType],
};
