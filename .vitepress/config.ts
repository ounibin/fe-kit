import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'

function getSibarList(): any[] {
  const srcPath = path.resolve(__dirname, '../src')
  const directories = fs.readdirSync(srcPath, { withFileTypes: true })
    .filter(dirent => (dirent.isDirectory() && dirent.name[0] !== '.'))
    .map(dirent => ({ text: dirent.name, link: `/${dirent.name}/` }))
  return directories
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "gangu",
  description: "gangu",
  base: '/gangu',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    sidebar: [
      {
        // text: 'Examples',
        items: getSibarList()
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ounibin/gangu' }
    ],
    search: {
      provider: 'local'
    }
  }
})
