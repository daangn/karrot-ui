export interface ComponentModel {
  kind: "Component";
  metadata: {
    id: string;
    name: string;
  };
  data: ComponentExpression;
}

export interface TokenCollectionModel {
  kind: "TokenCollection";
  metadata: {
    id: string;
    name: string;
  };
  data: TokenCollectionExpression;
}

export interface TokenCollectionExpression {
  modes: string[];
  definitions: {
    [tokenName: string]: {
      values: {
        [mode: string]: string;
      };
    };
  };
}

export interface ComponentExpression {
  [variantExpression: string]: {
    [state: string]: {
      [slot: string]: {
        [property: string]: string;
      };
    };
  };
}

export interface Token {
  category: string;
  group: string[];
  key: string | number;
}

export type ParsedTokenCollectionExpression = {
  modes: string[];
  definitions: Array<{
    token: Token;
    values: Array<{
      mode: string;
      value: string;
    }>;
  }>;
};

export type ParsedComponentExpression = Array<{
  key: Record<string, string>;
  state: Array<{
    key: string[];
    slot: Array<{
      key: string;
      property: Array<{
        key: string;
        value: Token | string | Array<Token | string>;
      }>;
    }>;
  }>;
}>;
