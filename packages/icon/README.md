# @seed-design/icon

## 설치하기

`@seed-design/icon`는 seed icon 생성을 위한 커맨드라인 도구입니다.

```bash
npm install --dev @seed-design/icon

# or

yarn add -D @seed-design/icon
```

## 사용 방법

단 두 가지 명령어로 seed icon을 생성할 수 있습니다.

### `init` (초기화)

`init` 명령어는 seed icon 생성을 위한 기본 폴더 구조를 생성합니다.
해당 명령어를 입력하면 `icon.config.yml` 설정 파일이 생성됩니다.

```bash
# npm
npm run seed-icon init

# yarn
yarn seed-icon init
```

### `generate` (생성하기)

`generate` 명령어는 생성된 `icon.config.yml` 설정 파일 아이콘에 필요한 파일들을 생성합니다.
생성되는 파일은 **아이콘 컴포넌트**와 **sprite svg 파일**입니다.

```bash
# npm
npm run seed-icon generate
npm run seed-icon gen

# yarn
yarn seed-icon generate
yarn seed-icon gen
```

### etc (기타)

- help
- version

## Config 파일 옵션

`icon.config.yml` 설정 파일은 아래와 같은 옵션을 가집니다.

| Option          | Description                                                    | Default                                                               |
| --------------- | -------------------------------------------------------------- | --------------------------------------------------------------------- |
| `componentPath` | 아이콘 컴포넌트가 저장될 경로입니다. 프로젝트 루트 기준입니다. | src/components/SeedIcon.tsx                                           |
| `spritePath`    | svg 파일이 저장될 경로입니다. 프로젝트 루트 기준입니다.Image   | src/assets/sprite.svg                                                 |
| `icons`         | 위 피그마 파일에서 사용되는 아이콘 이름을 추가해주세요.        | [icon_add_circle_fill, icon_add_circle_regular, icon_add_circle_thin] |

## preload guide

### Vite

> vite는 svg loader를 기본적으로 제공하고 있습니다.
> 그래서 따로 설정해줘야 하는 부분이 없고, `index.html`에 아래와 같이 `sprite.svg`를 preload 해주면 됩니다.

```html
<link
  rel="preload"
  as="image"
  type="image/svg+xml"
  href="your-sprite-svg-path"
/>
```

`init`에는 `-t` 혹은 `--template` 옵션에 `vite`를 입력해서 config를 생성할 수 있습니다.

```bash
# npm
npm run seed-icon init -t vite
npm run seed-icon init --template vite

# yarn
yarn seed-icon init -t vite
yarn seed-icon init --template vite
```

그럼 `vite`프로젝트에 맞는 `icon.config.yml` 설정 파일이 생성됩니다.

### CRA, Next.js (Webpack)

todo

### Next.js 13 (Turbopack)

tood
