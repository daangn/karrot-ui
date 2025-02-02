export type TokenRef = `$${string}`;

export type ColorLit = `#${string}`;
export type DimensionLit = {
  value: number;
  unit: "px" | "rem";
};
export type DurationLit = {
  value: number;
  unit: "ms" | "s";
};

export type Color = {
  type: "color";
  value: ColorLit | TokenRef;
};
export type Dimension = {
  type: "dimension";
  value: DimensionLit | TokenRef;
};
export type Number = {
  type: "number";
  value: number | TokenRef;
};
export type Duration = {
  type: "duration";
  value: DurationLit | TokenRef;
};
export type CubicBezier = {
  type: "cubicBezier";
  value: readonly [number, number, number, number] | TokenRef;
};
export type ShadowLayer = {
  color: ColorLit;
  offsetX: DimensionLit;
  offsetY: DimensionLit;
  blur: DimensionLit;
  spread: DimensionLit;
};
export type Shadow = {
  type: "shadow";
  value: ShadowLayer[] | TokenRef;
};
export type GradientStop = {
  color: ColorLit;
  position: number;
};
export type Gradient = {
  type: "gradient";
  value: Array<GradientStop> | TokenRef;
};

export type Value = Color | Dimension | Number | Duration | CubicBezier | Shadow | Gradient;

export interface ComponentSpecModel {
  kind: "ComponentSpec";
  metadata: {
    id: string;
    name: string;
  };
  data: ComponentSpecData;
}

export interface VariantDeclaration {
  variants: Record<string, string>;
  definitions: Array<{
    states: string[];
    slots: {
      [slot: string]: {
        [property: string]: Value;
      };
    };
  }>;
}

export interface ComponentSpecData {
  id: string;
  name: string;
  definitions: VariantDeclaration[];
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

export type Model = ComponentSpecModel | TokensModel | TokenCollectionsModel;
