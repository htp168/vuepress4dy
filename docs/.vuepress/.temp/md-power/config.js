import { defineClientConfig } from 'vuepress/client'
import Tabs from '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.122_markdown-it@14.1.0_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.122_markdown-it@14.1.0_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.122_markdown-it@14.1.0_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.122_markdown-it@14.1.0_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import '/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.122_markdown-it@14.1.0_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})