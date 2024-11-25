// parser
export interface ColorExpression {
  type: "color";
  value: string;
}

export interface DimensionExpression {
  type: "dimension";
  value: number;
  unit: "px" | "rem";
}

export interface NumberExpression {
  type: "number";
  value: number;
}

export interface DurationExpression {
  type: "duration";
  value: number;
  unit: "ms" | "s";
}

export interface CubicBezierExpression {
  type: "cubicBezier";
  value: readonly [number, number, number, number];
}

export interface ShadowItemExpression {
  color: string;
  offsetX: { value: number; unit: "px" | "rem" };
  offsetY: { value: number; unit: "px" | "rem" };
  blur: { value: number; unit: "px" | "rem" };
  spread: { value: number; unit: "px" | "rem" };
}

export interface ShadowExpression {
  type: "shadow";
  value: ShadowItemExpression[];
}

export type PrimitiveExpression =
  | ColorExpression
  | DimensionExpression
  | NumberExpression
  | DurationExpression
  | CubicBezierExpression
  | ShadowExpression;

export interface TokenExpression {
  type: "token";
  group: string[];
  key: string;
}

export type ComponentSpecExpression = Array<{
  key: Record<string, string>;
  state: Array<{
    key: string[];
    slot: Array<{
      key: string;
      property: Array<{
        key: string;
        value: PrimitiveExpression | TokenExpression;
      }>;
    }>;
  }>;
}>;

export interface TokenDeclaration {
  collection: string;
  token: TokenExpression;
  values: Array<{
    mode: string;
    value: PrimitiveExpression | TokenExpression;
  }>;
}

export interface TokenCollectionDeclaration {
  name: string;
  modes: string[];
}

export interface RootageAST {
  componentSpecs: ComponentSpecExpression[];
  tokens: TokenDeclaration[];
  tokenCollections: TokenCollectionDeclaration[];
}

// models
export type ColorShorthand = `#${string}`;
export type DimensionShorthand = `${number}px` | `${number}rem`;
export type NumberShorthand = number;
export type DurationShorthand = `${number}${"ms" | "s"}`;
export type CubicBezier = {
  type: "cubicBezier";
  value: readonly [number, number, number, number];
};
export type Shadow = {
  type: "shadow";
  value: Array<{
    color: ColorShorthand;
    offsetX: DimensionShorthand;
    offsetY: DimensionShorthand;
    blur: DimensionShorthand;
    spread: DimensionShorthand;
  }>;
};
export type TokenRef = `$${string}`;

export type Primitive =
  | ColorShorthand
  | DimensionShorthand
  | NumberShorthand
  | DurationShorthand
  | CubicBezier
  | Shadow;
export type RighthandValue = Primitive | TokenRef;

export interface ComponentSpecModel {
  kind: "ComponentSpec";
  metadata: {
    id: string;
    name: string;
  };
  data: ComponentSpecData;
}

export interface ComponentSpecData {
  [variantExpression: string]: {
    [state: string]: {
      [slot: string]: {
        [property: string]: RighthandValue;
      };
    };
  };
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
    [tokenName: string]: {
      values: {
        [mode: string]: RighthandValue;
      };
    };
  };
}

export interface TokenCollectionsModel {
  kind: "TokenCollections";
  metadata: {
    id: string;
    name: string;
  };
  data: TokenCollectionsData;
}

export type TokenCollectionsData = TokenCollectionDeclaration[];

export type Model = ComponentSpecModel | TokensModel | TokenCollectionsModel;
