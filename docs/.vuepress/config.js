// 导入主题
import { defaultTheme } from '@vuepress/theme-default'
import { hopeTheme } from 'vuepress-theme-hope'
import { plumeTheme } from 'vuepress-theme-plume'
import { recoTheme } from 'vuepress-theme-reco'

import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'


export default defineUserConfig({
  lang: 'en-US',
  
  title: 'VuePress',
  description: 'My first VuePress Site',
  base: '/vuepress4dy/',
  
  // theme: defaultTheme({
    theme: plumeTheme({
      logo: 'https://vuejs.press/images/hero.png',
      
      navbar: ['/', '/About us', '/Product'],
    }),
    
    bundler: viteBundler(),
  plugins: [
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
  ],
})
