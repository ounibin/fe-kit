import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'

function getSibarList(): any[] {
  const srcPath = path.resolve(__dirname, '../src')
  const useFileList = fs.readdirSync(srcPath, { withFileTypes: true })
    .filter(dirent => (!dirent.isDirectory() && dirent.name[0] !== '.' && dirent.name !== 'index.ts'))
    
  const fnList = useFileList.filter((dirent) => {
    const name = dirent.name.replace('.ts', '')
    const isFirstLetterUppercase = /^[A-Z]/.test(name)
    return !isFirstLetterUppercase
  }).map(dirent => {
    const name = dirent.name.replace('.ts', '')
    return { text: name, link: `/api/functions/${name}` }
  })

  const classList = useFileList.filter((dirent) => {
    const name = dirent.name.replace('.ts', '')
    const isFirstLetterUppercase = /^[A-Z]/.test(name)
    return isFirstLetterUppercase
  }).map(dirent => {
    const name = dirent.name.replace('.ts', '')
    return { text: name, link: `/api/classes/${name}` }
  })
  return [{text: '方法', items: fnList}, {text: '类', items: classList}]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './docs',
  title: "gangu",
  description: "gangu",
  base: '/gangu',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/api/globals' },
    ],

    sidebar: getSibarList(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ounibin/gangu' }
    ],
    search: {
      provider: 'local'
    }
  }
})
