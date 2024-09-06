import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Archives from './components/Archives.vue'
import Category from './components/Category.vue'
import Comment from './components/Comment.vue'
import NewLayout from './components/NewLayout.vue'
import Page from './components/Page.vue'
import Tags from './components/Tags.vue'

import './custom.css'

export default {
  ...DefaultTheme,
  Layout: NewLayout,
  enhanceApp({ app }) {
    // register global compoment
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
    app.component('Comment', Comment)
  },
} satisfies Theme
