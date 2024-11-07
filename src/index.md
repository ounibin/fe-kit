# 介绍
gangu 是一款 js 工具库，封装了一些 js 开发过程中的常用方法。

# 安装

::: code-group

```bash [pnpm]
pnpm add gangu
```

```bash [npm]
npm i gangu
```

```bash [yarn]
yarn add gangu
```

:::


# 示例
```js
import { getUrlParam } from 'gangu'

getUrlParam('https://baidu.com?q=你好', 'q') // => 你好
```