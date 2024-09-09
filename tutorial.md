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