# 介绍
gangu 是一款 js 工具库，封装了一些 js 开发过程中的常用方法。

# 开发
本地开发实时编译
```bash
pnpm run dev
```

本地文档实时生成
```bash
pnpm run docs:dev
```

发布至npm（在登录有效的情况下，npm login）
```bash
pnpm run deploy
```

## 启动本地开发调试
vitest 会执行所有 test.js 结尾的文件

本地开发
```
  pnpm run dev 
    "dev": "rollup -cw",
    "build": "rollup -c",
    "test": "vitest",
    "docs:dev": "vitepress dev src",
    "docs:build": "vitepress build src"
```

本地打包
```
  pnpm run build
```

# 发布
包：https://www.npmjs.com/package/gangu  
文档：https://ounibin.github.io/gangu/
