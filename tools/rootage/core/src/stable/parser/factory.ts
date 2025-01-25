import type {
  ColorHexLit,
  DimensionLit,
  DurationLit,
  NumberLit,
  CubicBezierLit,
  ShadowLayerLit,
  ShadowLit,
  GradientStopLit,
  GradientLit,
  TokenLit,
  ColorPropertyDeclaration,
  DimensionPropertyDeclaration,
  NumberPropertyDeclaration,
  DurationPropertyDeclaration,
  CubicBezierPropertyDeclaration,
  ShadowPropertyDeclaration,
  GradientPropertyDeclaration,
  PropertyDeclaration,
  SlotDeclaration,
  StateExpression,
  StateDeclaration,
  VariantExpression,
  VariantDeclaration,
  ComponentSpecDeclaration,
  ColorTokenDeclaration,
  DimensionTokenDeclaration,
  NumberTokenDeclaration,
  DurationTokenDeclaration,
  CubicBezierTokenDeclaration,
  ShadowTokenDeclaration,
  GradientTokenDeclaration,
  TokenDeclaration,
  TokenCollectionDeclaration,
  RootageAST,
} from "./ast";

/**
 * ColorHexLit factory
 */
export function createColorHexLit(value: `#${string}`): ColorHexLit {
  return {
    kind: "ColorHexLit",
    value,
  };
}

/**
 * DimensionLit factory
 */
export function createDimensionLit(value: number, unit: "px" | "rem"): DimensionLit {
  return {
    kind: "DimensionLit",
    value,
    unit,
  };
}

/**
 * DurationLit factory
 */
export function createDurationLit(value: number, unit: "ms" | "s"): DurationLit {
  return {
    kind: "DurationLit",
    value,
    unit,
  };
}

/**
 * NumberLit factory
 */
export function createNumberLit(value: number): NumberLit {
  return {
    kind: "NumberLit",
    value,
  };
}

/**
 * CubicBezierLit factory
 */
export function createCubicBezierLit(
  value: readonly [number, number, number, number],
): CubicBezierLit {
  return {
    kind: "CubicBezierLit",
    value,
  };
}

/**
 * ShadowLayerLit factory
 */
export function createShadowLayerLit(
  color: ColorHexLit,
  offsetX: DimensionLit,
  offsetY: DimensionLit,
  blur: DimensionLit,
  spread: DimensionLit,
): ShadowLayerLit {
  return {
    kind: "ShadowLayerLit",
    color,
    offsetX,
    offsetY,
    blur,
    spread,
  };
}

/**
 * ShadowLit factory
 */
export function createShadowLit(layers: ShadowLayerLit[]): ShadowLit {
  return {
    kind: "ShadowLit",
    layers,
  };
}

/**
 * GradientStopLit factory
 */
export function createGradientStopLit(color: ColorHexLit, position: NumberLit): GradientStopLit {
  return {
    kind: "GradientStopLit",
    color,
    position,
  };
}

/**
 * GradientLit factory
 */
export function createGradientLit(stops: GradientStopLit[]): GradientLit {
  return {
    kind: "GradientLit",
    stops,
  };
}

/**
 * TokenLit factory
 */
export function createTokenLit(group: string[], key: string): TokenLit {
  return {
    kind: "TokenLit",
    group,
    key,
  };
}

// -----------------------------------------------------------------------------
// Property Declarations
// -----------------------------------------------------------------------------

/**
 * ColorPropertyDeclaration factory
 */
export function createColorPropertyDeclaration(
  property: string,
  value: ColorHexLit | TokenLit,
): ColorPropertyDeclaration {
  return {
    kind: "ColorPropertyDeclaration",
    property,
    value,
  };
}

/**
 * DimensionPropertyDeclaration factory
 */
export function createDimensionPropertyDeclaration(
  property: string,
  value: DimensionLit | TokenLit,
): DimensionPropertyDeclaration {
  return {
    kind: "DimensionPropertyDeclaration",
    property,
    value,
  };
}

/**
 * NumberPropertyDeclaration factory
 */
export function createNumberPropertyDeclaration(
  property: string,
  value: NumberLit | TokenLit,
): NumberPropertyDeclaration {
  return {
    kind: "NumberPropertyDeclaration",
    property,
    value,
  };
}

/**
 * DurationPropertyDeclaration factory
 */
export function createDurationPropertyDeclaration(
  property: string,
  value: DurationLit | TokenLit,
): DurationPropertyDeclaration {
  return {
    kind: "DurationPropertyDeclaration",
    property,
    value,
  };
}

/**
 * CubicBezierPropertyDeclaration factory
 */
export function createCubicBezierPropertyDeclaration(
  property: string,
  value: CubicBezierLit | TokenLit,
): CubicBezierPropertyDeclaration {
  return {
    kind: "CubicBezierPropertyDeclaration",
    property,
    value,
  };
}

/**
 * ShadowPropertyDeclaration factory
 */
export function createShadowPropertyDeclaration(
  property: string,
  value: ShadowLit | TokenLit,
): ShadowPropertyDeclaration {
  return {
    kind: "ShadowPropertyDeclaration",
    property,
    value,
  };
}

/**
 * GradientPropertyDeclaration factory
 */
export function createGradientPropertyDeclaration(
  property: string,
  value: GradientLit | TokenLit,
): GradientPropertyDeclaration {
  return {
    kind: "GradientPropertyDeclaration",
    property,
    value,
  };
}

// -----------------------------------------------------------------------------
// SlotDeclaration
// -----------------------------------------------------------------------------

/**
 * SlotDeclaration factory
 */
export function createSlotDeclaration(slot: string, body: PropertyDeclaration[]): SlotDeclaration {
  return {
    kind: "SlotDeclaration",
    slot,
    body,
  };
}

// -----------------------------------------------------------------------------
// State Expressions and Declarations
// -----------------------------------------------------------------------------

/**
 * StateExpression factory
 */
export function createStateExpression(value: string): StateExpression {
  return {
    kind: "StateExpression",
    value,
  };
}

/**
 * StateDeclaration factory
 */
export function createStateDeclaration(
  states: StateExpression[],
  body: SlotDeclaration[],
): StateDeclaration {
  return {
    kind: "StateDeclaration",
    states,
    body,
  };
}

// -----------------------------------------------------------------------------
// Variant Expressions and Declarations
// -----------------------------------------------------------------------------

/**
 * VariantExpression factory
 */
export function createVariantExpression(name: string, value: string): VariantExpression {
  return {
    kind: "VariantExpression",
    name,
    value,
  };
}

/**
 * VariantDeclaration factory
 */
export function createVariantDeclaration(
  variants: VariantExpression[],
  body: StateDeclaration[],
): VariantDeclaration {
  return {
    kind: "VariantDeclaration",
    variants,
    body,
  };
}

// -----------------------------------------------------------------------------
// ComponentSpecDeclaration
// -----------------------------------------------------------------------------

/**
 * ComponentSpecDeclaration factory
 */
export function createComponentSpecDeclaration(
  id: string,
  name: string,
  body: VariantDeclaration[],
): ComponentSpecDeclaration {
  return {
    kind: "ComponentSpecDeclaration",
    id,
    name,
    body,
  };
}

// -----------------------------------------------------------------------------
// Token Declarations
// -----------------------------------------------------------------------------

/**
 * ColorTokenDeclaration factory
 */
export function createColorTokenDeclaration(
  collection: string,
  token: TokenLit,
  values: Array<{
    mode: string;
    value: ColorHexLit | TokenLit;
  }>,
  description?: string,
): ColorTokenDeclaration {
  return {
    kind: "ColorTokenDeclaration",
    collection,
    token,
    values,
    description,
  };
}

/**
 * DimensionTokenDeclaration factory
 */
export function createDimensionTokenDeclaration(
  collection: string,
  token: TokenLit,
  values: Array<{
    mode: string;
    value: DimensionLit | TokenLit;
  }>,
  description?: string,
): DimensionTokenDeclaration {
  return {
    kind: "DimensionTokenDeclaration",
    collection,
    token,
    values,
    description,
  };
}

/**
 * NumberTokenDeclaration factory
 */
export function createNumberTokenDeclaration(
  collection: string,
  token: TokenLit,
  values: Array<{
    mode: string;
    value: NumberLit | TokenLit;
  }>,
  description?: string,
): NumberTokenDeclaration {
  return {
    kind: "NumberTokenDeclaration",
    collection,
    token,
    values,
    description,
  };
}

/**
 * DurationTokenDeclaration factory
 */
export function createDurationTokenDeclaration(
  collection: string,
  token: TokenLit,
  values: Array<{
    mode: string;
    value: DurationLit | TokenLit;
  }>,
  description?: string,
): DurationTokenDeclaration {
  return {
    kind: "DurationTokenDeclaration",
    collection,
    token,
    values,
    description,
  };
}

/**
 * CubicBezierTokenDeclaration factory
 */
export function createCubicBezierTokenDeclaration(
  collection: string,
  token: TokenLit,
  values: Array<{
    mode: string;
    value: CubicBezierLit | TokenLit;
  }>,
  description?: string,
): CubicBezierTokenDeclaration {
  return {
    kind: "CubicBezierTokenDeclaration",
    collection,
    token,
    values,
    description,
  };
}

/**
 * ShadowTokenDeclaration factory
 */
export function createShadowTokenDeclaration(
  collection: string,
  token: TokenLit,
  values: Array<{
    mode: string;
    value: ShadowLit | TokenLit;
  }>,
  description?: string,
): ShadowTokenDeclaration {
  return {
    kind: "ShadowTokenDeclaration",
    collection,
    token,
    values,
    description,
  };
}

/**
 * GradientTokenDeclaration factory
 */
export function createGradientTokenDeclaration(
  collection: string,
  token: TokenLit,
  values: Array<{
    mode: string;
    value: GradientLit | TokenLit;
  }>,
  description?: string,
): GradientTokenDeclaration {
  return {
    kind: "GradientTokenDeclaration",
    collection,
    token,
    values,
    description,
  };
}

// -----------------------------------------------------------------------------
// Token Collection Declaration
// -----------------------------------------------------------------------------

/**
 * TokenCollectionDeclaration factory
 */
export function createTokenCollectionDeclaration(
  name: string,
  modes: string[],
): TokenCollectionDeclaration {
  return {
    kind: "TokenCollectionDeclaration",
    name,
    modes,
  };
}

// -----------------------------------------------------------------------------
// RootageAST
// -----------------------------------------------------------------------------

/**
 * Root AST node factory
 */
export function createRootageAST(
  componentSpecs: ComponentSpecDeclaration[],
  tokens: TokenDeclaration[],
  tokenCollections: TokenCollectionDeclaration[],
): RootageAST {
  return {
    kind: "RootageAST",
    componentSpecs,
    tokens,
    tokenCollections,
  };
}
