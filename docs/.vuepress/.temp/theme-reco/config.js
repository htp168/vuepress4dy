
  import { defineAsyncComponent } from 'vue'
import { defineClientConfig } from 'vuepress/client'

import { applyClientSetup } from '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.25_@algolia+client-search@5.18.0_sass@1.83.0_search-insights@2.1_wgo36mu2n63qbu5wcu7223jkii/node_modules/vuepress-theme-reco/lib/client/clientSetup.js'
import { applyClientEnhance } from '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.25_@algolia+client-search@5.18.0_sass@1.83.0_search-insights@2.1_wgo36mu2n63qbu5wcu7223jkii/node_modules/vuepress-theme-reco/lib/client/clientEnhance.js'

import * as layouts from '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.25_@algolia+client-search@5.18.0_sass@1.83.0_search-insights@2.1_wgo36mu2n63qbu5wcu7223jkii/node_modules/vuepress-theme-reco/lib/client/layouts/index.js'

  const layoutsFromDir = {}
export default defineClientConfig({
  enhance(...args) {
    applyClientEnhance(...args)
  },
  setup() {
    applyClientSetup()
  },
  // @ts-ignore
  layouts: { ...layouts, ...layoutsFromDir },
})
