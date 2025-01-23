# @seed-design/figma-extractor

## 설치

```shell
yarn add -D @seed-design/figma-extractor
```

## 설정 파일

설정 파일 없이도 실행 가능하지만, 필요에 따라 설정 파일을 작성할 수 있습니다.

```ts
// figma-extractor.config.ts

import type { Config } from "@seed-design/figma-extractor";

const config: Config = {
  data: {
    componentSet: {
      filter: ({ name }) => name.startsWith("🔵 ") || name.startsWith("🟢 "),
      transform: ({ name, key, componentPropertyDefinitions }) => ({
        name,
        key,
        ...(componentPropertyDefinitions && {
          componentPropertyDefinitions: Object.fromEntries(
            Object.entries(componentPropertyDefinitions).map(
              ([key, { defaultValue, ...rest }]) => [key, rest]
            )
          ),
        }),
      }),
    },
    style: {
      filter: ({ style_type }) => style_type === "TEXT",
    },
  },
};

export default config;
```

### `fileKey` (필수)

- 가져올 정보가 있는 Figma 파일의 Key (Figma에서 제공)
- 등록하지 않는 경우 `FIGMA_FILE_KEY` 환경 변수를 사용합니다.
- File Key 찾기
  1. Figma 클라이언트에서 파일을 엽니다
  1. 개발자 도구 - Console 탭을 엽니다
  1. `figma.fileKey` 실행

### `personalAccessToken` (필수)

- Figma API 사용을 위한 토큰 (Figma에서 제공)
- 등록하지 않는 경우 `FIGMA_PERSONAL_ACCESS_TOKEN` 환경 변수를 사용합니다.
- [Personal Access Token 받기](https://www.figma.com/developers/api#access-tokens)

### `data`

#### `filter`

- 기본값: `() => true`
- 특정 조건을 만족하는 항목만 추출합니다.

#### `transform`

- 기본값: `(metadataItem) => metadataItem`
- 특정 필드만 추출하는 등 원하는 형태로 변환합니다.
- 파일 생성을 위해 `name` 필드가 있는 객체를 반환해야 합니다.

## 사용

### 컴포넌트 정보를 src/data에 추출

```shell
yarn figma-extractor src/data components
```

### Variable 정보를 src/data에 추출

```shell
yarn figma-extractor src/data variables
```

### 사용 가능한 모든 정보를 src/data에 추출

```shell
yarn figma-extractor src/data
```
