import type * as Document from "./document";
import * as factory from "./factory";
import { parseTokenRef } from "./token-ref";
import type {
  ColorHexLit,
  CubicBezierLit,
  DimensionLit,
  DurationLit,
  GradientLit,
  NumberLit,
  ShadowLit,
  TokenDeclaration,
  TokenLit,
} from "./ast";
import { parseValue } from "./value";

export function parseTokensModel(model: Document.TokensModel): TokenDeclaration[] {
  const out: TokenDeclaration[] = [];
  const collectionName = model.data.collection;

  // Each token entry => a single TokenDeclaration
  // For each token, we guess the type of token from the first mode's value type.
  // In real usage, you'd enforce consistent types across all modes for that token.
  for (const [tokenRef, tokenData] of Object.entries(model.data.tokens)) {
    // `tokenRef` is something like `"$myColorPrimary"`
    // We can parse that tokenRef => group/key, or just store it directly as the key.
    const { group, key } = parseTokenRef(tokenRef);

    // get the first mode's value to guess the type
    const firstMode = Object.keys(tokenData.values)[0]!;
    const firstValue = tokenData.values[firstMode]!;

    // We'll do a quick check: if it's not a plain object or union with type,
    // handle that scenario. (Could be a token reference again, etc.)
    const baseType = firstValue.type;

    // Now gather all "modes" => array of { mode, value: AST literal or token lit }
    const modeValues = Object.entries(tokenData.values).map(([mode, val]) => ({
      mode,
      value: parseValue(val), // parseValue returns the appropriate *Lit or TokenLit
    }));

    // Depending on `baseType`, pick the appropriate TokenDeclaration kind.
    switch (baseType) {
      case "color":
        out.push(
          factory.createColorTokenDeclaration(
            collectionName,
            factory.createTokenLit(group, key),
            modeValues as Array<{ mode: string; value: ColorHexLit | TokenLit }>,
            tokenData.description,
          ),
        );
        break;
      case "dimension":
        out.push(
          factory.createDimensionTokenDeclaration(
            collectionName,
            factory.createTokenLit(group, key),
            modeValues as Array<{ mode: string; value: DimensionLit | TokenLit }>,
            tokenData.description,
          ),
        );
        break;
      case "number":
        out.push(
          factory.createNumberTokenDeclaration(
            collectionName,
            factory.createTokenLit(group, key),
            modeValues as Array<{ mode: string; value: NumberLit | TokenLit }>,
            tokenData.description,
          ),
        );
        break;
      case "duration":
        out.push(
          factory.createDurationTokenDeclaration(
            collectionName,
            factory.createTokenLit(group, key),
            modeValues as Array<{ mode: string; value: DurationLit | TokenLit }>,
            tokenData.description,
          ),
        );
        break;
      case "cubicBezier":
        out.push(
          factory.createCubicBezierTokenDeclaration(
            collectionName,
            factory.createTokenLit(group, key),
            modeValues as Array<{ mode: string; value: CubicBezierLit | TokenLit }>,
            tokenData.description,
          ),
        );
        break;
      case "shadow":
        out.push(
          factory.createShadowTokenDeclaration(
            collectionName,
            factory.createTokenLit(group, key),
            modeValues as Array<{ mode: string; value: ShadowLit | TokenLit }>,
            tokenData.description,
          ),
        );
        break;
      case "gradient":
        out.push(
          factory.createGradientTokenDeclaration(
            collectionName,
            factory.createTokenLit(group, key),
            modeValues as Array<{ mode: string; value: GradientLit | TokenLit }>,
            tokenData.description,
          ),
        );
        break;

      // If none matched (e.g. if it's a reference to another token),
      // you might fallback to color or throw an error. We'll just throw here.
      default:
        throw new Error(`Token '${tokenRef}' has unrecognized/unsupported value type: ${baseType}`);
    }
  }

  return out;
}
