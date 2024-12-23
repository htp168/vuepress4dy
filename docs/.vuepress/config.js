// 导入主题
import { defaultTheme } from '@vuepress/theme-default'
import { hopeTheme } from 'vuepress-theme-hope'
import { plumeTheme } from 'vuepress-theme-plume'
import { recoTheme } from 'vuepress-theme-reco'

import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  
  title: 'VuePress',
  description: 'My first VuePress Site',
  
  // theme: defaultTheme({
    theme: plumeTheme({
      logo: 'https://vuejs.press/images/hero.png',
      
      navbar: ['/', '/About us', '/Product'],
    }),
    
    bundler: viteBundler(),
})
