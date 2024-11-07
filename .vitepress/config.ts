import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import * as path from 'path'

function getSibarList(): any[] {
  const srcPath = path.resolve(__dirname, '../src')
  const directories = fs.readdirSync(srcPath, { withFileTypes: true })
    .filter(dirent => (dirent.isDirectory() && dirent.name[0] !== '.'))
    .map(dirent => ({ text: dirent.name, link: `/api/functions/${dirent.name}` }))
  return directories
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

    sidebar: [
      {
        // text: 'Functions',
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
