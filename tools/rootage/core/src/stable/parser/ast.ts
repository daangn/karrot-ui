export interface ColorHexLit {
  kind: "ColorHexLit";
  value: `#${string}`;
}

export interface DimensionLit {
  kind: "DimensionLit";
  value: number;
  unit: "px" | "rem";
}

export interface DurationLit {
  kind: "DurationLit";
  value: number;
  unit: "ms" | "s";
}

export interface NumberLit {
  kind: "NumberLit";
  value: number;
}

export interface CubicBezierLit {
  kind: "CubicBezierLit";
  value: readonly [number, number, number, number];
}

export interface ShadowLayerLit {
  kind: "ShadowLayerLit";
  color: ColorHexLit;
  offsetX: DimensionLit;
  offsetY: DimensionLit;
  blur: DimensionLit;
  spread: DimensionLit;
}

export interface ShadowLit {
  kind: "ShadowLit";
  layers: ShadowLayerLit[];
}

export interface GradientStopLit {
  kind: "GradientStopLit";
  color: ColorHexLit;
  position: NumberLit;
}

export interface GradientLit {
  kind: "GradientLit";
  stops: GradientStopLit[];
}

export interface TokenLit {
  kind: "TokenLit";
  group: string[];
  key: string;
}

export type ValueLit =
  | ColorHexLit
  | DimensionLit
  | DurationLit
  | NumberLit
  | CubicBezierLit
  | ShadowLit
  | GradientLit;

export interface ColorPropertyDeclaration {
  kind: "ColorPropertyDeclaration";
  property: string;
  value: ColorHexLit | TokenLit;
}

export interface DimensionPropertyDeclaration {
  kind: "DimensionPropertyDeclaration";
  property: string;
  value: DimensionLit | TokenLit;
}

export interface NumberPropertyDeclaration {
  kind: "NumberPropertyDeclaration";
  property: string;
  value: NumberLit | TokenLit;
}

export interface DurationPropertyDeclaration {
  kind: "DurationPropertyDeclaration";
  property: string;
  value: DurationLit | TokenLit;
}

export interface CubicBezierPropertyDeclaration {
  kind: "CubicBezierPropertyDeclaration";
  property: string;
  value: CubicBezierLit | TokenLit;
}

export interface ShadowPropertyDeclaration {
  kind: "ShadowPropertyDeclaration";
  property: string;
  value: ShadowLit | TokenLit;
}

export interface GradientPropertyDeclaration {
  kind: "GradientPropertyDeclaration";
  property: string;
  value: GradientLit | TokenLit;
}

export type PropertyDeclaration =
  | ColorPropertyDeclaration
  | DimensionPropertyDeclaration
  | NumberPropertyDeclaration
  | DurationPropertyDeclaration
  | CubicBezierPropertyDeclaration
  | ShadowPropertyDeclaration
  | GradientPropertyDeclaration;

export interface SlotDeclaration {
  kind: "SlotDeclaration";
  slot: string;
  body: PropertyDeclaration[];
}

export interface StateExpression {
  kind: "StateExpression";
  value: string;
}

export interface StateDeclaration {
  kind: "StateDeclaration";
  states: StateExpression[];
  body: SlotDeclaration[];
}

export interface VariantExpression {
  kind: "VariantExpression";
  name: string;
  value: string;
}

export interface VariantDeclaration {
  kind: "VariantDeclaration";
  variants: VariantExpression[];
  body: StateDeclaration[];
}

export interface ComponentSpecDeclaration {
  kind: "ComponentSpecDeclaration";
  id: string;
  name: string;
  body: VariantDeclaration[];
}

export interface ColorTokenDeclaration {
  kind: "ColorTokenDeclaration";
  collection: string;
  token: TokenLit;
  values: Array<{
    mode: string;
    value: ColorHexLit | TokenLit;
  }>;
  description?: string;
}

export interface DimensionTokenDeclaration {
  kind: "DimensionTokenDeclaration";
  collection: string;
  token: TokenLit;
  values: Array<{
    mode: string;
    value: DimensionLit | TokenLit;
  }>;
  description?: string;
}

export interface NumberTokenDeclaration {
  kind: "NumberTokenDeclaration";
  collection: string;
  token: TokenLit;
  values: Array<{
    mode: string;
    value: NumberLit | TokenLit;
  }>;
  description?: string;
}

export interface DurationTokenDeclaration {
  kind: "DurationTokenDeclaration";
  collection: string;
  token: TokenLit;
  values: Array<{
    mode: string;
    value: DurationLit | TokenLit;
  }>;
  description?: string;
}

export interface CubicBezierTokenDeclaration {
  kind: "CubicBezierTokenDeclaration";
  collection: string;
  token: TokenLit;
  values: Array<{
    mode: string;
    value: CubicBezierLit | TokenLit;
  }>;
  description?: string;
}

export interface ShadowTokenDeclaration {
  kind: "ShadowTokenDeclaration";
  collection: string;
  token: TokenLit;
  values: Array<{
    mode: string;
    value: ShadowLit | TokenLit;
  }>;
  description?: string;
}

export interface GradientTokenDeclaration {
  kind: "GradientTokenDeclaration";
  collection: string;
  token: TokenLit;
  values: Array<{
    mode: string;
    value: GradientLit | TokenLit;
  }>;
  description?: string;
}

export type TokenDeclaration =
  | ColorTokenDeclaration
  | DimensionTokenDeclaration
  | NumberTokenDeclaration
  | DurationTokenDeclaration
  | CubicBezierTokenDeclaration
  | ShadowTokenDeclaration
  | GradientTokenDeclaration;

export interface TokenCollectionDeclaration {
  kind: "TokenCollectionDeclaration";
  name: string;
  modes: string[];
}

export interface RootageAST {
  kind: "RootageAST";
  componentSpecs: ComponentSpecDeclaration[];
  tokens: TokenDeclaration[];
  tokenCollections: TokenCollectionDeclaration[];
}
