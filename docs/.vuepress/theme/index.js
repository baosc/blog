import { h } from 'vue'

import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
  
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
  },
}
