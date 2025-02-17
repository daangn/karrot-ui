export type TokenRef = `$${string}`;

export type Color = `#${string}`;
export type Dimension = `${number}px` | `${number}rem`;
export type Number = number;
export type Duration = `${number}${"ms" | "s"}`;
export type CubicBezier = {
  type: "cubicBezier";
  value: readonly [number, number, number, number];
};
export type ShadowLayer = {
  color: Color;
  offsetX: Dimension;
  offsetY: Dimension;
  blur: Dimension;
  spread: Dimension;
};
export type Shadow = {
  type: "shadow";
  value: ShadowLayer[];
};
export type GradientStop = {
  color: Color;
  position: Number;
};
export type Gradient = {
  type: "gradient";
  value: GradientStop[];
};

export type Value =
  | Color
  | Dimension
  | Number
  | Duration
  | CubicBezier
  | Shadow
  | Gradient
  | TokenRef;

export interface TokenCollectionsModel {
  kind: "TokenCollections";
  metadata: {
    id: string;
    name: string;
  };
  data: Array<{
    name: string;
    modes: string[];
  }>;
}

export interface TokensModel {
  kind: "Tokens";
  metadata: {
    id: string;
    name: string;
  };
  data: TokensData;
}

export interface TokensData {
  collection: string;
  tokens: {
    [tokenName: TokenRef]: {
      values: {
        [mode: string]: Value;
      };
      description?: string;
    };
  };
}

export interface ComponentSpecModel {
  kind: "ComponentSpec";
  metadata: {
    id: string;
    name: string;
  };
  data: ComponentSpecData;
}

export interface ComponentSpecData {
  schema?: ComponentSpecSchema;
  definitions: ComponentSpecDefinitions;
}

export interface ComponentSpecVariantDefinitions {
  [state: string]: {
    [slot: string]: {
      [property: string]: Value;
    };
  };
}

export interface ComponentSpecDefinitions {
  [variantExpression: string]: ComponentSpecVariantDefinitions;
}

export interface ComponentSpecPropertySchema {
  name: string;
  type: "color" | "dimension" | "number" | "duration" | "cubicBezier" | "shadow" | "gradient";
  description?: string;
}

export interface ComponentSpecSlotSchema {
  name: string;
  properties: ComponentSpecPropertySchema[];
  description?: string;
}

export interface ComponentSpecSchema {
  slots: ComponentSpecSlotSchema[];
}

export type Model = TokenCollectionsModel | TokensModel | ComponentSpecModel;
