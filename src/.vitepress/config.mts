import { defineConfig } from 'vitepress'
import { statSync, readdirSync } from 'fs'
import path from 'path'

function getSideBar(): any[] {
  let sidebar = new Set()
  let filesInSrc = readdirSync(path.resolve(__dirname, '../'))
  filesInSrc.forEach(moduleName => {
    const stat = statSync(path.resolve(__dirname, `../${moduleName}`))
    const isDir = stat.isDirectory()
    if (isDir && moduleName !== '.vitepress') {
      const filesInModule = readdirSync(path.resolve(__dirname, `../${moduleName}`))
      const fnSet = new Set()
      filesInModule.forEach((fn) => {
        const fnStat = statSync(path.resolve(__dirname, `../${moduleName}/${fn}`))
        if (fnStat.isDirectory()) {
          fnSet.add({
            text: fn,
            link: `/${moduleName}/${fn}/`
          })
        }
      })
      sidebar.add({
        text: 'numberKit',
        items: [...fnSet]
      })
    }
  })
  return [...sidebar]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "h5-kit",
  // description: "h5-kit 是一款node工具库，封装了一些h5的常用方法",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/numberKit/formatPercent/' }
    ],

    sidebar: getSideBar(),

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
