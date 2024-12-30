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

export interface GradientItemExpression {
  color: string;
  position: number;
}

export interface GradientExpression {
  type: "gradient";
  value: GradientItemExpression[];
}

export type ValueExpression =
  | ColorExpression
  | DimensionExpression
  | NumberExpression
  | DurationExpression
  | CubicBezierExpression
  | ShadowExpression
  | GradientExpression;

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
        value: ValueExpression | TokenExpression;
      }>;
    }>;
  }>;
}>;

export interface ComponentSpecDeclaration {
  id: string;
  name: string;
  data: ComponentSpecExpression;
}

export interface TokenDeclaration {
  collection: string;
  token: TokenExpression;
  values: Array<{
    mode: string;
    value: ValueExpression | TokenExpression;
  }>;
  description?: string;
}

export interface TokenCollectionDeclaration {
  name: string;
  modes: string[];
}

export interface RootageAST {
  componentSpecs: ComponentSpecDeclaration[];
  tokens: TokenDeclaration[];
  tokenCollections: TokenCollectionDeclaration[];
}

// resolver
export interface ResolvedTokenResult {
  path: TokenRef[];
  value: ValueExpression;
}

// ctx
export interface DependencyNode {
  name: TokenRef;
  collection: string;
  dependencies: {
    [mode: string]: TokenRef | undefined;
  };
}

export interface DependencyGraph {
  [tokenRef: TokenRef]: DependencyNode;
}

export type ComponentSpecRef = string; // {ComponentSpecId}.{VariantExpression}.{State}.{Slot}.{Property}
export interface ReferenceNode {
  name: TokenRef;
  collection: string;
  references: {
    [collection: string]: (TokenRef | ComponentSpecRef)[];
  };
}

export interface ReferenceGraph {
  [tokenRef: TokenRef]: ReferenceNode;
}

export interface RootageCtx {
  tokenIds: TokenRef[];
  tokenEntities: Record<TokenRef, TokenDeclaration>;
  tokenCollectionIds: string[];
  tokenCollectionEntities: Record<string, TokenCollectionDeclaration>;
  componentSpecIds: string[];
  componentSpecEntities: Record<string, ComponentSpecDeclaration>;
  dependencyGraph: DependencyGraph;
  referenceGraph: ReferenceGraph;
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
export type Gradient = {
  type: "gradient";
  value: Array<{
    color: ColorShorthand;
    position: number;
  }>;
};
export type TokenRef = `$${string}`;

export type Value =
  | ColorShorthand
  | DimensionShorthand
  | NumberShorthand
  | DurationShorthand
  | CubicBezier
  | Shadow
  | Gradient;
export type RighthandValue = Value | TokenRef;

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
    [tokenName: TokenRef]: {
      values: {
        [mode: string]: RighthandValue;
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
  data: TokenCollectionsData;
}

export type TokenCollectionsData = TokenCollectionDeclaration[];

export type Model = ComponentSpecModel | TokensModel | TokenCollectionsModel;
