import { defineConfig } from 'vitepress'
import fs, { statSync, readdirSync } from 'fs'
import path from 'path'

import * as h5Kit from '../index.ts'

function getSideBar() {
  const currPath = path.resolve(__dirname, '../')

  let files = fs.readdirSync(path.resolve(__dirname, '../'))
  const list1 = files.filter(item => {
    const stat = statSync(path.resolve(__dirname, `../${item}`))
    const isDir = stat.isDirectory()
    return item !== '.vitepress' && isDir
  })
  const list1_res = list1.map((moduleName) => {
    const files = readdirSync(path.resolve(__dirname, `../${moduleName}`))
    console.log(`kj----方法`, files)
    const fnName = files.filter((item) => {
      return !(/^index/.test(item) || /test.ts$/.test(item))
    })
    console.log(`kj----fnName`, fnName)
    return {
      text: moduleName,
      category: moduleName,
      items: [{
        "text": "checkType",
        "link": `${moduleName}/for`
      }]
    }
  })
  console.log('kj----符合的文件夹', list1_res)
  return list1_res
  // const moduleSet = new Set()
  // for (const moduleName in h5Kit) {
  //   moduleSet.add({
  //     text: moduleName,
  //     category: moduleName,
  //     items: [{
  //       "name": "checkType",
  //       "text": "checkType",
  //       "link": "/luban-core/checkType/index.md"
  //     }]
  //   })
  // }
  // return [...moduleSet] as any[]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "h5-kit",
  // description: "h5-kit 是一款node工具库，封装了一些h5的常用方法",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/numberKit/short/' }
    ],

    sidebar: [
      {
        text: 'numberKit',
        items: [
          { text: 'short', link: '/numberKit/short/' },
          { text: 'formatPrice', link: '/numberKit/formatPrice/' },
          { text: 'formatPercent', link: '/numberKit/formatPercent/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ounibin' }
    ],
    search: {
      provider: 'local'
    }
  },
  // build
  outDir: '../docs'
})
