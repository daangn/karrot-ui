import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { contentsType } from "./contentsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, contentsType],
};
