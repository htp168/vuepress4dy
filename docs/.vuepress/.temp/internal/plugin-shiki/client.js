
import { useCopyCode } from '/cloudide/workspace/vuepress/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.122_typescript@5.7.2_vue@3.5.13_vuepress@2.0.0-rc.19/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from '/cloudide/workspace/vuepress/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.122_typescript@5.7.2_vue@3.5.13_vuepress@2.0.0-rc.19/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
