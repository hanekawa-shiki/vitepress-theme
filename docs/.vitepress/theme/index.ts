// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import MyLayout from './components/MyLayout.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // 111
  },
} satisfies Theme
