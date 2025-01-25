import type { TokenRef } from "../parser/document";

export type Color = `#${string}`;
export type Dimension = `${number}px` | `${number}rem`;
export type Number = number;
export type Duration = `${number}${"ms" | "s"}`;
export type CubicBezier = {
  type: "cubicBezier";
  value: readonly [number, number, number, number];
};
export type Shadow = {
  type: "shadow";
  value: Array<{
    color: Color;
    offsetX: Dimension;
    offsetY: Dimension;
    blur: Dimension;
    spread: Dimension;
  }>;
};
export type Gradient = {
  type: "gradient";
  value: Array<{
    color: Color;
    position: number;
  }>;
};

export type Value = Color | Dimension | Number | Duration | CubicBezier | Shadow | Gradient;
export type RighthandValue = Value | TokenRef;

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
        [mode: string]: RighthandValue;
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
  [variantExpression: string]: {
    [state: string]: {
      [slot: string]: {
        [property: string]: RighthandValue;
      };
    };
  };
}

export type Model = TokenCollectionsModel | TokensModel | ComponentSpecModel;
